import type { ComponentPropsWithRef, ElementType } from 'react'
import { forwardRef } from 'react'
import { css } from '@emotion/react'
import { AxisDirection, StackComponentType, StackOption, StackProps } from '@jsxcss/core'
import { useMediaQuery } from '../../contexts'
import { flex, gutter } from '../../utils'
import { Box } from '../Box'

const createStackComponent = (defaultStackOption: StackOption = {}): StackComponentType =>
  forwardRef(function Stack<T extends ElementType>(props: StackProps<T>, ref: ComponentPropsWithRef<T>['ref']) {
    const mediaQuery = useMediaQuery()

    const {
      as = 'div',
      direction = defaultStackOption.direction,
      spacing = defaultStackOption.spacing,
      align = defaultStackOption.align,
      justify = defaultStackOption.justify,
      ...rest
    } = props
    return (
      <Box
        {...rest}
        as={as}
        ref={ref}
        css={css(
          flex(
            {
              direction: Array.isArray(direction) ? getFlexDirectionInArray(direction) : getFlexDirection(direction),
              align,
              justify,
            },
            mediaQuery
          ),
          gutter({ spacing }, mediaQuery)
        )}
      />
    )
  })

type StackType = StackComponentType & {
  Vertical: StackComponentType
  Horizontal: StackComponentType
}

export const Stack = createStackComponent({ direction: 'vertical' }) as StackType
Stack.Vertical = createStackComponent({ direction: 'vertical' })
Stack.Horizontal = createStackComponent({ direction: 'horizontal' })

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
