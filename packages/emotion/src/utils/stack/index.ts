import { css } from '@emotion/react'
import { OptionWithMediaQuery, StackOption } from '@jsxcss/core'
import { MediaQuery } from '../../contexts'
import { flex } from '../flex'
import { gutter } from '../gutter'

export const stack = (
  { direction = 'vertical', spacing = 24, align, justify }: OptionWithMediaQuery<StackOption> = {},
  mediaQuery?: MediaQuery
) =>
  css(
    flex({ direction: direction === 'vertical' ? 'column' : 'row', align, justify }, mediaQuery),
    gutter({ spacing }, mediaQuery)
  )
