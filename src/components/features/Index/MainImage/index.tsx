import { useEffect, useState } from 'react'
import style from './MainImage.module.scss'
import { Image } from '@/components/commons/Image'

export const MainImage: React.FC = () => {
  const images = ['main-1.jpg', 'main-2.jpg', 'main-3.jpg', 'main-4.jpg', 'main-5.jpg', 'main-6.jpg']
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className={style.container}>
      {images.map((image: string, index: number) => (
        <div key={index} className={index === currentImageIndex ? style.image : style.hidden}>
          <Image src={`/images/top/${image}`} alt={`ブランドイメージ ${index + 1}`} />
        </div>
      ))}
    </div>
  )
}
