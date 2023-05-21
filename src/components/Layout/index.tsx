import Head from 'next/head'
import { PropsWithChildren } from 'react'
import { Footer } from '@/components/Layout/Footer'
import { Header } from '@/components/Layout/Header'
import style from '@/components/Layout/Layout.module.scss'

type Props = PropsWithChildren<{
  title: string
  description: string
  siteName: string
}>

export const Layout: React.FC<Props> = ({ title, description, siteName, children }) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={url} />
        <meta property='og:image' content={`${url}/ogp.jpg`} />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content={siteName} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Header />
      <main className={style.container}>{children}</main>
      <Footer />
    </>
  )
}
