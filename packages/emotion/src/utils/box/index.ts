import { css } from '@emotion/react'
import { BoxBorderOption, BoxColorOption, BoxShadowOption, BoxSizeOption, BoxSpacingOption } from '@jsxcss/core'

const createBoxSpacing =
  <CSSProperty extends 'padding' | 'margin'>(cssProperty: CSSProperty) =>
  (option: BoxSpacingOption) => {
    if (typeof option === 'number' || typeof option === 'string') {
      return css({ [cssProperty]: option })
    }

    const box: BoxSpacingOption = {}

    if (option.x !== undefined) {
      box.left = option.x
      box.right = option.x
    }
    if (option.y !== undefined) {
      box.top = option.y
      box.bottom = option.y
    }
    if (option.top !== undefined) {
      box.top = option.top
    }
    if (option.right !== undefined) {
      box.right = option.right
    }
    if (option.bottom !== undefined) {
      box.bottom = option.bottom
    }
    if (option.left !== undefined) {
      box.left = option.left
    }

    return css({
      [`${cssProperty}Top`]: option.y ?? option.top,
      [`${cssProperty}Bottom`]: option.y ?? option.bottom,
      [`${cssProperty}Left`]: option.x ?? option.left,
      [`${cssProperty}Right`]: option.x ?? option.right,
    })
  }

export const padding = createBoxSpacing('padding')
export const margin = createBoxSpacing('margin')
export const shadow = (option: BoxShadowOption) =>
  typeof option === 'string'
    ? css({ boxShadow: option })
    : css({
        boxShadow: `${option.x ?? 0}px ${option.y ?? 0}px ${option.blur ?? 0}px ${option.spread ?? 0}px ${
          option.color ?? 0
        }`,
      })

export const border = (option: BoxBorderOption) =>
  typeof option === 'string'
    ? css({ border: option })
    : css({
        borderRadius: option.radius,
        borderStyle: option.style,
        borderColor: option.color,
        borderWidth: option.width,
      })

export const size = (option: BoxSizeOption) => css(option)

export const color = (option: BoxColorOption) => css(option)
