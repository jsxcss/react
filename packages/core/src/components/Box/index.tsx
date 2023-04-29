import { ComponentPropsWithRef, ElementType } from 'react'
import { AsProps } from '../../common'

export type BoxProps<T extends ElementType = 'div'> = AsProps<T>

export type BoxComponentType = <T extends ElementType = 'div'>(
  props: BoxProps<T> & Partial<Pick<ComponentPropsWithRef<T>, 'ref'>>
) => JSX.Element | null
