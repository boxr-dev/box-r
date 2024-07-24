import { PropsWithChildren } from 'react'
import style from '@/components/commons/SectionTitle/SectionTitle.module.scss'

type Prop = PropsWithChildren & {
  title: string
  subTitle?: string
}

export const Title: React.FC<Prop> = ({ title, subTitle }) => {
  return (
    <div className={style.container}>
      <h3 className={style.title}>{title}</h3>
    </div>
  )
}
