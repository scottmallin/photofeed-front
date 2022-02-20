import Base from '../components/Base';
import '../styles/styles.css';

function MyApp({ Component, pageProps }) {
    return (
        <Base>
            <Component {...pageProps} />
        </Base>
    );
}

export default MyApp;
