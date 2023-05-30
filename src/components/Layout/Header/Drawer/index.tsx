import { PropsWithChildren } from 'react'
import { MdMenu, MdOutlineClose } from 'react-icons/md'
import style from '@/components/Layout/Header/Drawer/Drawer.module.scss'
import { useToggleMenu } from '@/components/Layout/Header/Drawer/useToggleMenu'

export const Drawer: React.FC<PropsWithChildren> = ({ children }) => {
  const { isOpen, isHiddenElement, open, close, handleOverlayClick } = useToggleMenu()

  return (
    <>
      <div
        className={style.overlay}
        onClick={handleOverlayClick}
        aria-hidden={!isOpen}
        {...(isHiddenElement && { hidden: true })}
      />
      <div className={style['menu-btn']}>
        <div onClick={open}>
          <MdMenu size={24} role='img' aria-label='メニュー' />
        </div>
      </div>
      <div className={style['menu-wrap']} aria-hidden={!isOpen} {...(isHiddenElement && { hidden: true })}>
        <div className={style.menu}>
          <div className={style.content}>{children}</div>
        </div>
        <div className={style['close-btn']}>
          <div onClick={close} {...(!isOpen && { tabIndex: -1 })}>
            <MdOutlineClose size={24} role='img' aria-label='閉じる' />
          </div>
        </div>
      </div>
    </>
  )
}
