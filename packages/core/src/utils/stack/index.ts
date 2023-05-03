import { AxisDirection } from '../../common'
import { FlexOption } from '../flex'
import { GutterOption } from '../gutter'

export interface StackOption extends Pick<FlexOption, 'align' | 'justify'>, GutterOption {
  direction?: AxisDirection
}
