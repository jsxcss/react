import type { ComponentPropsWithRef, ElementType } from 'react'
import { forwardRef } from 'react'
import { css } from '@emotion/react'
import { FlexComponentType, FlexOption, FlexProps } from '@jsxcss/core'
import { useMediaQuery } from '../../contexts'
import * as utils from '../../utils'
import { box } from '../../utils'
import { Box } from '../Box'

const createFlexComponent = (flexOption: FlexOption = {}): FlexComponentType =>
  forwardRef(function Flex<T extends ElementType>(props: FlexProps<T>, ref: ComponentPropsWithRef<T>['ref']) {
    const mediaQuery = useMediaQuery()

    const {
      as = 'div',
      direction = flexOption.direction,
      justify = flexOption.justify,
      align = flexOption.align,

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

    return (
      <Box
        as={as}
        ref={ref}
        css={css(
          utils.flex({ direction, align, justify }, mediaQuery),
          box(
            {
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
            },
            mediaQuery
          )
        )}
        {...rest}
      />
    )
  })

type FlexType = FlexComponentType & {
  Center: FlexComponentType
  CenterVertical: FlexComponentType
  CenterHorizontal: FlexComponentType
}

export const Flex = createFlexComponent() as FlexType
Flex.Center = createFlexComponent({ align: 'center', justify: 'center' })
Flex.CenterVertical = createFlexComponent({ align: 'center' })
Flex.CenterHorizontal = createFlexComponent({ justify: 'center' })
