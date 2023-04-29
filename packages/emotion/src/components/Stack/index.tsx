import type { ComponentPropsWithRef, ElementType } from 'react'
import { forwardRef } from 'react'
import { StackComponentType, StackOption, StackProps } from '@jsxcss/core'
import { stack } from '../../utils'
import { Box } from '../Box'

const createStackComponent = (defaultStackOption: StackOption = {}): StackComponentType =>
  forwardRef(function Stack<T extends ElementType>(props: StackProps<T>, ref: ComponentPropsWithRef<T>['ref']) {
    const {
      as = 'div',
      direction = defaultStackOption.direction,
      spacing = defaultStackOption.spacing,
      selector = defaultStackOption.selector,
      align = defaultStackOption.align,
      justify = defaultStackOption.justify,
      ...rest
    } = props
    return <Box {...rest} as={as} ref={ref} css={stack({ direction, spacing, selector, align, justify })} />
  })

type StackType = StackComponentType & {
  Vertical: StackComponentType
  Horizontal: StackComponentType
}

export const Stack = createStackComponent() as StackType
Stack.Vertical = createStackComponent({ direction: 'vertical' })
Stack.Horizontal = createStackComponent({ direction: 'horizontal' })
