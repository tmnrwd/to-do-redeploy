import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from "redux"
import {rootReducer} from './reducers/index'
import App from './components/App';
import {loadState, saveState} from './storage'

const persistedState = loadState();
const store =createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState())
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


