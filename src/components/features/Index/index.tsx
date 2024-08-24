import { Image } from '@/components/commons/Image'
import style from '@/components/features/Index/Index.module.scss'

export const Index: React.FC = () => {
  return (
    <div className={style.container}>
      <Image src={'/images/top/main.jpg'} alt='ブランドイメージ' />
    </div>
  )
}
