import { PropsWithChildren } from 'react'
import style from '@/components/Layout/Header/Drawer/Drawer.module.scss'
import { useToggleMenu } from '@/components/Layout/Header/Drawer/useToggleMenu'

export const Drawer: React.FC<PropsWithChildren> = ({ children }) => {
  const { isOpen, isHiddenElement, handleMenuBtnClick, handleOverlayClick } = useToggleMenu()

  return (
    <>
      <div className={style['menu-btn-wrap']}>
        <button className={style['menu-btn']} onClick={handleMenuBtnClick} aria-pressed={isOpen}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={style['menu-wrap']} aria-hidden={!isOpen} {...(isHiddenElement && { hidden: true })}>
        <div className={style.menu}>
          <div className={style.content}>{children}</div>
        </div>
      </div>
      <div
        className={style.overlay}
        onClick={handleOverlayClick}
        aria-hidden={!isOpen}
        {...(isHiddenElement && { hidden: true })}
      />
    </>
  )
}
