import { Box } from '@jsxcss/emotion'
import { animated, useSpring } from '@react-spring/web'

const ReactSpringPage = () => {
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Box as={animated.div} style={style} backgroundColor={['red', 'yellow']} margin={12}>
      ReactSpringPage
    </Box>
  )
}

export default ReactSpringPage
