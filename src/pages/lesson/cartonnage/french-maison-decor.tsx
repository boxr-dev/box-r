import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { FrenchMaisonDecorLesson } from '@/components/features/FrenchMaisonDecorLesson'

const FrenchMaisonDecorLessonPage: NextPage = () => {
  return (
    <Layout
      title={'フレンチメゾンデコール（カルトナージュ） | BOX R'}
      description={
        '佐野里江子 | BOX R は、カルトナージュとインテリア茶箱のアトリエです。インテリアに馴染みつつも存在感のある作品作りを心がけております。'
      }
    >
      <FrenchMaisonDecorLesson />
    </Layout>
  )
}

export default FrenchMaisonDecorLessonPage
