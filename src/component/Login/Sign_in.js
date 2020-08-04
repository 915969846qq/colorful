import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from '../commen/header'
import '../../Css/Sign_Register.css'


//登录
export default class Sign_in extends Component {
    render() {
        return (
            <div className="Sign_register">
                <div id="ak">
                    <div className="header-top">
                        <Header></Header>
                    </div>
                    <div className="Decoration_logo nav" id="logo">
                    <div className="nav-top">
                        <div className="logo"><a href="index.html"><img className="full" src={require('../../assets/images/logo2.png')} alt="" /></a></div>
                        <p className="Personal_Center">欢迎登录</p>
                        
                    </div>
                    </div>

    <div className="main">
        <div className="Sign_in-main">
            <div className="left"><img src={require('../../assets/images/twoimages/Sign_in-main_03.jpg')} alt=""/></div>
            <div className="right Register_login">
                <div className="topman"> 
                    <p className="applyborder">登录</p> 
                </div>
                <form>
                    <input type="text" placeholder="请输入您的账号" />
                    <input id="password1" type="password" placeholder="请输入您的密码"/>
                    <div className="clear"> </div>
                    <input id="checkbox" type="checkbox" value=""/>
                    <p id="read">下次自动登录</p>
                    <Link to="/" className="den_lu">登录</Link>            
                </form>
                
            </div>
        </div>
    </div>
                </div> 

            </div>
        )
    }
}
