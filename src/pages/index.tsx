import type { NextPage } from 'next'
import { Index } from '@/components/features/Index'
import { Layout } from '@/components/commons/Layout'

const IndexPage: NextPage = () => {
  return (
    <Layout title={'BOX R | インテリア茶箱カルトナージュ教室'} description={'ディスクリプション'} siteName={'BOX R'}>
      <Index />
    </Layout>
  )
}

export default IndexPage
