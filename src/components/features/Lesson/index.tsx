import { ContentTitle } from '@/components/commons/ContentTitle'
import { TextLink } from '@/components/commons/Link/TextLink'
import { PageTitle } from '@/components/commons/PageTitle'
import { SectionTitle } from '@/components/commons/SectionTitle'
import style from '@/components/features/Lesson/Lesson.module.scss'

export const Lesson: React.FC = () => {
  return (
    <div className={style.container}>
      <PageTitle title='Lesson' subTitle='レッスン' />
      <section className={style.section}>
        <SectionTitle title='カルトナージュ' subTitle='Cartonnage' />
        <div>
          <ContentTitle>単発レッスン</ContentTitle>
          <div>
            <TextLink href='/lesson/1' isExternalLink={false}>
              単発レッスン
            </TextLink>
          </div>
        </div>
        <div>
          <ContentTitle>コースレッスン</ContentTitle>
          <div>
            <TextLink href='/lesson/2' isExternalLink={false}>
              ライセンスコース
            </TextLink>
          </div>
          <div>
            <TextLink href='/lesson/3' isExternalLink={false}>
              ディプロマコース
            </TextLink>
          </div>
          <div>
            <TextLink href='/lesson/4' isExternalLink={false}>
              フレンチメゾンデコール
            </TextLink>
          </div>
        </div>
      </section>
      <section className={style.section}>
        <SectionTitle title='インテリア茶箱' subTitle='Interior Chabako' />
        <div>
          <ContentTitle>単発レッスン</ContentTitle>
          <div>
            <TextLink href='/lesson/5' isExternalLink={false}>
              単発レッスン
            </TextLink>
          </div>
        </div>
      </section>
      <section className={style.section}>
        <SectionTitle title='その他' subTitle='Others' />
        <div>
          <TextLink href='/lesson/6' isExternalLink={false}>
            ミニ茶箱
          </TextLink>
        </div>
        <div>
          <TextLink href='/lesson/7' isExternalLink={false}>
            アイロン台
          </TextLink>
        </div>
        <div>
          <TextLink href='/lesson/8' isExternalLink={false}>
            グルーバッグ
          </TextLink>
        </div>
        <div>
          <TextLink href='/lesson/9' isExternalLink={false}>
            タッセル
          </TextLink>
        </div>
      </section>
    </div>
  )
}
