import { ContentTitle } from '@/components/commons/ContentTitle'
import { BottonLink } from '@/components/commons/Link/BottonLink'
import { PageTitle } from '@/components/commons/PageTitle'
import { Paragraph } from '@/components/commons/Paragraph'
import { SectionTitle } from '@/components/commons/SectionTitle'
import style from '@/components/features/Lesson/Lesson.module.scss'

export const DiplomaCartonnageLesson: React.FC = () => {
  return (
    <div className={style.container}>
      <PageTitle title='Lesson' subTitle='カルトナージュ レッスン詳細' />
      <section className={style.section}>
        <SectionTitle title='ディプロマコース' subTitle='Diploma course' />
        <div className={style.discription}>
          <div className={style['paragraph-wrapper']}>
            <Paragraph>
              17作品＋オリジナル作品を制作して、ディプロマが取得できるコースです。取得後、申請するとBOX R認定教室となります。
            </Paragraph>
            <Paragraph>コース終了後は、コースで習った作品のレッスン、販売が可能となります。</Paragraph>
            <Paragraph>その際には《BOX R design》と明記が必要となります。(SNS掲載も同様)</Paragraph>
          </div>
          <div className={style['paragraph-wrapper']}>
            <Paragraph>また、コース終了後に下記コースを開講していただけます。</Paragraph>
            <ul>
              <li>BOX R cartonnage licence course</li>
              <li>BOX R cartonnage diploma course</li>
            </ul>
          </div>
          <div>
            <Paragraph>1レッスン4~5名様までの少人数制です。</Paragraph>
            <Paragraph>道具はすべてアトリエに用意がございます。（道具のレンタル費用はかかりません）</Paragraph>
            <Paragraph>材料はお持ち込みも、アトリエの在庫からもお選びいただけます。</Paragraph>
          </div>
        </div>
        <div>
          <ContentTitle>カリキュラム内容</ContentTitle>
          <div className={style.discription}>
            <Paragraph>下記17作品を作成後、今まで学んだことをもとに、オリジナル作品を提出していただきます。</Paragraph>
            <ol className={style['curriculum-list']}>
              <li>花形バスケット</li>
              <li>レターラック</li>
              <li>メガネケース</li>
              <li>丸箱</li>
              <li>手帳カバー</li>
              <li>ジャバラのお裁縫箱</li>
              <li>マガジンラック</li>
              <li>ティーバッグボックス</li>
              <li>スクエアバニティ</li>
              <li>タッセルボックス</li>
              <li>バニティバッグ（オーバル）</li>
              <li>ハートBOX</li>
              <li>トランク</li>
              <li>マジックボックス（六角形）</li>
              <li>宝箱</li>
              <li>基本の引き出し</li>
              <li>Tea box</li>
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
            <Paragraph>講習費：¥5,500 ＋ 材料費</Paragraph>
            <Paragraph>ライセンス申請料：¥30,000</Paragraph>
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
              <BottonLink href={'https://ssl.form-mailer.jp/fms/2737b864408251'}>レッスンを申し込む</BottonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
