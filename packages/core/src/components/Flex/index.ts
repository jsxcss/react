import { ComponentPropsWithRef, ElementType } from 'react'
import { AsProps } from '../../common'
import { OptionWithMediaQuery } from '../../contexts'
import { BoxOption, FlexOption } from '../../utils'

export type FlexProps<T extends ElementType = 'div'> = AsProps<T> &
  OptionWithMediaQuery<FlexOption> &
  OptionWithMediaQuery<BoxOption>

export type FlexComponentType = <T extends ElementType = 'div'>(
  props: FlexProps<T> & Partial<Pick<ComponentPropsWithRef<T>, 'ref'>>
) => JSX.Element | null
