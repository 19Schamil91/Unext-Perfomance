"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface AnimateInProps {
  children: ReactNode
  className?: string
  delay?: number
  from?: "bottom" | "left" | "right"
}

export function AnimateIn({ children, className = "", delay = 0, from = "bottom" }: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const dx = from === "left" ? "-28px" : from === "right" ? "28px" : "0px"
    const dy = from === "bottom" ? "28px" : "0px"

    el.style.opacity = "0"
    el.style.transform = `translate(${dx}, ${dy})`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`
          el.style.opacity = "1"
          el.style.transform = "translate(0, 0)"
          observer.disconnect()
        }
      },
      { threshold: 0.07, rootMargin: "0px 0px -40px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, from])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
