import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { Index } from '@/components/features/Index'

const IndexPage: NextPage = () => {
  return (
    <Layout
      title={'BOX R | カルトナージュ・インテリア茶箱'}
      description={
        'BOX R は、カルトナージュとインテリア茶箱のアトリエです。インテリアに馴染みつつも存在感のある作品作りを心がけております。'
      }
    >
      <Index />
    </Layout>
  )
}

export default IndexPage
