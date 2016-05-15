import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider }  from 'react-redux'
import App from './src/App'
import { store } from './src/reducer'

render (
  <Provider store={createStore(store)}>
  <App />
  </Provider>,
  document.querySelector('#app')
);
