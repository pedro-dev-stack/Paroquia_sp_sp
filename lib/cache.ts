/**
 * Optimized data fetching with caching and revalidation
 */

type CacheEntry<T> = {
  data: T
  timestamp: number
  expiresAt: number
}

class DataCache {
  private cache = new Map<string, CacheEntry<any>>()
  private readonly DEFAULT_TTL = 5 * 60 * 1000 // 5 minutes

  set<T>(key: string, data: T, ttl: number = this.DEFAULT_TTL): void {
    const now = Date.now()
    this.cache.set(key, {
      data,
      timestamp: now,
      expiresAt: now + ttl,
    })
  }

  get<T>(key: string): T | null {
    const entry = this.cache.get(key)
    if (!entry) return null

    const now = Date.now()
    if (now > entry.expiresAt) {
      this.cache.delete(key)
      return null
    }

    return entry.data as T
  }

  has(key: string): boolean {
    const entry = this.cache.get(key)
    if (!entry) return false

    const now = Date.now()
    if (now > entry.expiresAt) {
      this.cache.delete(key)
      return false
    }

    return true
  }

  clear(): void {
    this.cache.clear()
  }

  delete(key: string): void {
    this.cache.delete(key)
  }
}

export const dataCache = new DataCache()

/**
 * Fetch with automatic caching and revalidation
 */
export async function fetchWithCache<T>(
  url: string,
  options?: RequestInit & { ttl?: number; revalidate?: boolean }
): Promise<T> {
  const cacheKey = `${url}-${JSON.stringify(options)}`
  
  // Check cache first
  if (!options?.revalidate) {
    const cached = dataCache.get<T>(cacheKey)
    if (cached) return cached
  }

  // Fetch fresh data
  try {
    const response = await fetch(url, {
      ...options,
      next: { revalidate: options?.ttl ? options.ttl / 1000 : 300 }, // Next.js ISR
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    
    // Cache the result
    dataCache.set(cacheKey, data, options?.ttl)
    
    return data
  } catch (error) {
    // Return stale cache on error if available
    const stale = dataCache.get<T>(cacheKey)
    if (stale) return stale
    
    throw error
  }
}

/**
 * Prefetch data for faster navigation
 */
export function prefetchData<T>(url: string, options?: RequestInit): void {
  if (typeof window === 'undefined') return
  
  // Use requestIdleCallback for non-critical prefetching
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      fetchWithCache<T>(url, options).catch(() => {
        // Silently fail prefetch
      })
    })
  } else {
    setTimeout(() => {
      fetchWithCache<T>(url, options).catch(() => {
        // Silently fail prefetch
      })
    }, 1)
  }
}

/**
 * Batch multiple requests
 */
export async function batchFetch<T>(
  urls: string[],
  options?: RequestInit
): Promise<T[]> {
  return Promise.all(
    urls.map(url => fetchWithCache<T>(url, options))
  )
}

/**
 * Local storage cache with expiration
 */
export const localCache = {
  set(key: string, data: any, ttl: number = 24 * 60 * 60 * 1000): void {
    if (typeof window === 'undefined') return
    
    try {
      const item = {
        data,
        expiresAt: Date.now() + ttl,
      }
      localStorage.setItem(key, JSON.stringify(item))
    } catch (error) {
      console.warn('Failed to save to localStorage:', error)
    }
  },

  get<T>(key: string): T | null {
    if (typeof window === 'undefined') return null
    
    try {
      const item = localStorage.getItem(key)
      if (!item) return null

      const parsed = JSON.parse(item)
      if (Date.now() > parsed.expiresAt) {
        localStorage.removeItem(key)
        return null
      }

      return parsed.data as T
    } catch (error) {
      console.warn('Failed to read from localStorage:', error)
      return null
    }
  },

  clear(): void {
    if (typeof window === 'undefined') return
    localStorage.clear()
  },
}
