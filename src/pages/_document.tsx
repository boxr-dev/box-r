import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
          <link href='https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200..900&display=swap' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
