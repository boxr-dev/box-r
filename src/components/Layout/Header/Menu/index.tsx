import { Link } from '@/components/Common/Link'

export const Menu: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href={'/about'}>BOX Rについて</Link>
          </li>
          <li>
            <Link href={'/lesson'}>レッスン</Link>
            <ul>
              <li>
                <Link href={'/lesson/chabako'}>インテリア茶箱</Link>
              </li>
              <li>
                <Link href={'/lesson/cartonnage'}>カルトナージュ</Link>
              </li>
              <li>
                <Link href={'/lesson/french-deco'}>フレンチ メゾン デコール</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href={
                'https://calendar.google.com/calendar/u/0/embed?src=a7dctp6ugi964437og5b02hdds@group.calendar.google.com&ctz=Asia/Tokyo'
              }
              isExternalLink
            >
              スケジュール
            </Link>
          </li>
          <li>
            <Link href={'https://ameblo.jp/boxr-chabako'} isExternalLink>
              ブログ
            </Link>
          </li>
          <li>
            <Link href={'https://ssl.form-mailer.jp/fms/2737b864408251'} isExternalLink>
              お問い合わせ
            </Link>
          </li>
          <li>
            <Link href={'/privacy'}>プライバシーポリシー</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
