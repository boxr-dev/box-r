import { PropsWithChildren } from 'react'
import style from '@/components/commons/PageTitle/PageTitle.module.scss'

type Prop = PropsWithChildren & {
  title: string
  subTitle: string
}

export const PageTitle: React.FC<Prop> = ({ title, subTitle }) => {
  return (
    <section className={style.container}>
      <h1 className={style.title}>{title}</h1>
      <span className={style['sub-title']}>{subTitle}</span>
    </section>
  )
}
