import { CSSProperties } from 'react'
import { FlexOption } from '../flex'
import { GutterOption } from '../gutter'
import { StackOption } from '../stack'

type OmittingKey =
  | keyof FlexOption
  | keyof StackOption
  | keyof GutterOption
  | `Moz${string}`
  | `Webkit${string}`
  | `ms${string}`
export interface BoxOption extends Omit<CSSProperties, OmittingKey> {}
