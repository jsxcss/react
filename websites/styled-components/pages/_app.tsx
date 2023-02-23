import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Flex } from '@jsxcss/styled-components'
import Link from 'next/link'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Flex direction="column" justify="space-between">
    <Link href="/">styled-components home</Link>
    <Component pageProps={pageProps} />
  </Flex>
)

export default MyApp
