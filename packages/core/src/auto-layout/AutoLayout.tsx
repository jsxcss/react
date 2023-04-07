import { ComponentPropsWithRef, ElementType } from 'react'
import { BoxSpacingOption } from '../box-spacing'
import { AsProps } from '../common'

const xAxis = { left: 'left', right: 'right', center: 'center' } as const
const yAxis = { top: 'left', bottom: 'right' } as const
export type XAxis = keyof typeof xAxis
export type YAxis = keyof typeof yAxis

export type AutoLayoutOptions = {
  direction?: 'vertical' | 'horizontal'
  space?: number
  spacingMode?: 'packed' | 'space-between'
  padding?: BoxSpacingOption
  align?: XAxis | `${YAxis}-${XAxis}`
  // strokes?: 'excluded' | 'included'
  // canvasStacking?: 'first-on-top' | 'last-on-top'
  // alignTextBaseline?: boolean
}

export type AutoLayoutProps<T extends ElementType = 'div'> = AsProps<T> & AutoLayoutOptions

export type AutoLayoutComponentType = <T extends ElementType = 'div'>(
  props: AutoLayoutProps<T> & Partial<Pick<ComponentPropsWithRef<T>, 'ref'>>
) => JSX.Element | null
