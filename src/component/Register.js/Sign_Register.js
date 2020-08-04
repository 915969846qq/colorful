import React, { Component } from 'react'
import Header from '../commen/header'
import '../../Css/Sign_Register.css'
import $ from 'jquery'



//注册
export default class Sign_Register extends Component {
    render() {
        return (
            <div>
                <div id="ak">
                    <div className="header-top">
                        <Header></Header>
                    </div>
                    <div className="Decoration_logo nav" id="logo">
                    <div className="nav-top">
                        <div className="logo"><a href="index.html"><img className="full" src={require('../../assets/images/logo2.png')} alt="" /></a></div>
                        <p className="Personal_Center">欢迎注册</p>
                        
                    </div>
                    </div>

    <div className="main">
        <div className="Sign_in-main">
            <div className="left"><img src={require('../../assets/images/twoimages/Sign_in-main_03.jpg')} alt=""/></div>
            <div className="right Register_right">
                <div className="topman"> 
                    <p className="">会员</p>
                    <p className="applyborder">商家</p>
                    <p >工匠 / 服务商</p>
                </div>
                <form>
                    <input type="text" placeholder="请输入11位电话号码" />
                    <input id="password1" type="password" placeholder="请输入您的密码"/>
                    <input id="password2" type="password" placeholder="请再次输入您的密码"/>
                    <input id="Verifi" type="text" placeholder="请输入验证码"/>
                    <a href="11" className="Yzhema">获取验证码</a>
                    <div className="clear"> </div>
                    <input id="checkbox" type="checkbox" value=""/>
                    <p className="read">我已阅读并接受<a href="/">《colorful用户协议》</a></p>
                    <a href="1" className="den_lu">立即注册</a>      
                </form>
                
            </div>
        </div>
    </div>
                </div> 


                
            </div>
            
        )
    }
    
    componentDidMount(){
        console.log($);
        $(".topman p").mouseover(function(){
            $(this).css("border-bottom","1px solid red"); 
        });
        $(".topman p").mouseout(function(){   
            $(this).css("border-bottom","0px solid red");   
        })  
    }
}
