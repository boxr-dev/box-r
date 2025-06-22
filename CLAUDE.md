# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリでコードを操作する際のガイダンスを提供します。

## プロジェクト概要

これは「BOX R」のホームページで、カルトナージュ・インテリア茶箱のブランドに関するサイトです。ブランド概要やレッスン、プライバシーポリシーのページがあります。

## コマンド

### 開発

- `npm run dev` - 開発サーバーを起動
- `npm run build` - 本番用にビルド
- `npm start` - 本番サーバーを起動

### コード品質

- `npm run lint` - srcディレクトリでESLintを実行
- `npm run lint:style` - CSS/SCSSファイルでStylelintを実行
- `npm run format` - Prettierでコードをフォーマット

### Gitフック

- `npm run prepare` - HuskyのGitフックをセットアップ
- `npm run lint-staged` - ステージされたファイルでリントを実行（pre-commitフックで使用）

## アーキテクチャ

### 技術スタック

- **フレームワーク**: Next.js 15 with React 19
- **スタイリング**: SCSS modules with CSS reset
- **TypeScript**: Strict mode enabled
- **パスエイリアス**: `@/*` が `src/*` にマップ
- **SVG処理**: SVGをコンポーネントとして扱うカスタムSVGR webpack設定

### プロジェクト構造

```
src/
├── components/
│   ├── commons/        # 再利用可能なUIコンポーネント（Layout、Linkバリアントなど）
│   └── features/       # ページ固有のコンポーネント（About、Lesson、Indexなど）
├── lib/               # ユーティリティ（Google Analytics設定）
├── pages/             # Next.jsページとAPIルート
├── styles/            # グローバルスタイルとSCSS変数
└── types/             # TypeScript型定義
```

### 主要パターン

- **コンポーネント構造**: 各コンポーネントは`index.tsx`と`.module.scss`を持つ独自のディレクトリ
- **レイアウトシステム**: SEOメタタグ、Header、Footerを含む共有`Layout`コンポーネント
- **スタイリング**: 一貫した命名規則のSCSSモジュール
- **SVG統合**: SVGRを通じてReactコンポーネントとしてSVGをインポート
- **Google Analytics**: カスタムgtagユーティリティと統合

### 環境

- **Nodeバージョン**: 22.16.0（Voltaで管理）
- **パッケージマネージャー**: npm（Node.js内蔵）
- **静的画像**: カスタムSVG処理を優先して無効化

### 開発メモ

- lint-stagedを使用したpre-commitの品質チェック用Huskyを使用
- パスマッピングを含む厳密なTypeScript設定
- カスタムSVG型定義をサポートするため画像最適化を無効化
- 一部の設定ファイルに日本語コメント
