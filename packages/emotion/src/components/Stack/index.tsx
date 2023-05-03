import { ComponentPropsWithRef, ElementType, forwardRef, useContext } from 'react'
import { css } from '@emotion/react'
import { AxisDirection, StackComponentType, StackOption, StackProps } from '@jsxcss/core'
import { MediaQueryContext } from '../../contexts'
import { flex, gutter } from '../../utils'
import { Box } from '../Box'

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

    const flexDirection = Array.isArray(direction) ? getFlexDirectionInArray(direction) : getFlexDirection(direction)

    return (
      <Box
        as={as}
        ref={ref}
        css={css(flex({ direction: flexDirection, align, justify }, mediaQuery), gutter({ spacing }, mediaQuery))}
        {...rest}
      />
    )
  })

type StackType = StackComponentType & {
  Vertical: StackComponentType
  Horizontal: StackComponentType
}

export const Stack = createStack({ direction: 'vertical' }) as StackType
Stack.Vertical = createStack({ direction: 'vertical' })
Stack.Horizontal = createStack({ direction: 'horizontal' })

const getFlexDirectionInArray = (axisDirections: (AxisDirection | undefined)[]) => axisDirections.map(getFlexDirection)
const getFlexDirection = (axisDirection?: AxisDirection) => {
  switch (axisDirection) {
    case 'horizontal': {
      return 'row'
    }
    case 'vertical': {
      return 'column'
    }
    default: {
      return undefined
    }
  }
}
