/** @jsxImportSource @emotion/react */
import type { ComponentPropsWithRef, ElementType } from 'react'
import { forwardRef } from 'react'
import { FlexProps, JSXCSSFlex } from '@jsxcss/core'
import { flex } from '../../utils'

export const Flex: JSXCSSFlex = forwardRef(function Flex<T extends ElementType>(
  { as, direction = 'row', justify = 'flex-start', align = 'stretch', ...rest }: FlexProps<T>,
  ref: ComponentPropsWithRef<T>['ref']
) {
  const As = as || 'div'
  return <As ref={ref} css={flex({ direction, align, justify })} {...rest} />
})
