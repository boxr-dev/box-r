import type { NextPage } from 'next'
import { Header } from '@/components/commons/Layout/Header'
import { NotFound } from '@/components/features/404'

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Header />
      <NotFound />
    </>
  )
}

export default NotFoundPage
