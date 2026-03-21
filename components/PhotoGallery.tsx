'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface GalleryImage {
  id: number
  src: string
  alt: string
}

const sampleImages: GalleryImage[] = Array.from({ length: 9 }, (_, i) => {
  const n = i + 1
  return {
    id: n,
    src: `/img/fam${n}.webp`,
    alt: `Gallery Keluarga ${n}`,
  }
}).reverse()

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [showAll, setShowAll] = useState(false)

  const collapsedMaxHeightClass = 'max-h-[38rem]'

  return (
    <div>
      {/* Gallery grid */}
      <div
        className={`relative ${showAll ? '' : `${collapsedMaxHeightClass} overflow-hidden`} transition-[max-height] duration-500 ease-in-out`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-max">
          {sampleImages.map((image) => (
            <button
              key={image.id}
              type="button"
              className="group relative w-full overflow-hidden rounded-lg cursor-pointer aspect-square"
              onClick={() => setSelectedImage(image)}
            >
              {/* Subtle border */}
              <div className="absolute inset-0 border border-border/20 rounded-lg z-10 pointer-events-none" />

              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/0 via-transparent to-foreground/0 group-hover:from-foreground/20 transition-all duration-300 rounded-lg flex items-end justify-start p-4">
                <span className="text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-light">
                  {image.alt}
                </span>
              </div>
            </button>
          ))}
        </div>

        {!showAll && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-background" />
        )}
      </div>

      {!showAll && (
        <div className="pt-8 flex justify-center">
          <Button variant="outline" onClick={() => setShowAll(true)} className="font-light">
            See more
          </Button>
        </div>
      )}

      {/* Lightbox modal */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={(open: boolean) => {
          if (!open) setSelectedImage(null)
        }}
      >
        <DialogContent
          showCloseButton={false}
          className="p-0 overflow-hidden w-[90vw] max-w-md sm:max-w-lg md:max-w-xl aspect-[4/3] max-h-[70vh]"
        >
          <DialogHeader className="sr-only">
            <DialogTitle>Preview Foto</DialogTitle>
          </DialogHeader>
          {selectedImage && (
            <div className="relative w-full h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 z-10 rounded-md bg-black/50 text-white hover:bg-black/60 transition-colors p-2"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
