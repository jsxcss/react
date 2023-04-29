import { ComponentPropsWithRef, ElementType, forwardRef, useMemo } from 'react'
import { AutoLayoutComponentType, AutoLayoutOption, AutoLayoutProps, FlexOption, XAxis, YAxis } from '@jsxcss/core'
import { padding as utilsPadding } from '../../utils'
import { Stack } from '../Stack'

const createAutoLayoutComponent = (defaultAutoLayoutOption: AutoLayoutOption = {}): AutoLayoutComponentType =>
  forwardRef(function AutoLayout<T extends ElementType>(
    props: AutoLayoutProps<T>,
    ref: ComponentPropsWithRef<T>['ref']
  ) {
    const {
      direction = defaultAutoLayoutOption.direction ?? 'vertical',
      spacing = defaultAutoLayoutOption.spacing ?? 0,
      spacingMode = defaultAutoLayoutOption.spacingMode ?? 'packed',
      padding = defaultAutoLayoutOption.padding ?? 0,
      align = defaultAutoLayoutOption.align ?? 'top-left',
      as = 'div',
      ...rest
    } = props

    const axis = useMemo((): {
      x: XAxis
      y: YAxis | undefined
    } => {
      const array = align.split('-')

      if (array.length === 1) {
        const [x] = array

        return { x: x as XAxis, y: undefined }
      }
      const [y, x] = array
      return { x: x as XAxis, y: y as YAxis }
    }, [align])

    const flexOption = useMemo((): Pick<FlexOption, 'align' | 'justify'> => {
      let align: FlexOption['align']
      let justify: FlexOption['justify']

      if (direction === 'vertical') {
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
      if (direction === 'horizontal') {
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

      if (spacingMode === 'space-between') {
        justify = 'space-between'
      }

      return { align, justify }
    }, [axis, direction, spacingMode])

    return (
      <Stack
        {...rest}
        direction={direction}
        spacing={spacing}
        justify={flexOption.justify}
        align={flexOption.align}
        css={utilsPadding(padding)}
        as={as}
        ref={ref}
      />
    )
  })

type AutoLayoutType = AutoLayoutComponentType & {
  Vertical: AutoLayoutComponentType
  Horizontal: AutoLayoutComponentType
}

export const AutoLayout = createAutoLayoutComponent() as AutoLayoutType
AutoLayout.Vertical = createAutoLayoutComponent({ direction: 'vertical' })
AutoLayout.Horizontal = createAutoLayoutComponent({ direction: 'horizontal' })
