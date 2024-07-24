import { Image } from '@/components/commons/Image'
import { SectionTitle } from '@/components/commons/SectionTitle'
import style from '@/components/features/About/Profile/Profile.module.scss'

export const Profile: React.FC = () => {
  return (
    <section className={style.container}>
      <SectionTitle title='佐野 里江子' subTitle='Rieko Sano' />
      <div className={style.content}>
        <p>横浜市在住。短大卒業後、大手広告代理店に勤務。出産を機に退職。3人の子育てを通して様々なクラフトに出会う。</p>
        <p>
          その中でも、楽しく生地選びができるカルトナージュに魅了され、Atelier Ange Cartonnageにて学び、Atelier cartonnage diploma
          course終了。
        </p>
        <p>また、学生時代に叔母が茶箱に生地を装飾しているのを憧れを持って見ておりました。</p>
        <p>
          そして現在インテリア茶箱として美しく進化しているのを知り、インストラクターコースへ進み、インテリア茶箱クラブ認定インストラクターとなる。
        </p>
        <p>好きな生地を使って形にする楽しさを知りました。</p>
        <p>インテリア茶箱とカルトナージュのアトリエ「BOX R」を主宰。</p>
      </div>
      <div className={style.image}>
        <Image src={'/images/about/profile.jpg'} alt='プロフィール画像' loading='lazy' fill />
      </div>
      <div className={style.content}>
        <table className={style.career}>
          <thead>
            <h3>経歴</h3>
          </thead>
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
        <p>日本橋三越カルチャーサロン、新宿伊勢丹OTOMANA、講師</p>
        <p>三越伊勢丹オンラインショップ</p>
        <div className={style.temp}>
          <h3>書籍</h3>
          <ul>
            <li>「人気作家のタッセル、カルトナージュ、インテリア茶箱」草土出版</li>
            <li>「インテリア茶箱の世界」dZERO</li>
          </ul>
        </div>
        <div className={style.temp}>
          <h3>ラジオ</h3>
          <ul>
            <li>FMヨコハマ「ファンケル横浜なでしこ」</li>
          </ul>
        </div>
        <table className={style.career}>
          <thead>
            <h3>作品展示会</h3>
          </thead>
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
        <p className={style.annotation}>※インテリア茶箱は、インテリア茶箱クラブの登録商標です。</p>
      </div>
    </section>
  )
}
