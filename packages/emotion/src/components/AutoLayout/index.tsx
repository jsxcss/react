import { ComponentPropsWithRef, ElementType, forwardRef, useMemo } from 'react'
import { AutoLayoutComponentType, AutoLayoutOption, AutoLayoutProps, FlexOption, XAxis, YAxis } from '@jsxcss/core'
import { Stack } from '../Stack'

const createAutoLayout = (defaultOption: AutoLayoutOption = {}): AutoLayoutComponentType =>
  forwardRef(function AutoLayout<T extends ElementType>(
    props: AutoLayoutProps<T>,
    ref: ComponentPropsWithRef<T>['ref']
  ) {
    const {
      as = 'div',
      direction = defaultOption.direction ?? 'vertical',
      spacing = defaultOption.spacing ?? 0,
      spacingMode = defaultOption.spacingMode ?? 'packed',
      align = defaultOption.align ?? 'top-left',
      ...rest
    } = props

    const flexOption = useMemo(
      () => getFlexOptionByAutoLayoutOption({ align, direction, spacingMode }),
      [align, direction, spacingMode]
    )

    return (
      <Stack
        as={as}
        ref={ref}
        direction={direction}
        spacing={spacing}
        justify={flexOption.justify}
        align={flexOption.align}
        {...rest}
      />
    )
  })

type AutoLayoutType = AutoLayoutComponentType & {
  Vertical: AutoLayoutComponentType
  Horizontal: AutoLayoutComponentType
}

export const AutoLayout = createAutoLayout() as AutoLayoutType
AutoLayout.Vertical = createAutoLayout({ direction: 'vertical' })
AutoLayout.Horizontal = createAutoLayout({ direction: 'horizontal' })

const getFlexOptionByAutoLayoutOption = (
  autoLayoutOption: Required<Pick<AutoLayoutOption, 'align' | 'direction' | 'spacingMode'>>
): Pick<FlexOption, 'align' | 'justify'> => {
  const array = autoLayoutOption.align.split('-')
  let axis: {
    x: XAxis
    y: YAxis | undefined
  } = { x: 'left', y: undefined }
  if (array.length === 1) {
    const [x] = array

    axis.x = x as XAxis
  }
  const [y, x] = array as [YAxis, XAxis]
  axis = { x, y }

  let align: FlexOption['align']
  let justify: FlexOption['justify']

  if (autoLayoutOption.direction === 'vertical') {
    if (axis.y) {
      if (axis.y === 'top') {
        justify = 'start'
      }
      if (axis.y === 'bottom') {
        justify = 'end'
      }
    } else {
      justify = 'center'
    }

    if (axis.x === 'left') {
      align = 'left'
    }
    if (axis.x === 'center') {
      align = 'center'
    }
    if (axis.x === 'right') {
      align = 'flex-end'
    }
  }
  if (autoLayoutOption.direction === 'horizontal') {
    if (axis.y) {
      if (axis.y === 'top') {
        align = 'start'
      }
      if (axis.y === 'bottom') {
        align = 'end'
      }
    } else {
      align = 'center'
    }

    if (axis.x === 'left') {
      justify = 'left'
    }
    if (axis.x === 'center') {
      justify = 'center'
    }
    if (axis.x === 'right') {
      justify = 'flex-end'
    }
  }

  if (autoLayoutOption.spacingMode === 'space-between') {
    justify = 'space-between'
  }

  return { align, justify }
}
