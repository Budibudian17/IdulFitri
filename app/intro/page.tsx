'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import QuoteCarousel from '@/components/QuoteCarousel'
import { ArrowRight } from 'lucide-react'

export default function IntroPage() {
  const router = useRouter()
  const [isReady, setIsReady] = useState(false)
  const [hasVisited, setHasVisited] = useState(false)

  useEffect(() => {
    setIsReady(true)
    const visited = localStorage.getItem('visitedIntro')
    if (visited) {
      setHasVisited(true)
    }
  }, [])

  const handleEnter = () => {
    localStorage.setItem('visitedIntro', 'true')
    router.push('/')
  }

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="fixed inset-0 -z-10">
        {/* Top left accent */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/3 to-transparent rounded-full blur-3xl" />
        {/* Bottom right accent */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-secondary/3 to-transparent rounded-full blur-3xl" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-4">
        {/* Quote Carousel Section */}
        <div className={`transition-all duration-1000 ${
          isReady ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <QuoteCarousel />
        </div>

        {/* Enter Button Section */}
        <div className={`flex flex-col items-center gap-6 mt-16 md:mt-20 transition-all duration-1000 delay-500 ${
          isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={handleEnter}
            className="group relative px-8 md:px-12 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full font-light text-lg tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            <span className="flex items-center gap-2">
              Masuk Ke Halaman Utama
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>

          {/* Skip message if already visited */}
          {hasVisited && (
            <p className="text-sm text-muted-foreground">
              Anda sudah pernah mengunjungi sebelumnya
            </p>
          )}

          {/* Scroll indicator */}
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground mb-2 opacity-60">
              atau gulir untuk melihat lebih banyak ucapan
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Islamic pattern elements */}
      <div className="fixed bottom-8 left-8 text-4xl opacity-5">✨</div>
      <div className="fixed top-8 right-8 text-4xl opacity-5">🌙</div>
    </main>
  )
}
