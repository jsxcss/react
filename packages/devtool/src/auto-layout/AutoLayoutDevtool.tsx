import { ChangeEvent, ChangeEventHandler } from 'react'
import type { useAutoLayoutControl } from './useAutoLayoutControl'

export const AutoLayoutDevTool = ({
  productionShow,
  control,
}: {
  productionShow?: boolean
  control: ReturnType<typeof useAutoLayoutControl>['control']
}) => {
  const handleChange: ChangeEventHandler<HTMLSelectElement> = (
    e: ChangeEvent<Element & { name: string; value: any }>
  ) => {
    control.setProps((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const isShow = productionShow || process.env.NODE_ENV === 'development'

  return isShow ? (
    <div
      style={{
        position: 'fixed',
        bottom: 16,
        left: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        backgroundColor: '#333333',
        padding: 16,
        borderRadius: 12,
        width: 300,
      }}
    >
      <div>
        <div>direction: {control.props.direction ? control.props.direction : 'undefined'}</div>
        <select name="direction" value={control.props.direction} onChange={handleChange}>
          <option>vertical</option>
          <option>horizontal</option>
        </select>
      </div>
      <div>
        <div>align: {control.props.align ? control.props.align : 'undefined'}</div>
        <select name="align" value={control.props.align} onChange={handleChange}>
          <option>top-left</option>
          <option>top-center</option>
          <option>top-right</option>
          <option>left</option>
          <option>center</option>
          <option>right</option>
          <option>bottom-left</option>
          <option>bottom-center</option>
          <option>bottom-right</option>
        </select>
      </div>
      <div>
        <div>spacingMode: {control.props.spacingMode ? control.props.spacingMode : 'undefined'}</div>
        <select name="spacingMode" value={control.props.spacingMode} onChange={handleChange}>
          <option>packed</option>
          <option>space-between</option>
        </select>
      </div>
      <div>
        <div>padding: {typeof control.props.padding === 'number' ? control.props.padding : 'undefined'}</div>
        <input
          name="padding"
          value={typeof control.props.padding === 'number' ? control.props.padding : 0}
          type="range"
          min={-200}
          max={200}
          onChange={(e: any) =>
            handleChange({ ...e, target: { ...e.target, name: 'padding', value: Number(e.target.value) } })
          }
        />
      </div>
      <div>
        <div>space: {typeof control.props.space === 'number' ? control.props.space : 'undefined'}</div>
        <input
          name="space"
          value={typeof control.props.space === 'number' ? control.props.space : 0}
          type="range"
          min={-200}
          max={200}
          onChange={(e: any) =>
            handleChange({ ...e, target: { ...e.target, name: 'space', value: Number(e.target.value) } })
          }
        />
      </div>
      <button type="button" onClick={control.reset}>
        Reset
      </button>
    </div>
  ) : null
}
