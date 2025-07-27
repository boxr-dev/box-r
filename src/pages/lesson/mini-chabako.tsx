import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { MiniChabakoLesson } from '@/components/features/MiniChabakoLesson'

const LessonPage: NextPage = () => {
  return (
    <Layout
      title={'ミニ茶箱レッスン | BOX R'}
      description={'佐野里江子 | 手のひらサイズの茶箱の形をした桐箱を使用し、カルトナージュの技法で制作します。'}
    >
      <MiniChabakoLesson />
    </Layout>
  )
}

export default LessonPage
