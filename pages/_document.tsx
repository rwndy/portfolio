import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0c0809" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
