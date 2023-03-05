import type { ComponentPropsWithRef, ElementType } from 'react'
import { forwardRef } from 'react'
import { BoxProps, JSXCSSBox } from '@jsxcss/core'
import styled from 'styled-components'

const As = styled.div``
export const Box: JSXCSSBox = forwardRef(function Flex<T extends ElementType>(
  props: BoxProps<T>,
  ref: ComponentPropsWithRef<T>['ref']
) {
  const { as = 'div', ...rest } = props
  return <As as={as} ref={ref} {...rest} />
})
