import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NewsClone</title>
        <meta name="description" content="Live Hindustan News Front Page Clone" />
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;