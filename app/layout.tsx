import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import BackgroundMusic from '@/components/BackgroundMusic'
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
    icon: [{ url: '/img/logoidulfitri.webp', type: 'image/webp' }],
    apple: '/img/logoidulfitri.webp',
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
        <BackgroundMusic />
        <Analytics />
      </body>
    </html>
  )
}
