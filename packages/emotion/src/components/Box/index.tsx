import type { ComponentPropsWithRef, ElementType } from 'react'
import { forwardRef } from 'react'
import { BoxProps, JSXCSSBox } from '@jsxcss/core'

export const Box: JSXCSSBox = forwardRef(function Flex<T extends ElementType>(
  props: BoxProps<T>,
  ref: ComponentPropsWithRef<T>['ref']
) {
  const { as = 'div', ...rest } = props
  const As = as
  return <As ref={ref} {...rest} />
})
