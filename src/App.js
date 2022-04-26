import './i18n/i18n.js'
import React from 'react'
import { routes } from 'utils/routeComponent.js'
import { GlobalStyle } from 'styles/globalStyles'
import { Header } from 'components/Header/Header.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} />)}
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App