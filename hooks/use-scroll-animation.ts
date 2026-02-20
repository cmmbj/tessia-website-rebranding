"use client"

import { useEffect, useRef, useState, useCallback } from "react"

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = "0px 0px -80px 0px",
  once = true,
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries
      if (entry.isIntersecting) {
        setIsVisible(true)
      } else if (!once) {
        setIsVisible(false)
      }
    },
    [once]
  )

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    })

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, handleIntersection])

  return { ref, isVisible }
}
