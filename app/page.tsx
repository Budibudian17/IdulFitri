import CountdownTimer from '@/components/CountdownTimer'
import PhotoGallery from '@/components/PhotoGallery'
import GuestbookForm from '@/components/GuestbookForm'
import ScrollReveal from '@/components/ScrollReveal'
import RotatingQuotes from '@/components/RotatingQuotes'
import Image from 'next/image'

export const metadata = {
  title: 'Ucapan Idul Fitri 1447 Hijriah - Keluarga Bersama',
  description:
    'Halaman ucapan Idul Fitri 1447 Hijriah untuk keluarga, dengan countdown timer, galeri foto, dan guestbook interaktif.',
  keywords: 'Idul Fitri, 1447 Hijriah, keluarga, ucapan, greeting',
  openGraph: {
    title: 'Ucapan Idul Fitri 1447 Hijriah',
    description: 'Ucapan Idul Fitri bersama keluarga tercinta',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Subtle background elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Organic shapes - subtle and minimalist */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-linear-to-br from-primary/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-linear-to-tl from-secondary/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-transparent via-transparent to-primary/1 opacity-30 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Hero Section - Asymmetric layout */}
        <header className="md:min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 max-w-7xl mx-auto gap-12">
          {/* Right side - Visual element */}
          <ScrollReveal
            className="hidden md:flex md:order-2 flex-1 items-center justify-center"
            delay={200}
          >
            <div className="relative w-full max-w-[18rem] sm:max-w-xs md:max-w-md aspect-square">
              <Image
                src="/img/logoidulfitri.webp"
                alt="Logo Idul Fitri"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 80vw, 420px"
              />
            </div>
          </ScrollReveal>

          {/* Left side - Text content */}
          <ScrollReveal className="md:order-1 flex-1 space-y-6">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-xs uppercase tracking-widest text-primary/60 font-light">
                  Kami Sekeluarga Mengucapkan
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-light leading-tight text-foreground">
                Selamat <span className="font-normal">Idul Fitri</span> <br />
                <span className="text-primary/80">1447 Hijriah</span>
              </h1>

              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-md">
                Ucapan tulus dari keluarga kami untuk Anda. Semoga hari istimewa
                ini membawa berkah, kebahagiaan, dan kedamaian bagi setiap hati.
              </p>
            </div>

            {/* Rotating Islamic quotes */}
            <div className="pt-8 border-t border-border/30">
              <RotatingQuotes />
            </div>
          </ScrollReveal>
        </header>

        {/* Divider with accent */}
        <ScrollReveal className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12">
          <div className="h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
        </ScrollReveal>

        {/* Countdown Section - Full width asymmetric */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <ScrollReveal className="md:col-span-1">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-light text-foreground">
                  Hitung Mundur
                </h2>
                <p className="text-muted-foreground font-light">
                  Menjelang momen istimewa bersama keluarga
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="md:col-span-2" delay={100}>
              <CountdownTimer />
            </ScrollReveal>
          </div>
        </section>

        {/* Divider */}
        <ScrollReveal className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
        </ScrollReveal>

        {/* Photo Gallery Section - Unique layout */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="mb-12 md:mb-16">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
                    Momen Keluarga
                  </h2>
                  <p className="text-muted-foreground font-light">
                    Koleksi foto dari Keluarga kami di bulan berkah ini.
                  </p>
                </div>

                <div className="hidden md:block text-xs uppercase tracking-widest text-primary/40 font-light">
                  Galeri Foto
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <PhotoGallery />
            </ScrollReveal>
          </div>
        </section>

        {/* Divider */}
        <ScrollReveal className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
        </ScrollReveal>

        {/* Guestbook Section - Asymmetric right align */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1 space-y-4">
                <h2 className="text-4xl md:text-5xl font-light text-foreground">
                  Pesan Anda
                </h2>
                <p className="text-muted-foreground font-light text-sm">
                  Tinggalkan ucapan terbaik Anda untuk keluarga kami
                </p>
              </div>

              <div className="md:col-span-2">
                <GuestbookForm />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Footer - Minimalist */}
        <footer className="border-t border-border/30 mt-20 md:mt-32">
          <ScrollReveal>
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left side */}
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-widest text-primary/60 font-light">
                    Ucapan Idul Fitri
                  </p>
                  <p className="text-2xl md:text-3xl font-light text-foreground">
                    1447 Hijriah
                  </p>
                </div>

                {/* Right side */}
                <div className="space-y-4 md:text-right">
                  <p className="text-sm text-muted-foreground font-light">
                    Dengan doa dan harapan, keluarga kami mengucapkan Mohon Maaf
                    Lahir dan Batin untuk semua kesalahan kami.
                  </p>
                  <p className="text-xs text-primary/40 font-light">
                    © 2026 • Keluarga Rinto Raharjo 
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </footer>
      </div>
    </main>
  )
}
