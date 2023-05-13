import NextLink from 'next/link'
import { PropsWithChildren } from 'react'
import style from '@/components/Common/IconLink/IconLink.module.css'

type Prop = PropsWithChildren & {
  href: string
  isExternalLink?: boolean
}

export const IconLink: React.FC<Prop> = ({ children, href, isExternalLink }) => {
  return (
    <>
      {isExternalLink ? (
        <a className={style.container} href={href} target='_blank' rel='noopener noreferrer'>
          {children}
        </a>
      ) : (
        <NextLink className={style.container} href={href}>
          {children}
        </NextLink>
      )}
    </>
  )
}
