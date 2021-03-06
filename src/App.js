import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import history from './services/history';

import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Router history={history}>
        <Routes />
      </Router>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;