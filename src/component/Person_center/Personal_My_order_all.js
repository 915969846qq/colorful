import React, { Component } from 'react'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { connect } from 'react-redux'
import store from '../../store/personal_cartOrder_store'
import { getOrderRequest, getgoodsRequest, getdiaryRequest, addOrderRequest,alipayRequest} from '../../api/cartOrder_api'
// import store from '../../store/personal_cartOrder_store'
// 所有订单


class Personal_My_order_all extends Component {
  constructor(props) {
    super(props);
    this.state = {
      howtimes: "最近三天",
      page: 1,
    }

  }
  CheckAll() {
    // console.log("2222222")
  }
  Check() {
  }
  // 点击页数
  gopage(page, s) {

    this.setState({
      page: page
    }, () => {
      // let gopage=this.state.page
      this.orderList(this.state.page);
    })
  }
  // 上一页
  lastpage() {
    let pages = this.state.page
    if (pages > 1) {
      this.setState({
        page: pages - 1
      }, () => {
        this.orderList(this.state.page);

      })

    }
  }
  // 下一页
  nextpage() {
    let pages = this.state.page;
    if (pages < Math.ceil(this.props.allorder.length / 3)) {
      this.setState({
        page: pages + 1
      }, () => {
        this.orderList(this.state.page);
        
      })
    }
  }


  orderList(page) {
    const flag0 = (
      <div>
        <p>已取消</p>
        <p>等待付款</p>
      </div>
    );
    const flag1 = (
      <div>
        <p>等待付款</p>
        <p className="gopay" onClick={this.gopay.bind(this)}>等待付款</p>
      </div>
    );
    const flag2 = (
      <div>
        <p>已付款</p>
        <p>物流跟踪</p>
      </div>
    );
    this.setState({
      endpage: Math.ceil(this.state.postarr.length / 3)
    }, () => {
      this.pagesList();
      if (this.state.page > this.state.endpage) {
        this.setState({
          page: this.state.endpage
        }, () => {
          this.orderList(this.state.page);
        })
      }
    })
    // console.log(this.state.postarr);
    let theorder = this.state.postarr.slice((page - 1) * 3, page * 3);
    let TheOrder = theorder.map((item, index) => {
      return (<div className="order-content-content" key={index}>
        <div className="order-content-content-top">
          <input type="checkbox" onClick={this.Check.bind(this)}></input>
          <label>订单编号：{item.id}</label>

          {/* <span>下单时间：{new Date(parseInt(item.createdDate)).toLocaleString().replace(/:\d{1,2}$/, ' ')}</span> */}
          <span>下单时间：{item.time}</span>
        </div>
        <div className="order-content-content-body">
          <div className="body-left">
            {/* <img src={item.goods.image} alt=""></img> */}
            <img src={item.src} alt=""></img>
            <div className="body-nit">
              <p></p>
              {/* <p>商品名称：{item.goods.name}</p> */}
              <p>商品名称：{item.name}</p>
              {/* <p>下单时间：{new Date(parseInt(item.createdDate)).toLocaleString().replace(/:\d{1,2}$/, ' ')}</p> */}
              <p>下单时间：{item.time}</p>
            </div>
          </div>
          <div className="body-info">
            {/* {item.address.consigneeName} */}
          </div>
          <div className="body-info">
            {/* ￥{item.goods.price} */}
            ￥{item.price}
          </div>
          <div className="body-info">
            {item.status === '已取消' ? flag0 : item.status === '待付款' ? flag1 : flag2}
          </div>
          <div className="body-info">
            <p className="p-btn" onClick={this.del.bind(this, item.id)}>删除</p>
            <p className="p-btn" onClick={this.add.bind(this, item.id)}>再次购</p>
          </div>
          <div className="body-info">
            <p>{item.logistics_remarks}</p>
          </div>
        </div>
      </div>)
    })
    this.setState({
      orderlist: TheOrder,
    })
    // return TheOrder
  }
  pagesList() {
    let pages = [];
    for (let i = 1; i <= this.state.endpage; i++) {
      let page = <span className={this.state.page === i ? 'onpage' : 'page'} key={i} onClick={this.gopage.bind(this, i)}>{i}</span>;
      pages.push(page)
    }
    console.log(pages)
    this.setState({
      pages: pages,
    })
  }
  componentWillMount() {
    store.dispatch(async (dispatch) => {
      const res = await getOrderRequest(3)
      dispatch({
        type: 'ORDERLIST',
        allorder: res.data
      }, () => {
        console.log(res.data.data);
      })

    });
  }
  componentDidMount() {
    console.log(this.props)
    this.setState({
      postarr: this.props.allorder,
    }, () => {
      this.orderList(1);
    });
    this.setState({
      endpage: Math.ceil(this.props.allorder.length / 3),
    }, () => {
      this.pagesList(this.state.endpage);
    });
  }
  // 去支付
  gopay() {
    
  }
  // 删除商品
  del(index, s) {
    // console.log(index);
    // console.log(this.state.page)
    this.state.postarr.splice(index + (this.state.page - 1) * 3, 1);
    this.orderList(this.state.page);
  }
  // 添加商品
  add(index, s) {
    let thearr = this.state.postarr[index];
    thearr.createdDate = new Date(parseInt(Math.round(new Date()))).toLocaleString().replace(/:\d{1,2}$/, ' ');
    this.state.postarr.push(thearr);
    this.orderList(this.state.page);
  }
  // 比较日期
  compareDate(number, value,s) {
    // console.log(number,value)
    this.setState({
      howtimes: value
    }, () => {
      let ms = number * 24 * 3600 * 1000;
      console.log(new Date(parseInt(Math.round(new Date()))).toLocaleString().replace(/:\d{1,2}$/, ' '))
      let newms = parseInt(Math.round(new Date()));
      console.log(new Date(parseInt(newms - ms)).toLocaleString().replace(/:\d{1,2}$/, ' '));
      let postarr = this.state.postarr.map((item) => {
        return item.createdDate > (newms - ms)
      })
      this.setState({
        postarr: postarr
      }, () => {
        this.orderList(this.state.page);
      })
    })

    // this.state.postarr.map((item)=>{
    //   let time = item.time.split("-");
    //   if(time[1]<month){

    //   }
    //   console.log(day,number)
    //   if(item.time){

    //   }
    // })
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="1" onClick={this.compareDate.bind(this, 3, '最近3天')}>最近3天</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2" onClick={this.compareDate.bind(this, 7, '最近1周')}>最近1周</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" onClick={this.compareDate.bind(this, 15, '最近15天')}>最近15天</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="4" onClick={this.compareDate.bind(this, 31, '最近1月')}>最近1月</Menu.Item>
      </Menu>
    );
    return (
      <div>
        <div className="order-header">
          <span>订单类型：</span>
          <Dropdown overlay={menu} trigger={['click']}>
            <a href='1' className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              {this.state.howtimes}<DownOutlined />
            </a>
          </Dropdown>
        </div>
        <div className="order-content">
          <div className="order-content-top">
            <input type="checkbox" onClick={this.CheckAll.bind(this)}></input>
            <label>全选</label>
            <ul>
              <li className="onea">订单商品</li>
              <li>收货人</li>
              <li>订单金额</li>
              <li>订单状态</li>
              <li>操作</li>
              <li>售后服务</li>
            </ul>
          </div>
          <div >
            {this.state.orderlist}
            <div className="order-content-footer">
              <span className="lastpage" onClick={this.lastpage.bind(this)}>上一页</span>
              {this.state.pages}
              <span className="nextpage" onClick={this.nextpage.bind(this)}>下一页</span>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
const MapStateToProps = (state, OwnProps) => {
  return {
    allorder: state.cartorder.orderlist.data,
    all: state.cartorder
  }
}

export default connect(MapStateToProps)(Personal_My_order_all)
