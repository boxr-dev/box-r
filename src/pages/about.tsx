import type { NextPage } from 'next'
import { Layout } from '@/components/Layout'

const AboutPage: NextPage = () => {
  return (
    <Layout title={'BOX R について | BOX R'} description={'ディスクリプション'} siteName={'BOX R'}>
      <span>About</span>
    </Layout>
  )
}

export default AboutPage
