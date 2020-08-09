import {get,post} from 'axios'

// 从远端服务器获取数据 网络请求
export function getOrderRequest() {
  return get('http://172.16.10.16:8080/banJu/order2/findAll')
}
export function getgoodsRequest() {
  return post('http://172.16.10.15:8080/banJu/user/findusergoods', {
    uid: 9,
    status:0,
    }
  )//状态码：0、购物车。1、收藏夹
}