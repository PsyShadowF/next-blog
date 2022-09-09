import "../components/Layout/NavBar.css"
import '../styles/globals.css'

import NavBar from "../components/Layout/NavBar.js"

function MyApp({ Component, pageProps }) {
  return (
    <NavBar>
      <Component {...pageProps}/>
    </NavBar>
  )
}

export default MyApp;