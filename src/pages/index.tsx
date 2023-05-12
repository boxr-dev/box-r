import type { NextPage } from 'next'
import { Layout } from '@/components/Layout'

const IndexPage: NextPage = () => {
  return (
    <Layout title={'BOX R | インテリア茶箱カルトナージュ教室'} description={'ディスクリプション'} siteName={'BOX R'}>
      <div>
        <p>Welcome!!</p>
      </div>
    </Layout>
  )
}

export default IndexPage
