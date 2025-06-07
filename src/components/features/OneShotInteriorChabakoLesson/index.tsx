import { ContentTitle } from '@/components/commons/ContentTitle'
import { BottonLink } from '@/components/commons/Link/BottonLink'
import { PageTitle } from '@/components/commons/PageTitle'
import { Paragraph } from '@/components/commons/Paragraph'
import { SectionTitle } from '@/components/commons/SectionTitle'
import style from '@/components/features/Lesson/Lesson.module.scss'

export const OneShotInteriorChabakoLesson: React.FC = () => {
  return (
    <div className={style.container}>
      <PageTitle title='Lesson' subTitle='インテリア茶箱 レッスン詳細' />
      <section className={style.section}>
        <SectionTitle title='単発レッスン' subTitle='One shot lesson' />
        <div className={style.discription}>
          <div className={style['paragraph-wrapper']}>
            <Paragraph>インテリア茶箱クラブ認定インストラクター</Paragraph>
            <Paragraph>19種類からご希望の茶箱サイズにて、レッスンさせていただきます。</Paragraph>
          </div>
          <div className={style['paragraph-wrapper']}>
            <Paragraph>ご自宅にある茶箱を使用してのレッスンをご希望の方はご相談ください。</Paragraph>
            <Paragraph>8〜12時間のレッスンで1個のインテリア茶箱を制作していただいております。</Paragraph>
            <Paragraph>内箱などの制作をご希望の場合は、追加レッスンが必要となります。</Paragraph>
            <div className={style['sub-paragraph']}>
              <Paragraph>※茶箱サイズは一覧表を参照ください。</Paragraph>
              <Paragraph>※レッスンや販売をご希望の方は、インテリア茶箱クラブインストラクターコースをご受講ください。</Paragraph>
            </div>
          </div>
          <ul>
            <li>1レッスン4~5名様までの少人数制です。</li>
            <li>道具はすべてアトリエに用意がございます。（※道具のレンタル費用はかかりません）</li>
            <li>材料はお持ち込みも、アトリエの在庫からもお選びいただけます。</li>
          </ul>
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
            <Paragraph>講習費：¥5,000 ＋ 材料費</Paragraph>
            <div className={style['sub-paragraph']}>
              <Paragraph>※作品数ではなく、レッスン時間での対応とさせていただきます。</Paragraph>
              <Paragraph>※材料費は、作品によって異なります。</Paragraph>
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
              <BottonLink href={'https://ssl.form-mailer.jp/fms/2737b864408251'}>レッスンを申し込む</BottonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
