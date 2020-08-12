import { get, post } from 'axios'

// 从远端服务器获取数据 网络请求
export function getOrderRequest(a) {
  return get('http://47.100.90.56:8080/banJu/user/lookorder?id='+a)//用户订单
}
export function addOrderRequest() {
  return post('http://47.100.90.56:8080/banJu/user/usergoods',{
    uid:3,
    gid:1,
    status:0
  })//添加用户订单
}
export function getgoodsRequest(p) {
  console.log(p)
  return post('http://47.100.90.56:8080/banJu/user/findusergoods', {
    uid: p,
    status:0,
    }
  )//状态码：0、购物车。1、收藏夹 //购物车
}
export function getdiaryRequest(d){
  return post('http://47.100.90.56:8080/banJu/Diary/findAllByUid',{
    uid:d
  })//日记
}
export function alipayRequest(){
    return post('http://47.100.90.56:8080/banJu/pay/alipay',{
      money:400,
      desc:"家具",
      goods:"沙发",
    })//支付
}
export function couponRequest(c){
  return post('http://47.100.90.56:8080/banJu/user/usercoupon',{
    id:c
  })//查看优惠券
}
export function delcartallRequest(params){
  return post('http://47.100.90.56:8080/banJu/goods/delete',params)//删除购物车，批量
}
export function delcartRequest(g){
  return post('http://47.100.90.56:8080/banJu/goods/deleteById',{
    gid:g
  })//删除购物车
}
// export function delcartRequest(g){
//   return post('http://47.100.90.56:8080/banJu/order2/reg',{
//     uid:3,
//     gid:1,
//     status:0
//   })//删除购物车
// }

