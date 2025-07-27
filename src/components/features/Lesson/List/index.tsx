import { PropsWithChildren } from 'react'
import style from './List.module.scss'

export const List: React.FC<PropsWithChildren> = ({ children }) => {
  return <ul className={style.container}>{children}</ul>
}
