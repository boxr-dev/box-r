import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { FrenchMaisonDecorLesson } from '@/components/features/FrenchMaisonDecorLesson'

const FrenchMaisonDecorLessonPage: NextPage = () => {
  return (
    <Layout
      title={'フレンチメゾンデコール（カルトナージュ） | BOX R'}
      description={'佐野里江子 | カルトナージュを中心にインテリアに関する手工芸を学び、ディプロマが取得できるコースです。'}
    >
      <FrenchMaisonDecorLesson />
    </Layout>
  )
}

export default FrenchMaisonDecorLessonPage
