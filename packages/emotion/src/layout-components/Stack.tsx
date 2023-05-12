import { ComponentPropsWithRef, ElementType, forwardRef, useContext } from 'react'
import { StackComponentType, StackOption, StackProps } from '@jsxcss/core'
import { Box } from './Box'
import { MediaQueryContext } from '../responsive'
import { stack } from '../utils'

const createStack = (defaultOption: StackOption = {}): StackComponentType =>
  forwardRef(function Stack<T extends ElementType>(props: StackProps<T>, ref: ComponentPropsWithRef<T>['ref']) {
    const mediaQuery = useContext(MediaQueryContext)

    const {
      as = 'div',
      direction = defaultOption.direction,
      spacing = defaultOption.spacing,
      align = defaultOption.align,
      justify = defaultOption.justify,
      ...rest
    } = props

    return <Box as={as} ref={ref} css={stack({ direction, align, justify, spacing }, mediaQuery)} {...rest} />
  })

type StackType = StackComponentType & {
  Vertical: StackComponentType
  Horizontal: StackComponentType
}

export const Stack = createStack({ direction: 'vertical' }) as StackType
Stack.Vertical = createStack({ direction: 'vertical' })
Stack.Horizontal = createStack({ direction: 'horizontal' })
