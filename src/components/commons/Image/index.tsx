import NextImage, { ImageProps } from 'next/image'
import { ReactEventHandler } from 'react'
import style from '@/components/commons/Image/Image.module.scss'

export const Image: React.FC<ImageProps> = (props) => {
  const onLoad: ReactEventHandler<HTMLImageElement> = (e) => {
    if (e.currentTarget.srcset) {
      e.currentTarget.dataset.load = 'done'
    }
  }

  return (
    <div className={style.container}>
      <NextImage {...props} onLoad={onLoad} fill />
    </div>
  )
}
