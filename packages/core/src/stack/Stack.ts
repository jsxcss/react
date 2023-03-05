import { ElementType } from 'react'
import { AsComponentPropsWithoutRef, RefOfComponent } from '../common'
import { FlexOptions } from '../flex'
import { GutterOptions } from '../gutter'

type StackOptions = Pick<FlexOptions, 'align' | 'justify'> & Partial<GutterOptions>
export type StackProps<C extends ElementType = ElementType> = AsComponentPropsWithoutRef<C> & StackOptions

export type JSXCSSStack = <C extends ElementType = ElementType>(
  props: StackProps<C> & RefOfComponent<C>
) => JSX.Element | null
