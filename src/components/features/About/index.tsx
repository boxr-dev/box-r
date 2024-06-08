import { Image } from '@/components/commons/Image'
import style from '@/components/features/About/About.module.scss'

export const About: React.FC = () => {
  return (
    <div className={style.container}>
      <section className={style.title}>
        <h2 className={style['title-main']}>About</h2>
        <span className={style['title-sub']}>BOX R について</span>
      </section>
      <section className={style.content}>
        <p>BOX R は、カルトナージュとインテリア茶箱のアトリエです。</p>
        <p>インテリアに馴染みつつも存在感のある作品作りを心がけております。</p>
        <p>レッスンでは、楽しんで頂くことをコンセプトに皆様のエッセンスの入った作品作りのお手伝いをさせていただきます。</p>
        <p>
          お教室で生まれた作品が皆様の日常を幸せにし、その作品をどなたかに差し上げる事で幸せが広がって欲しいと願っております。
        </p>
      </section>
      <section className={style.image}>
        <Image src={'/images/about/main.jpg'} alt='ブランドイメージ' loading='lazy' fill />
      </section>
      <section className={style.profile}>
        <div className={style['profile-name']}>
          <span className={style['profile-name-ja']}>佐野 里江子</span>
          <span className={style['profile-name-en']}>Rieko Sano</span>
        </div>
        <div className={style.content}>
          <p>横浜市在住。短大卒業後、大手広告代理店に勤務。出産を機に退職。3人の子育てを通して様々なクラフトに出会う。</p>
          <p>
            その中でも、楽しく生地選びができるカルトナージュに魅了され、Atelier Ange Cartonnageにて学び、Atelier cartonnage
            diploma course終了。
          </p>
          <p>また、学生時代に叔母が茶箱に生地を装飾しているのを憧れを持って見ておりました。</p>
          <p>
            そして現在インテリア茶箱として美しく進化しているのを知り、インストラクターコースへ進み、インテリア茶箱クラブ認定インストラクターとなる。
          </p>
          <p>好きな生地を使って形にする楽しさを知りました。</p>
          <p>インテリア茶箱とカルトナージュのアトリエ「BOX R」を主宰。</p>
        </div>
        <div className={style['profile-image']}>
          <Image src={'/images/about/profile.jpg'} alt='プロフィール画像' loading='lazy' fill />
        </div>
        <div className={style.content}>
          <ul>
            <li>2010年カルトナージュ教室開講</li>
            <li>2012年12月「インテリア茶箱クラブ」インストラクタークラス終了</li>
            <li>2013年1月インテリア茶箱教室開講</li>
            <li>2013年9月フレンチデコ認定取得、教室開講</li>
          </ul>
          <p>日本橋三越カルチャーサロン、新宿伊勢丹OTOMANA、講師</p>
        </div>
      </section>
    </div>
  )
}
