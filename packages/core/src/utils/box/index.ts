import { CSSProperties } from 'react'
import { CSSPixelValue } from '../../common'

// box-shadow
export type BoxShadowOption =
  | {
      x?: number
      y?: number
      blur?: number
      spread?: number
      color?: string
    }
  | string

// box-border

export type BoxBorderOption =
  | {
      radius?: CSSProperties['borderRadius']
      width?: CSSProperties['borderWidth']
      style?: CSSProperties['borderStyle']
      color?: CSSProperties['borderColor']
    }
  | string

// box-spacing: padding, margin
type BoxSpacingOptionProperty = 'x' | 'y' | 'top' | 'right' | 'bottom' | 'left'
type BoxSpacingOptionObjectCase<T extends BoxSpacingOptionProperty> = {
  [key in T]?: CSSPixelValue
} & {
  [key in Exclude<BoxSpacingOptionProperty, T>]?: never
}

export type BoxSpacingOption =
  | BoxSpacingOptionObjectCase<'x' | 'y'>
  | BoxSpacingOptionObjectCase<'top' | 'right' | 'bottom' | 'left'>
  | BoxSpacingOptionObjectCase<'x' | 'top' | 'bottom'>
  | BoxSpacingOptionObjectCase<'y' | 'right' | 'left'>
  | CSSPixelValue

// box-size: height, minHeight, maxHeight, width, minWidth, maxWidth
export type BoxSizeOption = Pick<
  CSSProperties,
  'height' | 'minHeight' | 'maxHeight' | 'width' | 'minWidth' | 'maxWidth'
>

export type BoxColorOption = Pick<
  CSSProperties,
  | 'color'
  | 'backgroundColor'
  | 'borderColor'
  | 'borderTopColor'
  | 'borderRightColor'
  | 'borderBottomColor'
  | 'borderLeftColor'
  | 'outlineColor'
>
