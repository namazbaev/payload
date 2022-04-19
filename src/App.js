import './i18n/i18n.js'
import React from 'react'
import { routes } from 'utils/routeComponent.js'
import { GlobalStyle } from 'styles/globalStyles'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from 'components/Header/Header.jsx'
import TvItem from 'pages/TV/details.jsx'
import { TVS } from 'pages/TV/index.jsx'
const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} />)}
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </>
  )
}
export default App