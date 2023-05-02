import { ComponentPropsWithRef, ElementType } from 'react'
import { AsProps } from '../../common'
import { OptionWithMediaQuery } from '../../contexts'
import { AutoLayoutOption, BoxOption } from '../../utils'

export type AutoLayoutProps<T extends ElementType = 'div'> = AsProps<T> &
  AutoLayoutOption &
  OptionWithMediaQuery<BoxOption>

export type AutoLayoutComponentType = <T extends ElementType = 'div'>(
  props: AutoLayoutProps<T> & Partial<Pick<ComponentPropsWithRef<T>, 'ref'>>
) => JSX.Element | null
