import { Image } from '@/components/commons/Image'
import style from '@/components/features/About/Concept/Concept.module.scss'

export const Concept: React.FC = () => {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <p>BOX R は、カルトナージュとインテリア茶箱のアトリエです。</p>
        <p>インテリアに馴染みつつも存在感のある作品作りを心がけております。</p>
        <p>レッスンでは、楽しんで頂くことをコンセプトに皆様のエッセンスの入った作品作りのお手伝いをさせていただきます。</p>
        <p>
          お教室で生まれた作品が皆様の日常を幸せにし、その作品をどなたかに差し上げる事で幸せが広がって欲しいと願っております。
        </p>
      </div>
      <div className={style.image}>
        <Image src={'/images/about/main.jpg'} alt='ブランドイメージ' loading='lazy' fill />
      </div>
    </section>
  )
}
