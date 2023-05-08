import { Box, Flex, Stack } from '@jsxcss/emotion'
import { Button } from '../components'

const ComponentPage = () => (
  <Stack direction={['vertical', 'vertical', 'horizontal']} spacing={[16, 16, 0]}>
    <Flex.Center
      as="section"
      minHeight={100}
      width={[undefined, undefined, 400]}
      margin={[16]}
      borderRadius={16}
      fontSize={[16, 30, 30]}
      fontWeight={['bold', 500, 500]}
      color="black"
      backgroundColor="lightgray"
      padding={16}
    >
      CSS components in JSX easily
    </Flex.Center>
    <Stack.Vertical spacing={0} flex={1}>
      <Stack direction={['vertical', 'horizontal']} justify="space-between" spacing={[16, 8]} margin={[16]}>
        <Button>Press Button</Button>
        <Button>Press Button</Button>
        <Button>Press Button</Button>
      </Stack>
      <Box backgroundColor="#ffffff20" borderRadius={16} margin={16}>
        <Box padding={16} paddingBottom={0} fontSize={[16, 20, 30]} fontWeight={['bold', 500, 500]}>
          This is Title
        </Box>
        <Stack direction={['vertical']} spacing={[12]} margin={[16]}>
          <Button>Press Button</Button>
          <Button>Press Button</Button>
          <Button>Press Button</Button>
        </Stack>
      </Box>
    </Stack.Vertical>
  </Stack>
)

export default ComponentPage
