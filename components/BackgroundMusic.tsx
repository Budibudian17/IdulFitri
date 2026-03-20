'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { PauseIcon, Volume2Icon } from 'lucide-react'

export default function BackgroundMusic() {
  const pathname = usePathname()
  if (pathname === '/intro') return null

  const START_AT_SECONDS = 20
  const TARGET_VOLUME = 0.35
  const FADE_IN_MS = 1500
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const fadeTimerRef = useRef<number | null>(null)
  const hasAttemptedAutoplayRef = useRef(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.loop = true
    audio.volume = 0

    const seekToMusicStart = () => {
      if (Number.isFinite(audio.duration) && audio.duration > START_AT_SECONDS) {
        if (audio.currentTime < START_AT_SECONDS) {
          audio.currentTime = START_AT_SECONDS
        }
      }
    }

    const onLoadedMetadata = () => {
      seekToMusicStart()
    }

    const onCanPlay = () => {
      seekToMusicStart()
      setIsReady(true)
    }
    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)

    const onTimeUpdate = () => {
      // When looping, some browsers restart at 0. Keep skipping the intro.
      if (!audio.paused && audio.currentTime >= 0 && audio.currentTime < 0.5) {
        seekToMusicStart()
      }
    }

    audio.addEventListener('loadedmetadata', onLoadedMetadata)
    audio.addEventListener('canplay', onCanPlay)
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('timeupdate', onTimeUpdate)

    const tryAutoplayOnFirstInteraction = async () => {
      if (hasAttemptedAutoplayRef.current) return
      hasAttemptedAutoplayRef.current = true

      try {
        if (audio.paused) {
          if (audio.currentTime < START_AT_SECONDS) {
            audio.currentTime = START_AT_SECONDS
          }
          audio.volume = 0
          await audio.play()
          fadeIn(audio)
        }
      } catch {
        // If the browser blocks it even with interaction, user can still press the button.
      }
    }

    window.addEventListener('pointerdown', tryAutoplayOnFirstInteraction, { once: true })
    window.addEventListener('keydown', tryAutoplayOnFirstInteraction, { once: true })

    return () => {
      if (fadeTimerRef.current) window.clearInterval(fadeTimerRef.current)
      audio.removeEventListener('loadedmetadata', onLoadedMetadata)
      audio.removeEventListener('canplay', onCanPlay)
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('timeupdate', onTimeUpdate)
      window.removeEventListener('pointerdown', tryAutoplayOnFirstInteraction)
      window.removeEventListener('keydown', tryAutoplayOnFirstInteraction)
    }
  }, [])

  const fadeIn = (audio: HTMLAudioElement) => {
    if (fadeTimerRef.current) window.clearInterval(fadeTimerRef.current)

    const steps = 20
    const stepMs = Math.max(25, Math.floor(FADE_IN_MS / steps))
    const stepVolume = TARGET_VOLUME / steps

    fadeTimerRef.current = window.setInterval(() => {
      if (audio.paused) {
        if (fadeTimerRef.current) window.clearInterval(fadeTimerRef.current)
        fadeTimerRef.current = null
        return
      }

      const next = Math.min(TARGET_VOLUME, (audio.volume || 0) + stepVolume)
      audio.volume = next

      if (next >= TARGET_VOLUME - 0.001) {
        if (fadeTimerRef.current) window.clearInterval(fadeTimerRef.current)
        fadeTimerRef.current = null
      }
    }, stepMs)
  }

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      if (audio.paused) {
        if (audio.currentTime < START_AT_SECONDS) {
          audio.currentTime = START_AT_SECONDS
        }
        audio.volume = 0
        await audio.play()
        fadeIn(audio)
      } else {
        audio.pause()
      }
    } catch {
      setIsPlaying(false)
    }
  }

  return (
    <>
      <audio ref={audioRef} preload="auto">
        <source src="/audio/idulfitri.m4a" type="audio/mp4" />
      </audio>

      <div className="fixed bottom-4 right-4 z-50">
        <Button
          type="button"
          variant="secondary"
          onClick={toggle}
          disabled={!isReady}
          className="h-10 w-10 rounded-full p-0"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
          title={isReady ? (isPlaying ? 'Pause' : 'Play') : 'Loading audio...'}
        >
          {isPlaying ? <PauseIcon className="h-4 w-4" /> : <Volume2Icon className="h-4 w-4" />}
        </Button>
      </div>
    </>
  )
}
