import { PropsWithChildren } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { MdMenu, MdOutlineClose } from 'react-icons/md'
import { style } from '@/components/Layout/Header/ReactBurgerMenu/style'

export const ReactBurgerMenu: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Menu
      customBurgerIcon={<MdMenu size={24} />}
      customCrossIcon={<MdOutlineClose size={24} />}
      styles={style}
      itemListElement='div'
    >
      {children}
    </Menu>
  )
}
