import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'
import { IconLink } from '../../Link/IconLink'
import { Drawer } from '@/components/commons/Layout/Header/Drawer'
import style from '@/components/commons/Layout/Header/Header.module.scss'
import { Menu } from '@/components/commons/Layout/Header/Menu'
import { NavItem } from '@/components/commons/Layout/Header/NavItem'
import TitleImage from 'public/images/logo/title.svg'

export const Header: React.FC = () => {
  return (
    <>
      <header className={style.container}>
        <div className={style['container-inner']}>
          <div className={style.logo}>
            <Link href={'/'} className={style['logo-link']}>
              <TitleImage role='img' aria-label='BOX R' />
            </Link>
          </div>
          <nav className={style.nav}>
            <ul className={style['nav-list']}>
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
            <div className={style['instagram-icon']}>
              <IconLink href={'https://www.instagram.com/boxr_rieko'} isExternalLink>
                <FaInstagram role='img' aria-label='Instagram' />
              </IconLink>
            </div>
          </nav>
        </div>
      </header>
      <div className={style.drawer}>
        <Drawer>
          <Menu />
        </Drawer>
      </div>
    </>
  )
}
