import type { ComponentPropsWithRef, ElementType } from 'react'
import { forwardRef } from 'react'
import { FlexComponentType, FlexOptions, FlexProps } from '@jsxcss/core'
import { flex } from '../../utils'

const createFlexComponent = (flexOptions?: FlexOptions): FlexComponentType =>
  forwardRef(function Flex<T extends ElementType>(props: FlexProps<T>, ref: ComponentPropsWithRef<T>['ref']) {
    const {
      as = 'div',
      direction = flexOptions?.direction ?? 'row',
      justify = flexOptions?.justify ?? 'flex-start',
      align = flexOptions?.align ?? 'stretch',
      ...rest
    } = props
    const Component = as
    return <Component ref={ref} css={flex({ direction, align, justify })} {...rest} />
  })

type FlexType = FlexComponentType & {
  Center: FlexComponentType
  CenterVertical: FlexComponentType
  CenterHorizontal: FlexComponentType
}

export type { FlexProps }
export const Flex = createFlexComponent() as FlexType
Flex.Center = createFlexComponent({ align: 'center', justify: 'center' })
Flex.CenterVertical = createFlexComponent({ align: 'center' })
Flex.CenterHorizontal = createFlexComponent({ justify: 'center' })
