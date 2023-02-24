import { ComponentPropsWithRef, ElementType, forwardRef } from 'react'
import { FlexProps, JsxCssFlex } from '@jsxcss/core'
import styled, { css } from 'styled-components'

const As = styled.div``
export const Flex: JsxCssFlex = forwardRef(function Flex<T extends ElementType>(
  { as, align = 'stretch', direction = 'row', justify = 'flex-start', ...rest }: FlexProps<T>,
  ref: ComponentPropsWithRef<T>['ref']
) {
  return (
    <As
      as={as || 'div'}
      ref={ref}
      css={css`
        display: flex;
        flex-direction: ${direction};
        align-items: ${align};
        justify-content: ${justify};
      `}
      {...rest}
    />
  )
})
