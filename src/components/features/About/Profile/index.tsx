import { ContentTitle } from '@/components/commons/ContentTitle'
import { Image } from '@/components/commons/Image'
import { Paragraph } from '@/components/commons/Paragraph'
import { SectionTitle } from '@/components/commons/SectionTitle'
import style from '@/components/features/About/Profile/Profile.module.scss'

export const Profile: React.FC = () => {
  return (
    <section className={style.container}>
      <div className={style.title}>
        <SectionTitle title='佐野 里江子' subTitle='Rieko Sano' />
      </div>
      <div className={style.content}>
        <Paragraph>
          横浜市在住。
          <br />
          短大卒業後、大手広告代理店に勤務したが、出産を機に退職。3人の子育てを通して様々なクラフトに出会う。
        </Paragraph>
        <Paragraph>
          その中でも、楽しく生地選びができるカルトナージュに魅了され、Atelier Ange Cartonnage にて学び、Atelier cartonnage diploma
          course 終了。
        </Paragraph>
        <Paragraph>学生時代、叔母が茶箱に生地を装飾しているのを見て、憧れを持っていた。</Paragraph>
        <Paragraph>
          そして現在インテリア茶箱として美しく進化しているのを知り、インストラクターコースへ進み、インテリア茶箱クラブ認定インストラクターとなる。
        </Paragraph>
        <Paragraph>インテリア茶箱とカルトナージュのアトリエ「BOX R」を主宰。</Paragraph>
      </div>
      <div className={style.image}>
        <Image src={'/images/about/profile.jpg'} alt='プロフィール画像' loading='lazy' fill />
      </div>
      <div className={style.content}>
        <div className={style.career}>
          <ContentTitle>経歴</ContentTitle>
          <table className={style.table}>
            <tbody>
              <tr>
                <td>2010年</td>
                <td>カルトナージュ教室開講</td>
              </tr>
              <tr>
                <td>2012年12月</td>
                <td>インテリア茶箱クラブ インストラクタークラス終了</td>
              </tr>
              <tr>
                <td>2013年1月</td>
                <td>インテリア茶箱教室開講</td>
              </tr>
              <tr>
                <td>2013年9月</td>
                <td>フレンチデコ認定取得、教室開講（現在のフレンチメゾンデコール）</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={style.career}>
          <ContentTitle>書籍</ContentTitle>
          <ul>
            <li>「人気作家のタッセル、カルトナージュ、インテリア茶箱」草土出版</li>
            <li>「インテリア茶箱の世界」dZERO</li>
          </ul>
        </div>
        <div className={style.career}>
          <ContentTitle>ラジオ</ContentTitle>
          <ul>
            <li>FMヨコハマ「ファンケル横浜なでしこ」</li>
          </ul>
        </div>
        <div className={style.career}>
          <ContentTitle>作品展示会</ContentTitle>
          <table className={style.table}>
            <tbody>
              <tr>
                <td>2014年〜</td>
                <td>銀座奥野ビルにてグループ展</td>
              </tr>
              <tr>
                <td>2015年〜</td>
                <td>プラチナミセス祭</td>
              </tr>
              <tr>
                <td>2015年〜</td>
                <td>サロンドルールブルー</td>
              </tr>
              <tr>
                <td>2015年</td>
                <td>「インテリア茶箱の世界」出版記念</td>
              </tr>
              <tr>
                <td>2019年</td>
                <td>「21世紀アート ボーダーレス展」国立新美術館 インテリア茶箱</td>
              </tr>
              <tr>
                <td>2021年〜</td>
                <td>成城にて「Cachette」3人展</td>
              </tr>
              <tr>
                <td>2022年</td>
                <td>インテリア茶箱バーチャル展示会</td>
              </tr>
              <tr>
                <td>2022年</td>
                <td>「21世紀アート ボーダーレス展」国立新美術館 カルトナージュ</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={style.career}>
          <ContentTitle>その他</ContentTitle>
          <ul>
            <li>日本橋三越カルチャーサロン、新宿伊勢丹OTOMANA、講師</li>
            <li>三越伊勢丹オンラインショップにて作品出店</li>
          </ul>
        </div>
        <p className={style.annotation}>※インテリア茶箱は、インテリア茶箱クラブの登録商標です。</p>
      </div>
    </section>
  )
}
