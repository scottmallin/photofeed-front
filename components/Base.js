import React from 'react';
import Link from 'next/link';
import api from '../util/api';
import { isLoggedIn, logOut } from '../util/auth';

const API_URL = 'http://localhost:8000/';

const Base = props => {
    const handleLogout = () => {
        logOut();
    };

    return (
        <div>
            <header>
                <div className="container py-4">
                    <Link href="/">Photoboy</Link>
                    {isLoggedIn ? (
                        <button onClick={handleLogout}>Log out</button>
                    ) : (
                        ''
                    )}
                </div>
            </header>
            {props.children}
            <footer>
                <div className="container py-4">&copy; 2022 Photoboy</div>
            </footer>
        </div>
    );
};

export default Base;
