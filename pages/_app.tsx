import MainHeader from "../components/layout/main-header"
import "../styles/globals.css"
import { Fragment } from "react"
import Layout from "../components/layout/layout"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
