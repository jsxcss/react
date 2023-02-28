import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Stack } from '@jsxcss/styled-components'
import Link from 'next/link'

const href = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://styled-components.jsxcss.org'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Stack.Vertical>
    <Stack.Horizontal align="center">
      <Link href="/">
        <h1>@jsxcss/styled-components</h1>
      </Link>
      <Link href={href}>Go to @jsxcss/emotion</Link>
    </Stack.Horizontal>
    <Component pageProps={pageProps} />
  </Stack.Vertical>
)

export default MyApp
