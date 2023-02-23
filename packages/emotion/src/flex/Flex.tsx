import type { CSSProperties, ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType } from 'react'
import { forwardRef } from 'react'
import { css } from '@emotion/react'

interface FlexOptions {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
}

type FlexProps<C extends ElementType> = {
  as?: C
} & ComponentPropsWithoutRef<C> &
  FlexOptions

export const Flex: <C extends ElementType = 'div'>(
  flexProps: FlexProps<C> & { ref?: ComponentPropsWithRef<C>['ref'] }
) => JSX.Element | null = forwardRef(function Flex<T extends ElementType>(
  { as, align = 'stretch', direction = 'row', justify = 'flex-start', ...rest }: FlexProps<T>,
  ref: ComponentPropsWithRef<T>['ref']
) {
  const Element = as || 'div'

  return (
    <Element
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
