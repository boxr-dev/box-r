import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { OneShotCartonnageLesson } from '@/components/features/OneShotCartonnageLesson'

const LessonPage: NextPage = () => {
  return (
    <Layout
      title={'単発レッスン（カルトナージュ） | BOX R'}
      description={'佐野里江子 | スキルに合わせてご希望の作品を制作します。'}
    >
      <OneShotCartonnageLesson />
    </Layout>
  )
}

export default LessonPage
