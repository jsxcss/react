import { CSSProperties } from 'react'

export type BoxOption = BoxSizeOption & BoxSpacingOption & BorderOption

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

export type BorderOption = Pick<
  CSSProperties,
  'borderRadius' | 'borderColor' | 'borderWidth' | 'border' | 'borderStyle'
>

// box-size: height, minHeight, maxHeight, width, minWidth, maxWidth
export type BoxSizeOption = Pick<
  CSSProperties,
  'height' | 'minHeight' | 'maxHeight' | 'width' | 'minWidth' | 'maxWidth'
>

export type BoxSpacingOption = BoxPaddingOption & BoxMarginOption

export type BoxPaddingOption = Pick<
  CSSProperties,
  'padding' | 'paddingBottom' | 'paddingLeft' | 'paddingTop' | 'paddingRight'
>

export type BoxMarginOption = Pick<
  CSSProperties,
  'margin' | 'marginBottom' | 'marginLeft' | 'marginTop' | 'marginRight'
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
