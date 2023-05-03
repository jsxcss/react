import { CSSProperties } from 'react'

export interface FlexOption {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
}
