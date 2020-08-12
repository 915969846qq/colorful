let initState = {
  cartlogo: require('../assets/images/shoop-icon/gwc1.png'),
  mycart: [
    {
      imgsrc: require('../assets/images/min-banner1_03.jpg'),
      name: '掌心小房',
      price: 67.0,
      quantity: 1,
      sumprice: 67.0,
      specifications: '1KG/箱',
    },
    {
      imgsrc: require('../assets/images/min-banner1_03.jpg'),
      name: '掌心小房',
      price: 67.0,
      quantity: 1,
      sumprice: 67.0,
      specifications: '1KG/箱',
    },
  ],
  recommend: [
    {
      imgsrc: require('../assets/images/min-banner1_03.jpg'),
      name: '【榻榻米】',
      title: '清新自然',
      price: 59.0,
    },
    {
      imgsrc: require('../assets/images/min-banner1_03.jpg'),
      name: '【榻榻米】',
      title: '清新自然',
      price: 49.0,
    },
    {
      imgsrc: require('../assets/images/min-banner1_03.jpg'),
      name: '【榻榻米】',
      title: '清新自然',
      price: 79.0,
    },
    {
      imgsrc: require('../assets/images/min-banner1_03.jpg'),
      name: '【榻榻米】',
      title: '清新自然',
      price: 53.0,
    },
  ],
  // orderlist: [
  //   {
  //     id: 123,
  //     name: '好产品等你来买',
  //     src: require('../assets/images/min-banner1_03.jpg'),
  //     time: '2019-11-20',
  //     takeman: '张三',
  //     price: 290.0,
  //     orderflag: 0,
  //     service: '正在服务',
  //   },
  //   {
  //     id: 126,
  //     name: '好产品等你来买',
  //     src: require('../assets/images/min-banner1_03.jpg'),
  //     time: '2019-11-20',
  //     takeman: '李四',
  //     price: 248.0,
  //     orderflag: 1,
  //     service: '正在服务',
  //   },
  //   {
  //     id: 126,
  //     name: '好产品等你来买',
  //     src: require('../assets/images/min-banner1_03.jpg'),
  //     time: '2019-11-20',
  //     takeman: '李四',
  //     price: 248.0,
  //     orderflag: 1,
  //     service: '正在服务',
  //   },
  //   {
  //     id: 126,
  //     name: '好产品等你来买',
  //     src: require('../assets/images/min-banner1_03.jpg'),
  //     time: '2019-11-20',
  //     takeman: '李四',
  //     price: 248.0,
  //     orderflag: 1,
  //     service: '正在服务',
  //   },
  //   {
  //     id: 126,
  //     name: '好产品等你来买',
  //     src: require('../assets/images/min-banner1_03.jpg'),
  //     time: '2019-11-20',
  //     takeman: '李四',
  //     price: 248.0,
  //     orderflag: 1,
  //     service: '正在服务',
  //   },
  // ],
  refundlist: [
    {
      id: 1234567,
      orderid: '8910jqkA',
      src: require('../assets/images/min-banner1_03.jpg'),
      name: '精品家具',
      refundprice: 10,
      reason: '收取部分手续费用',
      applytime: '2016-7-7',
      flag: '已完成',
    },
    {
      id: 1234567,
      orderid: '8910jqkA',
      src: require('../assets/images/min-banner1_03.jpg'),
      name: '精品家具',
      refundprice: 10,
      reason: '收取部分手续费用',
      applytime: '2016-7-7',
      flag: '已完成',
    },
    {
      id: 1234567,
      orderid: '8910jqkA',
      src: require('../assets/images/min-banner1_03.jpg'),
      name: '精品家具',
      refundprice: 10,
      reason: '收取部分手续费用',
      applytime: '2016-7-7',
      flag: '已完成',
    },
    {
      id: 1234567,
      orderid: '8910jqkA',
      src: require('../assets/images/min-banner1_03.jpg'),
      name: '精品家具',
      refundprice: 10,
      reason: '收取部分手续费用',
      applytime: '2016-7-7',
      flag: '已完成',
    },
    {
      id: 1234567,
      orderid: '8910jqkA',
      src: require('../assets/images/min-banner1_03.jpg'),
      name: '精品家具',
      refundprice: 10,
      reason: '收取部分手续费用',
      applytime: '2016-7-7',
      flag: '已完成',
    },
  ],
  coupon: [
    {
      faildate: '10051312063391869044778',
      money: 20,
      satisfy: 100,
      satisfy: 100,
      faildate: 1605166064000,
    },
  ],
  consigneeinfo: [
    {
      name: '韩梅梅',
      local: '北京市-海淀区',
      address: '巨龟岩台屯1号',
      tel: '15827388275',
      Landline: '3818294',
    },
  ],
  bank: [
    {
      imgsrc: require('../assets/images/dingdan/DINGDAN_03.png'),
      src: 'DINGDAN_03',
    },
    {
      imgsrc: require('../assets/images/dingdan/DINGDAN_05.png'),
      src: 'DINGDAN_05',
    },
    {
      imgsrc: require('../assets/images/dingdan/DINGDAN_07.png'),
      src: 'DINGDAN_07',
    },

    {
      imgsrc: require('../assets/images/dingdan/DINGDAN_11.png'),
      src: 'DINGDAN_11',
    },

    {
      imgsrc: require('../assets/images/dingdan/DINGDAN_18.png'),
      src: 'DINGDAN_18',
    },
    {
      imgsrc: require('../assets/images/dingdan/DINGDAN_19.png'),
      src: 'DINGDAN_19',
    },
    {
      imgsrc: require('../assets/images/dingdan/DINGDAN_20.png'),
      src: 'DINGDAN_20.png',
    },

    {
      imgsrc: require('../assets/images/dingdan/DINGDAN_22.png'),
      src: 'DINGDAN_22',
    },
    {
      imgsrc: require('../assets/images/dingdan/DINGDAN_28.png'),
      src: 'DINGDAN_28',
    },
    {
      imgsrc: require('../assets/images/dingdan/DINGDAN_29.png'),
      src: 'DINGDAN_29.png',
    },
    {
      imgsrc: require('../assets/images/dingdan/DINGDAN_30.png'),
      src: 'DINGDAN_30',
    },

    {
      imgsrc: require('../assets/images/dingdan/DINGDAN_32.png'),
      src: 'DINGDAN_32',
    },
    {
      imgsrc: require('../assets/images/dingdan/DINGDAN_38.png'),
      src: 'DINGDAN_38.png',
    },
    {
      imgsrc: require('../assets/images/dingdan/DINGDAN_39.png'),
      src: 'DINGDAN_39',
    },
    {
      imgsrc: require('../assets/images/dingdan/DINGDAN_40.png'),
      src: 'DINGDAN_40.png',
    },
    {
      imgsrc: require('../assets/images/dingdan/DINGDAN_41.png'),
      src: 'DINGDAN_41',
    },
    {
      imgsrc: require('../assets/images/dingdan/DINGDAN_09.png'),
      src: 'DINGDAN_09',
    },
    {
      imgsrc: require('../assets/images/dingdan/DINGDAN_21.png'),
      src: 'DINGDAN_21',
    },

    {
      imgsrc: require('../assets/images/dingdan/DINGDAN_31.png'),
      src: 'DINGDAN_031',
    },
  ],
  local: "四川-广安-邻水",
  carttoorder: [],
}

const cartOrderReducer = function (state = initState, action) {
  // console.log(state)
  switch (action.type) {

    case 'MYCART':
      return {
        ...state,
        mycart: state.mycart,
      }
    case 'LOCAL':
      return {
        ...state, local: state.local
      }
    case 'CARTTOORDER':
      return {
        ...state, carttoorder: action.carttoorder, sumprice: action.sumprice
      }
    case 'RECOMMEND':
      return {
        ...state,
        recommend: state.recommend,
      }
    case 'ORDERLIST':
      // console.log(action)
      return {
        ...state,
        orderlist: action.allorder,
      }
    case 'BANKSRC':
      // console.log(action)
      return {
        ...state,
        banksrc: action.banksrc,
      }
    case 'CARTLIST':
      // console.log(action)
      return {
        ...state,
        cartlist: action.allcart,
      }
    case 'ALIPAY':
      // console.log(action)
      return {
        ...state,
        alipay: action.alipay,
      }
    // 应付款
    case 'PAYABLE':
      console.log(action.payable);
      return {
        ...state,
         payable : action.payable,
      }
    case 'COUPONLIST':
      // console.log(action)
      return {
        ...state,
        couponlist: action.allcoupon,
      }
    case 'DIARYLIST':
      // console.log(action.alldiary)
      return {
        ...state,
        diarylist: action.alldiary
      }
    default:
      return state
  }

}
export default cartOrderReducer
