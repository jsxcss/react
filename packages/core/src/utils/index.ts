export type AnyFunction = (...params: any[]) => any
export type CSSPixelValue = string | number

export const coerceCssPixelValue = (value: CSSPixelValue) => (typeof value === 'string' ? value : `${value}px`)
