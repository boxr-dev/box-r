import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { Index } from '@/components/features/Index'

const IndexPage: NextPage = () => {
  return (
    <Layout title={'BOX R | インテリア茶箱カルトナージュ教室'} description={'ディスクリプション'} siteName={'BOX R'}>
      <Index />
    </Layout>
  )
}

export default IndexPage
