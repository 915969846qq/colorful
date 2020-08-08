import {get,post} from 'axios'

// 从远端服务器获取数据 网络请求
export function getPostsRequest() {
  return get('http://172.16.10.16:8080/banJu/order2/findAll')
}