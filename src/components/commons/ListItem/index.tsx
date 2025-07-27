import { PropsWithChildren } from 'react'
import style from '@/components/commons/ListItem/ListItem.module.scss'

type Props = PropsWithChildren<{
  key: React.Key
}>

export const ListItem: React.FC<Props> = ({ key, children }) => {
  return (
    <li key={key} className={style.container}>
      {children}
    </li>
  )
}
