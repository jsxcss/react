import { ComponentPropsWithRef, ElementType, forwardRef, useContext } from 'react'
import { FlexComponentType, FlexOption, FlexProps } from '@jsxcss/core'
import { MediaQueryContext } from '../../contexts'
import { flex } from '../../utils'
import { Box } from '../Box'

const createFlex = (defaultOption: FlexOption = {}): FlexComponentType =>
  forwardRef(function Flex<T extends ElementType>(props: FlexProps<T>, ref: ComponentPropsWithRef<T>['ref']) {
    const mediaQuery = useContext(MediaQueryContext)

    const {
      as = 'div',
      direction = defaultOption.direction,
      justify = defaultOption.justify,
      align = defaultOption.align,
      ...rest
    } = props

    return <Box as={as} ref={ref} css={flex({ direction, align, justify }, mediaQuery)} {...rest} />
  })

type FlexType = FlexComponentType & {
  Center: FlexComponentType
  CenterVertical: FlexComponentType
  CenterHorizontal: FlexComponentType
}

export const Flex = createFlex() as FlexType
Flex.Center = createFlex({ align: 'center', justify: 'center' })
Flex.CenterVertical = createFlex({ align: 'center' })
Flex.CenterHorizontal = createFlex({ justify: 'center' })
