import { ComponentPropsWithRef, ElementType } from 'react'
import { AsProps } from '../common'
import { FlexOptions } from '../flex'
import { GutterOptions } from '../gutter'

export type StackOptions = Pick<FlexOptions, 'align' | 'justify'> & Partial<GutterOptions>

export type StackProps<T extends ElementType = 'div'> = AsProps<T> & StackOptions

export type StackComponentType = <T extends ElementType = 'div'>(
  props: StackProps<T> & Partial<Pick<ComponentPropsWithRef<T>, 'ref'>>
) => JSX.Element | null
