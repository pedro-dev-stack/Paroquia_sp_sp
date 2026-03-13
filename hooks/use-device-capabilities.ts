/**
 * Hook to detect device capabilities and adapt performance accordingly
 */

'use client'

import { useState, useEffect } from 'react'

interface DeviceCapabilities {
  isMobile: boolean
  isLowEnd: boolean
  prefersReducedMotion: boolean
  connectionSpeed: 'slow' | 'medium' | 'fast'
  supportsWebP: boolean
  supportsAvif: boolean
}

export function useDeviceCapabilities(): DeviceCapabilities {
  const [capabilities, setCapabilities] = useState<DeviceCapabilities>({
    isMobile: false,
    isLowEnd: false,
    prefersReducedMotion: false,
    connectionSpeed: 'fast',
    supportsWebP: true,
    supportsAvif: false,
  })

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Detect connection speed
    const connection = (navigator as any).connection
    let connectionSpeed: 'slow' | 'medium' | 'fast' = 'fast'
    if (connection) {
      const type = connection.effectiveType
      if (type === 'slow-2g' || type === '2g') connectionSpeed = 'slow'
      else if (type === '3g') connectionSpeed = 'medium'
    }

    // Detect low-end device (heuristic: low memory or slow CPU)
    const isLowEnd =
      (navigator as any).deviceMemory < 4 ||
      (navigator as any).hardwareConcurrency < 4 ||
      connectionSpeed === 'slow'

    setCapabilities({
      isMobile,
      isLowEnd,
      prefersReducedMotion,
      connectionSpeed,
      supportsWebP: true, // Next.js handles this
      supportsAvif: true, // Next.js handles this
    })
  }, [])

  return capabilities
}

/**
 * Hook to defer non-critical work using requestIdleCallback
 */
export function useIdleCallback(callback: () => void, deps: any[] = []) {
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(callback)
      return () => cancelIdleCallback(id)
    } else {
      const id = setTimeout(callback, 1)
      return () => clearTimeout(id)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

/**
 * Hook to measure component render performance
 */
export function useRenderPerformance(componentName: string) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return

    const start = performance.now()
    return () => {
      const end = performance.now()
      if (end - start > 16) {
        console.warn(`[Performance] ${componentName} took ${(end - start).toFixed(2)}ms to render`)
      }
    }
  })
}
