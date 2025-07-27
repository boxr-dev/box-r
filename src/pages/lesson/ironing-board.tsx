import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { IroningBoardLesson } from '@/components/features/IroningBoardLesson'

const LessonPage: NextPage = () => {
  return (
    <Layout
      title={'アイロン台レッスン | BOX R'}
      description={'佐野里江子 | タッカーを使用し、インテリア雑貨のようなアイロン台を制作します。'}
    >
      <IroningBoardLesson />
    </Layout>
  )
}

export default LessonPage
