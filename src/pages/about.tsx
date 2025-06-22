import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from '@/components/commons/Layout'
import { About } from '@/components/features/About'

const AboutPage: NextPage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: '佐野里江子',
    alternateName: 'Rieko Sano',
    jobTitle: 'カルトナージュ・インテリア茶箱アーティスト',
    url: 'https://boxr.jp/about',
    image: 'https://boxr.jp/images/about/profile.jpg',
    sameAs: ['https://www.instagram.com/boxr_rieko/'],
    description:
      '佐野里江子は、神奈川県横浜市在住のカルトナージュ・インテリア茶箱アーティスト。BOX Rを主宰し、オリジナル作品の制作やレッスンを行っている。',
  }

  return (
    <>
      <Head>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>
      <Layout
        title={'BOX R について | 佐野里江子'}
        description={
          'BOX R は、カルトナージュとインテリア茶箱のアトリエです。インテリアに馴染みつつも存在感のある作品作りを心がけております。'
        }
      >
        <About />
      </Layout>
    </>
  )
}

export default AboutPage
