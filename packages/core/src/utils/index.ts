import { AxisDirection, BoxOption, FlexOption, GutterOption, StackOption } from '../layout-components'
import { CSSPropertiesWithMediaQuery, OptionWithMediaQuery } from '../responsive'

const error = {
  mediaQueryRequiredIn: (scope: string) =>
    new Error(
      `${scope}:::: If you want to use an array for properties of @jsxcss, you must have a MediaQueryProvider in parent component.`
    ),
}

export const createUtils = <T extends (...args: any[]) => any>(css: T) => {
  type MediaQuery = (cssPropertiesWithMediaQuery: CSSPropertiesWithMediaQuery) => ReturnType<T>

  const box = (option: OptionWithMediaQuery<BoxOption>, mediaQuery?: MediaQuery) => {
    if (mediaQuery) {
      return css(mediaQuery(option))
    }
    if (values(option).find(Array.isArray)) {
      throw error.mediaQueryRequiredIn('box')
    }
    const noArrayOption = option as Parameters<typeof css>[0]

    return css(noArrayOption)
  }

  const flex = (option: OptionWithMediaQuery<FlexOption>, mediaQuery?: MediaQuery): ReturnType<T> => {
    const { direction = 'row', justify = 'flex-start', align = 'stretch' } = option

    if (mediaQuery) {
      return css(mediaQuery({ display: 'flex', flexDirection: direction, alignItems: align, justifyContent: justify }))
    }

    if (Array.isArray(direction) || Array.isArray(justify) || Array.isArray(align)) {
      throw error.mediaQueryRequiredIn('flex')
    }

    return css({ display: 'flex', flexDirection: direction, alignItems: align, justifyContent: justify })
  }

  const gutter = ({ spacing = 0 }: OptionWithMediaQuery<GutterOption>, mediaQuery?: MediaQuery) => {
    if (mediaQuery) {
      return css(mediaQuery({ gap: spacing }))
    }

    if (Array.isArray(spacing)) {
      throw new Error('If you want to use array, mediaQuery is required')
    }

    return css({ gap: spacing })
  }

  const stack = ({ direction, justify, align, spacing }: OptionWithMediaQuery<StackOption>, mediaQuery?: MediaQuery) =>
    css(
      flex({ direction: getAxisDirectionToFlexDirection(direction), align, justify }, mediaQuery),
      gutter({ spacing }, mediaQuery)
    )

  return {
    box,
    flex,
    gutter,
    stack,
  }
}

const values = <T extends object>(obj: T) => Object.values(obj) as T[keyof T][]

const getAxisDirectionToFlexDirection = (axisDirection: AxisDirection | (AxisDirection | undefined)[] = 'vertical') =>
  Array.isArray(axisDirection)
    ? axisDirection.map((by = 'vertical') => toFlexDirection[by])
    : toFlexDirection[axisDirection]
const toFlexDirection = {
  horizontal: 'row',
  vertical: 'column',
} as const
