import './i18n/i18n.js';
import React from 'react';
import Routes from './routes/index';
import { Provider } from 'react-redux';
import store from 'redux/store/index.js';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'styles/globalStyles';
import { Header } from 'components/Header/Header.jsx';
const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  </Provider>
)
export default App