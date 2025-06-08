import { PropsWithChildren } from 'react'
import { Link } from '@/components/commons/Link'
import style from '@/components/commons/Link/BottonLink/BottonLink.module.scss'

type Props = PropsWithChildren<{
  href: string
  isExternalLink?: boolean
}>

export const BottonLink: React.FC<Props> = ({ children, href, isExternalLink }) => {
  return (
    <button className={style.container} type='button' tabIndex={-1}>
      <Link className={style.link} href={href} isExternalLink={isExternalLink || false}>
        {children}
      </Link>
    </button>
  )
}
