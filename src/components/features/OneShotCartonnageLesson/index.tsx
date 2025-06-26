import { ContentTitle } from '@/components/commons/ContentTitle'
import { BottonLink } from '@/components/commons/Link/BottonLink'
import { PageTitle } from '@/components/commons/PageTitle'
import { Paragraph } from '@/components/commons/Paragraph'
import { SectionTitle } from '@/components/commons/SectionTitle'
import style from '@/components/features/Lesson/Lesson.module.scss'

export const OneShotCartonnageLesson: React.FC = () => {
  return (
    <div className={style.container}>
      <PageTitle title='Lesson' subTitle='カルトナージュ レッスン詳細' />
      <section className={style.section}>
        <SectionTitle title='単発レッスン' subTitle='One shot lesson' />
        <div className={style.discription}>
          <div className={style['paragraph-wrapper']}>
            <Paragraph>スキルに合わせてご希望の作品を制作していただきます。</Paragraph>
            <Paragraph>Instagramやブログに載っているものであれば基本的になんでもOKです。</Paragraph>
            <Paragraph>作りたい作品については、事前にご相談ください。</Paragraph>
          </div>
          <div>
            <Paragraph>1レッスン4~5名様までの少人数制です。</Paragraph>
            <Paragraph>道具はすべてアトリエに用意がございます。（道具のレンタル費用はかかりません）</Paragraph>
            <Paragraph>材料はお持ち込みも、アトリエの在庫からもお選びいただけます。</Paragraph>
          </div>
        </div>
        <div>
          <ContentTitle>時間</ContentTitle>
          <div className={style.discription}>
            <Paragraph>10:00 〜 15:00（お昼休憩 あり）</Paragraph>
          </div>
        </div>
        <div>
          <ContentTitle>費用</ContentTitle>
          <div className={style.discription}>
            <Paragraph>講習費：¥3,500〜6,000 ＋ 材料費</Paragraph>
            <div className={style['sub-paragraph']}>
              <Paragraph>※作品数ではなく、レッスン時間での費用です。</Paragraph>
              <Paragraph>※支払い方法は 現金 or PayPay です。（当日精算）</Paragraph>
            </div>
          </div>
        </div>
        <div>
          <ContentTitle>アクセス</ContentTitle>
          <div className={style.discription}>
            <Paragraph>京浜東北線根岸駅 徒歩2分</Paragraph>
            <div className={style['sub-paragraph']}>
              <Paragraph>※参加される方に詳細な場所をお知らせします。</Paragraph>
              <Paragraph>※お車の場合は、近隣のコインパーキングをご利用ください。</Paragraph>
            </div>
          </div>
        </div>
        <div>
          <ContentTitle>予約方法</ContentTitle>
          <div className={style.discription}>
            <Paragraph>お問い合わせフォームからご連絡ください。</Paragraph>
            <div className={style['button-container']}>
              <BottonLink href={'https://ssl.form-mailer.jp/fms/2737b864408251'} isExternalLink>
                レッスンを申し込む
              </BottonLink>
            </div>
          </div>
        </div>
        <div className={style['button-container']}>
          <BottonLink href={'/lesson'} variant='outlined'>
            レッスン一覧に戻る
          </BottonLink>
        </div>
      </section>
    </div>
  )
}
