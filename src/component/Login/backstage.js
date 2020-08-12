import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../../Css/backstage.css'
import { message, Button, Space } from 'antd';
// import {inject,observer} from "mobx-react"


//登录
export default class Sign_in extends Component {
    constructor(props) {
        super(props);
        this.state={

            // jobNumber:"GL001",/*GL001*/
            // password:"123",/*123*/


        }
    }

        // dl(){
        //
        // }

    render() {
        const success = () => {

            const inpVal = this.a.value;
            this.setState({
                jobNumber:inpVal
            })
            const inpVal1 = this.b.value;
            this.setState({
                password:inpVal1
            })



            fetch('http://47.100.90.56:8080/banJu/manager/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                credentials: 'include',
                body:JSON.stringify({
                    jobNumber :inpVal,
                    password :inpVal1
                })
            }).then((res)=>{
                return res.json();
            }).then((data)=>{

                let power=data.power
                console.log(data);

                this.setState({
                },()=>{
                    if (data.msg=="登录成功"){
                        message.success('登录成功');
                        this.props.history.push({ pathname: "/manage", state: { power } })
                    }else {
                        message.error('账号或密码错误');
                    }


                })
            }).catch((e) => {
                console.log("数据有误");

            });

        };

        const error = () => {
            message.error('This is an error message');
        };
        return (
            <div className="houtai">
                <div id="ak">

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
                                    <input type="text" ref={input => this.a = input} placeholder="请输入您的账号" />
                                    <input id="password1" ref={input => this.b = input} type="password" placeholder="请输入您的密码"/>
                                    <div className="clear"> </div>
                                    <input id="checkbox"  type="checkbox" value=""/>
                                    <p id="read">下次自动登录</p>
                                    <a onClick={success} className="den_lu">登录</a>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}