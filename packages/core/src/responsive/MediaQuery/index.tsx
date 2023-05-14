import { CSSProperties } from 'react'

export type OptionWithMediaQuery<T extends { [property: string]: any }> = { [key in keyof T]: T[key][] | T[key] }

export type CSSPropertiesWithMediaQuery = {
  [key in keyof CSSProperties]: CSSProperties[key] | CSSProperties[key][]
}
