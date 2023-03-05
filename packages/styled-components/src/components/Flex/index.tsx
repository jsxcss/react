import { ComponentPropsWithRef, ElementType, forwardRef } from 'react'
import { FlexProps, JSXCSSFlex } from '@jsxcss/core'
import styled from 'styled-components'
import { flex } from '../../utils'

const As = styled.div``
export const Flex: JSXCSSFlex = forwardRef(function Flex<T extends ElementType>(
  props: FlexProps<T>,
  ref: ComponentPropsWithRef<T>['ref']
) {
  const { as = 'div', align = 'stretch', direction = 'row', justify = 'flex-start', ...rest } = props
  return <As as={as} ref={ref} css={flex({ direction, align, justify })} {...rest} />
})
