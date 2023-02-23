import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Flex } from '@fullcss/emotion'
import Link from 'next/link'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Flex direction="column" justify="space-between">
    <Link href="/">emotion home</Link>
    <Component pageProps={pageProps} />
  </Flex>
)

export default MyApp
