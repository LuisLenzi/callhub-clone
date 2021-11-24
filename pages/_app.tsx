import '../styles/globals.scss'

import type { AppProps } from 'next/app'
import { Context } from '../context/Context'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [leftBarIsActive, setLeftBarIsActive] = useState(true)

  function handleLeftBarActive() {
    leftBarIsActive ? setLeftBarIsActive(false) : setLeftBarIsActive(true)
  }

  return (
    <Context.Provider
      value={{
        leftBarIsActive,
        handleLeftBarActive,
      }}
    >
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp
