import type { ComponentPropsWithRef, ElementType } from 'react'
import { forwardRef } from 'react'
import { css } from '@emotion/react'
import { FlexProps, JsxCssFlex } from '@jsxcss/core'

export const Flex: JsxCssFlex = forwardRef(function Flex<T extends ElementType>(
  { as, align = 'stretch', direction = 'row', justify = 'flex-start', ...rest }: FlexProps<T>,
  ref: ComponentPropsWithRef<T>['ref']
) {
  const As = as || 'div'
  return (
    <As
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
