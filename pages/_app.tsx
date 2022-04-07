import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
    {/* <div id="react-modals" /> */}
  </>
}

export default MyApp