import React, { Component } from 'react'
import Header from '../commen/header'
import '../../Css/Sign_Register_successful.css'
import {Link} from 'react-router-dom'

//注册成功
export default class Sign_Register_successful extends Component {
    render() {
        return (
            <div className="Sign_Register_successful">
                <div id="ak">
                    <div className="header-top">
                        <Header></Header>
                    </div>
                    <div className="Decoration_logo nav" id="logo">
                        <div className="nav-top">
                            <div className="logo"><a href="index.html"><img className="full" src={require('../../assets/images/logo2.png')} alt="" /></a></div>
                            <p className="Personal_Center"></p>
                        </div>
                    </div> 
                    <div className="main">
                        <div className="successful">
                            <h2>恭喜您，成功注册科乐福 ！</h2>
                            <p>您可以 <Link to="/">返回首页</Link> 或者进入  <Link to="/Personal_Center_index">个人中心</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
