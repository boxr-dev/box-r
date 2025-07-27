import style from './CardMedia.module.scss'
import { Image } from '@/components/commons/Image'

type Props = {
  src: string
  alt: string
}

export const CardMedia: React.FC<Props> = ({ src, alt }) => {
  return (
    <div className={style.container}>
      <Image src={src} alt={alt} fill loading='lazy' />
    </div>
  )
}
