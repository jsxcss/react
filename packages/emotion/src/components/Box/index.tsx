import { ComponentPropsWithRef, ElementType, forwardRef } from 'react'
import { BoxComponentType, BoxProps } from '@jsxcss/core'

const createBoxComponent = (): BoxComponentType =>
  forwardRef(function Box<T extends ElementType>({ as, ...rest }: BoxProps<T>, ref: ComponentPropsWithRef<T>['ref']) {
    const Component = as || 'div'

    return <Component ref={ref} {...rest} />
  })

type BoxType = BoxComponentType

export const Box = createBoxComponent() as BoxType
