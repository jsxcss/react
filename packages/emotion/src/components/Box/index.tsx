/** @jsxImportSource @emotion/react */
import type { ComponentPropsWithRef, ElementType } from 'react'
import { forwardRef } from 'react'
import { BoxProps, JSXCSSBox } from '@jsxcss/core'

export const Box: JSXCSSBox = forwardRef(function Flex<T extends ElementType>(
  { as, ...rest }: BoxProps<T>,
  ref: ComponentPropsWithRef<T>['ref']
) {
  const As = as || 'div'
  return <As ref={ref} {...rest} />
})
