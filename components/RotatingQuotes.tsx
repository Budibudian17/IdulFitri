'use client'

import { useState, useEffect } from 'react'

interface Quote {
  arabic: string
  translation: string
}

const QUOTES: Quote[] = [
  {
    arabic: 'تقبل الله منا ومنكم',
    translation: 'Semoga Allah menerima dari kita dan dari kalian',
  },
  {
    arabic: 'كل عام وأنتم بألف خير',
    translation: 'Setiap tahun kalian dalam keadaan baik',
  },
  {
    arabic: 'اللهم بارك لنا في شهر الخير',
    translation: 'Ya Allah, berkahi kami dalam bulan kebaikan',
  },
  {
    arabic: 'عيد مبارك وكل عام وأنتم أقرب إلى أحلامكم',
    translation: 'Idul Fitri yang berkah, semoga kalian selalu dekat dengan impian',
  },
  {
    arabic: 'في هذا اليوم الجميل، تقبل دعاؤنا',
    translation: 'Di hari indah ini, terima doa kami',
  },
]

export default function RotatingQuotes() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % QUOTES.length)
        setIsVisible(true)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const quote = QUOTES[currentIndex]

  return (
    <div className="w-full space-y-6">
      <div
        className={`transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-3xl md:text-4xl font-light text-primary/80 tracking-wide mb-4 leading-relaxed">
          {quote.arabic}
        </p>
        <p className="text-sm md:text-base text-muted-foreground font-light tracking-wide">
          {quote.translation}
        </p>
      </div>

      {/* Indicator dots */}
      <div className="flex items-center gap-2 pt-4">
        {QUOTES.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? 'w-8 bg-primary/60'
                : 'w-1.5 bg-primary/20'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
