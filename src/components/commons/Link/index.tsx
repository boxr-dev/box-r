import NextLink from 'next/link'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  className?: string
  href: string
  isExternalLink: boolean
}>

export const Link: React.FC<Props> = ({ children, className, href, isExternalLink }) => {
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
