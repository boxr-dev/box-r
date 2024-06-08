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
        <p>
          <span>BOX R は</span>
          <span>カルトナージュとインテリア茶箱の</span>
          <span>アトリエです。</span>
        </p>
        <p>
          <span>インテリアに馴染みつつも存在感のある</span>
          <span>作品作りを心がけております。</span>
        </p>
        <p>
          <span>レッスンでは</span>
          <span>楽しんで頂くことをコンセプトに</span>
          <span>皆様のエッセンスの入った</span>
          <span>作品作りのお手伝いを</span>
          <span>させていただきます。</span>
        </p>
        <p>
          <span>お教室で生まれた作品が</span>
          <span>皆様の日常を幸せにし</span>
          <span>その作品をどなたかに</span>
          <span>差し上げる事で</span>
          <span>幸せが広がって欲しい</span>
          <span>と願っております。</span>
        </p>
      </section>
      <section className={style.image}>
        <Image src={'/images/about/main.jpg'} alt='ブランドイメージ' loading='lazy' fill />
      </section>
    </div>
  )
}
