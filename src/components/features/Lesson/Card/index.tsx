import { PropsWithChildren } from 'react'
import style from './Card.module.scss'
import { Link } from '@/components/commons/Link'
import { BottonLink } from '@/components/commons/Link/BottonLink'
import { CardContent } from '@/components/features/Lesson/Card/CardContent'
import { CardMedia } from '@/components/features/Lesson/Card/CardMedia'

type Image = {
  src: string
  alt: string
}

type Props = PropsWithChildren<{
  image: Image
  title: string
  description: string
  href: string
  isExternalLink?: boolean
}>

export const Card: React.FC<Props> = ({ image, title, description, href, isExternalLink }) => {
  return (
    <div className={style.container}>
      <Link className={style.link} href={href} isExternalLink={isExternalLink || false}>
        <CardMedia src={image.src} alt={image.alt} />
        <CardContent headline={title} supportingText={description} />
      </Link>
      <div className={style['button-wrapper']}>
        <BottonLink href={href} variant='text' size='small'>
          もっと見る
        </BottonLink>
      </div>
    </div>
  )
}
