import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  // ベーシック認証は本番環境だけで適用させたい
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.next()
  }

  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    if (user === process.env.NEXT_PUBLIC_BASIC_REALM_USER && pwd === process.env.NEXT_PUBLIC_BASIC_REALM_PWD) {
      return NextResponse.next()
    }
  }
  url.pathname = '/api/auth'

  return NextResponse.rewrite(url)
}
