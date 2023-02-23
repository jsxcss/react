import { CSSProperties, ComponentPropsWithoutRef, ElementType } from 'react'

export interface FlexOptions {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
}

export type FlexProps<C extends ElementType> = {
  as?: C
} & ComponentPropsWithoutRef<C> &
  FlexOptions
