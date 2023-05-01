import { css } from '@emotion/react'
import { GutterOption, OptionWithMediaQuery } from '@jsxcss/core'
import { MediaQuery } from '../../contexts'

export const gutter = ({ spacing = 24 }: OptionWithMediaQuery<GutterOption>, mediaQuery?: MediaQuery) => {
  if (mediaQuery) {
    return css(
      ...mediaQuery.fn({
        gap: spacing,
      })
    )
  }

  if (Array.isArray(spacing)) {
    throw new Error('If you want to use array, mediaQuery is required')
  }

  return css({ gap: spacing })
}
