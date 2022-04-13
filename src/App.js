import React from 'react'
import Home from 'pages/Home'
import './i18n/i18n.js'
import { GlobalStyle } from 'styles/globalStyles'
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  )
}
export default App