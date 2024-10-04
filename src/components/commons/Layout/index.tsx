import Head from 'next/head'
import { PropsWithChildren } from 'react'
import { Footer } from '@/components/commons/Layout/Footer'
import { Header } from '@/components/commons/Layout/Header'
import style from '@/components/commons/Layout/Layout.module.scss'

type Props = PropsWithChildren<{
  title: string
  description: string
}>

export const Layout: React.FC<Props> = ({ children, title, description }) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={url} />
        <meta property='og:image' content={`${url}/images/ogp.jpg`} />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='BOX R' />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Header />
      <main className={style.container}>{children}</main>
      <Footer />
    </>
  )
}
