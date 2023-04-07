import { AnyFunction } from '../utils'

export type BoxShadowOption =
  | {
      x?: number
      y?: number
      blur?: number
      spread?: number
      color?: string
    }
  | string

export const createBoxShadow =
  <T extends AnyFunction = AnyFunction>(css: T) =>
  (option: BoxShadowOption): ReturnType<T> =>
    css`
      box-shadow: ${typeof option === 'string'
        ? option
        : `${option.x ?? 0}px ${option.y ?? 0}px ${option.blur ?? 0}px ${option.spread ?? 0}px ${option.color ?? 0}`};
    `
