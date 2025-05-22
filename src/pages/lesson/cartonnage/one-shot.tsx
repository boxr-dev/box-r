import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { OneShotCartonnageLesson } from '@/components/features/OneShotCartonnageLesson'

const LessonPage: NextPage = () => {
  return (
    <Layout
      title={'単発レッスン（カルトナージュ） | BOX R'}
      description={
        '佐野里江子 | BOX R は、カルトナージュとインテリア茶箱のアトリエです。インテリアに馴染みつつも存在感のある作品作りを心がけております。'
      }
    >
      <OneShotCartonnageLesson />
    </Layout>
  )
}

export default LessonPage
