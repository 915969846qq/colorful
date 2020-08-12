import React, { Component } from 'react'
import { connect } from 'react-redux'
import './css/Personal_My_shopping_order_two.css'
import City from '../../util/chajian/cityzcx'

class Personal_My_shopping_order_two extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      consigneeinfo: {
        name: this.props.consigneeinfo[0].name,
        local: this.props.consigneeinfo[0].local,
        address: this.props.consigneeinfo[0].address,
        tel: this.props.consigneeinfo[0].tel,
        Landline: this.props.consigneeinfo[0].Landline,
      },
      localflag:0,
      tips:0,
      freight:10,
      flag: 0,
      index: -1,
      satisfy: 0,
      discount: 0,
    }
    console.log(this)
  }
  changelocal() {
    let localflag;
    if(this.state.localflag===0)localflag = 1;
    else if(this.state.localflag===1)localflag = 0;
    this.setState({
      localflag:localflag
    },()=>{
      console.log(this.state.localflag)
    })
  }
  use(index, t) {
    this.setState({
      flag: 1,
      index: index,
      discount: this.props.coupon[index].money,
      satisfy: this.props.coupon[index].satisfy,
    }, () => {
      this.consigneeinfo();
    })
  }
  notuse() {
    this.setState({
      flag: 0,
      index: -1,
      discount: 0,
      satisfy: 0,
    }, () => {
      this.consigneeinfo();
    })
  }
  consigneeinfo() {
    let coupon = this.props.coupon.map((item, index) => {
      return (
        <tr key={item.faildate}>
          <td>{item.faildate}</td>
          <td>{item.money}元</td>
          <td>{item.satisfy}元</td>
          <td>{item.satisfy}元</td>
          <td>{new Date(parseInt(item.faildate)).toLocaleString().replace(/:\d{1,2}$/, ' ')}</td>
          <td className="operation">
            {this.state.sumprice<item.satisfy? <p disabled>不可使用</p>:this.state.flag === 0 ? <p onClick={this.use.bind(this, index)}>使用</p> : this.state.index === index ? <p onClick={this.notuse.bind(this)}>取消使用</p> : <p onClick={this.use.bind(this, index)}>使用</p>}
          </td>
        </tr>
      )
    })
    this.setState({
      coupon: coupon,
    })
  }
  mycart() {
    let mycart = this.props.carttoorder.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.price}元</td>
          <td>{item.quantity}</td>
          <td>{item.specifications}</td>
          <td>{item.price*item.quantity}元</td>
        </tr>
      )
    })
    this.setState({
      mycart: mycart,
    }, () => {
      let sumprice = this.props.carttoorder.reduce((totalPrice, item) => totalPrice + item.price*item.quantity, 0);
      this.setState({
        sumprice: sumprice
      },()=>{
        this.consigneeinfo()
      })
    })
  }
  modify(){
    let tip;
    if(this.state.tips===0)tip=1;
    else if(this.state.tips===1)tip=0;
    this.setState({
      tips:tip
    })
  }
  choosebank(index,s){
    this.setState({
      banksrc:this.props.bank[index].imgsrc
    },()=>{
      console.log(this.state.banksrc)
    })
  }
  bank() {
    let bank = this.props.bank.map((item, index) => {
      return (
        <div key={index}>
          <label>
            <input type="radio" name="bank" onClick={this.choosebank.bind(this,index)} />
            <img src={item.imgsrc} alt="" />
          </label>
        </div>
      )
    })
    this.setState({
      bank: bank,
    })
  }
  componentDidMount() {
    console.log(this.props)
    this.mycart()
    
    this.bank()
  }
  savelocal() {
    this.setState({
      localflag:0
    })
  }
  gopage = () => {
    this.props.payable(this);//应付款
    this.props.banksrc(this);//选择的银行
    // if(this.state.index>=0){
    //   this.props.delconsigneeinfo(this);//删除已使用优惠券
    // }
    // this.props.addorderall(this)//添加选中的购物车到订单
    // this.props.delcartall(this);//删除选中的购物车

    this.props.history.push('./Personal_My_shopping_order_three')
  }
  change(value) {
    console.log(value, this)
  }
  render() {
    return (
      <div className="ordert-content">
        <div className="ordert-content-top">
          <div className="ordert-content-top-left">
            <img
              src={require('../../assets/images/shoop-icon/gwc1.png')}
              alt=""
            />
            <span>我的购物车</span>
          </div>
          <div className="ordert-content-top-right">
            <a href="/#">返回购物车</a>
          </div>
        </div>
        <div className="ordert-content-content-receiving">
          <div className="ordert-content-content-receiving-header">
            <span>收货信息</span>
            <font>+新地址</font>
          </div>
          <div className="ordert-content-content-receiving-content">
            <div>
              <label >
                <input onClick={this.changelocal.bind(this)} type="checkbox" />
                <span >使用新收货地址</span>
              </label>
            </div>
            <div>
              <label>收 货 &nbsp;人：</label>
              <input
                id="name" disabled={this.state.localflag===0?true:false}
                defaultValue={this.state.consigneeinfo.name}
                onChange={this.change.bind(this)}
              />
            </div>
            <div>
              <label>所在地区：</label>
              {/* <input defaultValue={this.state.consigneeinfo.local}></input> */}
             <label disabled={this.state.localflag===0?true:false}><City></City></label> 
            </div>
            <div>
              <label>详细地址：</label>
              <input disabled={this.state.localflag===0?true:false} defaultValue={this.state.consigneeinfo.address}></input>
            </div>
            <div>
              <label>手机号码：</label>
              <input disabled={this.state.localflag===0?true:false} defaultValue={this.state.consigneeinfo.tel}></input>
              <label>固定电话：</label>
              <input disabled={this.state.localflag===0?true:false} defaultValue={this.state.consigneeinfo.Landline}></input>
            </div>
            <span onClick={this.savelocal.bind(this)}>保 存</span>
          </div>
        </div>
        <div className="ordert-content-content-payment">
          <div className="ordert-content-content-payment-header">
            <span>支付方式及优惠卷使用</span>
            <a href="/#">修 改</a>
            <font>点击“修改”可选择其它支付方式</font>
          </div>
          <div className="ordert-content-content-payment-content">
            <div>
              <input type="checkbox" />
              <span>使用优惠劵</span>
            </div>
            <p>
              请选择或输入优惠券号码（提示：熊猫工社优惠券每张订单只能使用一张，特例商品不参与使用优惠券）
            </p>
            <div>
              <table>
                <thead>
                  <tr>
                    <td>优惠劵号码</td>
                    <td>面值</td>
                    <td>商品消费限制</td>
                    <td>订单消费限制</td>
                    <td>有效期</td>
                    <td>操作</td>
                  </tr>
                </thead>
                <tbody>{this.state.coupon}</tbody>
              </table>
              <div className="ordert-content-content-payment-content-content">
                <p>账户中暂无可使用的优惠券，可输入您手中的优惠券号进行使用</p>
                <input></input>
                <span>使用</span>
              </div>
              <div className="ordert-content-content-payment-content-footer">
                <div className="payway">
                  <h1>支付及送货方式</h1>
                  <p>付款方式</p>
                  <div>
                    <label>
                      <input type="radio" id="web" name="pay" value="web" />网上支付
                   </label>
                    <span>可支持大多数银行，支付宝或财付通在线支付</span>
                  </div>
                  <div>
                    <label>
                      <input type="radio" id="outline" name="pay" value="outline" disabled/>货到付款
                    </label>
                    <span>
                      由快递公司送货上门，您签收后，直接将货款交付给快递员
                      <p>因疫情原因，暂不支持线下支付。带来不便，烦请见谅。</p>
                    </span>
                  </div>
                </div>

                <div className="bank">{this.state.bank}</div>

                <font>支付平台：</font>

                <div className="app">
                  <div>
                    <label>
                      <input type="radio" name="bank" />
                      <img
                        src={require('../../assets/images/dingdan/DINGDAN_59.png')}
                        alt=""
                      />
                      <img
                        src={require('../../assets/images/dingdan/DINGDAN_67.png')}
                        alt=""
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio" name="bank" />
                      <img
                        src={require('../../assets/images/dingdan/DINGDAN_62.png')}
                        alt=""
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio" name="bank" />
                      <img
                        src={require('../../assets/images/dingdan/DINGDAN_64.png')}
                        alt=""
                      />
                    </label>
                  </div>
                </div>
                <span>保存支付方式</span>
              </div>
            </div>
          </div>
        </div>
        <div className="ordert-content-content-goods">
          <div className="ordert-content-content-goods-header">
            <strong>已选商品</strong>
            <font>返回购物车修改商品</font>
          </div>
          <div className="ordert-content-content-goods-content">
            <table>
              <thead>
                <tr>
                  <td>商品名称</td>
                  <td>单价</td>
                  <td>数量</td>
                  <td>规格</td>
                  <td>金额小计</td>
                </tr>
              </thead>
              <tbody>{this.state.mycart}</tbody>
            </table>
            <div className="ordert-content-content-goods-footer">
              <div className="ordert-content-content-goods-footer-left">
                <div>
                  <p>添加备注：</p>
                </div>
                <div>
                  <input id="remarks" placeholder="请在此添加备注，限50字以内！"></input>
                  <span>注意：请勿填写账号、支付、发票方面的信息！</span>
                </div>
                <div>
                  <p>发票信息：</p>
                </div>
                <div>
                 {this.state.tips===0?<p>不加发票</p>:<p>要发票</p>} 
                  <span onClick={this.modify.bind(this)}>修改</span>
                </div>
              </div>
              <div className="ordert-content-content-goods-footer-right">
                <div>
                  <span>支持七天无理由退换货</span>
                </div>
                <div>
                  <p>
                    {this.props.carttoorder.length}件商品，商品总金额：￥{this.state.sumprice}
                  </p>
                  <p>运费：￥{this.state.freight}元</p>
    {this.state.sumprice > this.state.satisfy ? <p>优惠：￥{this.state.discount}元</p> : <p>优惠：￥&nbsp;元</p>}
                </div>
                <div>
                  <span>
                    应付款：<font>￥{this.state.sumprice - this.state.discount-this.state.freight}元</font>
                  </span>
                  <span onClick={this.gopage.bind(this)}>提交订单</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const MapStateToProps = (state, OwnProps) => {
  return {
    all: state,
    mycart: state.cartorder.mycart,
    consigneeinfo: state.cartorder.consigneeinfo,
    coupon: state.cartorder.coupon,
    carttoorder: state.cartorder.carttoorder,
    // sumprice:state.cartorder.sumprice,
    // couponlist: state.cartorder.couponlist.data,
    bank: state.cartorder.bank,
  }
}
const MapDispatchToProps = (dispatch) => {
  return {
    payable: (t) => {
      console.log(t.state.sumprice - t.state.discount - t.state.freight)
      dispatch({
        type: 'PAYABLE',
        payable: t.state.sumprice - t.state.discount - t.state.freight,
      })
    },
    delconsigneeinfo: (t) => {
      dispatch({
        type: 'DELCONSIGN',
        delconsigneeinfo: this.props.couponlist[this.state.index]
      })
    },
    addorderall: (t) => {
      dispatch({
        type: 'ADDORDERALL',
        addorderall: t.props.carttoorder
      })
    },
    banksrc: (t) => {

      dispatch({
        type: 'BANKSRC',
        banksrc: t.state.banksrc
      })
    },
    delcartall: (t) => {
      dispatch({
        type: 'DELCARTALL',
        delcartall: t.props.carttoorder
      })
    }

  }
};
export default connect(MapStateToProps, MapDispatchToProps)(Personal_My_shopping_order_two)
