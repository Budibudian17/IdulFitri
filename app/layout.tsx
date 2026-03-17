import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ucapan Idul Fitri 1447 Hijriah',
  description: 'Ucapan Idul Fitri 1447 Hijriah bersama keluarga dengan countdown timer, galeri foto, dan guestbook interaktif.',
  generator: 'v0.app',
  keywords: 'Idul Fitri, 1447 Hijriah, Eid Mubarak, keluarga, ucapan',
  openGraph: {
    title: 'Ucapan Idul Fitri 1447 Hijriah',
    description: 'Rayakan Idul Fitri bersama keluarga dengan cara yang spesial',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
