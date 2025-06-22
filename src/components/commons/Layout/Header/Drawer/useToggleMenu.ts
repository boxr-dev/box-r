import { useEffect, useRef, useState } from 'react'

type ToggleMenu = {
  isOpen: boolean
  isHiddenElement: boolean
  handleMenuBtnClick: () => void
  handleOverlayClick: () => void
}

export const useToggleMenu = (): ToggleMenu => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHiddenElement, setIsHiddenElement] = useState(true)

  const timeoutId = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return function cleanup() {
      clearCurrentTimeout()
    }
  }, [])

  useEffect(() => {
    // メニューが閉じた場合、アニメーション終了後に要素を隠す
    clearCurrentTimeout()
    timeoutId.current = setTimeout(() => {
      timeoutId.current = null
      if (!isOpen) {
        setIsHiddenElement(true)
      }
    }, 300) // CSSで指定したアニメーションが実行される時間に依存
  }, [isOpen])

  const clearCurrentTimeout = () => {
    // マウントされていないコンポーネントをアップデートしようとする可能性を回避する
    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
    }
  }

  const toggleMenu = (open?: boolean) => {
    // アニメーションを適用させるために要素を表示させておく
    setIsHiddenElement(false)

    // メニューがトグルされる前にアニメーションのCSSを適用させる
    setTimeout(() => {
      setIsOpen((prevState) => (typeof open !== 'undefined' ? open : !prevState))
    })
  }

  const handleMenuBtnClick = () => {
    toggleMenu()
  }

  const handleOverlayClick = () => {
    toggleMenu(false)
  }

  return { isOpen, isHiddenElement, handleMenuBtnClick, handleOverlayClick }
}
