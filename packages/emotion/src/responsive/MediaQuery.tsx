'use client'

import { CSSProperties, PropsWithChildren, createContext, useContext, useMemo } from 'react'
import { css } from '@emotion/react'
import { CSSPropertiesWithMediaQuery } from '@jsxcss/core'

export const MediaQueryContext = createContext<ReturnType<typeof createMediaQuery> | undefined>(undefined)
export const MediaQueryProvider = ({ children, pxs = [0, 768, 992, 1200] }: PropsWithChildren<{ pxs?: number[] }>) => {
  const value = useMemo(() => {
    const breakpoints = pxs.map((bp) => `@media (min-width: ${bp}px)` as const)
    return createMediaQuery(breakpoints)
  }, [...pxs])

  return <MediaQueryContext.Provider value={value}>{children}</MediaQueryContext.Provider>
}

export const useMediaQuery = (): ReturnType<typeof createMediaQuery> => {
  const mediaQuery = useContext(MediaQueryContext)

  if (mediaQuery === undefined) {
    throw new Error('MediaQueryProvider is required by the parent component')
  }

  return mediaQuery
}

type MediaQuery = (cssPropertiesWithMediaQuery: CSSPropertiesWithMediaQuery) => ReturnType<typeof css>
type BreakPoint = `@media (min-width: ${number}px)`
const createMediaQuery =
  (breakpoints: BreakPoint[]): MediaQuery =>
  (cssPropertiesWithMediaQuery: CSSPropertiesWithMediaQuery) => {
    if (typeof cssPropertiesWithMediaQuery !== 'object' || cssPropertiesWithMediaQuery == null) {
      return css({})
    }

    const slots: {
      [breakpoint in BreakPoint]: { [key in keyof CSSProperties]: any }
    } = {}
    const objects: CSSProperties = {}
    const properties: { [key: string]: any } = {}
    Object.keys(cssPropertiesWithMediaQuery).forEach((asKey) => {
      const key = asKey as keyof CSSProperties

      let item = cssPropertiesWithMediaQuery[key]
      if (!Array.isArray(item)) {
        item = [item]
      }

      if (
        Array.isArray(item) &&
        key.charCodeAt(0) !== 38 // & check
      ) {
        let priorValue: CSSPropertiesWithMediaQuery[keyof CSSPropertiesWithMediaQuery]
        item.forEach((currentValue, breakpointIndex) => {
          if (priorValue === currentValue) {
            return
          }

          if (currentValue == null) {
            return
          }

          priorValue = currentValue
          const breakpoint = breakpoints[breakpointIndex]
          if (breakpointIndex === 0) {
            properties[key] = currentValue
          } else if (slots[breakpoint] === undefined) {
            slots[breakpoint] = { [key]: currentValue }
          } else {
            slots[breakpoint][key] = currentValue
          }
        })
      } else {
        properties[key] = item
      }
    })

    breakpoints.forEach((breakpoint) => {
      if (slots[breakpoint]) {
        properties[breakpoint] = slots[breakpoint]
      }
    })
    Object.assign(properties, objects)
    return css(properties)
  }
