import React, { Component } from 'react'
// 我的个人资料
import {Input,Radio,Button} from 'antd'
import './css/Personal_personal_information.css'


export default class Personal_personal_information extends Component {
    constructor(){
        super();
        this.state={
            sec_sellerimg:"craftsman_07.jpg",
                realname:"",
                detailadress:"",
                email:"",
                sex:"男"
               
            
        }
    }
// ==============双向数据绑定函数=====================
    onchange=(inform,e)=>{
        this.setState({
            [inform]:e.target.value
        })
    }
    //   =========================提交===========================
submit=()=>{
    console.log(this.state)
}

    render() {
        return (
            <div>
                <div className="personal_info">
                    <div className="personal_img">
                        <span>头像 :</span>
                        <img src={require(`../../assets/images/${this.state.sec_sellerimg}`)} alt="头像"/>
                    </div>
                    <div >
                        <span>真实姓名 :</span>
                        <Input placeholder="不超过十个汉字" value={this.state.realname} onChange={this.onchange.bind(this,"realname")} style={{width:250}} /> 
                    </div>
                    <div >
                        <span>地区 :</span>
                        <Input placeholder="请输入地区"  style={{width:250}} /> 
                    </div>
                    <div >
                        <span>联系地址 :</span>
                        <Input placeholder="请输入您的详细地址" value={this.state.detailadress} onChange={this.onchange.bind(this,"detailadress")} style={{width:250}} /> 
                    </div>
                    <div >
                        <span>邮箱 :</span>
                        <Input placeholder="请输入您的邮箱" value={this.state.email} onChange={this.onchange.bind(this,"email")} style={{width:250}} /> 
                    </div>
                    <div >
                        <span>性别 :</span>
                        <Radio.Group onChange={this.onchange.bind(this,"sex")} value={this.state.sex} style={{height:32,paddingTop:3}}>
                            <Radio value="男" style={{width:100,marginLeft:40}}>男</Radio>
                            <Radio value="女">女</Radio>
                        </Radio.Group>
                    </div>
                    <div> <Button type='primary' className='submit_info' danger onClick={this.submit} >确认</Button></div>
                </div>
            </div>
        )
    }
}
