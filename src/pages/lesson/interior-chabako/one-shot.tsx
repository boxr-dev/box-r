import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { OneShotInteriorChabakoLesson } from '@/components/features/OneShotInteriorChabakoLesson'

const OneShotInteriorChabakoLessonPage: NextPage = () => {
  return (
    <Layout
      title={'単発レッスン（インテリア茶箱） | BOX R'}
      description={'佐野里江子 | ご希望のサイズのインテリア茶箱を制作します。'}
    >
      <OneShotInteriorChabakoLesson />
    </Layout>
  )
}

export default OneShotInteriorChabakoLessonPage
