"use client"

import { useState, useEffect, useRef, useCallback } from "react"

interface MouseFollowerProps {
  trailLength?: number
  magneticStrength?: number
  disabled?: boolean
}

interface Position {
  x: number
  y: number
}

interface TrailDot {
  x: number
  y: number
  scale: number
  opacity: number
}

export default function MouseFollower({ 
  trailLength = 8,
  magneticStrength = 0.3,
  disabled = false
}: MouseFollowerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  
  const positionRef = useRef<Position>({ x: 0, y: 0 })
  const targetPositionRef = useRef<Position>({ x: 0, y: 0 })
  const trailDotsRef = useRef<TrailDot[]>(Array(trailLength).fill(null).map(() => ({ x: 0, y: 0, scale: 1, opacity: 1 })))
  const dotRef = useRef<HTMLDivElement | null>(null)
  const trailRefs = useRef<(HTMLDivElement | null)[]>([])
  const animationFrameRef = useRef<number>()

  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor
  }

  const getMagneticOffset = useCallback((mouseX: number, mouseY: number): Position => {
    if (!isHovering) return { x: mouseX, y: mouseY }

    const elements = document.elementsFromPoint(mouseX, mouseY)
    const interactiveElement = elements.find(el => 
      el.closest('button, a, input, textarea, select, [role="button"], [data-magnetic]')
    )

    if (interactiveElement) {
      const rect = interactiveElement.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const offsetX = (centerX - mouseX) * magneticStrength
      const offsetY = (centerY - mouseY) * magneticStrength
      
      return {
        x: mouseX + offsetX,
        y: mouseY + offsetY
      }
    }

    return { x: mouseX, y: mouseY }
  }, [isHovering, magneticStrength])

  useEffect(() => {
    if (disabled) return

    const timer = setTimeout(() => setIsVisible(true), 300)

    const updateMousePosition = (e: MouseEvent) => {
      const magneticPos = getMagneticOffset(e.clientX, e.clientY)
      targetPositionRef.current = magneticPos

      const target = e.target as Element
      const isInteractive = target.closest('button, a, input, textarea, select, [role="button"], [data-magnetic]')
      setIsHovering(!!isInteractive)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    const animate = () => {
      const target = targetPositionRef.current
      const current = positionRef.current

      current.x = lerp(current.x, target.x, 0.15)
      current.y = lerp(current.y, target.y, 0.15)

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`
      }

      const trailDots = trailDotsRef.current
      for (let i = trailDots.length - 1; i > 0; i--) {
        const factor = 0.1 + (i * 0.02)
        trailDots[i].x = lerp(trailDots[i].x, trailDots[i - 1].x, factor)
        trailDots[i].y = lerp(trailDots[i].y, trailDots[i - 1].y, factor)
        trailDots[i].scale = 1 - (i / trailDots.length) * 0.5
        trailDots[i].opacity = 1 - (i / trailDots.length) * 0.8
      }

      trailDots[0].x = lerp(trailDots[0].x, current.x, 0.3)
      trailDots[0].y = lerp(trailDots[0].y, current.y, 0.3)

      trailDots.forEach((dot, index) => {
        const element = trailRefs.current[index]
        if (element) {
          element.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0) translate(-50%, -50%) scale(${dot.scale})`
          element.style.opacity = dot.opacity.toString()
        }
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      clearTimeout(timer)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [disabled, getMagneticOffset])

  if (!isVisible || disabled) return null

  return (
    <>
      {/* Main Blue Dot Cursor */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-50 rounded-full w-5 h-5 bg-blue-500"
        style={{
          transform: "translate(-50%, -50%)",
          willChange: "transform",
        }}
      />

      {/* Trail Dots */}
      {/* {trailDotsRef.current.map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="fixed pointer-events-none z-40 rounded-full w-3 h-3 bg-blue-400"
          style={{
            transform: "translate(-50%, -50%) scale(1)",
            opacity: 1,
            willChange: "transform, opacity",
          }}
        />
      ))} */}
    </>
  )
}

export { MouseFollower }
