import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { IroningBoardLesson } from '@/components/features/IroningBoardLesson'

const LessonPage: NextPage = () => {
  return (
    <Layout title={'アイロン台レッスン | BOX R'} description={'佐野里江子 | 実用的で美しいアイロン台を作るレッスンです。'}>
      <IroningBoardLesson />
    </Layout>
  )
}

export default LessonPage
