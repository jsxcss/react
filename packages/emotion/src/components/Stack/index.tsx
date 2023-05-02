import type { ComponentPropsWithRef, ElementType } from 'react'
import { forwardRef } from 'react'
import { css } from '@emotion/react'
import { AxisDirection, StackComponentType, StackOption, StackProps } from '@jsxcss/core'
import { useMediaQuery } from '../../contexts'
import { box, flex, gutter } from '../../utils'
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

      border,
      borderColor,
      borderRadius,
      borderStyle,
      borderWidth,
      height,
      margin,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      padding,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      width,
      ...rest
    } = props

    const flexDirection = Array.isArray(direction) ? getFlexDirectionInArray(direction) : getFlexDirection(direction)

    return (
      <Box
        as={as}
        ref={ref}
        css={css(
          flex({ direction: flexDirection, align, justify }, mediaQuery),
          gutter({ spacing }, mediaQuery),
          box(
            {
              borderColor,
              borderRadius,
              borderStyle,
              borderWidth,
              height,
              margin,
              marginBottom,
              marginLeft,
              marginRight,
              marginTop,
              maxHeight,
              maxWidth,
              minHeight,
              minWidth,
              padding,
              paddingBottom,
              paddingLeft,
              paddingRight,
              paddingTop,
              width,
            },
            mediaQuery
          )
        )}
        {...rest}
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
