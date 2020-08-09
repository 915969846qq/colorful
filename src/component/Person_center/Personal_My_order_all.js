import React, { Component } from 'react'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { connect } from 'react-redux'
import { orderListAction } from '../../action/peresonal_cartOrder_action'
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
    console.log("2222222")
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
    console.log(this.state.postarr);
    let theorder = this.state.postarr.slice((page - 1) * 3, page * 3);
    let TheOrder = theorder.map((item, index) => {
      return (<div className="order-content-content" key={index}>
        <div className="order-content-content-top">
          <input type="checkbox" onClick={this.Check.bind(this)}></input>
          <label>订单编号：{item.order_id}</label>
          <span>下单时间：{item.order_time}</span>
        </div>
        <div className="order-content-content-body">
          <div className="body-left">
            {/* <img src={item.src} alt=""></img> */}
            <div className="body-nit">
              <p>{item.name}</p>
              <p>订单编号：{item.order_id}</p>
              <p>下单时间：{item.order_time}</p>
            </div>
          </div>
          <div className="body-info">
            {item.receiving_name}
          </div>
          <div className="body-info">
            ￥{item.order_price}
          </div>
          <div className="body-info">
            {item.orderflag === 0 ? flag0 : item.orderflag === 1 ? flag1 : flag2}
          </div>
          <div className="body-info">
            <p className="p-btn" onClick={this.del.bind(this, index)}>删除</p>
            <p className="p-btn" onClick={this.add.bind(this, index)}>再次购</p>
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
  componentDidMount() {
    console.log(this)
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
  del(index, s) {
    console.log(index);
    console.log(this.state.page)
    this.state.postarr.splice(index + (this.state.page - 1) * 3, 1);
    this.orderList(this.state.page);
  }
  add(index, s) {
    var d = new Date();
    let thearr = this.state.postarr[index];
    thearr.time=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
    this.state.postarr.push(thearr);
    this.orderList(this.state.page);
  }
  // 比较日期
  compareDate(number,s){ 
    // 获取上个月的最后一天
    let days = new Date(2020, 8, 0).getDate();
    let month = new Date(2020,8,8).getMonth();
    console.log(days,month)
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
        <Menu.Item key="1" onClick={this.compareDate.bind(this,3)}>最近3天</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2" onClick={this.compareDate.bind(this,7)}>最近1周</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" onClick={this.compareDate.bind(this,15)}>最近15天</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="4" onClick={this.compareDate.bind(this,31)}>最近1月</Menu.Item>
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
    allorder: state.cartorder.orderlist.data
  }
}

export default connect(MapStateToProps)(Personal_My_order_all)