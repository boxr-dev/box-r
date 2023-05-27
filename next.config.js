/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.tsx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true, // 画像が欠けちゃうようになったら無効にする
          },
        },
      ],
    })
    return config
  },
  images: {
    disableStaticImages: true, // 自前のSVGの型定義を有効化するため
  },
}

module.exports = nextConfig
