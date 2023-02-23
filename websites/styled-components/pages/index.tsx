import { css } from 'styled-components'
import { Flex } from '@jsxcss/styled-components'
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

const StyledComponents = () => (
  <Flex as={motion.a} justify="center" align="center">
    <Box />
    <Box />
    <Box />
  </Flex>
)

export default StyledComponents
