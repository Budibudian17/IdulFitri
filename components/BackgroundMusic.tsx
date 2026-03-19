'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { PauseIcon, Volume2Icon } from 'lucide-react'

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.loop = true
    audio.volume = 0.35

    const onCanPlay = () => setIsReady(true)
    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)

    audio.addEventListener('canplay', onCanPlay)
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)

    return () => {
      audio.removeEventListener('canplay', onCanPlay)
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
    }
  }, [])

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      if (audio.paused) {
        await audio.play()
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
