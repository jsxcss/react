import type { ComponentPropsWithRef, ElementType } from 'react'
import { forwardRef } from 'react'
import { BoxComponentType, BoxProps } from '@jsxcss/core'

const createBoxComponent = (): BoxComponentType =>
  forwardRef(function Box<T extends ElementType>(props: BoxProps<T>, ref: ComponentPropsWithRef<T>['ref']) {
    const { as = 'div', ...rest } = props
    const Component = as
    return <Component ref={ref} {...rest} />
  })

type BoxType = BoxComponentType

export type { BoxProps }
export const Box = createBoxComponent() as BoxType
