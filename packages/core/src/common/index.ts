import { ComponentPropsWithoutRef, ElementType } from 'react'

export type AsProps<C extends ElementType> = ComponentPropsWithoutRef<C> & {
  as?: C
}

export type AxisDirection = 'vertical' | 'horizontal'

export type CSSPixelValue = string | number
