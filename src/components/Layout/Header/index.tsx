import Link from 'next/link'
import { MdMenu } from 'react-icons/md'
import style from '@/components/Layout/Header/Header.module.scss'
import { NavItem } from '@/components/Layout/Header/NavItem'
import TitleImage from 'public/images/logo/title.svg'

export const Header: React.FC = () => {
  return (
    <header className={style.container}>
      <div className={style.inner}>
        <div className={style.menu}>
          <MdMenu size={24} />
        </div>
        <h1 className={style.logo}>
          <Link href={'/'}>
            <TitleImage role='img' aria-label='BOX R' />
          </Link>
        </h1>
        <nav className={style.navi}>
          <ul>
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
