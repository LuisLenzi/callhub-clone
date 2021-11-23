import '../styles/globals.scss'

import type { AppProps } from 'next/app'
import { Context } from '../context/Context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Context.Provider value={{}}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp
