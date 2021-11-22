import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="shortcut icon" href="/assets/png/logo192.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta charSet="UTF-8" />
          <meta property="ogp:title" content="Callhub" />
          <meta name="twitter:title" content="Callhub" />
          <meta name="twitter:description" content="Callhub Clone UI" />
          <meta name="image" content="" />
          <meta name="keywords" content="Callhub" />
          <meta property="og:title" content="Callhub" />
          <meta property="og:description" content="Callhub Clone UI" />
          <meta property="og:site_name" content="Callhub" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_br" />
          <meta name="theme-color" content="#fff" />
          <meta
            name="description"
            content="CallHub | Gerenciamento eficiente e inovador de ordens de serviço"
          />
          <link rel="icon" href="/assets/png/logo192.png" />
          <meta name="theme-color" content="#FFFFFF" />
          <link rel="apple-touch-icon" href="/assets/png/logo192.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/assets/png/192x192.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
