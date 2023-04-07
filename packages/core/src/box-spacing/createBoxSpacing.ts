import { AnyFunction, CSSPixelValue, coerceCssPixelValue } from '../utils'

type BoxSpacingOptionProperty = 'x' | 'y' | 'top' | 'right' | 'bottom' | 'left'
type BoxSpacingOptionObjectCase<T extends BoxSpacingOptionProperty> = {
  [key in T]?: CSSPixelValue
} & {
  [key in Exclude<BoxSpacingOptionProperty, T>]?: never
}

type CSSProperty = 'padding' | 'margin'

export type BoxSpacingOption =
  | BoxSpacingOptionObjectCase<'x' | 'y'>
  | BoxSpacingOptionObjectCase<'top' | 'right' | 'bottom' | 'left'>
  | BoxSpacingOptionObjectCase<'x' | 'top' | 'bottom'>
  | BoxSpacingOptionObjectCase<'y' | 'right' | 'left'>
  | CSSPixelValue

export const createSpacing =
  <T extends AnyFunction = AnyFunction>(css: T) =>
  (cssProperty: CSSProperty) =>
  (option: BoxSpacingOption): ReturnType<T> => {
    if (typeof option === 'number' || typeof option === 'string') {
      return css(`
      ${cssProperty}: ${coerceCssPixelValue(option)};
    `)
    }

    const box: BoxSpacingOptionObjectCase<'top' | 'right' | 'bottom' | 'left'> = {}

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

    if (box.top != null && box.right != null && box.bottom != null && box.left != null) {
      return css(`
      ${cssProperty}: ${coerceCssPixelValue(box.top)} ${coerceCssPixelValue(box.right)}
        ${coerceCssPixelValue(box.bottom)} ${coerceCssPixelValue(box.left)}
    `)
    }

    const style = Object.entries(box)
      .filter(([, value]) => value != null)
      .map(([dir, value]) => `${cssProperty}-${dir}: ${coerceCssPixelValue(value!)}`)
      .join(';')

    return css(style)
  }
