import { PropsWithChildren } from 'react'
import style from '@/components/commons/List/List.module.scss'

export const List: React.FC<PropsWithChildren> = ({ children }) => {
  return <ul className={style.container}>{children}</ul>
}
