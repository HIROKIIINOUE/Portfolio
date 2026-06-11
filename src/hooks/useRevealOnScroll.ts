import { useEffect, useRef, useState } from 'react'

type UseRevealOnScrollOptions = {
  threshold?: number
  rootMargin?: string
}

const useRevealOnScroll = <T extends HTMLElement>({
  threshold = 0.2,
  rootMargin = '0px 0px -10% 0px',
}: UseRevealOnScrollOptions = {}) => {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node || isVisible) {
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
  }, [isVisible, rootMargin, threshold])

  return { ref, isVisible }
}

export default useRevealOnScroll
