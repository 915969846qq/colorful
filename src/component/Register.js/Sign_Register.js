import React, { Component } from 'react'
import Header from '../commen/header'
import '../../Css/Sign_Register.css'
import $ from 'jquery'
import 'whatwg-fetch'

//注册
export default class Sign_Register extends Component {
    constructor(){
        super(); 
        this.state={
          num:"",
          yanzhengma:[],
          mima:"",
          // yanzheng:""
        }
    }
    
    dianji(){
        let tel = $("#text").val();
        this.setState(
          {num:tel}
        )
        if(!(/^1[3456789]\d{9}$/.test(tel))){  
            $("#msg").html("手机号码有误，请重填")
            return false; 
        }else{
            $("#msg").html("手机号码格式正确");   
            return true;  
        }   
    }   
    dianji1(){
        let psd = $("#password1").val();
        this.setState({
          mima:psd
        })
        if(!(/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/).test(psd)){
          $("#msg1").html("密码不符合规范");
          return false;
        }else{
          $("#msg1").html("密码设置成功");
          return true; 
        }
    }
    dianji2(){
        let psd1 = $("#password2").val();
        if($("#password1").val()===psd1){
          $("#msg2").html("两次密码输入一致,验证成功");
          return true;
        }else{
          $("#msg2").html("密码两次输入不一样");       
          return false;
        }
    }   
    yanzheng(){
        let Verifi = $("#Verifi").val();
        //   this.setState({
        //     yanzheng:Verifi  
        // }) 
        $("#msg3").html("验证码已发送至手机，请查收!");
        fetch('http://172.16.10.15:8080/banJu/Code/sendVerifyCode',{						
          method:'POST',
          headers:{
              'Content-Type':'application/json'            
          },
          credentials: 'include',
          body:JSON.stringify({  
            phoneNumber:this.state.num    
          })
          }).then((res)=>{            
              return res.json(); 
          }).then((data)=>{
            console.log(data);                 
              this.setState({       
                  yanzhengma:data  
              })
          }).catch((e) => {
              console.log("数据有误");
          });
    }
    //注册
    register(){
          console.log($("#Verifi").val())
          fetch('http://172.16.10.15:8080/banJu/reg/register',{						
            method:'POST',
            headers:{
                'Content-Type':'application/json'   
            },
            credentials: 'include',                    
            body:JSON.stringify({
              phoneNumber:this.state.num,
              password:this.state.mima,
              verify: $("#Verifi").val()                  
            })
            }).then((res)=>{            
                return res.json();           
            }).then((data)=>{               
              console.log(data);                                              
                this.setState({       
                    yanzhengma:data  
                })
              this.props.history.push("/Sign_Register_successful");
            }).catch((e) => {
                console.log("数据有误");     
            });
    }
    
    componentDidMount(){
        $(".topman p").mouseover(function(){
            $(this).css("border-bottom","1px solid red");   
        });
        $(".topman p").mouseout(function(){   
            $(this).css("border-bottom","0px solid red");   
        });  
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
              <p className="Personal_Center">欢迎注册</p>
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
              <div className="right Register_right">
                <div className="topman">
                  <p className="">会员</p>
                  <p className="applyborder">商家</p>
                  <p>工匠 / 服务商</p>
                </div>
                <form action="" method="post">    
                    <input type="text" placeholder="请输入11位电话号码" name="phoneNumber" id="text" onBlur={this.dianji.bind(this)}/>
                    <div id="msg"></div>
                    <input id="password1" name="password" type="password" placeholder="请输入您的密码" onBlur={this.dianji1.bind(this)}/>
                    <div id="msg1"></div>
                    <input id="password2" type="password" placeholder="请再次输入您的密码" onBlur={this.dianji2.bind(this)}/>
                    <div id="msg2"></div>
                    <input id="Verifi" type="text" name="verify" placeholder="请输入验证码"/>
                    <button type="button" className="Yzhema" onClick={this.yanzheng.bind(this)}>获取验证码</button> 
                    <div className="clear"></div>    
                    <div id="msg3"></div>
                    <input id="checkbox" type="checkbox" value=""/>
                    <p className="read">我已阅读并接受<a href="/">《colorful用户协议》</a></p>   
                    <button type="button" className="den_lu" onClick={this.register.bind(this)}>立即注册</button>        
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    )
  }
}

