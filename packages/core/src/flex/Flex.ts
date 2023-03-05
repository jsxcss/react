import { CSSProperties, ComponentPropsWithRef, ElementType } from 'react'
import { AsComponentPropsWithoutRef } from '../common'

export type JSXCSSFlex = <C extends ElementType = ElementType>(
  props: FlexProps<C> & Pick<ComponentPropsWithRef<C>, 'ref'>
) => JSX.Element | null

export type FlexOptions = {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
}

export type FlexProps<C extends ElementType = ElementType> = AsComponentPropsWithoutRef<C> & FlexOptions
