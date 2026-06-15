// 背景の３Dアニメーション画像の導入

import { useEffect, useRef } from 'react'
import type { Theme } from '../../App'

type Props = {
  theme: Theme
}

const VantaBackground = ({ theme }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const effectRef = useRef<{
    destroy: () => void
    setOptions?: (options: Record<string, unknown>) => void
    resize?: () => void
  } | null>(null)

  useEffect(() => {
    let cancelled = false

    if (theme === 'light') {
      effectRef.current?.destroy()
      effectRef.current = null
      return
    }

    const initEffect = async () => {
      if (!containerRef.current) {
        return
      }

      const [netModule, THREE] = await Promise.all([
        import('vanta/dist/vanta.net.min'),
        import('three'),
      ])
      const resolvedModule = netModule as unknown as {
        default?: unknown
        _vantaEffect?: unknown
      }
      const nestedDefault =
        resolvedModule.default &&
          typeof resolvedModule.default === 'object' &&
          'default' in resolvedModule.default
          ? (resolvedModule.default as { default?: unknown }).default
          : undefined
      const NET =
        typeof resolvedModule.default === 'function'
          ? resolvedModule.default
          : typeof nestedDefault === 'function'
            ? nestedDefault
            : typeof resolvedModule._vantaEffect === 'function'
              ? resolvedModule._vantaEffect
              : null

      if (cancelled || !containerRef.current || !NET) {
        return
      }

      effectRef.current?.destroy()
      effectRef.current = NET({
        el: containerRef.current,
        THREE,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        backgroundAlpha: 0,
        color: theme === 'dark' ? 0x34d399 : 0x16a34a,
        points: theme === 'dark' ? 12 : 10,
        maxDistance: theme === 'dark' ? 22 : 20,
        spacing: theme === 'dark' ? 18 : 16,
        showDots: true,
      })
    }

    void initEffect()

    const handleResize = () => {
      effectRef.current?.resize?.()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelled = true
      window.removeEventListener('resize', handleResize)
      effectRef.current?.destroy()
      effectRef.current = null
    }
  }, [theme])

  return (
    <div
      aria-hidden="true"
      className="theme-vanta-shell fixed inset-0 z-0 overflow-hidden"
    >
      <div ref={containerRef} className="theme-vanta-canvas absolute inset-0" />
      <div className="theme-vanta-overlay absolute inset-0" />
    </div>
  )
}

export default VantaBackground
