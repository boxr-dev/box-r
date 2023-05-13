import NextLink from 'next/link'
import { PropsWithChildren } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import style from '@/components/Common/Link/Link.module.css'

type Prop = PropsWithChildren & {
  href: string
  isExternalLink?: boolean
}

export const Link: React.FC<Prop> = ({ children, href, isExternalLink }) => {
  return (
    <>
      {isExternalLink ? (
        <a className={style.container} href={href} target='_blank' rel='noopener noreferrer'>
          <span className={style.inner}>
            <span>{children}</span>
            <span className={style['external-link-icon']}>
              <FaExternalLinkAlt />
            </span>
          </span>
        </a>
      ) : (
        <NextLink className={style.container} href={href}>
          <span>{children}</span>
        </NextLink>
      )}
    </>
  )
}
