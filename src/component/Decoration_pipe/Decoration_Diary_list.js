import React, { Component } from 'react'
import Decoration_Diary_alllist from './Decoration_Diary_alllist'
import Decoration_My_diary from '../Person_center/Decoration_My_diary'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import { Carousel } from 'antd'
import $ from 'jquery'
import '../../Css/index11.css'
import '../../assets/Fang_Css/Decoration_diary.css'
//装修日记列表
export default class Decoration_Diary_list extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      city: '',
      style: '',
      Size: '',
    }
  }
  back() {
    sessionStorage.clear('user')
  }
  person() {
    if (sessionStorage.user === undefined) {
      this.props.history.push('/Sign_in')
    } else {
      this.props.history.push('/Personal_Center_index')
    }
  }
  componentDidMount() {
    if (sessionStorage.user === undefined) {
      let p1 = (
        <span id="user11">
          <Link to="/Sign_in" className="sn-login">
            请登录
          </Link>
          <Link to="/Sign_Register">免费注册</Link>
        </span>
      )
      this.setState({
        p: p1,
      })
    } else {
      let userLogin = sessionStorage.getItem('user')
      let userEmtiy = JSON.parse(userLogin)
      this.setState(
        {
          user: userEmtiy.user,
          kk: '',
        },
        () => {
          let p1 = (
            <span id="user11">
              用户名：{this.state.user}{' '}
              <em id="user12">
                <Link to="/Sign_in" onClick={this.back.bind(this)}>
                  退出
                </Link>
              </em>
            </span>
          )
          this.setState({
            p: p1,
          })
        }
      )
    }
  }
  passdata = (data) => {
    // console.log(data)
    console.log(this)
    let oj = {}
    if (data.city !== undefined) {
      console.log(data)
      this.setState(
        {
          city: data.city,
        },
        () => {
          this.Child.childFn(this.state)
        }
      )
    }
    if (data.style !== undefined) {
      this.setState(
        {
          style: data.style,
        },
        () => {
          this.Child.childFn(this.state)
        }
      )
    }
    if (data.Size !== undefined) {
      this.setState(
        {
          Size: data.Size,
        },
        () => {
          this.Child.childFn(this.state)
        }
      )
    }
  }
  onRef = (ref) => {
    this.Child = ref
  }

  render() {
    return (
      <div className="index">
        <div id="body">
          <div className="body">
            <div id="site-nav" data-spm="a2226mz" role="navigation">
              <div id="sn-bg">
                <div className="sn-bg-right"></div>
              </div>
              <div id="sn-bd">
                <div className="sn-container">
                  <p id="login-info" className="sn-login-info">
                    <em data-spm-anchor-id="875.7931836/B.a2226mz.i0.2cc94265bHtErm">
                      欢迎来科乐福
                    </em>
                    {this.state.p}
                  </p>

                  <ul className="sn-quick-menu">
                    <li className="sn-mytaobao menu-item j_MyTaobao"></li>
                    <li className="sn-cart">
                      <i className="fp-iconfont iconfont icon-qicheqianlian-"></i>
                      <a
                        className="sn-cart-link"
                        href="//cart.tmall.com/cart/myCart.htm?from=btop"
                        target="_top"
                        rel="nofollow"
                        data-spm-anchor-id="875.7931836/B.a2226mz.7"
                      >
                        购物车
                      </a>
                    </li>
                    <li className="sn-favorite menu-item">
                      <div className="sn-menu">
                        <a
                          className="menu-hd"
                          href="//shoucang.taobao.com/shop_collect_list.htm?scjjc=c1"
                          target="_top"
                          rel="nofollow"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-spm-anchor-id="875.7931836/B.a2226mz.8"
                        >
                          收藏夹<b></b>
                        </a>
                      </div>
                    </li>
                    <li className="sn-separator"></li>
                    <li className="sn-mobile">
                      <i className="mui-global-iconfont">㑈</i>
                      <a
                        title="天猫无线"
                        target="_top"
                        className="sn-mobile-link"
                        href="//pages.tmall.com/wow/portal/act/app-download?scm=1027.1.1.1"
                        data-spm-anchor-id="875.7931836/B.a2226mz.11"
                      >
                        手机版
                      </a>
                    </li>
                    <li className="sn-home">
                      <a
                        href="//www.taobao.com/"
                        data-spm-anchor-id="875.7931836/B.a2226mz.12"
                      >
                        我要装修
                      </a>
                    </li>
                    <li className="sn-seller menu-item">
                      <span
                        className="menu-hd"
                        onClick={this.person.bind(this)}
                      >
                        个人中心
                      </span>
                    </li>
                    <li className="sn-sitemap">
                      <a href="11" className="menu-hd">
                        网站导航
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Content内容 */}
            <div id="content" className="fang_marginT20">
              <div>
                {/* <Router basename="/Decoration_Diary_list"> */}
                <Router>
                  <div>
                    <Route
                      path="/Decoration_Diary_list"
                      component={Decoration_Diary_alllist}
                      exact
                    ></Route>
                    <Route
                      path="/Decoration_Diary_list/Decoration_My_diary"
                      component={Decoration_My_diary}
                    ></Route>
                  </div>
                </Router>
              </div>

              {/*底部 */}
              <div id="footer">
                <div id="tmall-ensure"></div>
                <div id="tmall-desc">
                  <div
                    className="mui-global-fragment-load"
                    data-fragment="tmbase/mui_footer_desc"
                  >
                    <dl id="ensure">
                      <dt>
                        <span>购物指南</span>
                      </dt>
                      <dd>
                        <a href="//register.tmall.com/">免费注册</a>{' '}
                        <a href="https://www.alipay.com/user/reg_select.htm">
                          开通支付宝
                        </a>{' '}
                        <a href="https://www.alipay.com/user/login.htm?goto=https%3A%2F%2Fwww.alipay.com%2Fuser%2Finpour_request.htm">
                          支付宝充值
                        </a>
                      </dd>
                    </dl>
                    <dl id="beginner">
                      <dt>
                        <span>科乐福保障</span>
                      </dt>
                      <dd>
                        <a
                          href="//service.tmall.com/support/tmall/knowledge-1140860.htm"
                          data-spm-anchor-id="875.7931836/B.a2226n1.8"
                        >
                          发票保障
                        </a>{' '}
                        <a
                          href="//service.tmall.com/support/tmall/knowledge-1124063.htm"
                          data-spm-anchor-id="875.7931836/B.a2226n1.9"
                        >
                          售后规则
                        </a>{' '}
                        <a
                          href="//service.tmall.com/support/tmall/knowledge-1126800.htm"
                          data-spm-anchor-id="875.7931836/B.a2226n1.10"
                        >
                          缺货赔付
                        </a>
                      </dd>
                    </dl>
                    <dl id="payment">
                      <dt>
                        <span>支付方式</span>
                      </dt>
                      <dd>
                        <a
                          href="https://payservice.alipay.com/intro/index.htm?c=kjzf"
                          data-spm-anchor-id="875.7931836/B.a2226n1.11"
                        >
                          快捷支付
                        </a>{' '}
                        <a
                          href="https://payservice.alipay.com/intro/index.htm?c=xyk"
                          data-spm-anchor-id="875.7931836/B.a2226n1.12"
                        >
                          信用卡
                        </a>{' '}
                        <a
                          href="https://payservice.alipay.com/intro/index.htm?c=yeb"
                          data-spm-anchor-id="875.7931836/B.a2226n1.13"
                        >
                          余额宝
                        </a>{' '}
                        <a
                          href="https://payservice.alipay.com/intro/index.htm?c=hb"
                          data-spm-anchor-id="875.7931836/B.a2226n1.14"
                        >
                          蚂蚁花呗
                        </a>{' '}
                        <a
                          href="//tms.alicdn.com/market/cainiao/codchn.php"
                          data-spm-anchor-id="875.7931836/B.a2226n1.15"
                        >
                          货到付款
                        </a>
                      </dd>
                    </dl>
                    <dl id="seller">
                      <dt>
                        <span>商家服务</span>
                      </dt>
                      <dd>
                        <a
                          href="//guize.tmall.com/"
                          data-spm-anchor-id="875.7931836/B.a2226n1.16"
                        >
                          科乐福规则
                        </a>
                        <a
                          href="//zhaoshang.tmall.com/"
                          className="join"
                          data-spm-anchor-id="875.7931836/B.a2226n1.17"
                        >
                          商家入驻
                        </a>
                        <a
                          href="//shangjia.tmall.com/portal.htm"
                          data-spm-anchor-id="875.7931836/B.a2226n1.18"
                        >
                          商家中心
                        </a>
                        <a
                          href="//peixun.tmall.com/"
                          data-spm-anchor-id="875.7931836/B.a2226n1.19"
                        >
                          科乐福智库
                        </a>
                        <a
                          href="//e56.tmall.com"
                          data-spm-anchor-id="875.7931836/B.a2226n1.20"
                        >
                          物流服务
                        </a>
                        <a
                          href="//maowo.tmall.com/"
                          data-spm-anchor-id="875.7931836/B.a2226n1.21"
                        >
                          喵言喵语
                        </a>
                        <a
                          href="//fw.tmall.com/"
                          data-spm-anchor-id="875.7931836/B.a2226n1.22"
                        >
                          运营服务
                        </a>
                      </dd>
                    </dl>
                    <dl id="mobile">
                      <dt>手机科乐福</dt>
                      <dd>
                        <a
                          href="//mobile.tmall.com/"
                          className="join1"
                          data-spm-anchor-id="875.7931836/B.a2226n1.23"
                        >
                          <img
                            src="//img.alicdn.com/tfscom/TB14MWoNhjaK1RjSZFAwu2dLFXa.png"
                            width="105"
                            height="105"
                            alt="手机天猫"
                          />
                        </a>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
