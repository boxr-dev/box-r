import { PropsWithChildren } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Link } from '@/components/Common/Link'
import style from '@/components/Layout/Header/NavItem/NavItem.module.scss'

type Prop = PropsWithChildren & {
  href: string
  isExternalLink?: boolean
}

export const NavItem: React.FC<Prop> = ({ children, href, isExternalLink }) => {
  return (
    <li className={style.container}>
      <Link className={style.link} href={href} isExternalLink={isExternalLink || false}>
        {isExternalLink ? (
          <span className={style.text}>
            <span>{children}</span>
            <span className={style['external-link-icon']}>
              <FaExternalLinkAlt />
            </span>
          </span>
        ) : (
          <span className={style.text}>{children}</span>
        )}
      </Link>
    </li>
  )
}
