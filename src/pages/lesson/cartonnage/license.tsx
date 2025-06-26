import type { NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { LicenseCartonnageLesson } from '@/components/features/LicenseCartonnageLesson'

const LicenseLessonPage: NextPage = () => {
  return (
    <Layout
      title={'ライセンスコース（カルトナージュ） | BOX R'}
      description={
        '佐野里江子 | 基本の 10 作品 + オリジナル作品を制作して、ライセンスが取得できるコースです。取得後、ディプロマコースにお進みいただけます。'
      }
    >
      <LicenseCartonnageLesson />
    </Layout>
  )
}

export default LicenseLessonPage
