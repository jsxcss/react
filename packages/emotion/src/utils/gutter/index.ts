import { css } from '@emotion/react'
import { AxisDirection, GutterOption } from '@jsxcss/core'

export const gutter = ({ direction, spacing = 24, selector = '*:not(style)' }: GutterOption) =>
  get[direction]({ spacing, selector })

const get: {
  [key in AxisDirection]: (option: Required<Pick<GutterOption, 'spacing' | 'selector'>>) => ReturnType<typeof css>
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
