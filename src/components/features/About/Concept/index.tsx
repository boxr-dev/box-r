import { Image } from '@/components/commons/Image'
import { Paragraph } from '@/components/commons/Paragraph'
import style from '@/components/features/About/Concept/Concept.module.scss'

export const Concept: React.FC = () => {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <Paragraph>BOX R は、カルトナージュとインテリア茶箱のアトリエです。</Paragraph>
        <Paragraph>インテリアに馴染みつつも存在感のある作品作りを心がけております。</Paragraph>
        <Paragraph>
          レッスンでは、楽しんでいただくことをコンセプトに皆様のエッセンスの入った作品作りのお手伝いをさせていただきます。
        </Paragraph>
        <Paragraph>
          お教室で生まれた作品が皆様の日常を幸せにし、その作品をどなたかに差し上げる事で幸せが広がって欲しいと願っております。
        </Paragraph>
      </div>
      <div className={style.image}>
        <Image src={'/images/about/main.jpg'} alt='ブランドイメージ' loading='lazy' fill />
      </div>
    </section>
  )
}
