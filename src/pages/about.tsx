import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { About } from '@/components/features/About'

const AboutPage: NextPage = () => {
  return (
    <Layout title={'BOX R について | BOX R'} description={'ディスクリプション'} siteName={'BOX R'}>
      <About />
    </Layout>
  )
}

export default AboutPage
