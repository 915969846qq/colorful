// import store from '../store/personal_cartOrder_store'
import {getOrderRequest,getgoodsRequest} from '../api/cartOrder_api'

export const mycartAction = {
  type: 'MYCART',
}
export const recommendAction = {
  type:'RECOMMEND'
}
// export const orderListAction = {
//   type: 'ORDERLIST'
// }
export const orderListAction = async (dispatch) => {
  const res = await getOrderRequest()
  dispatch({
    type: 'ORDERLIST',
    allorder: res.data
  })
}
export const cartListAction = async (dispatch) => {
  const res = await getgoodsRequest()
  dispatch({
    type: 'CARTLIST',
    allcart: res.data
  })
}