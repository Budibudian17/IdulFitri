'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface GuestbookEntry {
  id: string
  name: string
  family: string
  message: string
  created_at: string
}

export default function GuestbookForm() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([])
  const [name, setName] = useState('')
  const [family, setFamily] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const loadEntries = async () => {
      try {
        const response = await fetch('/api/guestbook', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        
        if (response.ok) {
          const data = await response.json()
          setEntries(data || [])
        } else {
          console.log('[v0] Guestbook API returned status:', response.status)
          setEntries([])
        }
      } catch (err) {
        console.log('[v0] Failed to load entries:', err)
        // Silently fail - the form will still work
        setEntries([])
      }
    }

    // Load entries after component mounts
    const timer = setTimeout(loadEntries, 100)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const response = await fetch('/api/guestbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, family, message }),
      })

      if (!response.ok) {
        try {
          const data = await response.json()
          throw new Error(data.error || 'Gagal mengirim pesan')
        } catch {
          throw new Error('Gagal mengirim pesan. Silakan coba lagi.')
        }
      }

      const newEntry = await response.json()
      setEntries([newEntry, ...entries])
      setName('')
      setFamily('')
      setMessage('')
      setSuccess(true)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Terjadi kesalahan saat mengirim pesan'
      setError(errorMessage)
      console.log('[v0] Form submission error:', errorMessage)
    } finally {
      setLoading(false)
    }
  }



  return (
    <div className="space-y-12">
      {/* Form Section */}
      <div className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Input */}
          <div className="group relative">
            <Input
              type="text"
              placeholder="Nama Anda"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-card/50 border border-border/30 rounded-lg font-light px-4 py-3 placeholder:text-muted-foreground/40 focus:bg-card focus:border-primary/40 focus:ring-1 focus:ring-primary/30 transition-all hover:border-border/50"
            />
          </div>

          {/* Family Input */}
          <div className="group relative">
            <Input
              type="text"
              placeholder="Dari keluarga mana"
              value={family}
              onChange={(e) => setFamily(e.target.value)}
              required
              className="w-full bg-card/50 border border-border/30 rounded-lg font-light px-4 py-3 placeholder:text-muted-foreground/40 focus:bg-card focus:border-primary/40 focus:ring-1 focus:ring-primary/30 transition-all hover:border-border/50"
            />
          </div>

          {/* Message Textarea */}
          <div className="group relative">
            <textarea
              placeholder="Tulis ucapan Idul Fitri Anda..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-border/30 bg-card/50 font-light placeholder:text-muted-foreground/40 resize-none focus:outline-none focus:ring-1 focus:ring-primary/30 focus:bg-card focus:border-primary/40 transition-all hover:border-border/50"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-destructive/8 border border-destructive/30 text-destructive px-4 py-3 rounded-lg text-sm font-light animate-in fade-in">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-light py-3 rounded-lg transition-all duration-300 disabled:opacity-50 mt-2"
          >
            {loading ? 'Mengirim...' : 'Kirim Ucapan'}
          </Button>
        </form>

        <Dialog open={success} onOpenChange={setSuccess}>
          <DialogContent showCloseButton={false}>
            <DialogHeader>
              <DialogTitle>Terima kasih</DialogTitle>
              <DialogDescription>
                Pesan Anda sudah kami terima.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button onClick={() => setSuccess(false)}>Tutup</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Entries Section */}
      {entries.length > 0 && (
        <div className="space-y-6 pt-8 border-t border-border/30">
          <div>
            <h3 className="text-lg font-light text-foreground mb-2">
              Ucapan dari Keluarga Besar
            </h3>
            <p className="text-sm text-muted-foreground font-light">
              {entries.length} {entries.length === 1 ? 'pesan' : 'pesan'} telah diterima
            </p>
          </div>

          <div className="space-y-3">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="group bg-card border border-border/30 rounded-lg p-4 hover:border-border/60 transition-all duration-300 hover:shadow-sm"
              >
                <div className="flex items-start justify-between mb-3 gap-4">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-light text-foreground text-sm">{entry.name}</h4>
                    <p className="text-xs text-muted-foreground/60 font-light truncate">
                      {entry.family}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground/40 font-light whitespace-nowrap flex-shrink-0">
                    {(() => {
                      const d = new Date(entry.created_at)
                      if (Number.isNaN(d.getTime())) return '-'
                      return d.toLocaleDateString('id-ID', {
                        day: '2-digit',
                        month: 'short',
                      })
                    })()}
                  </span>
                </div>
                <p className="text-foreground/80 text-sm font-light leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                  {entry.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
