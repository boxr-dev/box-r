import { Image } from '@/components/commons/Image'
import style from '@/components/features/Lesson/ListItemImage/ListItemImage.module.scss'

type Props = {
  src: string
  alt: string
}

export const ListItemImage: React.FC<Props> = ({ src, alt }) => {
  return (
    <div className={style.container}>
      <Image src={src} alt={alt} width={88} height={88} loading='lazy' />
    </div>
  )
}
