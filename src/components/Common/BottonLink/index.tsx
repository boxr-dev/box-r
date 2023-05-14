import Link from 'next/link'
import { PropsWithChildren } from 'react'
import style from '@/components/Common/BottonLink/BottonLink.module.scss'

type Prop = PropsWithChildren & {
  href: string
}

export const BottonLink: React.FC<Prop> = ({ children, href }) => {
  return (
    <button className={style.container} type='button' tabIndex={-1}>
      <Link className={style.link} href={href}>
        {children}
      </Link>
    </button>
  )
}
