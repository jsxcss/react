import { Stack } from '@jsxcss/emotion'
import { motion } from 'framer-motion'
import { useWindowSize } from '../../hooks'

export const WindowSizeSensor = ({ mediaQueryPxs }: { mediaQueryPxs: number[] }) => {
  const windowSize = useWindowSize()
  const isReady = windowSize.width !== 0 && windowSize.height !== 0

  const minMaxPxs = mediaQueryPxs.map((px, index, array) => ({
    min: px,
    max: index === array.length - 1 ? Infinity : array[index + 1],
  }))

  const cssIndex = minMaxPxs.findIndex(({ min, max }) => min < windowSize.width && max > windowSize.width)

  return isReady ? (
    <Stack
      as={motion.div}
      spacing={4}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      padding={16}
      borderRadius={8}
      backgroundColor="#ffffff20"
      color="#ffffff80"
      position="fixed"
      right={16}
      top={16}
    >
      <div>{`width: ${windowSize.width}px, height ${windowSize.height}px`}</div>
      <div>
        pxs[{cssIndex}] (@media (min-width: {minMaxPxs[cssIndex].min}px))
      </div>
    </Stack>
  ) : null
}
