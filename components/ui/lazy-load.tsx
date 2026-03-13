/**
 * Lazy loading wrapper for heavy sections
 */

'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

interface LazyLoadSectionProps {
  children: ReactNode
  fallback?: ReactNode
  threshold?: number
  rootMargin?: string
  className?: string
}

export function LazyLoadSection({
  children,
  fallback = <div className="min-h-[400px] animate-pulse bg-muted/20" />,
  threshold = 0.1,
  rootMargin = '200px',
  className,
}: LazyLoadSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : fallback}
    </div>
  )
}

/**
 * Lazy load component with dynamic import
 */
interface LazyComponentProps {
  loader: () => Promise<{ default: React.ComponentType<any> }>
  fallback?: ReactNode
  props?: Record<string, any>
}

export function LazyComponent({
  loader,
  fallback = <div className="animate-pulse bg-muted/20 h-40" />,
  props = {},
}: LazyComponentProps) {
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible && !Component) {
      loader().then((mod) => setComponent(() => mod.default))
    }
  }, [isVisible, Component, loader])

  return (
    <div ref={ref}>
      {Component ? <Component {...props} /> : fallback}
    </div>
  )
}

/**
 * Prefetch link component
 */
import Link, { LinkProps } from 'next/link'
import { useEffect as useEffectPrefetch } from 'react'

interface PrefetchLinkProps extends LinkProps {
  children: ReactNode
  className?: string
  prefetchDelay?: number
}

export function PrefetchLink({
  children,
  className,
  prefetchDelay = 0,
  ...props
}: PrefetchLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null)

  useEffectPrefetch(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            // Prefetch is automatic with Next.js Link
          }, prefetchDelay)
          observer.disconnect()
        }
      },
      { rootMargin: '100px' }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [prefetchDelay])

  return (
    <Link ref={ref} className={className} {...props}>
      {children}
    </Link>
  )
}
