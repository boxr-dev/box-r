import { Concept } from './Concept'
import { Profile } from './Profile'
import { PageTitle } from '@/components/commons/PageTitle'
import style from '@/components/features/About/About.module.scss'

export const About: React.FC = () => {
  return (
    <div className={style.container}>
      <PageTitle title='About' subTitle='BOX R について' />
      <Concept />
      <Profile />
    </div>
  )
}
