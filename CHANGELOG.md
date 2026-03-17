# Website Ucapan Idul Fitri - Changelog

## Version 2.0 - Aesthetic & Modern Design Update

### 🎨 Design Improvements

#### Color System
- Updated from solid green & gold to **subtle, muted color palette**
- New OKLCH-based design tokens for sophisticated look
- Reduced color saturation for minimalist aesthetic
- Soft gradients instead of solid backgrounds (minimal blur, not AI-generated)

#### Typography & Layout
- Asymmetric page layout with unique visual flow
- Light font-weights for modern aesthetic (`font-light`, `font-normal`)
- Improved typography hierarchy with size & weight variations
- Better whitespace & breathing room between sections

#### Components
- **Countdown Timer**: Modern minimalist design with subtle borders
- **Photo Gallery**: Asymmetric masonry grid layout (some images featured larger)
- **Guestbook Form**: Clean, minimal styling with soft inputs
- **Quote Carousel**: Animated rotating quotes with smooth transitions

### ✨ New Features

#### Interactive Intro Page (`/intro`)
- Auto-rotating Islamic quotes with Arabic text
- 5-second smooth transitions between quotes
- Beautiful minimalist design with organic background shapes
- Manual navigation with dot indicators & next button
- "Masuk Ke Halaman Utama" button to enter main site

#### Scroll-Triggered Animations
- `ScrollReveal` component for reveal effects on scroll
- Smooth opacity & translate animations
- Staggered delays for visual interest
- Works on all sections (hero, countdown, gallery, guestbook)

#### Middleware Auto-Redirect
- `middleware.ts` handles intro redirect logic
- First-time visitors go to `/intro` automatically
- Subsequent visits go directly to main page
- Uses localStorage to track visit status

### 📁 File Changes

#### New Files
```
components/
  ├── QuoteCarousel.tsx       (Animated rotating quotes)
  └── ScrollReveal.tsx        (Scroll animation wrapper)

app/
  ├── intro/page.tsx          (Intro page with quotes)
  └── [existing components updated]

middleware.ts                 (Auto-redirect logic)
INTRO_GUIDE.md               (Intro customization guide)
CHANGELOG.md                 (This file)
```

#### Modified Files
```
app/
  ├── page.tsx               (Redesigned main layout - asymmetric)
  ├── globals.css            (New color scheme)
  └── layout.tsx             (Updated metadata)

components/
  ├── PhotoGallery.tsx       (Asymmetric masonry layout)
  ├── CountdownTimer.tsx     (Modern minimalist design)
  └── GuestbookForm.tsx      (Soft minimalist styling)
```

### 🎯 Design Principles Applied

1. **Minimalist** - Removed bloat, kept essentials
2. **Aesthetic** - Modern design that doesn't look AI-generated
3. **Responsive** - Mobile-first, works on all screen sizes
4. **Smooth** - Subtle animations & transitions
5. **Sophisticated** - Muted colors & elegant typography

### 🔄 Migration Guide for Users

#### If Upgrading from v1.0
1. Your photos will still work (no changes needed)
2. Guestbook data is preserved (same database)
3. Layout & styling completely new (better experience!)
4. Add custom quotes to intro page for personalization

#### Customization Points
- **Intro quotes**: Edit `components/QuoteCarousel.tsx`
- **Main page text**: Edit `app/page.tsx`
- **Colors**: Edit `app/globals.css` (OKLCH tokens)
- **Photos**: Replace in `/public/family-*.jpg`

### ⚡ Performance

- No new dependencies added
- Smaller CSS footprint (more efficient)
- Smooth animations with CSS transitions (GPU accelerated)
- Optimized image loading in gallery

### 🐛 Bug Fixes & Improvements

- Fixed guestbook form styling consistency
- Improved mobile responsiveness across all sections
- Better color contrast for accessibility
- Smoother animation timing

### 📱 Responsive Breakpoints

- **Mobile**: 320px+ (full-width, optimized)
- **Tablet**: 768px+ (improved spacing, grid cols)
- **Desktop**: 1024px+ (premium experience)

### 🎬 Animation Improvements

- Intro quote transitions: 500ms fade + scale
- Scroll reveals: 700ms smooth fade-in + translate
- Gallery hover: 500ms smooth scale & overlay
- Countdown: Real-time updates without janky effects

### 🌙 Overall Philosophy

The design evolved from:
- **Before**: Traditional website look, solid colors
- **After**: Modern aesthetic, minimalist, sophisticated

Focus shifted to:
- ✨ User experience > visual flashiness
- 📐 Clean typography > fancy fonts
- 🎨 Soft colors > bright colors
- ⚡ Smooth interactions > instant changes

---

## Version 1.0 - Initial Release

See SETUP.md for initial feature list.

---

**Last Updated**: March 2026
**Design Philosophy**: Minimalist, Aesthetic, Modern
**Color Palette**: Muted Green & Gold with Soft Neutrals
**Animation Style**: Smooth, Subtle, Sophisticated
