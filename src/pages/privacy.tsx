import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { Privacy } from '@/components/features/Privacy'

const PrivacyPage: NextPage = () => {
  return (
    <Layout
      title={'プライバシーポリシー | BOX R'}
      description={
        '佐野里江子 | BOX R は、カルトナージュとインテリア茶箱のアトリエです。インテリアに馴染みつつも存在感のある作品作りを心がけております。'
      }
    >
      <Privacy />
    </Layout>
  )
}

export default PrivacyPage
