import { css } from 'styled-components'
import { Flex } from '@fullcss/styled-components'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const Box = () => (
  <motion.div
    css={css`
      background-color: red;
      width: 200px;
      height: 200px;
    `}
  />
)

const Emotion = () => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div>
      <div
        css={css`
          background-color: red;
          width: 200px;
          height: 200px;
        `}
      />
      <Flex ref={ref}>
        <Box />
        <Box />
        <Box />
      </Flex>
    </div>
  )
}

export default Emotion
