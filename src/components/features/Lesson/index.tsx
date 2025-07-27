import { List } from './List'
import { ListItemButton } from './ListItemButton'
import { ListItemCard } from './ListItemCard'
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
        <Paragraph>楽しんでいただくことをコンセプトに皆様のエッセンスの入った作品作りのお手伝いをさせていただきます。</Paragraph>
        <Paragraph>
          生地を選ぶ楽しみを感じながら、自分のアイデアを形にし、欲しいものが少しずつ出来上がっていく過程をお楽しみください。
          迷ったときや不安な点があれば、お気軽にお声掛けください。創造力を発揮し、一緒に楽しい時間を過ごしましょう。
        </Paragraph>
      </section>
      <section className={style.section}>
        <SectionTitle title='カルトナージュ' subTitle='Cartonnage' />
        <div className={style.discription}>
          <Paragraph>
            カルトナージュとは、
            カルトン(厚紙)を好みの形にカットし、組み立て、お気に入りのファブリックや革、ペーパーなどを使用して自分だけの作品に仕上げる物です。
          </Paragraph>
          <Paragraph>
            こんな大きさで、こんな形のものが欲しかった。欲しいをカスタマイズできるのが魅力です。
            作って楽しく、使って幸せになるカルトナージュの世界を是非お楽しみ下さい。
          </Paragraph>
        </div>
        <div>
          <ContentTitle>単発レッスン</ContentTitle>
          <List>
            <ListItemButton href='/lesson/cartonnage/one-shot'>
              <ListItemImage src='/images/lesson/cartonnage.jpg' alt='カルトナージュの作品' />
              <ListItemText primary='単発レッスン' secondary='スキルに合わせてご希望の作品を制作します。' />
            </ListItemButton>
          </List>
        </div>
        <div>
          <ContentTitle>コースレッスン</ContentTitle>
          <List>
            <ListItemButton href='/lesson/cartonnage/license'>
              <ListItemImage src='/images/lesson/license.jpg' alt='ライセンスコースの作品' />
              <ListItemText
                primary='ライセンスコース'
                secondary='基本の 10 作品 + オリジナル作品を制作して、ライセンスが取得できるコースです。取得後、ディプロマコースにお進みいただけます。'
              />
            </ListItemButton>
            <ListItemButton href='/lesson/cartonnage/diploma'>
              <ListItemImage src='/images/lesson/diploma.jpg' alt='ディプロマコースの作品' />
              <ListItemText
                primary='ディプロマコース'
                secondary='16 作品 + オリジナル作品を制作して、ディプロマが取得できるコースです。取得後、申請すると BOX R 認定教室となります。'
              />
            </ListItemButton>
            <ListItemButton href='/lesson/cartonnage/french-maison-decor'>
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
          <Paragraph>
            インテリア茶箱とは、茶葉を大切に保管し、防虫・防湿効果のある茶箱に布や革などを使用して家具に仕立てた物です。
          </Paragraph>
          <Paragraph>
            インテリアとして美しく、かつ実用性も高いのが魅力です。
            好みの大きさ、お気入りのファブリックで理想的な収納家具を作ってみませんか？
          </Paragraph>
        </div>
        <div>
          <ContentTitle>単発レッスン</ContentTitle>
          <List>
            <ListItemButton href='/lesson/interior-chabako/one-shot'>
              <ListItemImage src='/images/lesson/interior-chabako.jpg' alt='インテリア茶箱の作品' />
              <ListItemText primary='単発レッスン' secondary='ご希望のサイズのインテリア茶箱を制作します。' />
            </ListItemButton>
          </List>
        </div>
      </section>
      <section className={style.section}>
        <SectionTitle title='その他' subTitle='Others' />
        <div>
          <ContentTitle>単発レッスン</ContentTitle>
          <List>
            <ListItemButton href='/lesson/mini-chabako'>
              <ListItemImage src='/images/lesson/mini-chabako.jpg' alt='インテリア茶箱の作品' />
              <ListItemText
                primary='ミニ茶箱'
                secondary='手のひらサイズの茶箱の形をした桐箱を使用し、カルトナージュの技法で制作します。'
              />
            </ListItemButton>
            <ListItemButton href='/lesson/ironing-board'>
              <ListItemImage src='/images/lesson/ironing-board.jpg' alt='インテリア茶箱の作品' />
              <ListItemText primary='アイロン台' secondary='タッカーを使用し、インテリア雑貨のようなアイロン台を制作します。' />
            </ListItemButton>
            <ListItemCard href='/lesson/8'>
              <ListItemImage src='/images/lesson/glue-bag.jpg' alt='インテリア茶箱の作品' />
              <ListItemText primary='グルーバッグ' secondary='縫わずにグルーで仕上げるハンドメイドバッグを制作します。' />
            </ListItemCard>
            <ListItemCard href='/lesson/9'>
              <ListItemImage src='/images/lesson/tassel.jpg' alt='インテリア茶箱の作品' />
              <ListItemText
                primary='タッセル（APJ）'
                secondary='カルトナージュやインテリア茶箱に欠かせないタッセルを制作します。'
              />
            </ListItemCard>
          </List>
        </div>
      </section>
    </div>
  )
}
