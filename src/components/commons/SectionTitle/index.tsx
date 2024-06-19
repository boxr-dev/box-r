import { PropsWithChildren } from 'react'
import style from '@/components/commons/SectionTitle/SectionTitle.module.scss'

type Prop = PropsWithChildren & {
  title: string
  subTitle?: string
}

export const SectionTitle: React.FC<Prop> = ({ title, subTitle }) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{title}</h2>
      {subTitle && <span className={style['sub-title']}>{subTitle}</span>}
    </div>
  )
}
