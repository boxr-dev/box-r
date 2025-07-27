import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { GlueBagLesson } from '@/components/features/GlueBagLesson'

const LessonPage: NextPage = () => {
  return (
    <Layout
      title={'グルーバック（JGBA）レッスン | BOX R'}
      description={'佐野里江子 | JGBA認定講師によるグルーバックのレッスンです。'}
    >
      <GlueBagLesson />
    </Layout>
  )
}

export default LessonPage
