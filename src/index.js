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
  alipayAction,
} from './action/peresonal_cartOrder_action'
import {
  getOrderRequest,
  getgoodsRequest,
  getdiaryRequest,
  addOrderRequest,
  couponRequest,
} from './api/cartOrder_api'

// store.dispatch(orderListAction)
store.dispatch(async (dispatch) => {
  const res = await getgoodsRequest(JSON.parse(sessionStorage.user).id)
  // console.log(res)
  dispatch({
    type: 'CARTLIST',
    allcart: res.data,
  })
})
store.dispatch(async (dispatch) => {
  // console.log(JSON.parse(sessionStorage.user).id)
  const res = await getOrderRequest(JSON.parse(sessionStorage.user).id)
  // console.log(res)
  dispatch({
    type: 'ORDERLIST',
    allorder: res.data,
  })
})
store.dispatch(recommendAction)
// store.dispatch(mycartAction)
store.dispatch(alipayAction)
store.dispatch(async (dispatch) => {
  const res = await getdiaryRequest(JSON.parse(sessionStorage.user).id)
  // console.log(res.data)
  dispatch({
    type: 'DIARYLIST',
    alldiary: res.data,
  })
})
store.dispatch(async (dispatch) => {
  const res = await couponRequest(JSON.parse(sessionStorage.user).id)
  // console.log(res.data)
  dispatch({
    type: 'COUPONLIST',
    allcoupon: res.data,
  })
})
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
