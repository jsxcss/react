import { ComponentPropsWithRef, ElementType } from 'react'
import { AsProps } from '../../common'
import { AutoLayoutOption } from '../../utils'

export type AutoLayoutProps<T extends ElementType = 'div'> = AsProps<T> & AutoLayoutOption

export type AutoLayoutComponentType = <T extends ElementType = 'div'>(
  props: AutoLayoutProps<T> & Partial<Pick<ComponentPropsWithRef<T>, 'ref'>>
) => JSX.Element | null
