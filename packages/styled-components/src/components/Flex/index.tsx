import type { ComponentPropsWithRef, ElementType } from 'react'
import { forwardRef } from 'react'
import { FlexProps, JSXCSSFlex } from '@jsxcss/core'
import styled from 'styled-components'
import { flex } from '../../utils'

const As = styled.div``
export const Flex: JSXCSSFlex = forwardRef(function Flex<T extends ElementType>(
  { as, align = 'stretch', direction = 'row', justify = 'flex-start', ...rest }: FlexProps<T>,
  ref: ComponentPropsWithRef<T>['ref']
) {
  return <As as={as || 'div'} ref={ref} css={flex({ direction, align, justify })} {...rest} />
})
