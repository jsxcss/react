import { css } from '@emotion/react'
import { Flex, Stack } from '@jsxcss/emotion'
import { motion } from 'framer-motion'

const Box = () => (
  <motion.div
    css={css`
      background-color: white;
      width: 100px;
      height: 100px;
      border-radius: 16px;
    `}
  />
)

const Emotion = () => (
  <Flex as="a" justify="center" align="center">
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
  </Flex>
)

export default Emotion
