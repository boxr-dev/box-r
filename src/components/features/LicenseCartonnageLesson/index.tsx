import { ContentTitle } from '@/components/commons/ContentTitle'
import { BottonLink } from '@/components/commons/Link/BottonLink'
import { PageTitle } from '@/components/commons/PageTitle'
import { Paragraph } from '@/components/commons/Paragraph'
import { SectionTitle } from '@/components/commons/SectionTitle'
import style from '@/components/features/Lesson/Lesson.module.scss'

export const LicenseCartonnageLesson: React.FC = () => {
  return (
    <div className={style.container}>
      <PageTitle title='Lesson' subTitle='カルトナージュ レッスン詳細' />
      <section className={style.section}>
        <SectionTitle title='ライセンスコース' subTitle='License course' />
        <div className={style.discription}>
          <div className={style['paragraph-wrapper']}>
            <Paragraph>
              基本の10作品＋オリジナル作品を制作して、ライセンスが取得できるコースです。取得後、ディプロマコースにお進みいただけます。
            </Paragraph>
            <Paragraph>コース終了後は、コースで習った作品のレッスン・販売が可能となります。</Paragraph>
            <Paragraph>その際、《BOX R design》と明記が必要です。(SNS掲載も同様)</Paragraph>
          </div>
          <ul>
            <li>1レッスン4~5名様までの少人数制です。</li>
            <li>道具はすべてアトリエに用意がございます。（※道具のレンタル費用はかかりません）</li>
            <li>材料はお持ち込みも、アトリエの在庫からもお選びいただけます。</li>
          </ul>
        </div>
        <div>
          <ContentTitle>カリキュラム内容</ContentTitle>
          <div className={style.discription}>
            <Paragraph>下記10作品を作成後、学んだ技術を1つ以上取り入れて、オリジナルの作品を提出していただきます。</Paragraph>
            <ol className={style['curriculum-list']}>
              <li>マナーファイル</li>
              <li>A4ファイル</li>
              <li>ジュエルボックス</li>
              <li>スタンドミラー</li>
              <li>メガネスタンド</li>
              <li>オーバーナイトトレイ</li>
              <li>マスクケース</li>
              <li>縦型ティッシュボックス</li>
              <li>小さな置き時計(カーブタイプ)</li>
              <li>ペルメル付きお道具箱</li>
            </ol>
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
            <Paragraph>講習費：¥4,500 ＋ 材料費</Paragraph>
            <Paragraph>ライセンス申請料：¥30,000</Paragraph>
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
