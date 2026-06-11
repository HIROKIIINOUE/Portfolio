import { useEffect, useRef, useState } from 'react'

type UseRevealOnScrollOptions = {
  threshold?: number
  rootMargin?: string
  minScrollY?: number
}

const useRevealOnScroll = <T extends HTMLElement>({
  threshold = 0.2,
  rootMargin = '0px 0px -10% 0px',
  minScrollY = 0,
}: UseRevealOnScrollOptions = {}) => {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasReachedMinScroll, setHasReachedMinScroll] = useState(minScrollY === 0)

  useEffect(() => {
    if (minScrollY === 0) {
      return
    }

    const handleScroll = () => {
      if (window.scrollY < minScrollY) {
        return
      }

      setHasReachedMinScroll(true)
      window.removeEventListener('scroll', handleScroll)
    }

    handleScroll()

    if (!hasReachedMinScroll) {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [hasReachedMinScroll, minScrollY])

  useEffect(() => {
    const node = ref.current

    if (!node || isVisible || !hasReachedMinScroll) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return
        }

        setIsVisible(true)
        observer.disconnect()
      },
      { threshold, rootMargin },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [hasReachedMinScroll, isVisible, rootMargin, threshold])

  return { ref, isVisible }
}

export default useRevealOnScroll
