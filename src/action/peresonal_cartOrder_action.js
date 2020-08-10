// import store from '../store/personal_cartOrder_store'
import {getOrderRequest,getgoodsRequest,getdiaryRequest,addOrderRequest} from '../api/cartOrder_api'
import thunk from 'redux-thunk'
// 购物车
export const mycartAction = {
  type: 'MYCART',
}
// 地址
export const localAction = {
  type: 'LOCAL',
}
// 推荐
export const recommendAction = {
  type:'RECOMMEND'
}
// export const orderListAction = {
//   type: 'ORDERLIST'
// }
// export const orderListAction = async (dispatch) => {
//   const res = await getOrderRequest()
//   dispatch({
//     type: 'ORDERLIST',
//     allorder: res.data
//   })
// }
export const cartListAction = async (pp,dispatch) => {
  console.log(pp)
  const res = await getgoodsRequest(pp)
  dispatch({
    type: 'CARTLIST',
    allcart: res.data
  })
}
export const addOrderAction = async (dispatch) => {
  console.log()
  const res = await addOrderRequest()
  dispatch({
    type: 'ADDORDER',
    addorder: res.data
  })
}
export const diaryListAction = async (dispatch) => {
  const res = await getdiaryRequest()
  dispatch({
    type: 'DIARYLIST',
    alldiary: res.data
  })
}