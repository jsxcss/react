import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MediaQueryProvider } from '@jsxcss/emotion'
import { Navigation, WindowSizeSensor } from '../components'

const mediaQueryPxs = [0, 768, 1440]

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MediaQueryProvider pxs={mediaQueryPxs}>
    <Navigation />
    <Component pageProps={pageProps} />
    <WindowSizeSensor mediaQueryPxs={mediaQueryPxs} />
  </MediaQueryProvider>
)

export default MyApp
