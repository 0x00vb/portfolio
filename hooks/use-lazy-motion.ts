import { useEffect, useState } from 'react'

export function useLazyMotion() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Lazy load animation features
    const loadMotion = async () => {
      if (typeof window !== 'undefined') {
        // Pre-warm the animation engine
        await import('framer-motion')
        setIsLoaded(true)
      }
    }

    // Load after initial render to prevent blocking
    const timer = setTimeout(loadMotion, 100)
    return () => clearTimeout(timer)
  }, [])

  return isLoaded
} 