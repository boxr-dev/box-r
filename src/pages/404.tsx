import type { NextPage } from 'next'
import { NotFound } from '@/components/404'
import { Header } from '@/components/Layout/Header'

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Header />
      <NotFound />
    </>
  )
}

export default NotFoundPage
