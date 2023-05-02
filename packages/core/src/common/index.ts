import { ComponentPropsWithoutRef, ElementType } from 'react'

export type AsProps<C extends ElementType> = ComponentPropsWithoutRef<C> & {
  as?: C
}

export type AxisDirection = 'vertical' | 'horizontal'

export type CSSPixelValue = string | number

export const error = {
  mediaQueryRequiredIn: (scope: string) => new Error(`${scope}:::: If you want to use array, mediaQuery is required`),
}
