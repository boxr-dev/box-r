import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { Lesson } from '@/components/features/Lesson'

const LessonPage: NextPage = () => {
  return (
    <Layout
      title={'レッスン | BOX R'}
      description={
        'BOX R は、カルトナージュとインテリア茶箱のアトリエです。インテリアに馴染みつつも存在感のある作品作りを心がけております。'
      }
    >
      <Lesson />
    </Layout>
  )
}

export default LessonPage
