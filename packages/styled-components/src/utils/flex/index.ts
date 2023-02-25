import { FlexOptions } from '@jsxcss/core'
import { css } from 'styled-components'

export const flex = ({ direction = 'row', justify = 'flex-start', align = 'stretch' }: FlexOptions) => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
`
