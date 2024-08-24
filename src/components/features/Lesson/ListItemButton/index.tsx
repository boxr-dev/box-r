import { PropsWithChildren } from 'react'
import { Link } from '@/components/commons/Link'
import style from '@/components/features/Lesson/ListItemButton/ListItemButton.module.scss'

type Props = PropsWithChildren & {
  href: string
  isExternalLink?: boolean
}

export const ListItemButton: React.FC<Props> = ({ href, isExternalLink, children }) => {
  return (
    <li className={style.container}>
      <Link className={style.link} href={href} isExternalLink={isExternalLink || false}>
        {children}
      </Link>
    </li>
  )
}
