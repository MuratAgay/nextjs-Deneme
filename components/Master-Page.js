import Navigation from './navigation'
import Head from 'next/head'

function Layout({ children }) {
  return (
    <div>
      <Navigation />

      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>{children}</main>
      <footer>Desing by Murat</footer>
    </div>
  )
}

export default Layout
