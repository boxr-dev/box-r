import { useEffect, useRef, useState } from 'react'

type ToggleMenu = {
  isOpen: boolean
  isHiddenElement: boolean
  open: () => void
  close: () => void
  handleOverlayClick: () => void
}

export const useToggleMenu = (): ToggleMenu => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHiddenElement, setIsHiddenElement] = useState(true)

  const timeoutId = useRef<NodeJS.Timeout | null>()

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

  const toggleMenu = () => {
    // アニメーションを適用させるために要素を表示させておく
    setIsHiddenElement(false)

    // メニューがトグルされる前にアニメーションのCSSを適用させる
    setTimeout(() => {
      setIsOpen((prevState) => !prevState)
    })
  }

  const open = () => {
    toggleMenu()
  }

  const close = () => {
    toggleMenu()
  }

  const handleOverlayClick = () => {
    close()
  }

  return { isOpen, isHiddenElement, open, close, handleOverlayClick }
}
