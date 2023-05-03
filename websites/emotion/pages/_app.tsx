import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MediaQueryProvider, Stack } from '@jsxcss/emotion'
import Link from 'next/link'
import { WindowSizeSensor } from '../components'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MediaQueryProvider pxs={[0, 768, 1440]}>
    <WindowSizeSensor />
    <Stack.Horizontal paddingTop={[80, 0, 0]} paddingLeft={[12]} align="center" fontSize={[16, 18, 20]}>
      <Link href="/">
        <h1>@jsxcss/emotion</h1>
      </Link>
    </Stack.Horizontal>
    <Stack.Vertical>
      <Component pageProps={pageProps} />
    </Stack.Vertical>
  </MediaQueryProvider>
)

export default MyApp
