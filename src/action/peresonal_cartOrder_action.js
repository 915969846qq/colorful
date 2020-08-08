// import store from '../store/personal_cartOrder_store'
import {getPostsRequest} from '../api/cartOrder_api'

export const mycartAction = {
  type: 'MYCART',
}
export const recommendAction = {
  type:'RECOMMEND'
}
export const orderListAction = {
  type: 'ORDERLIST'
}
// export const orderListAction = async (dispatch) => {
//   const res = await getPostsRequest()
//   console.log(res.data)
//   dispatch({
//     type: 'ORDERLIST',
//     allorder: res.data
//   })
// }