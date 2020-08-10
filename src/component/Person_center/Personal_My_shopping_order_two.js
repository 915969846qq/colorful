import React, { Component } from 'react'
import { connect } from 'react-redux'
import './css/Personal_My_shopping_order_two.css'
import City from '../../util/chajian/city'
class Personal_My_shopping_order_two extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consigneeinfo: {
        name: this.props.consigneeinfo[0].name,
        local: this.props.consigneeinfo[0].local,
        address: this.props.consigneeinfo[0].address,
        tel: this.props.consigneeinfo[0].tel,
        Landline: this.props.consigneeinfo[0].Landline,
      }
    }
    console.log(this)
  }
  add() {
    console.log(this.props)
  }
  consigneeinfo() {
    let coupon = this.props.coupon.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.code}</td>
          <td>{item.denomination}元</td>
          <td>{item.consumption}元</td>
          <td>{item.orderconsumption}元</td>
          <td>{item.term}</td>
          <td className="operation">
            <p onClick={() => this.use(index)}>使用</p>
          </td>
        </tr>)
    })
    this.setState({
      coupon: coupon
    })
  }
  mycart() {
    let mycart = this.props.mycart.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.price}元</td>
          <td>{item.number}</td>
          <td>{item.sumprice}元</td>
          <td>{item.specifications}</td>
        </tr>)
    })
    this.setState({
      mycart: mycart
    })
  }
  bank() {
    let bank = this.props.bank.map((item, index) => {
      return (
        <div key={index}>
          <label>
            <input type="radio" name="bank" />
            <img src={item.imgsrc} alt='bank' />
          </label>
        </div>)
    })
    this.setState({
      bank: bank
    })
  }
  componentDidMount() {
    console.log(this.props)
    this.consigneeinfo();
    this.mycart();
    this.bank();
  }
  save(s) {
    console.log(s)
  }
  gopage = () => {
    this.props.history.push('./Personal_My_shopping_order_three');
  }
  change(value) {
    console.log(value, this);
  }
  render() {
    return (
      <div className="ordert-content" >
        <div className="ordert-content-top">
          <div className="ordert-content-top-left">
            <img src={require("../../assets/images/shoop-icon/gwc1.png")} alt='gwc1.png'></img>
            <span>我的购物车</span>
          </div>
          <div className="ordert-content-top-right"><a>返回购物车</a></div>
        </div>
        <div className="ordert-content-content-receiving">
          <div className="ordert-content-content-receiving-header">
            <span>收货信息</span>
            <font>+新地址</font>
          </div>
          <div className="ordert-content-content-receiving-content">
            <div><input type="radio" /><span onClick={() => this.add()}>使用新收货地址</span></div>
            <div><label>收 货 &nbsp;人：</label><input id="name" defaultValue={this.state.consigneeinfo.name} onChange={this.change.bind(this)} /></div>
            <div><label>所在地区：</label>
              <City></City></div>
            <div><label>详细地址：</label><input defaultValue={this.state.consigneeinfo.address}></input></div>
            <div><label>手机号码：</label><input defaultValue={this.state.consigneeinfo.tel}></input>
              <label>固定电话：</label><input defaultValue={this.state.consigneeinfo.Landline}></input></div>
            <span onClick={this.save.bind(this)}>保 存</span>
          </div>
        </div>
        <div className="ordert-content-content-payment">
          <div className="ordert-content-content-payment-header">
            <span>支付方式及优惠卷使用</span>
            <a>修 改</a>
            <font>点击“修改”可选择其它支付方式</font>
          </div>
          <div className="ordert-content-content-payment-content">
            <div><input type="checkbox" /><span>使用优惠劵</span></div>
            <p>请选择或输入优惠券号码（提示：熊猫工社优惠券每张订单只能使用一张，特例商品不参与使用优惠券）</p>
            <div>
              <table>
                <thead>
                  <td>优惠劵号码</td>
                  <td>面值</td>
                  <td>商品消费限制</td>
                  <td>订单消费限制</td>
                  <td>有效期</td>
                  <td>操作</td>
                </thead>
                <tbody>
                  {this.state.coupon}
                </tbody>
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
                    <input type="radio" id="web" name="pay" value="web" /><font for="web">网上支付</font><span>可支持大多数银行，支付宝或财付通在线支付</span>
                  </div>
                  <div>
                    <input type="radio" id="outline" name="pay" value="outline" /><font for="outline">货到付款</font><span>由快递公司送货上门，您签收后，直接将货款交付给快递员</span>
                  </div>
                </div>

                <div className="bank">
                  {this.state.bank}
                </div>

                <font>支付平台：</font>

                <div className="app">
                  <div>
                    <label>
                      <input type="radio" name="bank" />
                      <img src={require('../../assets/images/dingdan/DINGDAN_59.png')} alt='bank'></img>
                      <img src={require('../../assets/images/dingdan/DINGDAN_67.png')} alt='bank'></img>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio" name="bank" />
                      <img src={require('../../assets/images/dingdan/DINGDAN_62.png')} alt='bank'></img>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio" name="bank" />
                      <img src={require('../../assets/images/dingdan/DINGDAN_64.png')} alt='bank'></img>
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
                <td>商品名称</td>
                <td>单价</td>
                <td>数量</td>
                <td>规格</td>
                <td>金额小计</td>
              </thead>
              <tbody>
                {this.state.mycart}
              </tbody>

            </table>
            <div className="ordert-content-content-goods-footer">
              <div className="ordert-content-content-goods-footer-left">

                <div>
                  <p>添加备注：</p>

                </div>
                <div>
                  <input placeholder="请在此添加备注，限50字以内！"></input>
                  <span>注意：请勿填写账号、支付、发票方面的信息！</span>
                </div>
                <div>
                  <p>发票信息：</p>
                </div>
                <div>
                  <p>不加发票</p>
                  <span>修改</span>
                </div>
              </div>
              <div className="ordert-content-content-goods-footer-right">
                <div>
                  <span>支持七天无理由退换货</span>
                </div>
                <div>
                  <p>{}件商品，商品总金额：￥{}</p>
                  <p>运费：￥{10}元</p>
                  <p>优惠：￥{}元</p>
                </div>
                <div>
                  <span>应付款：<font>￥{}</font></span>
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
    mycart: state.cartorder.mycart,
    consigneeinfo: state.cartorder.consigneeinfo,
    coupon: state.cartorder.coupon,
    bank: state.cartorder.bank,

  }
}
export default connect(MapStateToProps)(Personal_My_shopping_order_two)
