import { ComponentPropsWithRef, ElementType } from 'react'
import { AsProps } from '../../common'
import { OptionWithMediaQuery } from '../../contexts'
import { FlexOption } from '../../utils/flex'

export type FlexProps<T extends ElementType = 'div'> = AsProps<T> & OptionWithMediaQuery<FlexOption>

export type FlexComponentType = <T extends ElementType = 'div'>(
  props: FlexProps<T> & Partial<Pick<ComponentPropsWithRef<T>, 'ref'>>
) => JSX.Element | null
