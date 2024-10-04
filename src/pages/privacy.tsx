import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { Privacy } from '@/components/features/Privacy'

const PrivacyPage: NextPage = () => {
  return (
    <Layout title={'プライバシーポリシー | BOX R'} description={'ディスクリプション'}>
      <Privacy />
    </Layout>
  )
}

export default PrivacyPage
