import { PropsWithChildren } from 'react'
import style from '@/components/commons/ContentTitle/ContentTitle.module.scss'

export const ContentTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={style.container}>
      <h3 className={style.title}>{children}</h3>
    </div>
  )
}
