import { ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

export type AsComponentPropsWithoutRef<C extends ElementType> = {
  as?: C
  children?: ReactNode
} & ComponentPropsWithoutRef<C>

export type AxisDirection = 'vertical' | 'horizontal'

export type RefOfComponent<C extends ElementType> = { ref?: ComponentPropsWithRef<C>['ref'] }
