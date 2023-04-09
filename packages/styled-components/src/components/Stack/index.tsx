import { ComponentPropsWithRef, ElementType, forwardRef } from 'react'
import { StackComponentType, StackOptions, StackProps } from '@jsxcss/core'
import styled, { css } from 'styled-components'
import { flex, gutter } from '../../utils'

const Component = styled.div``
const createStackComponent = (stackOptions: StackOptions = {}): StackComponentType =>
  forwardRef(function Stack<T extends ElementType>(props: StackProps<T>, ref: ComponentPropsWithRef<T>['ref']) {
    const {
      as = 'div',
      direction = stackOptions.direction ?? 'vertical',
      spacing = stackOptions.spacing ?? 24,
      selector = stackOptions.selector,
      align = stackOptions.align,
      justify = stackOptions.justify,
      ...rest
    } = props
    return (
      <Component
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

type StackType = StackComponentType & {
  Vertical: StackComponentType
  Horizontal: StackComponentType
}

export type { StackProps }
export const Stack = createStackComponent() as StackType
Stack.Vertical = createStackComponent({ direction: 'vertical' })
Stack.Horizontal = createStackComponent({ direction: 'horizontal' })
