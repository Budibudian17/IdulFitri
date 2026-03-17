'use client'

import { useEffect, useState } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = () => {
      // Idul Fitri 1447 Hijriah (2026) - Jumat, 20 Maret 2026 (WIB)
      const targetDate = new Date('2026-03-20T00:00:00+07:00').getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return false
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
      return true
    }

    let timer: ReturnType<typeof setInterval> | undefined

    const tick = () => {
      const shouldContinue = calculateTimeLeft()
      if (!shouldContinue && timer) clearInterval(timer)
    }

    tick()
    timer = setInterval(tick, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) return null

  const TimeUnit = ({ value, label }: { value: number | string; label: string }) => (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-secondary/8 rounded-lg blur-sm" />
        
        {/* Border */}
        <div className="absolute inset-0 border border-border/40 rounded-lg" />
        
        {/* Content */}
        <div className="relative px-6 md:px-8 py-6 md:py-8 rounded-lg">
          <div className="text-4xl md:text-5xl font-light text-foreground text-center tracking-tight">
            {typeof value === 'number' ? String(value).padStart(2, '0') : value}
          </div>
        </div>
      </div>
      
      <p className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground font-light">
        {label}
      </p>
    </div>
  )

  return (
    <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
      <TimeUnit value={timeLeft.days} label="Hari" />
      <TimeUnit value={timeLeft.hours} label="Jam" />
      <TimeUnit value={timeLeft.minutes} label="Menit" />
      <TimeUnit value={timeLeft.seconds} label="Detik" />
    </div>
  )
}
