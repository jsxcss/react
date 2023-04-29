import { css } from '@emotion/react'
import { FlexOption } from '@jsxcss/core'

export const flex = ({ direction = 'row', justify = 'flex-start', align = 'stretch' }: FlexOption) =>
  css({
    display: 'flex',
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
  })
