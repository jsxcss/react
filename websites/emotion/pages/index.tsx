import { css } from '@emotion/react'
import { Flex, Stack } from '@jsxcss/emotion'
import { motion } from 'framer-motion'

const Box = () => (
  <motion.div
    css={css`
      background-color: red;
      width: 200px;
      height: 200px;
    `}
  />
)

const Emotion = () => (
  <Flex as="a" justify="center" align="center">
    <Box />
    <Box />
    <Box />
    <Stack.Vertical spacing={4}>
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
