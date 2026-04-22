import { useState, useEffect, useRef } from 'react'

// ─── useScrolled ──────────────────────────────────────────────────────────────
// Returns true once the user has scrolled past `threshold` pixels
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])

  return scrolled
}

// ─── useInView ────────────────────────────────────────────────────────────────
// Returns [ref, inView] — inView becomes true once the element enters viewport
export function useInView(threshold = 0.15) {
  const ref    = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}

// ─── useScrollTo ──────────────────────────────────────────────────────────────
// Returns a helper to smooth-scroll to an element by id
export function useScrollTo() {
  return (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
}
