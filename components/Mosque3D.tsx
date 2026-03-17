'use client'

import { useEffect, useRef } from 'react'

export default function Mosque3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create SVG mosque illustration with 3D-like perspective
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('viewBox', '0 0 400 400')
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
    svg.setAttribute('width', '100%')
    svg.setAttribute('height', '100%')
    svg.style.display = 'block'

    // Define gradients and filters for depth
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs')
    
    // Main dome gradient
    const domeGradient = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient')
    domeGradient.setAttribute('id', 'domeGradient')
    domeGradient.setAttribute('cx', '40%')
    domeGradient.setAttribute('cy', '40%')
    domeGradient.innerHTML = `
      <stop offset="0%" style="stop-color:#3d6b28;stop-opacity:1" />
      <stop offset="70%" style="stop-color:#2d5016;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1a3009;stop-opacity:1" />
    `

    // Base gradient
    const baseGradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient')
    baseGradient.setAttribute('id', 'baseGradient')
    baseGradient.setAttribute('x1', '0%')
    baseGradient.setAttribute('y1', '0%')
    baseGradient.setAttribute('x2', '0%')
    baseGradient.setAttribute('y2', '100%')
    baseGradient.innerHTML = `
      <stop offset="0%" style="stop-color:#d4af37;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#b8941f;stop-opacity:1" />
    `

    // Crescent gradient
    const crescentGradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient')
    crescentGradient.setAttribute('id', 'crescentGradient')
    crescentGradient.innerHTML = `
      <stop offset="0%" style="stop-color:#f0e68c;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#d4af37;stop-opacity:1" />
    `

    // Shadow filter
    const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter')
    filter.setAttribute('id', 'shadow')
    filter.innerHTML = `
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-opacity="0.2" />
    `

    defs.appendChild(domeGradient)
    defs.appendChild(baseGradient)
    defs.appendChild(crescentGradient)
    defs.appendChild(filter)
    svg.appendChild(defs)

    // Background
    const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    bg.setAttribute('width', '400')
    bg.setAttribute('height', '400')
    bg.setAttribute('fill', 'transparent')
    svg.appendChild(bg)

    // Base platform
    const base = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse')
    base.setAttribute('cx', '200')
    base.setAttribute('cy', '320')
    base.setAttribute('rx', '120')
    base.setAttribute('ry', '30')
    base.setAttribute('fill', 'url(#baseGradient)')
    base.setAttribute('filter', 'url(#shadow)')
    svg.appendChild(base)

    // Main dome (hemisphere)
    const dome = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    dome.setAttribute('d', 'M 100 220 Q 100 80, 200 40 Q 300 80, 300 220')
    dome.setAttribute('fill', 'url(#domeGradient)')
    dome.setAttribute('stroke', '#1a3009')
    dome.setAttribute('stroke-width', '2')
    dome.setAttribute('filter', 'url(#shadow)')
    svg.appendChild(dome)

    // Dome base ring
    const domeBase = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse')
    domeBase.setAttribute('cx', '200')
    domeBase.setAttribute('cy', '220')
    domeBase.setAttribute('rx', '100')
    domeBase.setAttribute('ry', '25')
    domeBase.setAttribute('fill', 'url(#baseGradient)')
    domeBase.setAttribute('stroke', '#8b7910')
    domeBase.setAttribute('stroke-width', '1.5')
    svg.appendChild(domeBase)

    // Four minarets
    const minaretPositions = [
      { x: 80, label: 'left-top' },
      { x: 320, label: 'right-top' },
    ]

    minaretPositions.forEach((pos) => {
      // Minaret body
      const minaret = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      minaret.setAttribute('d', `M ${pos.x} 280 L ${pos.x - 8} 140 L ${pos.x + 8} 140 Z`)
      minaret.setAttribute('fill', 'url(#baseGradient)')
      minaret.setAttribute('stroke', '#8b7910')
      minaret.setAttribute('stroke-width', '1')
      minaret.setAttribute('filter', 'url(#shadow)')
      svg.appendChild(minaret)

      // Minaret top (finial)
      const finial = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      finial.setAttribute('cx', String(pos.x))
      finial.setAttribute('cy', '135')
      finial.setAttribute('r', '6')
      finial.setAttribute('fill', 'url(#crescentGradient)')
      svg.appendChild(finial)
    })

    // Back minarets (lighter for depth)
    minaretPositions.forEach((pos) => {
      const x = pos.x + 60
      if (x > 350) return

      const minaret = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      minaret.setAttribute('d', `M ${x} 280 L ${x - 6} 160 L ${x + 6} 160 Z`)
      minaret.setAttribute('fill', '#c49a3d')
      minaret.setAttribute('opacity', '0.6')
      minaret.setAttribute('stroke', '#8b7910')
      minaret.setAttribute('stroke-width', '0.5')
      svg.appendChild(minaret)

      const finial = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      finial.setAttribute('cx', String(x))
      finial.setAttribute('cy', '155')
      finial.setAttribute('r', '4')
      finial.setAttribute('fill', '#e0d597')
      finial.setAttribute('opacity', '0.6')
      svg.appendChild(finial)
    })

    // Crescent on top of dome
    const crescentGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    crescentGroup.setAttribute('transform', 'translate(200, 25)')

    // Outer circle of crescent
    const crescentOuter = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    crescentOuter.setAttribute('cx', '0')
    crescentOuter.setAttribute('cy', '0')
    crescentOuter.setAttribute('r', '18')
    crescentOuter.setAttribute('fill', 'url(#crescentGradient)')
    crescentOuter.setAttribute('stroke', '#d4af37')
    crescentOuter.setAttribute('stroke-width', '1')
    crescentGroup.appendChild(crescentOuter)

    // Inner circle to create crescent
    const crescentInner = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    crescentInner.setAttribute('cx', '8')
    crescentInner.setAttribute('cy', '0')
    crescentInner.setAttribute('r', '14')
    crescentInner.setAttribute('fill', 'transparent')
    crescentInner.setAttribute('style', 'mix-blend-mode: multiply;')
    crescentGroup.appendChild(crescentInner)

    // Star on crescent
    const star = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    star.setAttribute('cx', '-8')
    star.setAttribute('cy', '0')
    star.setAttribute('r', '3')
    star.setAttribute('fill', '#f0e68c')
    crescentGroup.appendChild(star)

    svg.appendChild(crescentGroup)

    // Clear container and add SVG
    container.innerHTML = ''
    container.appendChild(svg)

    // Add subtle animation
    const style = document.createElement('style')
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }
      svg {
        animation: float 4s ease-in-out infinite;
      }
    `
    container.appendChild(style)
  }, [])

  return (
    <div 
      ref={containerRef}
      className="w-full h-full aspect-square relative rounded-lg overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center"
    />
  )
}
