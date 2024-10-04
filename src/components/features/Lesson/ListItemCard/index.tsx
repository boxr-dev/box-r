import { PropsWithChildren } from 'react'
import style from '@/components/features/Lesson/ListItemCard/ListItemCard.module.scss'

// Card →　Button に移行しやすいように使わないプロパティを付与している
type Props = PropsWithChildren<{
  href: string
  isExternalLink?: boolean
}>

export const ListItemCard: React.FC<Props> = ({ children }) => {
  return (
    <li className={style.container}>
      <div className={style.card}>{children}</div>
    </li>
  )
}
