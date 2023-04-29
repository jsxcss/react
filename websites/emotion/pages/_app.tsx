import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Stack } from '@jsxcss/emotion'
import Link from 'next/link'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Stack.Vertical>
    <Stack.Horizontal align="center">
      <Link href="/">
        <h1>@jsxcss/emotion</h1>
      </Link>
    </Stack.Horizontal>
    <Component pageProps={pageProps} />
  </Stack.Vertical>
)

export default MyApp
