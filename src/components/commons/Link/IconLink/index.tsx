import { PropsWithChildren } from 'react'
import { Link } from '@/components/commons/Link'
import style from '@/components/commons/Link/IconLink/IconLink.module.scss'

type Props = PropsWithChildren<{
  href: string
  isExternalLink?: boolean
}>

export const IconLink: React.FC<Props> = ({ children, href, isExternalLink }) => {
  return (
    <Link className={style.container} href={href} isExternalLink={isExternalLink || false}>
      {children}
    </Link>
  )
}
