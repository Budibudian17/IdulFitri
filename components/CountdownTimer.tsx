'use client'

import { useEffect, useMemo, useState } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

type DisplayMode = 'pre' | 'confetti' | 'event'

export default function CountdownTimer() {
  const EVENT_DATE_WIB = '2026-03-21'
  const CONFETTI_DURATION_MS = 8000
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)
  const [mode, setMode] = useState<DisplayMode>('pre')
  const [preSeconds, setPreSeconds] = useState(5)

  const confettiPieces = useMemo(() => {
    const colors = ['#22c55e', '#a855f7', '#f59e0b', '#06b6d4', '#ef4444']
    return Array.from({ length: 36 }, (_, i) => {
      const left = (i * 7) % 100
      const delayMs = (i % 12) * 90
      const durationMs = 1200 + (i % 6) * 180
      const size = 6 + (i % 4) * 2
      const rotate = (i * 37) % 360
      const color = colors[i % colors.length]
      return { left, delayMs, durationMs, size, rotate, color }
    })
  }, [])

  useEffect(() => {
    setMounted(true)

    const now = Date.now()
    const wibMs = now + 7 * 60 * 60 * 1000
    const wibDate = new Date(wibMs).toISOString().slice(0, 10)
    const shouldCelebrate = wibDate === EVENT_DATE_WIB

    if (!shouldCelebrate) {
      setMode('event')
      return
    }

    let preTimer: ReturnType<typeof setInterval> | undefined
    preTimer = setInterval(() => {
      setPreSeconds((s) => {
        if (s <= 1) {
          if (preTimer) clearInterval(preTimer)
          setMode('confetti')
          window.setTimeout(() => setMode('event'), CONFETTI_DURATION_MS)
          return 0
        }
        return s - 1
      })
    }, 1000)

    return () => {
      if (preTimer) clearInterval(preTimer)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    if (mode !== 'event') return

    const calculateTimeLeft = () => {
      // Idul Fitri 1447 Hijriah (2026) - Sabtu, 21 Maret 2026 (WIB)
      const targetDate = new Date('2026-03-21T00:00:00+07:00').getTime()
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
  }, [mode, mounted])

  if (!mounted) return null

  const TimeUnit = ({ value, label }: { value: number | string; label: string }) => (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/8 to-secondary/8 rounded-lg blur-sm" />
        
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
    <div className="relative">
      {mode === 'confetti' && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {confettiPieces.map((p, i) => (
            <span
              key={i}
              className="absolute top-0"
              style={{
                left: `${p.left}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                background: p.color,
                transform: `rotate(${p.rotate}deg)`,
                opacity: 0,
                animation: `countdown-confetti ${p.durationMs}ms ease-out ${p.delayMs}ms forwards`,
              }}
            />
          ))}
        </div>
      )}

      <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
        <TimeUnit value={mode === 'pre' ? 0 : timeLeft.days} label="Hari" />
        <TimeUnit value={mode === 'pre' ? 0 : timeLeft.hours} label="Jam" />
        <TimeUnit value={mode === 'pre' ? 0 : timeLeft.minutes} label="Menit" />
        <TimeUnit value={mode === 'pre' ? preSeconds : timeLeft.seconds} label="Detik" />
      </div>

      <style jsx global>{`
        @keyframes countdown-confetti {
          0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(260px) rotate(240deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
