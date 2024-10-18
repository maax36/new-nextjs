import '../global.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <hr />
            <Component {...pageProps} />
            <hr />
        </>
    )
}