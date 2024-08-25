import style from '@/components/commons/SectionTitle/SectionTitle.module.scss'

type Props = {
  title: string
  subTitle?: string
}

export const SectionTitle: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{title}</h2>
      {subTitle && <span className={style['sub-title']}>{subTitle}</span>}
    </div>
  )
}
