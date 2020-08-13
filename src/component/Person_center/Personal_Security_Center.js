import React, { Component } from 'react'
//安全中心
import CAxios from '../../util/chenmingaxios'
import {Input,Button,Space,Modal} from 'antd'
import './css/Personal_Security_Center.css'

export default class Personal_Security_center extends Component {
    constructor(){
        super()
        this.state={   
            phone:"",
            code:"",
            repeatcode:"",
            vertifycode:"",
            alert:"验证码发送成功，请注意查收"
        }
    }
// ========================================获取验证码=====================================
getcodeinfo=()=>{
    if(this.state.phone.length!==0){
       
       CAxios.post(`/banJu/Code/sendVerifyCode`,{phoneNumber:""+this.state.phone}
                ).then((res)=>{   
                       if(parseInt(res.status)===200){
                 let that=this
                      that.setState({
                        alert:"验证码发送成功，请注意查收"
                    },()=>{
                        that.info()
                    }) 
                   
                    } else{
                    this.setState({
                        alert:"服务器发生"+res.status+"错误，请稍后再试"
                    },()=>{
                        this.info()
                    })
                    }       
                    return res.data;       
                }).then((data)=>{
                   console.log(data)
                }).catch((e) => {
                      
                }); 
      
    }else{
        this.setState({
            alert:"手机号码不能为空"
        },()=>{
            this.info()
        })
    }
     
  }
// ====================================================更改密码==================================  

updateperinfo=(e)=>{
    
     CAxios.post(`/banJu/user/updatePassword`,e
                ).then((res)=>{   
                           
                    return res.data;       
                }).then((data)=>{
                   console.log(data)
                }).catch((e) => {
                      
                }); 
  }

// =========================双向绑定数据======================
onchange=(inform,e)=>{
    // 不允许输入中文
    let m=e.target.value.replace(/[\u4e00-\u9fa5]/ig,'')
    this.setState({
        [inform]:m
    })
}
    // ================手机号验证==========================
    phonereal=e=>{
       let m=parseInt(e.target.value)
        if(isNaN(m)||m<0||e.target.value.length!==11||(!/^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/.test(m))){
             this.setState({phone:""})
        e.target.placeholder="请输入正确的11位手机号码"
        }
    }
    // ===================获取手机验证码=====================
   


// ===================两次密码验证===============

vertifypassword=(e)=>{
    if(this.state.repeatcode!==this.state.code){   
    this.setState({repeatcode:""})
        e.target.placeholder="两次密码不一致，请重新输入"
    }
}
    // ============================提交=========================

    submitinfo=()=>{
        console.log(this.state.repeatcode)
       if(this.state.repeatcode.length!==0&&this.state.vertifycode.length!==0&&this.state.code.length!==0&&this.state.phone.length!==0) {
           this.updateperinfo({
           phoneNumber:this.state.phone,
           verify:this.state.vertifycode,
           password:this.state.repeatcode
       })
       }else{
           this.setState({
               alert:"信息不能为空"
           },()=>{
               this.info()
           })
       }
    }

// ========================================提示信息=================================
info=()=> {
    let that=this
    Modal.info({
    
      content: (
        <div>
          <p>{that.state.alert}</p>
        </div>
      ),
      onOk() {  },
    });
  }




    render() {
        return (
            <div className="chenming2">
                <div className="security_center">
                   
                    <div >
                        <span>手机号 :</span>
                        <Input placeholder="请输入您的手机号码" type="number"  value={this.state.phone} onChange={this.onchange.bind(this,"phone")} onBlur={this.phonereal} style={{width:250}} /> 
                        
                    </div>
                    <div >
                        <span>验证码 :</span>
                        <Input placeholder="请输入验证码" value={this.state.vertifycode} onChange={this.onchange.bind(this,"vertifycode")} style={{width:140,marginRight:10}} /> 
                        <Space>
                        <Button type="primary" danger style={{width:100}} onClick={this.getcodeinfo} >获取验证码</Button>
                        </Space>
                    </div>
                    <div >
                        <span>新密码 :</span>
                        <Input placeholder="请输入新密码" value={this.state.code}  onChange={this.onchange.bind(this,"code")} style={{width:250}} /> 
                    </div>
                    <div >
                        <span>确认新密码 :</span>
                        <Input placeholder="请再次输入新密码" value={this.state.repeatcode} onChange={this.onchange.bind(this,"repeatcode")} onBlur={this.vertifypassword} style={{width:250}} /> 
                    </div>
                    <div><Button  type="primary" danger style={{width:250,marginLeft:120}} onClick={this.submitinfo.bind(this)} >确认修改</Button></div>
                </div>
            </div>
        )
    }
}
