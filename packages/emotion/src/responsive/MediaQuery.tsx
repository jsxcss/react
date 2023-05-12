import { PropsWithChildren, useMemo } from 'react'
import { css } from '@emotion/react'
import { creatMediaQuerySet } from '@jsxcss/core'

export const { MediaQueryContext, useMediaQuery, createMediaQuery } = creatMediaQuerySet(css)

export const MediaQueryProvider = ({ children, pxs = [0, 768, 992, 1200] }: PropsWithChildren<{ pxs?: number[] }>) => {
  const value = useMemo(() => {
    const breakpoints = pxs.map((bp) => `@media (min-width: ${bp}px)` as const)
    return createMediaQuery(breakpoints)
  }, [...pxs])

  return <MediaQueryContext.Provider value={value}>{children}</MediaQueryContext.Provider>
}
