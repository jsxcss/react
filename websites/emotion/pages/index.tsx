import { Box, Flex, Stack } from '@jsxcss/emotion'
import { motion } from 'framer-motion'
import { Button } from '../components'
import { useToggle } from '../hooks'

const Web = () => {
  const [isLoading, toggleIsLoading] = useToggle(true)

  return (
    <Stack as={motion.div} direction={['vertical', 'vertical', 'horizontal']} spacing={[16, 16, 0]}>
      <Flex.Center
        as="section"
        minHeight={100}
        minWidth={[undefined, undefined, 400]}
        margin={[16]}
        borderRadius={16}
        fontSize={[16, 30, 30]}
        fontWeight={['bold', 500, 500]}
        color="black"
        backgroundColor="lightgray"
      >
        @jsxcss/emotion
      </Flex.Center>
      <Stack.Vertical spacing={0} flex={1}>
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
        <Box backgroundColor="#ffffff20" borderRadius={16} margin={16}>
          <Box padding={16} paddingBottom={0} fontSize={[16, 20, 30]} fontWeight={['bold', 500, 500]}>
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
  )
}

export default Web
