import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../commen/header'
import '../../Css/Sign_Register.css'
import $ from 'jquery'
import axios from 'axios'
import 'whatwg-fetch'
import { message, Button, Space } from 'antd'

//登录
export default class Sign_in extends Component {
  constructor() {
    super()
    this.state = {
      phoneNumber: '',
      password: '',
      login: [],
    }
  }
  phoneNumber() {
    let phoneNumber = $('#phoneNumber').val()
    this.setState({
      phoneNumber: phoneNumber,
    })
    if (phoneNumber === '' || phoneNumber === null) {
      $('#msg1').html('账户不能为空')
    }
  }
  password() {
    let password = $('#password').val()
    this.setState({
      password: password,
    })
    if (password === '' || password === null) {
      $('#msg2').html('密码不能为空')
    }
  }
  // handleSubmit(event){
  //     event.preventDefault();
  // }

  user() {
    // console.log(this.state.phoneNumber);
    // let myphoneNumber=this.state.phoneNumber
    // let mypassword=this.state.password
    // console.log(this.state.password);
    // axios.post('http://172.16.10.15:8080/banJu/user/login',{ phoneNumber:myphoneNumber,password:mypassword}).then((response)=>{
    //     console.log(response)
    // })
    fetch('http://47.100.90.56:8080/banJu/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        phoneNumber: this.state.phoneNumber,
        password: this.state.password,
      }),
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({
          login: data,
        })
        if (this.state.login.status === '200') {
          let login = {
            id: this.state.login.data.id,
            user: this.state.login.data.phoneNumber,
          }
          sessionStorage.setItem('user', JSON.stringify(login))
          message.success('登录成功', 1)
          this.props.history.push('/')
        } else {
          message.error('登录失败')
          // this.props.history.push("/Sign_in");
          this.props.history.push('/')
        }
      })
      .catch((e) => {
        console.log('数据有误')
      })
    // if(1==1){
    //     let login = {"id":2,"user":18728136175};
    //     sessionStorage.setItem("user",JSON.stringify(login));
    //     this.props.history.push("/");
    // }
  }

  render() {
    return (
      <div className="Sign_register">
        <div id="ak">
          <div className="header-top">
            <Header></Header>
          </div>
          <div className="Decoration_logo nav" id="logo">
            <div className="nav-top">
              <div className="logo">
                <a href="index.html">
                  <img
                    className="full"
                    src={require('../../assets/images/logo2.png')}
                    alt=""
                  />
                </a>
              </div>
              <p className="Personal_Center">欢迎登录</p>
            </div>
          </div>

          <div className="main">
            <div className="Sign_in-main">
              <div className="left">
                <img
                  src={require('../../assets/images/twoimages/Sign_in-main_03.jpg')}
                  alt=""
                />
              </div>
              <div className="right Register_login">
                <div className="topman">
                  <p className="applyborder">登录</p>
                </div>
                <form action="" method="post">
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="请输入您的账号"
                    onBlur={this.phoneNumber.bind(this)}
                  />
                  <div id="msg1"></div>
                  <input
                    id="password1"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="请输入您的密码"
                    onBlur={this.password.bind(this)}
                  />
                  <div id="msg2"></div>
                  <div className="clear"> </div>
                  <input id="checkbox" type="checkbox" value="" />
                  <p id="read">下次自动登录</p>
                  <button
                    type="button"
                    className="den_lu"
                    onClick={this.user.bind(this)}
                  >
                    登录
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
