import type { NextPage } from 'next'
import { NotFound } from '@/components/features/404'
import { Header } from '@/components/commons/Layout/Header'

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Header />
      <NotFound />
    </>
  )
}

export default NotFoundPage
