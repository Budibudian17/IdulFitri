'use client'

import { useState, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'

const quotes = [
  {
    text: 'Selamat Hari Raya Idul Fitri',
    subtitle: '1447 Hijriah',
    arabic: 'كل عام وأنتم بألف خير',
  },
  {
    text: 'Taqabbalallahu Minna wa Minkum',
    subtitle: 'Semoga Allah menerima dari kita dan kalian',
    arabic: 'تقبل الله منا ومنكم',
  },
  {
    text: 'Mohon Maaf Lahir dan Batin',
    subtitle: 'Mari saling memaafkan dengan sepenuh hati',
    arabic: 'أعاده الله عليكم بالخير والبركة',
  },
  {
    text: 'Semoga Berkah Idul Fitri',
    subtitle: 'Membawa kebaikan untuk kita semua',
    arabic: 'كل عام وأنتم أقرب إلى أحلامكم',
  },
  {
    text: 'Berkumpul Bersama Keluarga',
    subtitle: 'Adalah berkah terbesar di hari istimewa ini',
    arabic: 'الأسرة هي أساس المجتمع',
  },
]

export default function QuoteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % quotes.length)
        setIsTransitioning(false)
      }, 500)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const handleNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length)
      setIsTransitioning(false)
    }, 500)
  }

  const currentQuote = quotes[currentIndex]

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {/* Main Quote Container */}
      <div className="relative w-full max-w-3xl px-6 py-12">
        {/* Animated background gradient */}
        <div className="absolute inset-0 -z-10">
          <div
            className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl transition-opacity duration-500 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>

        {/* Quote Text */}
        <div
          className={`text-center transition-all duration-500 ${
            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          {/* Arabic Text */}
          <p className="text-2xl md:text-3xl text-primary/60 font-light mb-6 tracking-wider">
            {currentQuote.arabic}
          </p>

          {/* Main Quote */}
          <h2 className="text-5xl md:text-7xl font-light text-foreground mb-4 leading-tight">
            {currentQuote.text}
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
            {currentQuote.subtitle}
          </p>
        </div>
      </div>

      {/* Quote Indicators */}
      <div className="flex gap-2 mt-8 justify-center">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true)
              setTimeout(() => {
                setCurrentIndex(index)
                setIsTransitioning(false)
              }, 500)
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-primary'
                : 'w-2 bg-primary/30 hover:bg-primary/50'
            }`}
            aria-label={`Go to quote ${index + 1}`}
          />
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
        aria-label="Next quote"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}
