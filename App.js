import React from 'react';
import {Provider} from 'react-redux';
import Routers from './app/routes';
import {create} from 'dva-core';
import models from './app/model/index';
import dva from './app/utils/dva';

const app = dva({
  initialState: {},
  models: models,
  onError(e) {
    console.log('onError', e);
  },
});

const store = app._store;
const App = app.start(
  <Provider store={store}>
    <Routers />
  </Provider>,
);

export default App;
