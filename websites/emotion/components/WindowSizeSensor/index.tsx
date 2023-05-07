import { Box, Stack } from '@jsxcss/emotion'
import { motion } from 'framer-motion'
import { useWindowSize } from '../../hooks'

export const WindowSizeSensor = ({ mediaQueryPxs }: { mediaQueryPxs: number[] }) => {
  const windowSize = useWindowSize()
  const isWindowSizeReady = windowSize.width !== 0 && windowSize.height !== 0

  const minMaxPxs = mediaQueryPxs.map((px, index, array) => ({
    min: px,
    max: index === array.length - 1 ? Infinity : array[index + 1] - 1,
  }))

  const cssIndex = minMaxPxs.findIndex(({ min, max }) => min <= windowSize.width && max >= windowSize.width)

  return isWindowSizeReady ? (
    <Stack
      as={motion.div}
      fontSize={12}
      spacing={4}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      padding={12}
      borderRadius={8}
      backgroundColor="#ffffff20"
      color="#ffffff80"
      position="fixed"
      right={16}
      top={16}
    >
      <Box>{`windowWidth: ${windowSize.width}px`}</Box>
      <Stack spacing={0}>
        <Box>responsiveCssIndex[{cssIndex}]</Box>
        <Box fontSize={8}>
          (min: {minMaxPxs[cssIndex].min}px, max: {minMaxPxs[cssIndex].max}px)
        </Box>
      </Stack>
    </Stack>
  ) : null
}
