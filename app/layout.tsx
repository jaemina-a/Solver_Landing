import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '와요 랜딩 페이지',
  description: '와요 도입을 위한 랜딩 페이지',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="font-pretendard">{children}</body>
    </html>
  )
}
