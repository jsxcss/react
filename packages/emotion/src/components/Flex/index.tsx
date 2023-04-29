import type { ComponentPropsWithRef, ElementType } from 'react'
import { forwardRef } from 'react'
import { FlexComponentType, FlexOption, FlexProps } from '@jsxcss/core'
import * as utils from '../../utils'
import { Box } from '../Box'

const createFlexComponent = (flexOption: FlexOption = {}): FlexComponentType =>
  forwardRef(function Flex<T extends ElementType>(props: FlexProps<T>, ref: ComponentPropsWithRef<T>['ref']) {
    const {
      as = 'div',
      direction = flexOption.direction,
      justify = flexOption.justify,
      align = flexOption.align,
      ...rest
    } = props

    return <Box {...rest} as={as} ref={ref} css={utils.flex({ direction, align, justify })} />
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
