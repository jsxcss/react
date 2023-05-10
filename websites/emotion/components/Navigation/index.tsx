import { Box, Stack } from '@jsxcss/emotion'
import Image from 'next/image'
import Link from 'next/link'

export const Navigation = () => (
  <Stack
    direction={['vertical', 'horizontal']}
    spacing={12}
    paddingTop={[80, 40, 40]}
    paddingLeft={12}
    fontSize={[16, 20, 24]}
    align={['start', 'center']}
  >
    <Link href="/">
      <Stack.Horizontal align="center" spacing={4} fontSize={24}>
        <Image src="/logo_notcropped.png" alt="logo_jsxcss" width={44} height={44} />{' '}
        <Box as="span">@jsxcss/emotion</Box>
      </Stack.Horizontal>
    </Link>

    <Link href="/mediaQuery">/mediaQuery</Link>
    <Link href="/react-spring">/react-spring</Link>
    <Link href="/compare">/compare</Link>
  </Stack>
)
