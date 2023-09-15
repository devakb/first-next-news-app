import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'News App | Amit Kumar Biswas | akbdeveloper01@gmail.com',
  description: 'My first news application using react and next js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} mb-20`}>{children}</body>
    </html>
  )
}
