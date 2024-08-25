import style from '@/components/commons/PageTitle/PageTitle.module.scss'

type Props = {
  title: string
  subTitle: string
}

export const PageTitle: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <section className={style.container}>
      <h1 className={style.title}>{title}</h1>
      <span className={style['sub-title']}>{subTitle}</span>
    </section>
  )
}
