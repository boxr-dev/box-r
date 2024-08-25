import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaCaretRight } from 'react-icons/fa'
import style from '@/components/commons/Layout/Footer/Footer.module.scss'
import { IconLink } from '@/components/commons/Link/IconLink'
import { TextLink } from '@/components/commons/Link/TextLink'

export const Footer: React.FC = () => {
  return (
    <footer className={style.container}>
      <div className={style['container-inner']}>
        <div className={style.logo}>
          <Link href={'/'}>
            <Image src={'/images/logo/main.png'} alt='BOX R' loading='lazy' width={200} height={200} />
          </Link>
        </div>
        <nav className={style.nav}>
          <ul className={style['nav-list']}>
            <li className={style['nav-list-item']}>
              <TextLink href={'/about'}>BOX Rについて</TextLink>
            </li>
            <li className={style['nav-list-item']}>
              <TextLink href={'/lesson'}>レッスン</TextLink>
            </li>
          </ul>
          <ul className={style['nav-list']}>
            <li className={style['nav-list-item']}>
              <TextLink
                href={
                  'https://calendar.google.com/calendar/u/0/embed?src=a7dctp6ugi964437og5b02hdds@group.calendar.google.com&ctz=Asia/Tokyo'
                }
                isExternalLink
              >
                スケジュール
              </TextLink>
            </li>
            <li className={style['nav-list-item']}>
              <TextLink href={'https://ameblo.jp/boxr-chabako'} isExternalLink>
                ブログ
              </TextLink>
            </li>
            <li className={style['nav-list-item']}>
              <TextLink href={'https://ssl.form-mailer.jp/fms/2737b864408251'} isExternalLink>
                お問い合わせ
              </TextLink>
            </li>
            <li className={style['nav-list-item']}>
              <TextLink href={'/privacy'}>プライバシーポリシー</TextLink>
            </li>
          </ul>
        </nav>
        <div className={style.other}>
          <div className={style.sns}>
            <div className={style['sns-list']}>
              <span className={style['sns-list-text']}>Follow on</span>
              <FaCaretRight />
              <div className={style['instagram-icon']}>
                <IconLink href={'https://www.instagram.com/boxr_rieko'} isExternalLink>
                  <FaInstagram role='img' aria-label='Instagram' />
                </IconLink>
              </div>
            </div>
          </div>
          <div className={style['copy-right']}>
            <div className={style['copy-right-text']}>
              <span>© {new Date().getFullYear()} BOX R</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
