import { Box } from '@jsxcss/emotion'
import { useWindowSize } from '../../hooks'

export const WindowSizeSensor = () => {
  const windowSize = useWindowSize()
  const isReady = windowSize.width !== 0 && windowSize.height !== 0

  return (
    <Box
      padding={16}
      borderRadius={8}
      backgroundColor="#ffffff20"
      color="#ffffff80"
      position="fixed"
      right={16}
      top={16}
    >
      {isReady && `width: ${windowSize.width}, height ${windowSize.height}`}
    </Box>
  )
}
