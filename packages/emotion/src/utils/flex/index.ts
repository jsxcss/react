import { css } from '@emotion/react'
import { FlexOption, OptionWithMediaQuery, error } from '@jsxcss/core'
import { MediaQuery } from '../../responsive'

export const flex = (
  { direction = 'row', justify = 'flex-start', align = 'stretch' }: OptionWithMediaQuery<FlexOption>,
  mediaQuery?: MediaQuery
) => {
  if (mediaQuery) {
    return css(
      mediaQuery({
        display: 'flex',
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
      })
    )
  }

  if (Array.isArray(direction) || Array.isArray(justify) || Array.isArray(align)) {
    throw error.mediaQueryRequiredIn('flex')
  }

  return css({
    display: 'flex',
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
  })
}
