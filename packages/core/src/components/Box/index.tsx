import { ComponentPropsWithRef, ElementType } from 'react'
import { AsProps } from '../../common'
import { OptionWithMediaQuery } from '../../contexts'
import { BoxOption } from '../../utils'

export type BoxProps<T extends ElementType = 'div'> = AsProps<T> & OptionWithMediaQuery<BoxOption>

export type BoxComponentType = <T extends ElementType = 'div'>(
  props: BoxProps<T> & Partial<Pick<ComponentPropsWithRef<T>, 'ref'>>
) => JSX.Element | null
