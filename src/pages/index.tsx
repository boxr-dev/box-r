import type { GetStaticProps, NextPage } from 'next'
import { Layout } from '@/components/commons/Layout'
import { Index } from '@/components/features/Index'
import { fetchAmebloPosts } from '@/lib/ameblo'

type BlogItem = {
  title: string
  link: string
  pubDate: string
}

type Props = {
  posts: BlogItem[]
}

const IndexPage: NextPage<Props> = ({ posts }) => {
  return (
    <Layout
      title={'BOX R | カルトナージュ・インテリア茶箱'}
      description={
        'BOX R は、カルトナージュとインテリア茶箱のアトリエです。インテリアに馴染みつつも存在感のある作品作りを心がけております。'
      }
    >
      <Index
        posts={posts.map((post) => {
          return {
            ...post,
            pubDate: new Date(post.pubDate),
          }
        })}
      />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await fetchAmebloPosts(3)
  return {
    props: { posts },
    revalidate: 3600, // 1時間での更新
  }
}

export default IndexPage
