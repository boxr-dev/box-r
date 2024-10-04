import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { Lesson } from '@/components/features/Lesson'

const LessonPage: NextPage = () => {
  return (
    <Layout title={'レッスン | BOX R'} description={'ディスクリプション'}>
      <Lesson />
    </Layout>
  )
}

export default LessonPage
