import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { About } from '@/components/features/About'

const AboutPage: NextPage = () => {
  return (
    <Layout
      title={'BOX R について | BOX R'}
      description={
        'BOX R は、カルトナージュとインテリア茶箱のアトリエです。インテリアに馴染みつつも存在感のある作品作りを心がけております。'
      }
    >
      <About />
    </Layout>
  )
}

export default AboutPage
