import Image from 'next/image'
import { FaInstagram, FaCaretRight } from 'react-icons/fa'
import { IconLink } from '@/components/Common/IconLink'
import { Link } from '@/components/Common/Link'
import style from '@/components/Layout/Footer/Footer.module.scss'

export const Footer: React.FC = () => {
  return (
    <footer className={style.container}>
      <div className={style.inner}>
        <div className={style.logo}>
          <Image src={'/images/logo/main.png'} alt='BOX R' width={200} height={200} />
        </div>
        <nav className={style.map}>
          <ul className={style['map-list']}>
            <li className={style['map-list-item']}>
              <Link href={'/about'}>BOX Rについて</Link>
            </li>
            <li className={style['map-list-item']}>
              <Link href={'/lesson'}>レッスン</Link>
              <ul className={style['map-child-list']}>
                <li className={style['map-child-list-item']}>
                  <Link href={'/lesson/chabako'}>インテリア茶箱</Link>
                </li>
                <li className={style['map-child-list-item']}>
                  <Link href={'/lesson/cartonnage'}>カルトナージュ</Link>
                </li>
                <li className={style['map-child-list-item']}>
                  <Link href={'/lesson/french-deco'}>フレンチ メゾン デコール</Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className={style['map-list']}>
            <li className={style['map-list-item']}>
              <Link
                href={
                  'https://calendar.google.com/calendar/u/0/embed?src=a7dctp6ugi964437og5b02hdds@group.calendar.google.com&ctz=Asia/Tokyo'
                }
                isExternalLink
              >
                スケジュール
              </Link>
            </li>
            <li className={style['map-list-item']}>
              <Link href={'https://ameblo.jp/boxr-chabako'} isExternalLink>
                ブログ
              </Link>
            </li>
            <li className={style['map-list-item']}>
              <Link href={'https://ssl.form-mailer.jp/fms/2737b864408251'} isExternalLink>
                お問い合わせ
              </Link>
            </li>
            <li className={style['map-list-item']}>
              <Link href={'/privacy'}>プライバシーポリシー</Link>
            </li>
          </ul>
        </nav>
        <div className={style.other}>
          <div className={style['flex-start']}>
            <div className={style['sns-list']}>
              <span className={style['sns-list-text']}>Follow on</span>
              <span className={style.caret}>
                <FaCaretRight />
              </span>
              <div className={style['instagram-icon']}>
                <IconLink href={'https://www.instagram.com/boxr_rieko'} isExternalLink>
                  <FaInstagram />
                </IconLink>
              </div>
            </div>
          </div>
          <div className={style['flex-end']}>
            <div className={style['copy-right']}>
              <span>© 2023 BOX R</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
