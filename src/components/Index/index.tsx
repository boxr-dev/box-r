import { Image } from '@/components/Common/Image'
import style from '@/components/Index/Index.module.scss'

export const Index: React.FC = () => {
  return (
    <div className={style.container}>
      <Image src={'/images/top/main.jpg'} alt='ブランドイメージ' fill />
    </div>
  )
}
