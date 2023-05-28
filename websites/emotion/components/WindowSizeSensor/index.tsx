import { Box, Stack } from '@jsxcss/emotion'
import { AnimatePresence, motion } from 'framer-motion'
import { useToggle, useWindowSize } from '../../hooks'

export const WindowSizeSensor = ({
  initialOpen = true,
  mediaQueryPxs,
}: {
  initialOpen?: boolean
  mediaQueryPxs: number[]
}) => {
  const [isOpen, toggleIsOpen] = useToggle(initialOpen)
  const windowSize = useWindowSize()
  const isWindowSizeReady = windowSize.width !== 0 && windowSize.height !== 0

  const pxs = mediaQueryPxs.map((px, index, array) => ({
    min: px,
    max: index === array.length - 1 ? Infinity : array[index + 1] - 1,
  }))

  const cssIndex = pxs.findIndex(({ min, max }) => min <= windowSize.width && max >= windowSize.width)
  const currentPx = pxs[cssIndex]

  return isWindowSizeReady ? (
    <Stack
      as={motion.div}
      layout
      fontSize={12}
      spacing={isOpen ? 8 : 0}
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
      <AnimatePresence>
        {isOpen && (
          <Stack as={motion.div} spacing={4} exit={{ width: 0, height: 0, scale: 0 }}>
            <Box>{`windowWidth: ${windowSize.width}px`}</Box>
            <Stack spacing={0}>
              <Box>responsiveCssIndex[{cssIndex}]</Box>
              <Box fontSize={8}>
                (min: {currentPx.min}px, max: {currentPx.max}px)
              </Box>
            </Stack>
          </Stack>
        )}
      </AnimatePresence>
      <Box as={motion.button} layout onClick={() => toggleIsOpen()}>
        {isOpen ? 'close' : 'open'}
      </Box>
    </Stack>
  ) : null
}
