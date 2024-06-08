import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'

const AboutPage: NextPage = () => {
  return (
    <Layout title={'BOX R について | BOX R'} description={'ディスクリプション'} siteName={'BOX R'}>
      <span>About</span>
    </Layout>
  )
}

export default AboutPage
