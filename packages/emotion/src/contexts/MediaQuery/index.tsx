import { PropsWithChildren, createContext, useContext, useMemo } from 'react'

export type MediaQuery = { pxs?: number[]; css: ReturnType<typeof createCss> }

const MediaQueryContext = createContext<MediaQuery | undefined>(undefined)

export const MediaQueryProvider = ({
  children,
  pxs = [576, 768, 992, 1200],
}: PropsWithChildren<{ pxs: MediaQuery['pxs'] }>) => {
  const value = useMemo(() => {
    const breakpoints = pxs.map((bp) => `@media (min-width: ${bp}px)`)
    return { pxs, css: createCss(breakpoints) }
  }, [...pxs])

  return <MediaQueryContext.Provider value={value}>{children}</MediaQueryContext.Provider>
}

export const useMediaQuery = () => {
  const context = useContext(MediaQueryContext)

  if (context === undefined) {
    throw new Error('MediaQueryProvider is required by the parent component')
  }

  return context
}

const createCss = (breakpoints: string[]) => {
  const flatten = (obj: { [x: string]: any }): any => {
    if (typeof obj !== 'object' || obj == null) {
      return []
    }

    if (Array.isArray(obj)) {
      return obj.map(flatten)
    }

    const slots: any = {}
    const objects: any = {}
    const props: any = {}
    Object.keys(obj).forEach((key) => {
      // Check if value is an array, but skip if it looks like a selector.
      // key.indexOf('&') === 0

      let item = obj[key]
      if (!Array.isArray(item)) item = [item]

      if (Array.isArray(item) && key.charCodeAt(0) !== 38) {
        let prior: any
        item.forEach((v, index) => {
          // Optimize by removing duplicated media query entries
          // when they are explicitly known to overlap.
          if (prior === v) {
            return
          }

          if (v == null) {
            // Do not create entries for undefined values as this will
            // generate empty media media quries
            return
          }

          prior = v

          if (index === 0) {
            props[key] = v
          } else if (slots[breakpoints[index]] === undefined) {
            slots[breakpoints[index]] = { [key]: v }
          } else {
            slots[breakpoints[index]][key] = v
          }
        })
      } else if (typeof item === 'object') {
        objects[key] = flatten(item)
      } else {
        props[key] = item
      }
    })

    // Ensure that all slots and then child objects are pushed to the end
    breakpoints.forEach((el) => {
      if (slots[el]) {
        props[el] = slots[el]
      }
    })
    Object.assign(props, objects)
    return props
  }

  return (...values: any[]) => values.map(flatten)
}
