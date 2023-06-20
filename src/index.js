import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';

import 'modern-normalize';

import { App } from 'components/App/App';
import { GlobalStyles } from 'components/styles/GlobalStyles.styled';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/final-homework-on-react-using-the-backend-training">
      <Global styles={GlobalStyles} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
