import s, { AutoLayout, Flex, Stack, Box as JSXCSSBox } from '@jsxcss/emotion'
import { useAutoLayoutControl, AutoLayoutDevTool } from '@jsxcss/devtool'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { css } from '@emotion/react'

const Page = () => {
  const [rangeValue, setRangeValue] = useState(0)
  const autoLayout = useAutoLayoutControl({})

  return (
    <>
      <div>rangeValue: {rangeValue}</div>
      <input type="range" value={rangeValue} onChange={(e) => setRangeValue(Number(e.target.value))} />
      <AutoLayout
        as={motion.div}
        {...autoLayout.props}
        padding={15}
        whileHover={{ scale: 0.9 }}
        css={css(s.color({ backgroundColor: 'red' }), s.margin({ x: 16 }))}
      >
        <Box />
        <Box />
        <Box />
      </AutoLayout>
      <Flex.Center>
        <Box />
        <Box />
        <Box />
        <Stack.Vertical spacing={rangeValue}>
          <Box />
          <Box />
          <Box />
        </Stack.Vertical>
        <Stack.Horizontal>
          <Box />
          <Box />
          <Box />
        </Stack.Horizontal>
      </Flex.Center>
      <AutoLayoutDevTool control={autoLayout.control} productionShow />
    </>
  )
}

export default Page

const redbox = css(
  s.color({
    color: '',
    backgroundColor: 'red',
  }),
  s.size({
    width: 10,
    height: 10,
  }),
  s.border({ radius: 12 })
)

const Box = ({ size = 100 }: { size?: number }) => (
  <JSXCSSBox
    as={motion.div}
    css={css(
      s.stack({ direction: 'horizontal', spacing: 12, justify: 'center', align: 'center' }),
      s.size({ width: size, height: size }),
      s.padding({ x: 12 }),
      s.border({ width: 2, color: 'red', style: 'solid' }),
      s.color({ backgroundColor: 'white' })
    )}
    whileHover={{ scale: 0.9 }}
    whileTap={{ scale: 1.1 }}
  >
    <JSXCSSBox css={redbox} />
    <JSXCSSBox css={redbox} />
    <JSXCSSBox css={redbox} />
  </JSXCSSBox>
)
