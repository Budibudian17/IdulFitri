# Intro Page Guide

## Overview
Intro page adalah halaman pertama yang dikunjungi pengunjung sebelum masuk ke halaman utama. Ini menampilkan animated Islamic quotes yang rotating setiap 5 detik.

## Features

### 1. Animated Quote Carousel
- 5 pre-built quotes dengan Arabic text
- Automatic rotation setiap 5 detik
- Smooth fade transitions antar quote
- Manual navigation dengan dots & next button

### 2. Aesthetic Design
- Minimalist layout dengan centered text
- Subtle background gradients
- Light typography hierarchy (light font-weight)
- Modern Islamic vibe

### 3. Auto-Redirect
- Pertama kali visit: Redirect ke `/intro`
- Setelah click "Masuk", save ke localStorage
- Next visit: Langsung ke main page (`/`)
- User dapat override dengan access `/intro` directly

## Customizing Quotes

Edit `/components/QuoteCarousel.tsx`:

```typescript
const quotes = [
  {
    text: 'Selamat Hari Raya Idul Fitri',  // Main greeting
    subtitle: '1447 Hijriah',               // Subtitle
    arabic: 'كل عام وأنتم بألف خير',      // Arabic text
  },
  {
    text: 'Taqabbalallahu Minna wa Minkum',
    subtitle: 'Semoga Allah menerima dari kita dan kalian',
    arabic: 'تقبل الله منا ومنكم',
  },
  // Add more quotes...
]
```

## Timing Settings

### Change Auto-Rotation Speed
Di `QuoteCarousel.tsx`, ubah interval di useEffect:
```typescript
const timer = setInterval(() => {
  // Change 5000 (5 seconds) to desired milliseconds
}, 5000)  // ← Change this
```

### Change Transition Duration
Ubah `duration-500` ke duration lain (Tailwind):
- `duration-300` = 300ms (faster)
- `duration-500` = 500ms (current)
- `duration-700` = 700ms (slower)

## Styling the Intro

### Background
Edit di `app/intro/page.tsx`:
```tsx
<div className="absolute inset-0 -z-10">
  {/* Modify gradient colors & blur strength */}
  <div className="absolute top-0 left-0 w-64 h-64 
    bg-gradient-to-br from-primary/3 to-transparent rounded-full blur-3xl" />
</div>
```

### Quote Text Size
Di `QuoteCarousel.tsx`, modify h2 className:
```tsx
<h2 className="text-5xl md:text-7xl font-light">
  {/* Change text-5xl to text-6xl, text-7xl, etc */}
</h2>
```

### Button Style
Edit di `app/intro/page.tsx`:
```tsx
<button className="group relative px-8 md:px-12 py-4 
  bg-gradient-to-r from-primary to-secondary">
  {/* Customize button style */}
</button>
```

## Skipping Intro

Users dapat skip dengan:
1. Click "Masuk Ke Halaman Utama" button
2. Access `/` directly (if already visited)
3. Edit localStorage manually (dev tools)

### Remove Intro Requirement
Jika ingin hapus intro page:

1. Delete `/app/intro/page.tsx`
2. Delete `middleware.ts`
3. Users akan langsung ke main page

## Mobile Responsiveness

Intro page sudah fully responsive:
- Mobile: 320px+ (full-width, stacked)
- Tablet: 768px+ (better spacing)
- Desktop: 1024px+ (centered, max-width)

## Best Practices

1. **Keep quotes short** - Easier to read, faster transition
2. **Mix Arabic & English** - Creates authentic feel
3. **Test on mobile** - Ensure text doesn't overflow
4. **Adjust timing** - 5 seconds might be too fast/slow for you
5. **Keep animations smooth** - Users appreciate elegance

## Troubleshooting

**Intro not showing**
- Check middleware.ts exists
- Check localStorage not blocking
- Hard refresh (Ctrl+Shift+R)

**Text too small/large on mobile**
- Adjust `text-5xl md:text-7xl` responsive sizes
- Add `sm:text-6xl` for tablet size

**Quotes not rotating**
- Check `setInterval` timing in useEffect
- Check no console errors (dev tools)
- Clear browser cache

**Skip button not working**
- Check `router.push('/')` is correct
- Check localStorage permission
- Check middleware redirect logic

---

Happy customizing! 🌙✨
