import { AxisDirection, GutterOptions } from '@jsxcss/core'
import { css } from 'styled-components'

export const gutter = ({ direction, spacing = 24, selector = '*:not(style)' }: GutterOptions) =>
  get[direction]({ spacing, selector })

const get: {
  [key in AxisDirection]: (options: Required<Pick<GutterOptions, 'spacing' | 'selector'>>) => ReturnType<typeof css>
} = {
  horizontal: ({ spacing, selector }) => css`
    & > ${selector} ~ ${selector} {
      margin-left: ${spacing}px;
    }
  `,
  vertical: ({ spacing, selector }) => css`
    & > ${selector} ~ ${selector} {
      margin-top: ${spacing}px;
    }
  `,
}
