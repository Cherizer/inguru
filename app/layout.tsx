
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InGuru',
  description: 'test123',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <style>
        @import url(&apos;https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,500&display=swap&apos;);
        @import url(&apos;https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap&apos;);
      </style>
    </html>
  )
}
