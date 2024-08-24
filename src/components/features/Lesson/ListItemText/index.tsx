import style from '@/components/features/Lesson/ListItemText/ListItemText.module.scss'

type Props = {
  primary: string
  secondary: string
}

export const ListItemText: React.FC<Props> = ({ primary, secondary }) => {
  return (
    <div className={style.container}>
      <span className={style.primary}>{primary}</span>
      <p className={style.secondary}>{secondary}</p>
    </div>
  )
}
