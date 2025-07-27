import Parser from 'rss-parser'

type BlogItem = {
  title: string
  link: string
  pubDate: string
}

const AMEBLO_RSS_URL = process.env.NEXT_PUBLIC_AMEBLO_RSS_URL || ''

export const fetchAmebloPosts = async (count: number): Promise<BlogItem[]> => {
  const parser = new Parser()
  const feed = await parser.parseURL(AMEBLO_RSS_URL)
  // 最大10件まで取得
  return feed.items.slice(0, Math.min(count, 10)).map((item) => ({
    title: item.title ?? '',
    link: item.link ?? '',
    pubDate: item.pubDate ?? '',
  }))
}
