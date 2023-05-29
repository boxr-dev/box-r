import Image from 'next/image'
import { FaInstagram, FaCaretRight } from 'react-icons/fa'
import { IconLink } from '@/components/Common/IconLink'
import { TextLink } from '@/components/Common/TextLink'
import style from '@/components/Layout/Footer/Footer.module.scss'

export const Footer: React.FC = () => {
  return (
    <footer className={style.container}>
      <div className={style['container-inner']}>
        <div className={style.logo}>
          <Image src={'/images/logo/main.png'} alt='BOX R' width={200} height={200} />
        </div>
        <nav className={style.nav}>
          <ul className={style['nav-list']}>
            <li className={style['nav-list-item']}>
              <TextLink href={'/about'}>BOX Rについて</TextLink>
            </li>
            <li className={style['nav-list-item']}>
              <TextLink href={'/lesson'}>レッスン</TextLink>
              <ul className={style['nav-child-list']}>
                <li className={style['nav-child-list-item']}>
                  <TextLink href={'/lesson/chabako'}>インテリア茶箱</TextLink>
                </li>
                <li className={style['nav-child-list-item']}>
                  <TextLink href={'/lesson/cartonnage'}>カルトナージュ</TextLink>
                </li>
                <li className={style['nav-child-list-item']}>
                  <TextLink href={'/lesson/french-deco'}>フレンチ メゾン デコール</TextLink>
                </li>
              </ul>
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
              <span className={style['caret-icon']}>
                <FaCaretRight />
              </span>
              <div className={style['instagram-icon']}>
                <IconLink href={'https://www.instagram.com/boxr_rieko'} isExternalLink>
                  <FaInstagram role='img' aria-label='Instagram' />
                </IconLink>
              </div>
            </div>
          </div>
          <div className={style['copy-right']}>
            <div className={style['copy-right-text']}>
              <span>© 2023 BOX R</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
