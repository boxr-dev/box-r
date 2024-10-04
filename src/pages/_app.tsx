import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect } from 'react'
import 'the-new-css-reset/css/reset.css'
import { GA_MEASUREMENT_ID, pageview } from '@/lib/gtag'
import '@/styles/global.scss'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouterChange = (url: string) => pageview(url)
    router.events.on('routeChangeComplete', handleRouterChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouterChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <link rel='icon' href='/images/favicon/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/images/favicon/apple-touch-icon-180x180.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());

           gtag('config', '${GA_MEASUREMENT_ID}');
           `,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
