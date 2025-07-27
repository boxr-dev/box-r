import { PropsWithChildren } from 'react'
import style from './ListItem.module.scss'

export const ListItem: React.FC<PropsWithChildren> = ({ children }) => {
  return <li className={style.container}>{children}</li>
}
