import { ComponentPropsWithRef, ElementType } from 'react'
import { AsComponentPropsWithoutRef } from '../common'

export type JSXCSSBox = <C extends ElementType = ElementType>(
  props: BoxProps<C> & { ref?: ComponentPropsWithRef<C>['ref'] }
) => JSX.Element | null

export type BoxProps<C extends ElementType = ElementType> = AsComponentPropsWithoutRef<C>
