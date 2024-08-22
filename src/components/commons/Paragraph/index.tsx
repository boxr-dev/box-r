import { PropsWithChildren } from 'react'
import style from '@/components/commons/Paragraph/Paragraph.module.scss'

export const Paragraph: React.FC<PropsWithChildren> = ({ children }) => {
  return <p className={style.container}>{children}</p>
}
