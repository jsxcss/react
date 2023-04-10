import { useMemo, useRef, useState } from 'react'
import type { AutoLayoutOptions } from '@jsxcss/core'

export const useAutoLayoutControl = (initialOptions: AutoLayoutOptions = {}) => {
  const initialProps = useRef(initialOptions)
  const [props, setProps] = useState(initialOptions)
  type Control = {
    props: AutoLayoutOptions
    setProps: typeof setProps
    reset: () => void
  }
  return useMemo<{
    props: AutoLayoutOptions
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
    [setProps, props, initialProps]
  )
}
