import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

type Props = {}

class MyDocument extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
          <link href='https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap' rel='stylesheet' />
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
