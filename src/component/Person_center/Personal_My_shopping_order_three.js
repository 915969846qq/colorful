import React, { Component } from 'react'
import { connect } from 'react-redux'
import './css/Personal_My_shopping_oeder_three.css'

class Personal_My_shopping_order_three extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  bank() {
    let bank = this.props.bank.map((item, index) => {
      return (
        <div key={index}>
          <label>
            <input type="radio" name="bank" />
            <img src={item.imgsrc}></img>
          </label>
        </div>)
    })
    this.setState({
      bank: bank
    })
  }
  componentDidMount() {
    this.bank();
  }
  gopage = () => {
    // this.props.history.push('./Personal_My_shopping_oeder_three');
  }

  render() {
    return (
      <div className="success-order-content">
        <div className="success-order-content-model">
          <div>
            <h1>支付确认</h1>
            <p>请在新开的网上银行页面进行支付，支付完成前请不要关闭该窗口。</p>
            <a>
              <img src={require('../../assets/images/cg_03.png')}></img>
              <div>
                <p>已完成支付</p>
                <p>查看订单详情</p>
              </div>
            </a>
            <a>
              <img src={require('../../assets/images/cg_05.png')}></img>
              <div>
                <p>支付遇到问题</p>
                <p>重选支付方式</p>
              </div>
            </a>
          </div>
        </div>
        <h1>订单提交成功！</h1>
        <p>请您及时付款，以便订单能尽快处理！</p>
        <div>
          <span>订单编号：{} | 发货日期：{}</span>
        </div>
        <p>请于下单后24小时内完成付款，逾期未付款订单将被取消，配送当天支付成功的订单将顺延1天配送！</p>
        <p>(提示：为保护环境，本商城不提供一次性购物袋，还请您提前自备环保袋!)</p>
        <p>您还需支付：<font>￥{}</font></p>
        <div>
          <span>您已选择：</span>
          <div>
            <div>
              <img src={require('../../assets/images/zhihubao_03.png')}></img>
            </div>
            <strong onClick={this.gopage.bind(this)}>立即支付</strong>
          </div>

        </div>
        <span>选择其它银行 / 支付平台</span>
        <div className="bank">
          {this.state.bank}
        </div>

      </div>
    )
  }
}
const MapStateToProps = (state, OwnProps) => {
  return {
    post: state.cartorder.mycart,
    rcommend: state.cartorder.recommend,
    bank:state.cartorder.bank,
  }
}
export default connect(MapStateToProps)(Personal_My_shopping_order_three)
