import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './store/personal_cartOrder_store'
import { Provider } from 'react-redux'
import {getOrderRequest,getgoodsRequest,getdiaryRequest} from './api/cartOrder_api'
import {
  orderListAction,
  recommendAction,mycartAction,
  // cartListAction,
  // diaryListAction,
  addOrderAction,
  localAction
} from './action/peresonal_cartOrder_action'

store.dispatch(async (dispatch) => {
  const res = await getOrderRequest(3)
  dispatch({
    type: 'ORDERLIST',
    allorder: res.data
  })
})
// store.dispatch(cartListAction)
store.dispatch(addOrderAction)
store.dispatch(recommendAction)
store.dispatch(mycartAction)
store.dispatch(localAction)
// store.dispatch(diaryListAction)

// console.log(store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
