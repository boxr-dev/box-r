import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { DiplomaCartonnageLesson } from '@/components/features/DiplomaCartonnageLesson'

const DiplomaLessonPage: NextPage = () => {
  return (
    <Layout
      title={'ディプロマコース（カルトナージュ） | BOX R'}
      description={
        '佐野里江子 | 17 作品 + オリジナル作品を制作して、ディプロマが取得できるコースです。取得後、申請すると BOX R 認定教室となります。'
      }
    >
      <DiplomaCartonnageLesson />
    </Layout>
  )
}

export default DiplomaLessonPage
