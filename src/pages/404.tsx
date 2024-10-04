import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '@/components/commons/Layout/Header'
import { NotFound } from '@/components/features/404'

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | BOX R</title>
        <meta name='robots' content='noindex,nofollo' />
        <meta property='og:title' content='Page Not Found | BOX R' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='BOX R' />
      </Head>
      <Header />
      <NotFound />
    </>
  )
}

export default NotFoundPage
