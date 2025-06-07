import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { DiplomaCartonnageLesson } from '@/components/features/DiplomaCartonnageLesson'

const DiplomaLessonPage: NextPage = () => {
  return (
    <Layout
      title={'ディプロマコース（カルトナージュ） | BOX R'}
      description={
        '佐野里江子 | BOX R は、カルトナージュとインテリア茶箱のアトリエです。インテリアに馴染みつつも存在感のある作品作りを心がけております。'
      }
    >
      <DiplomaCartonnageLesson />
    </Layout>
  )
}

export default DiplomaLessonPage
