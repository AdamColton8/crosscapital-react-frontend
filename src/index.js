import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store, history } from 'store';

import 'styles/sass/index.css';

import registerServiceWorker from './registerServiceWorker';

import { axiosInterceptor } from '_helpers';
import AppWrapper from 'components/layout/app'

axiosInterceptor();

ReactDOM.render(
  <Provider store={store}>
    <AppWrapper/>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
