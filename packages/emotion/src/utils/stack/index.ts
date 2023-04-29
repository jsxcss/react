import { css } from '@emotion/react'
import { StackOption } from '@jsxcss/core'
import { flex } from '../flex'
import { gutter } from '../gutter'

export const stack = ({ direction = 'vertical', spacing = 24, align, justify, selector }: StackOption = {}) =>
  css(
    flex({ direction: direction === 'vertical' ? 'column' : 'row', align, justify }),
    gutter({ direction, spacing, selector })
  )
