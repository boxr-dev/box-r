import style from '@/components/404/NotFound.module.scss'
import { BottonLink } from '@/components/Common/BottonLink'

export const NotFound: React.FC = () => {
  return (
    <div className={style.container}>
      <h1 className={style.main}>
        <div className={style['heading-eng']}>404</div>
        <div className={style['not-found']}>Page not found</div>
      </h1>
      <p>お探しのページは見つかりませんでした。</p>
      <p>こちらのページはすでに削除されたか、もしくはURLが異なる場合があります。</p>
      <div className={style.btn}>
        <BottonLink href={'/'}>TOPへ戻る</BottonLink>
      </div>
    </div>
  )
}
