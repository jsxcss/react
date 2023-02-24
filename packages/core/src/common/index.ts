import { ComponentPropsWithoutRef, ElementType } from 'react'

export type AsComponentPropsWithoutRef<C extends ElementType> = {
  as?: C
} & ComponentPropsWithoutRef<C>
