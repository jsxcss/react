import { BoxSpacingOption } from '../box'

const xAxis = { left: 'left', right: 'right', center: 'center' } as const
const yAxis = { top: 'left', bottom: 'right' } as const
export type XAxis = keyof typeof xAxis
export type YAxis = keyof typeof yAxis

/** @see {@link https://www.figma.com/widget-docs/api/component-AutoLayout} */
export type AutoLayoutOption = {
  direction?: 'vertical' | 'horizontal'
  spacing?: number
  spacingMode?: 'packed' | 'space-between'
  padding?: BoxSpacingOption
  align?: XAxis | `${YAxis}-${XAxis}`
  // strokes?: 'excluded' | 'included'
  // canvasStacking?: 'first-on-top' | 'last-on-top'
  // alignTextBaseline?: boolean
}
