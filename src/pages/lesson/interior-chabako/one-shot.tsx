import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { OneShotInteriorChabakoLesson } from '@/components/features/OneShotInteriorChabakoLesson'

const OneShotInteriorChabakoLessonPage: NextPage = () => {
  return (
    <Layout
      title={'単発レッスン（インテリア茶箱） | BOX R'}
      description={
        '佐野里江子 | BOX R は、カルトナージュとインテリア茶箱のアトリエです。インテリアに馴染みつつも存在感のある作品作りを心がけております。'
      }
    >
      <OneShotInteriorChabakoLesson />
    </Layout>
  )
}

export default OneShotInteriorChabakoLessonPage
