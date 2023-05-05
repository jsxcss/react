import { css } from '@emotion/react'
import { BoxOption, OptionWithMediaQuery, error } from '@jsxcss/core'
import { MediaQuery } from '../../responsive'

const values = <T extends object>(obj: T) => Object.values(obj) as T[keyof T][]

export const box = (option: OptionWithMediaQuery<BoxOption>, mediaQuery?: MediaQuery) => {
  if (mediaQuery) {
    return css(mediaQuery(option))
  }
  if (values(option).find(Array.isArray)) {
    throw error.mediaQueryRequiredIn('box')
  }
  const noArrayOption = option as Parameters<typeof css>[0]

  return css(noArrayOption)
}
