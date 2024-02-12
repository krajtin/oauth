import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html lang="es">
        <Head>
          {/* PWA primary color */}
          {/*        <meta name="theme-color" content={theme.palette.primary.main} /> */}

          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Ubuntu"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Urbanist"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
