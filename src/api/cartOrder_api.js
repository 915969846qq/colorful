import { get, post } from 'axios'

// 从远端服务器获取数据 网络请求
export function getOrderRequest(a) {
  return get('http://172.16.10.15:8080/banJu/user/lookorder?id='+a)//用户订单
}
export function addOrderRequest() {
  return post('http://172.16.10.15:8080/banJu/user/usergoods',{
    uid:3,
    gid:1,
    status:0
  })//添加用户订单
}
export function getgoodsRequest() {
  // return post('http://172.16.10.15:8080/banJu/user/lookorder', [{
  //   uid: 9,
  //   status:0,
  //   }]
  // )//状态码：0、购物车。1、收藏夹 //购物车
}
export function getdiaryRequest(){
  return post('http://172.16.10.56:8080/banJu/Diary/findAllByUid',{
    uid:1
  })//日记
}
