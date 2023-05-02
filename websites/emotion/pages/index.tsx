import { css } from '@emotion/react'
import { Box, Flex, Stack, useMediaQuery } from '@jsxcss/emotion'
import { motion } from 'framer-motion'
import { Button, WindowSizeSensor } from '../components'
import { useToggle } from '../hooks'

const Web = () => {
  const mediaQuery = useMediaQuery()
  const [isLoading, toggleIsLoading] = useToggle(true)

  return (
    <>
      <WindowSizeSensor />
      <Stack as={motion.div} direction={['vertical', 'vertical', 'horizontal']} spacing={[16, 16, 0]}>
        <Flex.Center
          as="section"
          minHeight={100}
          minWidth={300}
          margin={[16]}
          borderRadius={16}
          css={css(...mediaQuery.css({ fontSize: [16, 30, 30], fontWeight: ['bold', 500, 500] }), {
            color: 'black',
            backgroundColor: 'lightgray',
          })}
        >
          @jsxcss/emotion
        </Flex.Center>
        <Stack.Vertical spacing={0} css={{ flex: 1 }}>
          <Stack direction={['vertical', 'horizontal']} justify="space-between" spacing={[16, 8]} margin={[16]}>
            <Button loading={isLoading} onClick={() => toggleIsLoading()}>
              Press Button
            </Button>
            <Button loading={isLoading} onClick={() => toggleIsLoading()}>
              Press Button
            </Button>
            <Button loading={isLoading} onClick={() => toggleIsLoading()}>
              Press Button
            </Button>
          </Stack>
          <Box css={{ backgroundColor: '#ffffff20' }} borderRadius={16} margin={16}>
            <Box
              padding={16}
              paddingBottom={0}
              css={css(...mediaQuery.css({ fontSize: [16, 20, 30], fontWeight: ['bold', 500, 500] }))}
            >
              This is Title
            </Box>
            <Stack direction={['vertical']} spacing={[12]} margin={[16]}>
              <Button loading={isLoading} onClick={() => toggleIsLoading()}>
                Press Button
              </Button>
              <Button loading={isLoading} onClick={() => toggleIsLoading()}>
                Press Button
              </Button>
              <Button loading={isLoading} onClick={() => toggleIsLoading()}>
                Press Button
              </Button>
            </Stack>
          </Box>
        </Stack.Vertical>
      </Stack>
    </>
  )
}

export default Web
