import Image from 'next/image'
import { FaInstagram, FaCaretRight } from 'react-icons/fa'
import { IconLink } from '@/components/Common/IconLink'
import { TextLink } from '@/components/Common/TextLink'
import style from '@/components/Layout/Header/Menu/Menu.module.scss'

export const Menu: React.FC = () => {
  return (
    <>
      <div className={style.logo}>
        <Image src={'/images/logo/main.png'} alt='BOX R' width={150} height={150} />
      </div>
      <nav className={style.map}>
        <ul className={style['map-list']}>
          <li className={style['map-list-item']}>
            <TextLink href={'/about'}>BOX Rについて</TextLink>
          </li>
          <li className={style['map-list-item']}>
            <TextLink href={'/lesson'}>レッスン</TextLink>
          </li>
          <li className={style['map-list-item']}>
            <TextLink
              href={
                'https://calendar.google.com/calendar/u/0/embed?src=a7dctp6ugi964437og5b02hdds@group.calendar.google.com&ctz=Asia/Tokyo'
              }
              isExternalLink
            >
              スケジュール
            </TextLink>
          </li>
          <li className={style['map-list-item']}>
            <TextLink href={'https://ameblo.jp/boxr-chabako'} isExternalLink>
              ブログ
            </TextLink>
          </li>
          <li className={style['map-list-item']}>
            <TextLink href={'https://ssl.form-mailer.jp/fms/2737b864408251'} isExternalLink>
              お問い合わせ
            </TextLink>
          </li>
        </ul>
      </nav>
      <div className={style.sns}>
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
    </>
  )
}
