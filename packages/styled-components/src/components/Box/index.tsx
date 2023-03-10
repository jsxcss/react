import type { ComponentPropsWithRef, ElementType } from 'react'
import { forwardRef } from 'react'
import { BoxComponentType, BoxProps } from '@jsxcss/core'
import styled from 'styled-components'

const Component = styled.div``
const createBoxComponent = (): BoxComponentType =>
  forwardRef(function Box<T extends ElementType>(props: BoxProps<T>, ref: ComponentPropsWithRef<T>['ref']) {
    const { as = 'div', ...rest } = props
    return <Component as={as} ref={ref} {...rest} />
  })

type BoxType = BoxComponentType

export type { BoxProps }
export const Box = createBoxComponent() as BoxType
