import { css } from 'styled-components'
import { Flex, Stack } from '@jsxcss/styled-components'
import { motion } from 'framer-motion'

const Box = () => (
  <motion.div
    css={css`
      background-color: red;
      width: 200px;
      height: 200px;
      border: 1px solid white;
    `}
  />
)

const StyledComponents = () => (
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

export default StyledComponents
