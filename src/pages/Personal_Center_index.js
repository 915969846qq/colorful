import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Link,
} from 'react-router-dom'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import './css/Personal_Center_index.css'

import Personal_My_order from '../component/Person_center/Personal_My_order'
import MyCenter_index from '../component/Person_center/MyCenter_index'
import Personal_Decoration_order from '../component/Person_center/Personal_Decoration_order'
import Personal_My_reservation from '../component/Person_center/Personal_My_reservation'
import Personal_Collection_goods from '../component/Person_center/Personal_Collection_goods'
import Personal_A_collection_shops from '../component/Person_center/Personal_A_collection_shops'
import Personal_Collection_activities from '../component/Person_center/Personal_Collection_activities'
import Personal_My_shopping_cart from '../component/Person_center/Personal_My_shopping_cart'
import Personal_customer_service from '../component/Person_center/Personal_customer_service'
import Personal_Review_sheet from '../component/Person_center/Personal_Review_sheet'
import Personal_coupon from '../component/Person_center/Personal_coupon'
import Personal_second_hand_management from '../component/Person_center/Personal_second_hand_management'
import Personal_My_service from '../component/Person_center/Personal_My_service'
import Personal_personal_information from '../component/Person_center/Personal_personal_information'
import Personal_Receipt_address from '../component/Person_center/Personal_Receipt_address'
import Personal_Security_Center from '../component/Person_center/Personal_Security_Center'
import Personal_Decoration_diary from '../component/Person_center/Personal_Decoration_diary'
import Personal_Service_role_entry from '../component/Person_center/Personal_Service_role_entry'
// 记录日记
import Decoration_Diary_list from '../component/Decoration_pipe/Decoration_Diary_list'
import Decoration_My_diary from '../component/Person_center/Decoration_My_diary'
import Decoration_Write_diary from '../component/Person_center/Decoration_Write_diary'
const { Header, Content, Footer, Sider } = Layout
// 个人中心
export default class Personal_Center_index extends Component {
  constructor() {
    super()
    this.state = {
      imgsrc: require('../assets/images/address.png'),
      local: '成都',
      username: 'colorful',
    }
  }
  chooseLocal() {
    console.log(this)
  }
  UNSAFE_componentWillMount() {
    console.log(this.state)
  }
  render() {
    return (
      <Layout>
        {/* 个人中心 */}
        <Header>
          <div className="header-top">
            <div className="header-left header">
              <img src={this.state.imgsrc} alt="地址图标"></img>
              <span className="span-red">{this.state.local}</span>
              <span className="hover-red" onClick={this.chooseLocal.bind(this)}>
                【切换】
              </span>
            </div>
            <div className="header-midel header">
              <span className="span-gray">您好，欢迎您访问</span>
              <span className="span-red">{this.state.username}!</span>
            </div>
            <div className="header-right header">
              <a href="1" className="hover-red">
                登录
              </a>
              <a href="1" className="hover-red">
                免费注册
              </a>
              <a href="1" className="hover-red">
                我要装修
              </a>
              <img
                src={require('../assets/images/hotline.png')}
                alt="资讯图标"
              ></img>
              <span className="span-gray">咨询热线：4006-900-288</span>
            </div>
          </div>
          <div className="header-bottom">
            <div className="header-bottom-img">
              <img
                src={require('../assets/images/logo2.png')}
                alt="logo2"
              ></img>
            </div>
            <div className="header-bottom-span">
              <h1>个人中心</h1>
            </div>
            <div className="header-bottom-button">
              <a href="1">成为经销商</a>
            </div>
          </div>
        </Header>
        <Content>
          <Layout className="content">
            <div className="content-top">
              <p>
                <a href="1">首页</a>
                <span>&gt;</span>
                <a href="1">我的个人中心</a>
              </p>
            </div>
            <Router basename="/Personal_Center_index">
              {/* 装修日志 */}
              <div>
                <Route
                  path="/Personal_Decoration_diary/Decoration_Diary_list"
                  component={Decoration_Diary_list}
                ></Route>

                <Route
                  path="/Personal_Decoration_diary/Decoration_My_diary"
                  component={Decoration_My_diary}
                ></Route>
              </div>
              <div className="person-content-flex">
                <Sider className="left-menu">
                  <ul>
                    <li>
                      <h3>个人中心</h3>
                    </li>
                    <li>
                      <NavLink to="/Personal_My_order">我的订单</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_Decoration_order">
                        装修订单
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/MyCenter_index">个人订单</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_My_reservation">我的预约</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_Collection_goods">
                        收藏的商品
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_A_collection_shops">
                        收藏的店铺
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_Collection_activities">
                        收藏的活动
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_My_shopping_cart">
                        我的购物车
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_customer_service">
                        客户服务
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_Review_sheet">评论晒单</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_coupon">优惠券</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_second_hand_management">
                        我的二手管理
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_My_service">我的服务</NavLink>
                    </li>
                    <li>
                      <h3>账户管理</h3>
                    </li>
                    <li>
                      <NavLink to="/Personal_personal_information">
                        我的个人资料
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_Receipt_address">收货地址</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_Security_Center">安全中心</NavLink>
                    </li>
                    <li>
                      <h3>我的装修</h3>
                    </li>
                    <li>
                      <NavLink to="/Personal_Decoration_diary">
                        装修日记
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_Service_role_entry">
                        服务角色入口
                      </NavLink>
                    </li>
                  </ul>
                </Sider>
                <Content className="content-content">
                  <div className="fang_height100">
                    <Route
                      path="/Personal_My_order"
                      component={Personal_My_order}
                    ></Route>
                    <Route
                      path="/Personal_Decoration_order"
                      component={Personal_Decoration_order}
                    ></Route>
                    <Route
                      path="/MyCenter_index"
                      component={MyCenter_index}
                    ></Route>
                    <Route
                      path="/Personal_My_reservation"
                      component={Personal_My_reservation}
                    ></Route>
                    <Route
                      path="/Personal_Collection_goods"
                      component={Personal_Collection_goods}
                    ></Route>
                    <Route
                      path="/Personal_A_collection_shops"
                      component={Personal_A_collection_shops}
                    ></Route>
                    <Route
                      path="/Personal_Collection_activities"
                      component={Personal_Collection_activities}
                    ></Route>
                    <Route
                      path="/Personal_My_shopping_cart"
                      component={Personal_My_shopping_cart}
                    ></Route>
                    <Route
                      path="/Personal_customer_service"
                      component={Personal_customer_service}
                    ></Route>
                    <Route
                      path="/Personal_Review_sheet"
                      component={Personal_Review_sheet}
                    ></Route>
                    <Route
                      path="/Personal_coupon"
                      component={Personal_coupon}
                    ></Route>
                    <Route
                      path="/Personal_second_hand_management"
                      component={Personal_second_hand_management}
                    ></Route>
                    <Route
                      path="/Personal_My_service"
                      component={Personal_My_service}
                    ></Route>
                    <Route
                      path="/Personal_personal_information"
                      component={Personal_personal_information}
                    ></Route>
                    <Route
                      path="/Personal_Receipt_address"
                      component={Personal_Receipt_address}
                    ></Route>
                    <Route
                      path="/Personal_Security_Center"
                      component={Personal_Security_Center}
                    ></Route>
                    <Route
                      path="/Personal_Decoration_diary"
                      component={Personal_Decoration_diary}
                    ></Route>
                    <Route
                      path="/Personal_Service_role_entry"
                      component={Personal_Service_role_entry}
                    ></Route>
                    <Route
                      path="/Decoration_Write_diary"
                      component={Decoration_Write_diary}
                    ></Route>
                    {/* <Redirect from="/" to="/MyCenter_index"></Redirect> */}
                  </div>
                </Content>
              </div>
            </Router>
          </Layout>
        </Content>
        <Footer>
          <div className="personal-footer">
            <div>
              <h3>购物指南</h3>
              <ul>
                <li>
                  <a href="/">111</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>购物指南</h3>
              <ul>
                <li>
                  <a href="/">111</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>购物指南</h3>
              <ul>
                <li>
                  <a href="/">111</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>购物指南</h3>
              <ul>
                <li>
                  <a href="/">111</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>购物指南</h3>
              <ul>
                <li>
                  <a href="/">111</a>
                </li>
              </ul>
            </div>
          </div>
        </Footer>
      </Layout>
    )
  }
}
