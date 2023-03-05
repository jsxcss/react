import { ComponentPropsWithRef, ElementType, forwardRef } from 'react'
import { JSXCSSStack, StackProps } from '@jsxcss/core'
import styled, { css } from 'styled-components'
import { flex, gutter } from '../../utils'

const As = styled.div``
export const BaseStack: JSXCSSStack = forwardRef(function Stack<T extends ElementType>(
  props: StackProps<T>,
  ref: ComponentPropsWithRef<T>['ref']
) {
  const { as = 'div', direction = 'vertical', spacing = 24, selector, align, justify, ...rest } = props
  return (
    <As
      as={as}
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
  props: StackProps<T>,
  ref: ComponentPropsWithRef<T>['ref']
) {
  const { as = 'div', spacing = 24, selector, align, justify, ...rest } = props
  return (
    <As
      as={as}
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
  props: StackProps<T>,
  ref: ComponentPropsWithRef<T>['ref']
) {
  const { as = 'div', spacing = 24, selector, align, justify, ...rest } = props
  return (
    <As
      as={as}
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
