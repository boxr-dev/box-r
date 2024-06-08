import NextLink from 'next/link'
import { PropsWithChildren } from 'react'

type Prop = PropsWithChildren & {
  className?: string
  href: string
  isExternalLink: boolean
}

export const Link: React.FC<Prop> = ({ children, className, href, isExternalLink }) => {
  return (
    <>
      {isExternalLink ? (
        <a className={className} href={href} target='_blank' rel='noopener noreferrer'>
          {children}
        </a>
      ) : (
        <NextLink className={className} href={href}>
          {children}
        </NextLink>
      )}
    </>
  )
}
