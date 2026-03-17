# Website Features - Idul Fitri 1447 Hijriah

## 🎬 User Journey

```
Pengunjung
    ↓
[FIRST VISIT]
    ↓
Auto-redirect → Intro Page (/intro)
    ↓
Rotating Islamic Quotes (auto-transition every 5s)
    ↓
Click "Masuk Ke Halaman Utama" or wait for auto-skip
    ↓
[MAIN PAGE]
    ↓
1. Hero Section (Welcome Message)
2. Countdown Timer (to Idul Fitri)
3. Photo Gallery (Keluarga moments)
4. Guestbook (Leave messages)
5. Footer

[SUBSEQUENT VISITS]
    ↓
Auto-redirect → Main Page (skip intro)
```

## 📄 Page Structure

### 1. Intro Page (`/intro`)
**Purpose**: Welcome & set festive tone with Islamic quotes

**Features**:
- 5 rotating Islamic quotes with Arabic text
- Smooth fade transitions (5-second intervals)
- Manual navigation (dot indicators + next button)
- Organic background gradient shapes
- "Masuk Ke Halaman Utama" button
- Responsive on all devices

**Components**:
- `QuoteCarousel.tsx` - Animated quote rotator

---

### 2. Main Page (`/`)
**Purpose**: Complete Idul Fitri greeting with photos & messages

#### Section 2A: Hero
- Asymmetric layout (text left, visual right)
- "Selamat Idul Fitri" heading (light typography)
- Description text with Islamic greeting
- Decorative circular elements

**Components**:
- `ScrollReveal` - Fade-in animation on load

#### Section 2B: Countdown Timer
- "Hitung Mundur" heading
- Modern minimalist timer (days, hours, mins, seconds)
- Subtle borders & soft backgrounds
- Real-time updates every second

**Components**:
- `CountdownTimer.tsx` - Modern timer display

#### Section 2C: Photo Gallery
- "Momen Keluarga" heading
- Asymmetric masonry grid layout
- 6 family photos (user-replaceable)
- Smooth hover effects
- Lightbox modal for full-screen viewing
- Touch-friendly on mobile

**Components**:
- `PhotoGallery.tsx` - Masonry grid with lightbox

#### Section 2D: Guestbook
- "Pesan Anda" heading
- Input form (Name, Email, Message)
- Form validation
- Success/error messages
- Live entries display (most recent first)
- Hover effects on entries

**Components**:
- `GuestbookForm.tsx` - Interactive form + entries list

#### Section 2E: Footer
- Website info
- Copyright & credits
- Idul Fitri blessing message

---

## 🎨 Design Features

### Color Palette
```
Primary (Hijau):     oklch(0.4 0.08 130)   - Muted green
Secondary (Emas):    oklch(0.62 0.12 60)   - Warm gold
Background:          oklch(0.985 0.002 0)  - Off-white
Muted Text:          oklch(0.55 0.01 120)  - Soft gray-green
Borders:             oklch(0.94 0.006 120) - Subtle
```

### Typography
```
Font Family:  Geist (sans-serif)
Weights Used:
  - light (300)   → Body text, descriptions
  - normal (400)  → Regular content
  - (bold also available)

Hierarchy:
  h1: 5xl-7xl (light)
  h2: 4xl-5xl (light)
  h3: 2xl-3xl (light)
  body: base-lg (light)
  small: xs-sm (light)
```

### Animations
```
Intro Quotes:        fade + scale-95 (500ms)
Scroll Reveals:      fade + translateY (700ms, staggered)
Gallery Hover:       scale-110 (500ms)
Buttons:             scale & shadow (300ms)
Transitions:         Smooth easing (default)
```

### Responsiveness
```
Mobile (320px+):
  - Single column layout
  - Stacked sections
  - Touch-optimized buttons

Tablet (768px+):
  - Two column layout where applicable
  - Better spacing
  - 2-3 column grid for photos

Desktop (1024px+):
  - Full asymmetric layout
  - Wider content areas
  - 3+ column grid for photos
```

---

## 🔧 Interactive Features

### 1. Intro Page Interactions
- Auto-rotate quotes (5 sec)
- Manual navigation (dots, next button)
- Smooth transitions (no jump cuts)
- Click to enter main page

### 2. Countdown Timer
- Real-time updates (1 sec tick)
- Responsive numbers & labels
- Accessible numeric displays

### 3. Photo Gallery
- Hover effects (scale, overlay)
- Click to open lightbox
- ESC or click-outside to close
- Smooth fade-in of lightbox
- Cursor feedback

### 4. Guestbook Form
- Real-time validation
- Submit button feedback (disabled during send)
- Success toast animation
- Error message display
- Live entry list update
- Hover effects on entries

### 5. Scroll Animations
- Reveal elements on scroll
- Smooth fade-in + translate
- Staggered timing for visual interest
- Works on all sections

---

## 📱 Mobile Experience

### Optimizations
- Touch-friendly buttons & inputs
- Readable font sizes on small screens
- Proper spacing for touch targets
- Full-width on mobile
- Minimal horizontal scroll

### Gallery on Mobile
- 2-column grid (instead of 3)
- Smaller featured photo sizes
- Smooth lightbox transitions
- Portrait-friendly layout

### Forms on Mobile
- Full-width inputs
- Large touch targets
- Auto-focus first field
- Proper keyboard spacing

---

## 🌙 Idul Fitri Customization

### Intro Quotes
Include:
- Islamic greeting
- Idul Fitri wish
- Family message
- Forgiveness sentiment
- Gratitude expression

### Main Page Message
Highlight:
- Idul Fitri date/year
- Family importance
- Islamic values
- Special moments together

### Guestbook Purpose
Allow guests to:
- Send Idul Fitri wishes
- Share memories
- Express gratitude
- Connect with family

---

## ♿ Accessibility

### Implemented
- Semantic HTML structure
- Alt text on images
- ARIA labels on buttons
- Color contrast ratios (WCAG AA)
- Keyboard navigation support
- Focus indicators visible

### Best Practices
- Light typography for readability
- Clear call-to-action buttons
- Error messages near inputs
- Loading states for async operations

---

## 🚀 Performance

### Optimizations
- Next.js Server Components
- Optimized images with `next/image`
- CSS-based animations (GPU accelerated)
- Minimal JavaScript
- Efficient database queries
- No heavy dependencies

### Load Time
- Intro page: ~500ms
- Main page: ~1s
- Gallery load: Lazy (on demand)
- Guestbook: Async fetch

---

## 🎯 SEO Features

### Meta Tags
- Title: "Ucapan Idul Fitri 1447 Hijriah"
- Description: Family greeting site
- Keywords: Idul Fitri, 1447, Hijriah, family
- Open Graph tags for sharing

### Structured Data
- Website type identified
- Proper heading hierarchy
- Semantic HTML elements

---

## 🔐 Security

### Implemented
- Input validation (client & server)
- XSS protection (React escaping)
- SQL injection prevention (Supabase RLS)
- CORS configuration
- Secure API endpoints

### Guestbook Security
- Email validation
- Message length limits
- XSS sanitization
- Rate limiting (optional)

---

## 📊 Analytics Ready

Can integrate with:
- Google Analytics
- Vercel Analytics
- Custom tracking
- Event monitoring

Track:
- Page views
- Intro engagement
- Gallery interactions
- Guestbook submissions
- Time on page

---

**Website Status**: ✅ Production Ready  
**Last Updated**: March 2026  
**Theme**: Minimalist, Aesthetic, Modern  
**Target Audience**: Family & Guests  
