import './i18n/i18n.js';
import React from 'react';
import Routes from './routes/index';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'styles/globalStyles';
import { Header } from 'components/Header/Header.jsx';
const App = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  </>
)
export default App