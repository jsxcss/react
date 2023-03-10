import { CSSProperties, ComponentPropsWithRef, ElementType } from 'react'
import { AsProps } from '../common'

export type FlexOptions = {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
}

export type FlexProps<T extends ElementType = 'div'> = AsProps<T> & FlexOptions

export type FlexComponentType = <T extends ElementType = 'div'>(
  props: FlexProps<T> & Partial<Pick<ComponentPropsWithRef<T>, 'ref'>>
) => JSX.Element | null
