import { CSSProperties, ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType } from 'react'
import { OptionWithMediaQuery } from '../responsive'

type AsProps<C extends ElementType> = ComponentPropsWithoutRef<C> & { as?: C }
type OmittingKey =
  | keyof FlexOption
  | keyof StackOption
  | keyof GutterOption
  | `Moz${string}`
  | `Webkit${string}`
  | `ms${string}`
export interface BoxOption extends Omit<CSSProperties, OmittingKey> {}
export type BoxProps<T extends ElementType = 'div'> = AsProps<T> & OptionWithMediaQuery<BoxOption>
export type BoxComponentType = <T extends ElementType = 'div'>(
  props: BoxProps<T> & Partial<Pick<ComponentPropsWithRef<T>, 'ref'>>
) => JSX.Element | null

export interface FlexOption {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
}
export type FlexProps<T extends ElementType = 'div'> = BoxProps<T> & OptionWithMediaQuery<FlexOption>
export type FlexComponentType = <T extends ElementType = 'div'>(
  props: FlexProps<T> & Partial<Pick<ComponentPropsWithRef<T>, 'ref'>>
) => JSX.Element | null

export type AxisDirection = 'vertical' | 'horizontal'
export interface GutterOption {
  spacing?: CSSProperties['gap']
}
export interface StackOption extends Pick<FlexOption, 'align' | 'justify'>, GutterOption {
  direction?: AxisDirection
}
export type StackProps<T extends ElementType = 'div'> = BoxProps<T> & OptionWithMediaQuery<StackOption>
export type StackComponentType = <T extends ElementType = 'div'>(
  props: StackProps<T> & Partial<Pick<ComponentPropsWithRef<T>, 'ref'>>
) => JSX.Element | null
