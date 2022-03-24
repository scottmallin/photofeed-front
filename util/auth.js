import Router from 'next/router';
import Cookies from 'js-cookie';
import api from './api';

const API_URL = 'http://localhost:8000/';

export const isLoggedIn = (reqCookies = null) => {
    // if we don't have request cookies, get the cookie from client
    if (!reqCookies) {
        return !!Cookies.get('is_logged_in');
    }

    // otherwise get cookie from server
    return !!cookie.parse(reqCookies).is_logged_in;
};

export const logIn = token => {
    Cookies.set('is_logged_in', token, { expires: 86400, sameSite: 'lax' });
    Router.push('/u/1');
};

export const logOut = () => {
    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${Cookies.get('is_logged_in')}`
    };

    if (typeof window !== 'undefined') {
        console.log(headers);

        api.post(`${API_URL}api/logout`, {
            headers: headers
        }).then(response => {
            if (response.data.error) {
                console.error(response.data.error);
            } else {
                Cookies.remove('is_logged_in');
                Router.push('/');
            }
        });
    }
};
