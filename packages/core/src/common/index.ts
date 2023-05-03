import { ComponentPropsWithoutRef, ElementType } from 'react'

export type AsProps<C extends ElementType> = ComponentPropsWithoutRef<C> & {
  as?: C
}

export type AxisDirection = 'vertical' | 'horizontal'

export type CSSPixelValue = string | number

export const error = {
  mediaQueryRequiredIn: (scope: string) =>
    new Error(
      `${scope}:::: If you want to use an array for properties of @jsxcss/emotion, you must have a MediaQueryProvider in parent component.`
    ),
}
