import { css } from '@emotion/react'
import { FlexOption, OptionWithMediaQuery } from '@jsxcss/core'
import { MediaQuery } from '../../contexts'

export const flex = (
  { direction = 'row', justify = 'flex-start', align = 'stretch' }: OptionWithMediaQuery<FlexOption>,
  mediaQuery?: MediaQuery
) => {
  if (mediaQuery) {
    return css(
      ...mediaQuery.fn({
        display: 'flex',
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
      })
    )
  }

  if (Array.isArray(direction) || Array.isArray(justify) || Array.isArray(align)) {
    throw new Error('If you want to use array, mediaQuery is required')
  }

  return css({
    display: 'flex',
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
  })
}
