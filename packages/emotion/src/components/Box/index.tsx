import { ComponentPropsWithRef, ElementType, forwardRef } from 'react'

import { BoxComponentType, BoxProps } from '@jsxcss/core'
import { useMediaQuery } from '../../contexts'
import { box } from '../../utils'

const createBoxComponent = (): BoxComponentType =>
  forwardRef(function Box<T extends ElementType>(props: BoxProps<T>, ref: ComponentPropsWithRef<T>['ref']) {
    const mediaQuery = useMediaQuery()

    const {
      as = 'div',

      // size
      height,
      width,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,

      // boxSpacing
      margin,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      padding,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,

      // border
      border,
      borderColor,
      borderRadius,
      borderStyle,
      borderWidth,

      ...rest
    } = props
    const Component = as

    return (
      <Component
        ref={ref}
        css={box(
          {
            // size
            height,
            width,
            maxHeight,
            maxWidth,
            minHeight,
            minWidth,

            // boxSpacing
            margin,
            marginBottom,
            marginLeft,
            marginRight,
            marginTop,
            padding,
            paddingBottom,
            paddingLeft,
            paddingRight,
            paddingTop,

            // border
            border,
            borderColor,
            borderRadius,
            borderStyle,
            borderWidth,
          },
          mediaQuery
        )}
        {...rest}
      />
    )
  })

type BoxType = BoxComponentType

export const Box = createBoxComponent() as BoxType
