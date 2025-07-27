import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { TasselLesson } from '@/components/features/TasselLesson'

const LessonPage: NextPage = () => {
  return (
    <Layout title={'タッセル（APJ）レッスン | BOX R'} description={'佐野里江子 | APJ認定講師によるタッセルのレッスンです。'}>
      <TasselLesson />
    </Layout>
  )
}

export default LessonPage
