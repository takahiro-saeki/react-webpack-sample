/* ライブラリのインポート */
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider }  from 'react-redux'

/* Appコンポーネントのインポート */
import App from './src/App'
/* Reducerから Store をインポート */
import { store } from './src/reducer'

/*
Entry Point:
Appコンポーネント (App.jsからインポート) をProviderコンポーネント (react-reduxからインポート) でラップする
さらに、createStore() メソッドで生成した Store をProviderコンポーネントに設定する
*/

//createStore() メソッドで Store を生成する。
let applicationStore = createStore(store);
console.log(applicationStore)
let rootElement = document.querySelector('#app');

render (
  <Provider store={applicationStore}>
  <App />
  </Provider>,
  // rootElement下にコンポーネントを生成
  rootElement
);
