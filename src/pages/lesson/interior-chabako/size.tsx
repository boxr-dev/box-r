import { Layout } from '@/components/commons/Layout'
import InteriorChabakoSize from '@/components/features/InteriorChabakoSize'

export default function InteriorChabakoSizePage() {
  return (
    <Layout
      title='インテリア茶箱 サイズ一覧 | BOX R'
      description='インテリア茶箱の各サイズと必要な布のサイズをご確認いただけます。1Kから60Kまで各種サイズをご用意しています。'
    >
      <InteriorChabakoSize />
    </Layout>
  )
}
