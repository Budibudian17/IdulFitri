# Website Ucapan Idul Fitri 1447 Hijriah - Setup Guide

Selamat! Website ucapan Idul Fitri Anda dengan design aesthetic & modern sudah siap. Berikut adalah panduan untuk menyesuaikan website sesuai dengan kebutuhan Anda.

## 🎨 Fitur Utama

✅ **Interactive Intro Page** - Animated Islamic quotes sebelum masuk halaman utama  
✅ **Modern Minimalist Design** - Aesthetic & elegant, tidak terlihat AI-generated  
✅ **Asymmetric Gallery Layout** - Layout unik dengan masonry grid  
✅ **Smooth Scroll Animations** - Reveal effects saat scroll  
✅ **Countdown Timer** - Modern design dengan border subtle  
✅ **Guestbook Interaktif** - Pengunjung bisa meninggalkan pesan ucapan  
✅ **Responsive Design** - Sempurna di mobile, tablet, dan desktop  
✅ **Soft Color Palette** - Hijau & Emas yang sophisticated  

## 📸 Menambahkan Foto Keluarga Anda

### Langkah 1: Replace Foto Placeholder
Website ini dilengkapi dengan 6 foto placeholder di folder `/public/`:
- `family-1.jpg` through `family-6.jpg`

### Langkah 2: Upload Foto Anda
1. Siapkan 6+ foto keluarga berkualitas tinggi
2. Format: JPG atau PNG (landscape atau square)
3. Ukuran rekomendasi: 1200x800px atau lebih
4. Ganti file placeholder di `/public/` dengan foto Anda

### Langkah 3: Customize Foto Alt Text
Edit `/components/PhotoGallery.tsx`:
```tsx
const sampleImages: GalleryImage[] = [
  {
    id: 1,
    src: '/family-1.jpg',
    alt: 'Keluarga berkumpul 2026',  // Ubah alt text
  },
  // ... dsb
]
```

### Catatan Desain Gallery
- Gallery menggunakan asymmetric masonry layout
- Beberapa foto akan "featured" dengan ukuran lebih besar
- Smooth hover effects & lightbox modal
- Responsive otomatis untuk semua screen size

## ✏️ Menyesuaikan Konten & Design

### 1. Customize Intro Quotes
Edit `/components/QuoteCarousel.tsx`:
```tsx
const quotes = [
  {
    text: 'Your quote here',           // Main quote
    subtitle: 'Your subtitle',         // Subtitle
    arabic: 'النص العربي',             // Arabic text
  },
  // Tambah lebih banyak quotes
]
```

### 2. Ubah Main Page Text
Edit `/app/page.tsx`:
- Header greeting & descriptions
- Section titles
- Footer message

### 3. Ubah Countdown Date
Edit `/components/CountdownTimer.tsx`:
```tsx
const targetDate = new Date('2025-03-31T00:00:00').getTime()
```

### 4. Customize Guestbook Text
Edit `/components/GuestbookForm.tsx`:
- Form placeholders
- Form labels
- Success/error messages

## 🎨 Kustomisasi Color Theme

Website menggunakan design tokens di `app/globals.css` dengan OKLCH color space.

### Current Color Palette
```css
--primary: oklch(0.4 0.08 130);      /* Hijau muted */
--secondary: oklch(0.62 0.12 60);    /* Emas warm */
--background: oklch(0.985 0.002 0);  /* Off-white */
--muted-foreground: oklch(0.55 0.01 120);
```

### Cara Ubah Warna
1. Edit `/app/globals.css` di section `:root`
2. Gunakan OKLCH format: `oklch(lightness saturation hue)`
3. Lightness: 0-1 (0=black, 1=white)
4. Saturation: 0-0.3 (untuk aesthetic look)
5. Hue: 0-360 (0=red, 130=green, 60=yellow/gold)

**Color Inspiration:**
- Teal: `oklch(0.5 0.1 180)`
- Blue: `oklch(0.45 0.1 260)`
- Purple: `oklch(0.5 0.12 310)`
- Rose: `oklch(0.55 0.12 30)`

## 🔧 Fitur Guestbook

Guestbook menggunakan Supabase untuk menyimpan pesan:
- Pengunjung dapat meninggalkan nama, email, dan pesan
- Pesan tersimpan di database dan ditampilkan di halaman
- Pesan diurutkan dari yang terbaru

## 📱 Responsive Design

Website sudah dioptimalkan untuk:
- ✅ Mobile phones (320px ke atas)
- ✅ Tablets (768px ke atas)
- ✅ Desktop (1024px ke atas)

## 🚀 Deploy ke Vercel

Website ini siap di-deploy ke Vercel:
1. Hubungkan ke GitHub repository
2. Deploy melalui Vercel Dashboard
3. Supabase integration akan otomatis dikonfigurasi

## 📧 Environment Variables

Pastikan variabel berikut sudah dikonfigurasi:
- `NEXT_PUBLIC_SUPABASE_URL` - URL Supabase Anda
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Anon key Supabase

Variabel ini akan otomatis ditambahkan ketika Anda connect Supabase integration.

## 🎬 Understanding the Design

### Intro Page (`/intro`)
- Auto-redirect dari root path jika belum pernah dikunjungi
- Rotating quotes dengan smooth animations
- 5-detik auto-transition antar quote
- Skip button untuk langsung ke main page

### Main Page (`/`)
- **Hero Section**: Asymmetric layout dengan text kiri & visual kanan
- **Countdown**: Modern minimalist timer design
- **Gallery**: Asymmetric masonry grid dengan hover effects
- **Guestbook**: Form + list entries dengan soft styling
- **Scroll Animations**: Semua section reveal saat user scroll

### Design Principles
- ✨ Minimalist aesthetic (less is more)
- 🎨 Subtle gradients & soft shadows (bukan solid warna)
- 📱 Mobile-first responsive design
- ⚡ Smooth animations & transitions
- 🌙 Warm, sophisticated color palette

## 🚀 Quick Start

1. **Replace photos**: Upload foto keluarga ke `/public/`
2. **Update intro quotes**: Edit `components/QuoteCarousel.tsx`
3. **Customize text**: Edit `app/page.tsx` main content
4. **Test**: Run `npm run dev` dan kunjungi `localhost:3000`
5. **Deploy**: Push ke GitHub, deploy via Vercel

## 🎉 Selesai!

Website Anda siap untuk dibagikan ke keluarga besar!

---

**Selamat Hari Raya Idul Fitri 1447 Hijriah!**  
Semoga kita semua dapat saling memaafkan dan membuat momen ini berkesan bersama keluarga tercinta. 🌙✨
