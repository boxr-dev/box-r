import { BottonLink } from '@/components/commons/Link/BottonLink'
import style from '@/components/features/404/NotFound.module.scss'

export const NotFound: React.FC = () => {
  return (
    <main className={style.container}>
      <div className={style.main}>
        <h2 className={style.title}>
          <div className={style['main-title']}>404</div>
          <div className={style['sub-title']}>Page not found</div>
        </h2>
        <div className={style.deiscription}>
          <p>お探しのページは見つかりませんでした。</p>
          <p>こちらのページはすでに削除されたか、もしくはURLが異なる場合があります。</p>
        </div>
      </div>
      <BottonLink href={'/'}>TOPへ戻る</BottonLink>
    </main>
  )
}
