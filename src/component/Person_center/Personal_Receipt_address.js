import React, { Component } from 'react'
//收货地址
import {Input,Button} from 'antd'
import './css/Personal_Receipt_address.css'
import './css/city_chenming.css'
import City from '../../util/chajian/city'
export default class Personal_Receipt_address extends Component {
    constructor(){
        super()
        this.state={
           name:"",
            detailaddress:"",
            phone:"",
            email:"",
            fixedphone:"",
            expresscode:"",
           
        }
    }
    // ===========================双向数据绑定函数=============
    onchange=(inform,e)=>{
        this.setState({
            [inform]:e.target.value
        })
    }
    // ==============================邮箱验证================================
    email=(inform,e)=>{
        let reg = /^([a-zA-Z]|[0-9])(\w|)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
        if(reg.test(e.target.value)){
            this.setState({
                [inform]:e.target.value
            })
        }else{
            this.setState({
                [inform]:""
            })
            e.target.placeholder="请输入正确的邮箱"
        }
       
    }



    // ==================================手机号码验证=====================
    phonereal=e=>{
        let m=parseInt(e.target.value)
         if(isNaN(m)||m<0||e.target.value.length!==11||(!/^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/.test(m))){
              this.setState({phone:""})
         e.target.placeholder="请输入正确的11位手机号码"
         }
     }
    //  ======================得到省份数据========================
     
  
    // ===============================提交===========================
    submitinfo=()=>{
        let province=document.body.getElementsByClassName("myprovince")[0].value
        let city=document.body.getElementsByClassName("mycity")[0].value
        let county=document.body.getElementsByClassName("mycounty")[0].value
       let address=province+city+county
       console.log(address)
    }
    render() {
        return (
            <div className="chenming1">
                <div className="receive_address">
                    <div >
                        <span>真实姓名 :</span>
                        <Input placeholder="请输入收货人名字" value={this.state.name} onChange={this.onchange.bind(this,"name")} style={{width:250}} /> 
                    </div>
                    <div >
                        <span>所在地区 :</span>
                        <City ></City>
                    </div>
                    <div >
                        <span>详细地址 :</span>
                        <Input placeholder="请输入详细地址" value={this.state.detailaddress} onChange={this.onchange.bind(this,"detailaddress")} style={{width:250}} /> 
                    </div>
                    <div >
                        <span>手机号码 :</span>
                        <Input placeholder="请输入手机号码" type="number" value={this.state.phone} onChange={this.onchange.bind(this,"phone")} onBlur={this.phonereal} min="1" minLength="11"  style={{width:250}} /> 
                    </div>
                    <div >
                        <span>邮箱 :</span>
                        <Input placeholder="请输入邮箱" value={this.state.email} onBlur={this.email.bind(this,"email")} onChange={this.onchange.bind(this,"email")} style={{width:250}} /> 
                    </div>
                    <div >
                        <span>固定电话 :</span>
                        <Input placeholder="请输入您的固定电话" value={this.state.fixedphone} onChange={this.onchange.bind(this,"fixedphone")} type="number" min="1" style={{width:250}} /> 
                    </div>
                    <div >
                        <span>邮政编码 :</span>
                        <Input placeholder="请输入邮政编码" value={this.state.expresscode} onChange={this.onchange.bind(this,"expresscode")} type="number" min="0" style={{width:250}} /> 
                    </div>
                    <div><Button  type="primary" danger style={{width:250,marginLeft:120}} onClick={this.submitinfo}>提交</Button></div>
                </div>
            </div>
        )
    }
}
