export type OptionWithMediaQuery<T extends { [property: string]: any }> = { [key in keyof T]: T[key][] | T[key] }
