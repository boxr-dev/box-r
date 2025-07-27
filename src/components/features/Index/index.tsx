import { BsChevronDoubleDown } from 'react-icons/bs'
import { MainImage } from './MainImage'
import { BottonLink } from '@/components/commons/Link/BottonLink'
import { TextButtonLink } from '@/components/commons/Link/TextButtonLink'
import { List } from '@/components/commons/List'
import { ListItem } from '@/components/commons/ListItem'
import { Paragraph } from '@/components/commons/Paragraph'
import { SectionTitle } from '@/components/commons/SectionTitle'
import style from '@/components/features/Index/Index.module.scss'

type BlogItem = {
  title: string
  link: string
  pubDate: Date
}

type Props = {
  posts: BlogItem[]
}

export const Index: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <div className={style.main}>
        <MainImage />
        <div className={style['scroll-mark']}>
          <span className={style['scroll-text']}>Scroll</span>
          <BsChevronDoubleDown />
        </div>
      </div>
      <div className={style.container}>
        <section className={style.section}>
          <SectionTitle title='BOX Rについて' subTitle='About' />
          <Paragraph>BOX R は、カルトナージュとインテリア茶箱のアトリエです。</Paragraph>
          <Paragraph>インテリアに馴染みつつも存在感のある作品作りを心がけております。</Paragraph>
          <Paragraph>
            レッスンでは、楽しんでいただくことをコンセプトに皆様のエッセンスの入った作品作りのお手伝いをさせていただきます。
          </Paragraph>
          <Paragraph>
            お教室で生まれた作品が皆様の日常を幸せにし、その作品をどなたかに差し上げる事で幸せが広がって欲しいと願っております。
          </Paragraph>
          <div className={style.link}>
            <BottonLink href='/about' variant='outlined'>
              もっと見る
            </BottonLink>
          </div>
        </section>
        <section className={style.section}>
          <SectionTitle title='お知らせ' subTitle='Information' />
          <List>
            {posts.map((post, index) => (
              <ListItem key={index}>
                <TextButtonLink href={post.link} isExternalLink>
                  <p className={style['post-title']}>{post.title}</p>
                  <p className={style['post-date']}>{post.pubDate.toLocaleDateString()}</p>
                </TextButtonLink>
              </ListItem>
            ))}
          </List>
          <div className={style.link}>
            <BottonLink href='https://ameblo.jp/boxr-chabako/entrylist.html' variant='outlined' isExternalLink>
              もっと見る
            </BottonLink>
          </div>
        </section>
        <section className={style.section}>
          <SectionTitle title='レッスン' subTitle='Lesson' />
          <Paragraph>
            楽しんでいただくことをコンセプトに皆様のエッセンスの入った作品作りのお手伝いをさせていただきます。
          </Paragraph>
          <Paragraph>
            生地を選ぶ楽しみを感じながら、自分のアイデアを形にし、欲しいものが少しずつ出来上がっていく過程をお楽しみください。
            迷ったときや不安な点があれば、お気軽にお声掛けください。創造力を発揮し、一緒に楽しい時間を過ごしましょう。
          </Paragraph>
          <div className={style.link}>
            <BottonLink href='/lesson' variant='outlined'>
              もっと見る
            </BottonLink>
          </div>
        </section>
        <section className={style.section}>
          <SectionTitle title='お問い合わせ' subTitle='Contact' />
          <Paragraph>作品に関するお問い合わせ・レッスンのご相談はこちらからお願いします。</Paragraph>
          <div className={style.link}>
            <BottonLink href='https://ssl.form-mailer.jp/fms/2737b864408251' variant='contained' isExternalLink>
              お問い合わせはこちら
            </BottonLink>
          </div>
        </section>
      </div>
    </>
  )
}
