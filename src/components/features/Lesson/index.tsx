import { List } from './List'
import { ListItemButton } from './ListItemButton'
import { ListItemImage } from './ListItemImage'
import { ListItemText } from './ListItemText'
import { ContentTitle } from '@/components/commons/ContentTitle'
import { PageTitle } from '@/components/commons/PageTitle'
import { Paragraph } from '@/components/commons/Paragraph'
import { SectionTitle } from '@/components/commons/SectionTitle'
import style from '@/components/features/Lesson/Lesson.module.scss'

export const Lesson: React.FC = () => {
  return (
    <div className={style.container}>
      <PageTitle title='Lesson' subTitle='レッスン' />
      <section className={style.section}>
        <SectionTitle title='カルトナージュ' subTitle='Cartonnage' />
        <div className={style.discription}>
          <Paragraph>TODO: カルトナージュについての説明をいれる</Paragraph>
        </div>
        <div>
          <ContentTitle>単発レッスン</ContentTitle>
          <List>
            <ListItemButton href='/lesson/1'>
              <ListItemImage src='/images/lesson/cartonnage.jpg' alt='カルトナージュの作品' />
              <ListItemText
                primary='単発レッスン（カルトナージュ）'
                secondary='スキルに合わせてご希望の作品を制作して頂きます。'
              />
            </ListItemButton>
          </List>
        </div>
        <div>
          <ContentTitle>コースレッスン</ContentTitle>
          <List>
            <ListItemButton href='/lesson/2'>
              <ListItemImage src='/images/lesson/license.jpg' alt='ライセンスコースの作品' />
              <ListItemText
                primary='ライセンスコース'
                secondary='基本の10作品＋オリジナル作品を制作して、ライセンスが取得できるコースです。取得後、ディプロマコースにお進みいただけます。'
              />
            </ListItemButton>
            <ListItemButton href='/lesson/3'>
              <ListItemImage src='/images/lesson/diploma.jpg' alt='ディプロマコースの作品' />
              <ListItemText
                primary='ディプロマコース'
                secondary='19作品＋オリジナル作品を制作して、ディプロマが取得できるコースです。取得後、申請すると BOX R 認定教室となります。'
              />
            </ListItemButton>
            <ListItemButton href='/lesson/4'>
              <ListItemImage src='/images/lesson/french-maison-decor.jpg' alt='フレンチメゾンデコールの作品' />
              <ListItemText
                primary='フレンチメゾンデコール'
                secondary='カルトナージュを中心にインテリアに関する手工芸を学び、ディプロマが取得できるコースです。'
              />
            </ListItemButton>
          </List>
        </div>
      </section>
      <section className={style.section}>
        <SectionTitle title='インテリア茶箱' subTitle='Interior Chabako' />
        <div className={style.discription}>
          <Paragraph>TODO: インテリア茶箱についての説明をいれる</Paragraph>
        </div>
        <div>
          <ContentTitle>単発レッスン</ContentTitle>
          <List>
            <ListItemButton href='/lesson/5'>
              <ListItemImage src='/images/lesson/interior-chabako.jpg' alt='インテリア茶箱の作品' />
              <ListItemText
                primary='単発レッスン（インテリア茶箱）'
                secondary='スキルに合わせてご希望の作品を制作して頂きます。'
              />
            </ListItemButton>
          </List>
        </div>
      </section>
      <section className={style.section}>
        <SectionTitle title='その他' subTitle='Others' />
        <div className={style.discription}>
          <Paragraph>TODO: それ以外にも色々できることの説明をいれる</Paragraph>
        </div>
        <div>
          <ContentTitle>単発レッスン</ContentTitle>
          <List>
            <ListItemButton href='/lesson/6'>
              <ListItemImage src='/images/lesson/mini-chabako.jpg' alt='インテリア茶箱の作品' />
              <ListItemText
                primary='ミニ茶箱'
                secondary='手のひらサイズの茶箱の形をした桐箱を使用し、カルトナージュの技法で製作します。'
              />
            </ListItemButton>
            <ListItemButton href='/lesson/7'>
              <ListItemImage src='/images/lesson/ironing-board.jpg' alt='インテリア茶箱の作品' />
              <ListItemText
                primary='アイロン台'
                secondary='タッカーを使用し、インテリア雑貨のようなアイロンだいを製作します。ファブリックボードとしてもお使いいただけます。'
              />
            </ListItemButton>
            <ListItemButton href='/lesson/8'>
              <ListItemImage src='/images/lesson/glue-bag.jpg' alt='インテリア茶箱の作品' />
              <ListItemText primary='グルーバッグ' secondary='スキルに合わせてご希望の作品を制作して頂きます。' />
            </ListItemButton>
            <ListItemButton href='/lesson/9'>
              <ListItemImage src='/images/lesson/tassel.jpg' alt='インテリア茶箱の作品' />
              <ListItemText primary='タッセル' secondary='スキルに合わせてご希望の作品を制作して頂きます。' />
            </ListItemButton>
          </List>
        </div>
      </section>
    </div>
  )
}
