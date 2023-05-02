import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MediaQueryProvider, Stack } from '@jsxcss/emotion'
import Link from 'next/link'

const mediaQueryPxs = [576, 768, 1440]

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MediaQueryProvider pxs={mediaQueryPxs}>
    <Stack.Vertical>
      <Stack.Horizontal paddingTop={[80, 0, 0]} paddingLeft={[12]} align="center">
        <Link href="/">
          <h1>@jsxcss/emotion</h1>
        </Link>
      </Stack.Horizontal>
      <Component pageProps={pageProps} />
    </Stack.Vertical>
  </MediaQueryProvider>
)

export default MyApp
