import { useMemo, useRef, useState } from 'react'
import type { AutoLayoutOption } from '@jsxcss/core'

export const useAutoLayoutControl = (initialOption: AutoLayoutOption = {}) => {
  const initialProps = useRef(initialOption)
  const [props, setProps] = useState(initialOption)
  type Control = {
    props: AutoLayoutOption
    setProps: typeof setProps
    reset: () => void
  }
  return useMemo<{
    props: AutoLayoutOption
    control: Control
  }>(
    () => ({
      props,
      control: {
        props,
        setProps,
        reset: () => setProps(initialProps.current),
      },
    }),
    [setProps, props]
  )
}
