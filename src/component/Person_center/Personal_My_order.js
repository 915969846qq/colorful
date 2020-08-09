import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Redirect
} from "react-router-dom"
import { Layout } from 'antd'
import Personal_My_order_refund from './Personal_My_order_refund'
import Personal_My_order_all from './Personal_My_order_all'
import 'antd/dist/antd.css';
import './css/Personal_My_order.css'

import {connect} from 'react-redux'
import cartOrderAction from '../../action/peresonal_cartOrder_action'

const { Header, Content } = Layout

//我的订单
export default class Personal_My_order extends Component {
    // constructor(props){
    //     super(props);
    //     }
    
    componentWillMount(){
        // let time=new Date().toLocaleTimeString()
        // console.log(time)
    }
    componentDidMount(){
      }
    render() {
        return (
            <Layout className="personal-order">
                
                <Router basename='/Person/Personal_My_order'>
                    <Header className="personal-order-header">
                        <ul>
                            <li><NavLink to="/Personal_My_order_all" >我的订单</NavLink></li>
                            <li><NavLink to="/pay" >待付款{}</NavLink></li>
                            <li><NavLink to="/takegoods" >待收货{}</NavLink></li>
                            <li><NavLink to="/colect" >待评价{}</NavLink></li>
                            <li><NavLink to="/Personal_My_order_refund" >退款</NavLink></li>
                        </ul>
                    </Header>
                    <Content>
                    <Route path="/Personal_My_order_all" component={Personal_My_order_all}></Route>
                    <Route path="/Personal_My_order_refund" component={Personal_My_order_refund}></Route>
                    <Redirect from="/" to="/Personal_My_order_all"></Redirect>
                    </Content>
                </Router>
            </Layout>
        )
    }
}
