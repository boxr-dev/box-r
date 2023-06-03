import { PropsWithChildren } from 'react'
import { Link } from '@/components/Common/Link'
import style from '@/components/Common/Link/IconLink/IconLink.module.scss'

type Prop = PropsWithChildren & {
  href: string
  isExternalLink?: boolean
}

export const IconLink: React.FC<Prop> = ({ children, href, isExternalLink }) => {
  return (
    <Link className={style.container} href={href} isExternalLink={isExternalLink || false}>
      {children}
    </Link>
  )
}
