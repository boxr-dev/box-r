import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { LicenseCartonnageLesson } from '@/components/features/LicenseCartonnageLesson'

const LicenseLessonPage: NextPage = () => {
  return (
    <Layout
      title={'ライセンスコース（カルトナージュ） | BOX R'}
      description={
        '佐野里江子 | BOX R は、カルトナージュとインテリア茶箱のアトリエです。インテリアに馴染みつつも存在感のある作品作りを心がけております。'
      }
    >
      <LicenseCartonnageLesson />
    </Layout>
  )
}

export default LicenseLessonPage
