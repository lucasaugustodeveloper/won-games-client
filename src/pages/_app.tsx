import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/globals'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-192.png" />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple projet starter to work with Typescript, React, NextJS and Styled Component"
        />
      </Head>

      <GlobalStyles />

      <Component {...pageProps} />
    </>
  )
}

export default App
