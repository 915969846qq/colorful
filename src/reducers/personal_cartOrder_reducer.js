let initState = {
  cartlogo: require('../assets/images/shoop-icon/gwc1.png'),
  mycart: [
    {
      imgsrc: require('../assets/images/min-banner1_03.jpg'),
      name: "掌心小房",
      price: 67.00,
      number: 1,
      sumprice: 67.00,
      specifications: "1KG/箱",
    },
    {
      imgsrc: require('../assets/images/min-banner1_03.jpg'),
      name: "掌心小房",
      price: 67.00,
      number: 1,
      sumprice: 67.00,
      specifications: "1KG/箱",
    }
  ],
  recommend: [
    {
      imgsrc: require("../assets/images/min-banner1_03.jpg"),
      name: "【榻榻米】",
      title: "清新自然",
      price: 59.00,
    },
    {
      imgsrc: require("../assets/images/min-banner1_03.jpg"),
      name: "【榻榻米】",
      title: "清新自然",
      price: 49.00,
    },
    {
      imgsrc: require("../assets/images/min-banner1_03.jpg"),
      name: "【榻榻米】",
      title: "清新自然",
      price: 79.00,
    },
    {
      imgsrc: require("../assets/images/min-banner1_03.jpg"),
      name: "【榻榻米】",
      title: "清新自然",
      price: 53.00,
    },
  ],
  orderlist: [{
    id: 123,
    name: "好产品等你来买",
    src: require('../assets/images/min-banner1_03.jpg'),
    time: '2019-11-20',
    takeman: "张三",
    price: 290.00,
    orderflag: 0,
    service: "正在服务"
  }, {
    id: 126,
    name: "好产品等你来买",
    src: require('../assets/images/min-banner1_03.jpg'),
    time: '2019-11-20',
    takeman: "李四",
    price: 248.00,
    orderflag: 1,
    service: "正在服务"
  }, {
    id: 126,
    name: "好产品等你来买",
    src: require('../assets/images/min-banner1_03.jpg'),
    time: '2019-11-20',
    takeman: "李四",
    price: 248.00,
    orderflag: 1,
    service: "正在服务"
  }, {
    id: 126,
    name: "好产品等你来买",
    src: require('../assets/images/min-banner1_03.jpg'),
    time: '2019-11-20',
    takeman: "李四",
    price: 248.00,
    orderflag: 1,
    service: "正在服务"
  }, {
    id: 126,
    name: "好产品等你来买",
    src: require('../assets/images/min-banner1_03.jpg'),
    time: '2019-11-20',
    takeman: "李四",
    price: 248.00,
    orderflag: 1,
    service: "正在服务",
  }
  ],
  refundlist:[
    {
      id:1234567,
      orderid:'8910jqkA',
      src: require('../assets/images/min-banner1_03.jpg'),
      name:'精品家具',
      refundprice:10,
      reason:'收取部分手续费用',
      applytime:'2016-7-7',
      flag:'已完成',
    },
    {
      id:1234567,
      orderid:'8910jqkA',
      src: require('../assets/images/min-banner1_03.jpg'),
      name:'精品家具',
      refundprice:10,
      reason:'收取部分手续费用',
      applytime:'2016-7-7',
      flag:'已完成',
    },
    {
      id:1234567,
      orderid:'8910jqkA',
      src: require('../assets/images/min-banner1_03.jpg'),
      name:'精品家具',
      refundprice:10,
      reason:'收取部分手续费用',
      applytime:'2016-7-7',
      flag:'已完成',
    },
    {
      id:1234567,
      orderid:'8910jqkA',
      src: require('../assets/images/min-banner1_03.jpg'),
      name:'精品家具',
      refundprice:10,
      reason:'收取部分手续费用',
      applytime:'2016-7-7',
      flag:'已完成',
    },
    {
      id:1234567,
      orderid:'8910jqkA',
      src: require('../assets/images/min-banner1_03.jpg'),
      name:'精品家具',
      refundprice:10,
      reason:'收取部分手续费用',
      applytime:'2016-7-7',
      flag:'已完成',
    }
  ],
  coupon: [{
    code: '10051312063391869044778',
    denomination: 20,
    consumption: 100,
    orderconsumption: 100,
    term: '2015.04.01 -- 2015.12.31'
  },
  ],
  consigneeinfo:[
    {
      name:'韩梅梅',
      local:'北京市-海淀区',
      address:'巨龟岩台屯1号',
      tel:'15827388275',
      Landline:'3818294',
    }
  ],
  bank:[{
    imgsrc:require('../assets/images/dingdan/DINGDAN_03.png')
  },
  {
    imgsrc:require('../assets/images/dingdan/DINGDAN_05.png')
  },
  {
    imgsrc:require('../assets/images/dingdan/DINGDAN_07.png')
  },

  {
    imgsrc:require('../assets/images/dingdan/DINGDAN_11.png')
  },

  {
    imgsrc:require('../assets/images/dingdan/DINGDAN_18.png')
  },
  {
    imgsrc:require('../assets/images/dingdan/DINGDAN_19.png')
  },
  {
    imgsrc:require('../assets/images/dingdan/DINGDAN_20.png')
  },

  {
    imgsrc:require('../assets/images/dingdan/DINGDAN_22.png')
  },
  {
    imgsrc:require('../assets/images/dingdan/DINGDAN_28.png')
  },
  {
    imgsrc:require('../assets/images/dingdan/DINGDAN_29.png')
  },
  {
    imgsrc:require('../assets/images/dingdan/DINGDAN_30.png')
  },

  {
    imgsrc:require('../assets/images/dingdan/DINGDAN_32.png')
  },
  {
    imgsrc:require('../assets/images/dingdan/DINGDAN_38.png')
  },
  {
    imgsrc:require('../assets/images/dingdan/DINGDAN_39.png')
  },
  {
    imgsrc:require('../assets/images/dingdan/DINGDAN_40.png')
  },
  {
    imgsrc:require('../assets/images/dingdan/DINGDAN_41.png')
  },
  {
    imgsrc:require('../assets/images/dingdan/DINGDAN_09.png')
  },
  {
    imgsrc:require('../assets/images/dingdan/DINGDAN_21.png')
  },

  {
    imgsrc:require('../assets/images/dingdan/DINGDAN_31.png')
  },
]
}

const cartOrderReducer = function (state = initState, action) {
  console.log(state)
  switch (action.type) {
    case 'MYCART':
      return {
        ...state, mycart: state.mycart
      }
    case 'RECOMMEND':
      return {
        ...state, recommend: state.recommend
      }
    case 'ORDERLIST': 
      return {
        ...state, orderlist: action.allorder
      }
      case 'ORDERLIST': 
      return {
        ...state, orderlist: action.allcart
      }

    default:
      return state
  }
}
export default cartOrderReducer;