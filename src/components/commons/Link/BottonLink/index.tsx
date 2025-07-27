import { PropsWithChildren } from 'react'
import { Link } from '@/components/commons/Link'
import style from '@/components/commons/Link/BottonLink/BottonLink.module.scss'

type Variant = 'contained' | 'outlined' | 'text'
type Size = 'small' | 'large'

type Props = PropsWithChildren<{
  href: string
  variant?: Variant
  size?: Size
  isExternalLink?: boolean
}>

const getVariantStyle = (variant?: Variant) => {
  if (variant === 'outlined') {
    return style.outlined
  }
  if (variant === 'text') {
    return style.text
  }
  return style.contained
}

const getSizeStyle = (size?: Size) => {
  if (size === 'small') {
    return style.small
  }
  return style.large
}

export const BottonLink: React.FC<Props> = ({ children, href, variant, size, isExternalLink }) => {
  const variantStyle = getVariantStyle(variant)
  const sizeStyle = getSizeStyle(size)

  return (
    <button className={`${style.container} ${variantStyle}`} type='button' tabIndex={-1}>
      <Link className={sizeStyle} href={href} isExternalLink={isExternalLink || false}>
        {children}
      </Link>
    </button>
  )
}
