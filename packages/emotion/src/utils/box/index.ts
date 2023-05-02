import { css } from '@emotion/react'
import { BoxOption, OptionWithMediaQuery, error } from '@jsxcss/core'
import { MediaQuery } from '../../contexts'

export const box = (
  {
    border,
    borderColor,
    borderRadius,
    borderStyle,
    borderWidth,

    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,

    width,
    maxWidth,
    minWidth,
    height,
    maxHeight,
    minHeight,
  }: OptionWithMediaQuery<BoxOption>,
  mediaQuery?: MediaQuery
) => {
  if (mediaQuery) {
    return css(
      ...mediaQuery.css({ height, maxHeight, maxWidth, minHeight, minWidth, width }),
      ...mediaQuery.css({ border, borderColor, borderRadius, borderStyle, borderWidth }),
      ...mediaQuery.css({
        // padding
        padding,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop,
        // margin
        margin,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
      })
    )
  }

  if (
    // padding
    Array.isArray(padding) ||
    Array.isArray(paddingBottom) ||
    Array.isArray(paddingLeft) ||
    Array.isArray(paddingRight) ||
    Array.isArray(paddingTop) ||
    // margin
    Array.isArray(margin) ||
    Array.isArray(marginBottom) ||
    Array.isArray(marginLeft) ||
    Array.isArray(marginRight) ||
    Array.isArray(marginTop)
  ) {
    throw error.mediaQueryRequiredIn('boxSpacing')
  }

  if (
    Array.isArray(height) ||
    Array.isArray(maxHeight) ||
    Array.isArray(maxWidth) ||
    Array.isArray(minHeight) ||
    Array.isArray(minWidth) ||
    Array.isArray(width)
  ) {
    throw error.mediaQueryRequiredIn('size')
  }

  if (
    Array.isArray(border) ||
    Array.isArray(borderColor) ||
    Array.isArray(borderRadius) ||
    Array.isArray(borderStyle) ||
    Array.isArray(borderWidth)
  ) {
    throw error.mediaQueryRequiredIn('border')
  }

  return css(
    css({ height, maxHeight, maxWidth, minHeight, minWidth, width }),
    css({ border, borderColor, borderRadius, borderStyle, borderWidth }),
    css({
      // padding
      padding,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      // margin
      margin,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
    })
  )
}
