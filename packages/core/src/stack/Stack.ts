import { ElementType } from 'react'
import { AsComponentPropsWithoutRef, RefOfComponent } from '../common'
import { FlexOptions } from '../flex'
import { GutterOptions } from '../gutter'

type StackOptions = Pick<FlexOptions, 'align' | 'justify'> & Partial<GutterOptions>
export type StackProps<C extends ElementType = 'div'> = AsComponentPropsWithoutRef<C> & StackOptions

export type JsxCssStack = <C extends ElementType = 'div'>(
  props: StackProps<C> & RefOfComponent<C>
) => JSX.Element | null
