import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'the-new-css-reset/css/reset.css'
import '@/styles/global.scss'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/images/favicon/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/images/favicon/apple-touch-icon-180x180.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
