// import store from '../store/personal_cartOrder_store'
import { getOrderRequest, getgoodsRequest, getdiaryRequest, addOrderRequest,alipayRequest} from '../api/cartOrder_api'
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
  type: 'RECOMMEND'
}
// 将要提交的订单
export const carttoorderAction = {
  type: 'CARTTOORDER'
}
// export const orderListAction = {
//   type: 'ORDERLIST'
// }
export const orderListAction = async (dispatch) => {
  const res = await getOrderRequest()
  console.log(res.data)
  dispatch({
    type: 'ORDERLIST',
    allorder: res.data
  })
}
export const cartListAction = async ( dispatch) => {
  const res = await getgoodsRequest(1)
  console.log(res.data)
  dispatch({
    type: 'CARTLIST',
    allcart: res.data
  })
}
export const addOrderAction = async (dispatch) => {

  const res = await addOrderRequest()
  console.log(res.data)
  dispatch({
    type: 'ADDORDER',
    addorder: res.data
  })
}
export const diaryListAction = async (dispatch) => {
  const res = await getdiaryRequest()
  console.log(res.data)
  dispatch({
    type: 'DIARYLIST',
    alldiary: res.data
  })
}
export const alipayAction = async (dispatch) => {
  const res = await alipayRequest()
  console.log(res.data)
  dispatch({
    type: 'ALIPAY',
    alipay: res.data
  })
}

export const couponAction = async (dispatch) => {
  const res = await couponRequest(c)
  console.log(res.data)
  dispatch({
    type: 'COUPONLIST',
    allcoupon: res.data
  })
}

export const delcartAction = async (dispatch) => {
  const res = await delcartRequest(1)
  console.log(res.data)
  dispatch({
    type: 'COUPONLIST',
    allcoupon: res.data
  })
}