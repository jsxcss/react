/** @jsxImportSource @emotion/react */
import type { ComponentPropsWithRef, ElementType } from 'react'
import { forwardRef } from 'react'
import { css } from '@emotion/react'
import { JSXCSSStack, StackProps } from '@jsxcss/core'
import { flex, gutter } from '../../utils'

export const BaseStack: JSXCSSStack = forwardRef(function Stack<T extends ElementType>(
  { as, direction = 'vertical', spacing = 24, selector, align, justify, ...rest }: StackProps<T>,
  ref: ComponentPropsWithRef<T>['ref']
) {
  const As = as || 'div'
  return (
    <As
      ref={ref}
      css={css`
        ${flex({ direction: direction === 'vertical' ? 'column' : 'row', align, justify })}
        ${gutter({ direction, spacing, selector })}
      `}
      {...rest}
    />
  )
})

export const StackVertical: JSXCSSStack = forwardRef(function Stack<T extends ElementType>(
  { as, direction, spacing = 24, selector, align, justify, ...rest }: StackProps<T>,
  ref: ComponentPropsWithRef<T>['ref']
) {
  const As = as || 'div'
  return (
    <As
      ref={ref}
      css={css`
        ${flex({ direction: 'column', align, justify })}
        ${gutter({ direction: 'vertical', spacing, selector })}
      `}
      {...rest}
    />
  )
})
export const StackHorizontal: JSXCSSStack = forwardRef(function Stack<T extends ElementType>(
  { as, direction, spacing = 24, selector, align, justify, ...rest }: StackProps<T>,
  ref: ComponentPropsWithRef<T>['ref']
) {
  const As = as || 'div'
  return (
    <As
      ref={ref}
      css={css`
        ${flex({ direction: 'row', align, justify })}
        ${gutter({ direction: 'horizontal', spacing, selector })}
      `}
      {...rest}
    />
  )
})

export const Stack = BaseStack as typeof BaseStack & {
  Vertical: typeof StackVertical
  Horizontal: typeof StackHorizontal
}
Stack.Vertical = StackVertical
Stack.Horizontal = StackHorizontal
