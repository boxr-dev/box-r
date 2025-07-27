import { PropsWithChildren } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Link } from '@/components/commons/Link'
import style from '@/components/commons/Link/TextButtonLink/TextButtonLink.module.scss'

type Props = PropsWithChildren<{
  href: string
  isExternalLink?: boolean
}>

export const TextButtonLink: React.FC<Props> = ({ children, href, isExternalLink }) => {
  return (
    <Link className={style.container} href={href} isExternalLink={isExternalLink || false}>
      {isExternalLink ? (
        <span className={style.inner}>
          <span className={style.text}>{children}</span>
          <span className={style['external-link-icon']}>
            <FaExternalLinkAlt />
          </span>
        </span>
      ) : (
        <span className={style.text}>{children}</span>
      )}
    </Link>
  )
}
