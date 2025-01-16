import { useEffect, useState } from 'react'
import { Image } from '@/components/commons/Image'
import style from '@/components/features/Index/Index.module.scss'

export const Index: React.FC = () => {
  const images = ['main-1.jpg', 'main-2.jpg', 'main-3.jpg', 'main-4.jpg', 'main-5.jpg', 'main-6.jpg']

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 7000)
    return () => clearInterval(timer)
  })

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
