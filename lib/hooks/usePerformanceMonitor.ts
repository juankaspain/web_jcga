"use client"

import { useEffect, useCallback } from 'react'

interface PerformanceMetrics {
  fcp: number | null // First Contentful Paint
  lcp: number | null // Largest Contentful Paint
  fid: number | null // First Input Delay
  cls: number | null // Cumulative Layout Shift
  ttfb: number | null // Time to First Byte
}

type MetricCallback = (metrics: PerformanceMetrics) => void

/**
 * Hook to monitor Core Web Vitals performance metrics
 * Useful for tracking real user metrics (RUM)
 */
export function usePerformanceMonitor(onMetrics?: MetricCallback) {
  const reportMetric = useCallback((name: string, value: number) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${name}: ${value.toFixed(2)}ms`)
    }
    
    // Send to analytics in production
    // You can integrate with your analytics service here
    // Example: sendToAnalytics({ name, value })
  }, [])

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return

    const metrics: PerformanceMetrics = {
      fcp: null,
      lcp: null,
      fid: null,
      cls: null,
      ttfb: null,
    }

    // Observe paint timings (FCP)
    const paintObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          metrics.fcp = entry.startTime
          reportMetric('FCP', entry.startTime)
        }
      }
    })

    // Observe LCP
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      metrics.lcp = lastEntry.startTime
      reportMetric('LCP', lastEntry.startTime)
    })

    // Observe FID
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fidEntry = entry as PerformanceEventTiming
        metrics.fid = fidEntry.processingStart - fidEntry.startTime
        reportMetric('FID', metrics.fid)
      }
    })

    // Observe CLS
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // @ts-ignore - Layout shift entries have hadRecentInput
        if (!entry.hadRecentInput) {
          // @ts-ignore
          clsValue += entry.value
          metrics.cls = clsValue
        }
      }
    })

    // Get TTFB from navigation timing
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigationEntry) {
      metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart
      reportMetric('TTFB', metrics.ttfb)
    }

    try {
      paintObserver.observe({ entryTypes: ['paint'] })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      fidObserver.observe({ entryTypes: ['first-input'] })
      clsObserver.observe({ entryTypes: ['layout-shift'] })
    } catch (e) {
      // Some browsers don't support all metrics
      console.warn('Performance monitoring not fully supported')
    }

    // Report final metrics on page unload
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        if (metrics.cls !== null) {
          reportMetric('CLS', metrics.cls)
        }
        onMetrics?.(metrics)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      paintObserver.disconnect()
      lcpObserver.disconnect()
      fidObserver.disconnect()
      clsObserver.disconnect()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [reportMetric, onMetrics])
}
