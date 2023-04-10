import { css } from '@emotion/react'
import { AutoLayout, Flex, Stack, boxShadow } from '@jsxcss/emotion'
import { useAutoLayoutControl, AutoLayoutDevTool } from '@jsxcss/devtool'
import { motion } from 'framer-motion'

const Box = ({ size = 100 }: { size?: number }) => (
  <motion.div
    css={css`
      background-color: white;
      width: ${size}px;
      height: ${size}px;
      border-radius: 16px;
      ${boxShadow({
        x: 0,
        y: 0,
        blur: 42,
        spread: 0,
        color: '#00000030',
      })}
    `}
  />
)

const Emotion = () => {
  const autoLayout = useAutoLayoutControl({})

  return (
    <>
      <AutoLayout
        as={motion.div}
        {...autoLayout.props}
        css={css`
          height: 700px;
          background-color: red;
        `}
      >
        <Box />
        <Box size={200} />
        <Box />
      </AutoLayout>
      <Flex.Center>
        <Box />
        <Box />
        <Box />
        <Stack.Vertical>
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

export default Emotion
