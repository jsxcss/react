import { CSSProperties, createContext, useContext } from 'react'

export type OptionWithMediaQuery<T extends { [property: string]: any }> = { [key in keyof T]: T[key][] | T[key] }

export type CSSPropertiesWithMediaQuery = {
  [key in keyof CSSProperties]: CSSProperties[key] | CSSProperties[key][]
}

type MediaQuery<T extends (...args: any[]) => any> = (
  cssPropertiesWithMediaQuery: CSSPropertiesWithMediaQuery
) => ReturnType<T>

type BreakPoint = `@media (min-width: ${number}px)`

export const creatMediaQuerySet = <T extends (...args: any[]) => any>(css: T) => {
  const createMediaQuery =
    (breakpoints: BreakPoint[]): MediaQuery<T> =>
    (cssPropertiesWithMediaQuery) => {
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

  const MediaQueryContext = createContext<ReturnType<typeof createMediaQuery> | undefined>(undefined)

  const useMediaQuery = (): ReturnType<typeof createMediaQuery> => {
    const mediaQuery = useContext(MediaQueryContext)

    if (mediaQuery === undefined) {
      throw new Error('MediaQueryProvider is required by the parent component')
    }

    return mediaQuery
  }

  return {
    MediaQueryContext,
    useMediaQuery,
    createMediaQuery,
  }
}
