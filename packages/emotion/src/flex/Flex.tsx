import type { ComponentPropsWithRef, ElementType } from 'react'
import { forwardRef } from 'react'
import { css } from '@emotion/react'
import { FlexProps } from '@fullcss/core'

export const Flex: <C extends ElementType = 'div'>(
  flexProps: FlexProps<C> & { ref?: ComponentPropsWithRef<C>['ref'] }
) => JSX.Element | null = forwardRef(function Flex<T extends ElementType>(
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
