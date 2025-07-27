import style from './CardContent.module.scss'

type Props = {
  headline: string
  supportingText: string
}

export const CardContent: React.FC<Props> = ({ headline, supportingText }) => {
  return (
    <div className={style.container}>
      <span className={style.primary}>{headline}</span>
      <p className={style.secondary}>{supportingText}</p>
    </div>
  )
}
