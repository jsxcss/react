import { ComponentPropsWithRef, ElementType } from 'react'
import { AsComponentPropsWithoutRef } from '../common'

export type JSXCSSBox = <C extends ElementType = 'div'>(
  props: BoxProps<C> & { ref?: ComponentPropsWithRef<C>['ref'] }
) => JSX.Element | null

export type BoxProps<C extends ElementType = 'div'> = AsComponentPropsWithoutRef<C>
