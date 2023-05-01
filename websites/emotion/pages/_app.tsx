import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MediaQueryProvider, Stack } from '@jsxcss/emotion'
import Link from 'next/link'

const mediaQueryPxs = [576, 768, 992, 1200]

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MediaQueryProvider pxs={mediaQueryPxs}>
    <Stack.Vertical>
      <Stack.Horizontal align="center">
        <Link href="/">
          <h1>@jsxcss/emotion</h1>
        </Link>
      </Stack.Horizontal>
      <Component pageProps={pageProps} />
    </Stack.Vertical>
  </MediaQueryProvider>
)

export default MyApp
