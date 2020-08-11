import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './store/personal_cartOrder_store'
import { Provider } from 'react-redux'
import {
  orderListAction,
  recommendAction,
  mycartAction,
  cartListAction,
} from './action/peresonal_cartOrder_action'

store.dispatch(orderListAction)
store.dispatch(cartListAction)
store.dispatch(recommendAction)
store.dispatch(mycartAction)
// console.log(store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
