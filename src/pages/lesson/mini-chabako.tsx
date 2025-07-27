import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { MiniChabakoLesson } from '@/components/features/MiniChabakoLesson'

const LessonPage: NextPage = () => {
  return (
    <Layout title={'ミニ茶箱レッスン | BOX R'} description={'佐野里江子 | 小さくて可愛いミニ茶箱を作るレッスンです。'}>
      <MiniChabakoLesson />
    </Layout>
  )
}

export default LessonPage
