import { NextResponse } from 'next/server'

export function middleware() {
  // ベーシック認証をつけたいときに使う
  return NextResponse.next()
}
