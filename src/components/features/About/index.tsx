import { Profile } from './Profile'
import { Image } from '@/components/commons/Image'
import { PageTitle } from '@/components/commons/PageTitle'
import style from '@/components/features/About/About.module.scss'

export const About: React.FC = () => {
  return (
    <div className={style.container}>
      <PageTitle title='About' subTitle='BOX R について' />
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
      <Profile />
    </div>
  )
}
