import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import style from '@/components/Layout/Header/NavItem/NavItem.module.css'

type Prop = PropsWithChildren & {
  href: string
  isExternalLink?: boolean
}

export const NavItem: React.FC<Prop> = ({ children, href, isExternalLink }) => {
  return (
    <li className={style.container}>
      {isExternalLink ? (
        <a className={style.link} href={href} target='_blank' rel='noopener noreferrer'>
          <span className={style.text}>
            <span>{children}</span>
            <span className={style['external-link-icon']}>
              <FaExternalLinkAlt />
            </span>
          </span>
        </a>
      ) : (
        <Link className={style.link} href={href}>
          <span className={style.text}>{children}</span>
        </Link>
      )}
    </li>
  )
}
