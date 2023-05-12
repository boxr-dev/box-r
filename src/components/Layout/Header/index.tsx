import Image from 'next/image'
import Link from 'next/link'
import style from '@/components/Layout/Header/Header.module.css'
import { NavItem } from '@/components/Layout/Header/NavItem'

export const Header: React.FC = () => {
  return (
    <header className={style.container}>
      <div className={style.inner}>
        <div className={style.logo}>
          <Link href={'/'}>
            <Image src={'images/logo/title.svg'} alt='BOX R' width={150} height={64} />
          </Link>
        </div>
        <nav className={style.navi}>
          <ul>
            <NavItem href={'/'}>TOP</NavItem>
            <NavItem href={'/about'}>ABOUT</NavItem>
            <NavItem href={'/lesson'}>LESSON</NavItem>
            <NavItem
              href={
                'https://calendar.google.com/calendar/u/0/embed?src=a7dctp6ugi964437og5b02hdds@group.calendar.google.com&ctz=Asia/Tokyo'
              }
              isExternalLink
            >
              SCHEDULE
            </NavItem>
            <NavItem href={'https://ameblo.jp/boxr-chabako'} isExternalLink>
              BLOG
            </NavItem>
            <NavItem href={'https://ssl.form-mailer.jp/fms/2737b864408251'} isExternalLink>
              CONTACT
            </NavItem>
          </ul>
        </nav>
      </div>
    </header>
  )
}
