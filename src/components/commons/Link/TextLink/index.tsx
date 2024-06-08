import { PropsWithChildren } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Link } from '@/components/commons/Link'
import style from '@/components/commons/Link/TextLink/TextLink.module.scss'

type Prop = PropsWithChildren & {
  href: string
  isExternalLink?: boolean
}

export const TextLink: React.FC<Prop> = ({ children, href, isExternalLink }) => {
  return (
    <Link className={style.container} href={href} isExternalLink={isExternalLink || false}>
      {isExternalLink ? (
        <span className={style.inner}>
          <span>{children}</span>
          <span className={style['external-link-icon']}>
            <FaExternalLinkAlt />
          </span>
        </span>
      ) : (
        <span>{children}</span>
      )}
    </Link>
  )
}
