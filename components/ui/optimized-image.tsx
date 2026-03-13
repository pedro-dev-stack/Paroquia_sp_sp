/**
 * Optimized Image component with lazy loading and blur placeholder
 */

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends Omit<ImageProps, 'placeholder'> {
  fallback?: string
  aspectRatio?: string
  containerClassName?: string
}

export function OptimizedImage({
  src,
  alt,
  fallback = '/placeholder.jpg',
  aspectRatio,
  containerClassName,
  className,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const imageSrc = error ? fallback : src

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-muted',
        containerClassName
      )}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <Image
        src={imageSrc}
        alt={alt}
        className={cn(
          'duration-700 ease-in-out',
          isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0',
          className
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true)
          setIsLoading(false)
        }}
        priority={priority}
        quality={90}
        {...props}
      />
      
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-muted" />
      )}
    </div>
  )
}

/**
 * Background Image component with optimization
 */
interface BackgroundImageProps {
  src: string
  alt: string
  className?: string
  children?: React.ReactNode
  priority?: boolean
}

export function BackgroundImage({
  src,
  alt,
  className,
  children,
  priority = false,
}: BackgroundImageProps) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
        quality={85}
        sizes="100vw"
      />
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  )
}

/**
 * Avatar Image with fallback
 */
interface AvatarImageProps {
  src?: string | null
  alt: string
  size?: number
  fallback?: string
  className?: string
}

export function AvatarImage({
  src,
  alt,
  size = 40,
  fallback = '/placeholder-user.jpg',
  className,
}: AvatarImageProps) {
  const [error, setError] = useState(false)
  const imageSrc = error || !src ? fallback : src

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-full bg-muted',
        className
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setError(true)}
        sizes={`${size}px`}
      />
    </div>
  )
}

/**
 * Logo Image with optimization
 */
interface LogoImageProps {
  src?: string
  alt?: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function LogoImage({
  src = '/logo.jpg',
  alt = 'Logo',
  width = 120,
  height = 120,
  className,
  priority = true,
}: LogoImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      quality={100}
    />
  )
}
