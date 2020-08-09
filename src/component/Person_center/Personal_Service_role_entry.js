import React, { Component } from 'react'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
//填写个人信息
const menu = (
    <Menu>
        <Menu.Item key="1">1-3年</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">3-5年</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">5-10年</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="4">10年以上</Menu.Item>
    </Menu>
);
export default class Personal_Service_role_entry extends Component {

    constructor() {
        super()
        this.state = {
            worketime: "1-3年",
        }
    }
    changebind(par, e) {
        this.setState({
            [par]: e.target.value
        })
    }
    render() {
        return (
            <div className="role-content">
                <div className="role-content-basic">
                    <h1>基本信息 </h1>
                    <div className="role-content-basic-content">
                        <div><label>*真实姓名：</label><input value={this.state.realname} onChange={this.changebind.bind(this, "realname")}></input></div>
                        <div className="sex">
                            <label>性别：</label><input type="radio" id="nan" name="sex" value="nan" /><font for="nan">男</font>
                            <input type="radio" id="nv" name="sex" value="nv" /><font for="nv">女</font>
                        </div>
                        <div><label>年龄：</label><input value={this.state.age} onChange={this.changebind.bind(this, "age")}></input></div>
                        <div><label>职业：</label><input value={this.state.occupation} onChange={this.changebind.bind(this, "occupation")}></input></div>
                        <div><label>*手机号码：</label><input value={this.state.tel} onChange={this.changebind.bind(this, "tel")} placeholder="您的手机号码"></input></div>
                        <div>
                            <label>从业时间：</label>
                            <Dropdown overlay={menu} trigger={['click']}>
                                <a href className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    {this.state.worketime}<DownOutlined />
                                </a>
                            </Dropdown>
                        </div>
                        <div><label>就职公司：</label><input value={this.state.compony} onChange={this.changebind.bind(this, "compony")}></input></div>
                        <div><label>*本人持身份证照片：</label>
                            <input type="file"></input>
                            <div className="wechat">
                                <div>
                                    <img src={require("../../assets/images/twoimages/QRcodeimg_03.jpg")}></img>
                                </div>
                                <div>
                                    <p>微信扫描左边二维码
                                <br />
                                关注后直接上传手机中的图片</p>
                                </div>
                            </div>
                            <div className="ID">
                                <p>1、上传头像能获得更多关注。<br />2、jpg / png / jif 格式。像素最佳支持182*182</p>
                            </div>
                        </div>
                        <div><label>上传头像：</label>
                            <input type="file"></input>
                        </div>
                        <div><label>*上传资质证件：</label>
                            <input type="file"></input>
                            <div className="wechat">
                                <div>
                                    <img src={require("../../assets/images/twoimages/QRcodeimg_03.jpg")}></img>
                                </div>
                                <div>
                                    <p>微信扫描左边二维码
                                <br />
                                关注后直接上传手机中的图片</p>
                                </div>
                            </div>
                            <div className="ID">
                                <p>如有资质证件请上传，否则审核将无法通过。</p>
                            </div>
                        </div>

                    </div>
                    <div className="role-content-bank">
                        <h1>银行账号信息</h1>
                        <div className="role-content-bank-content">
                            <div><label>*开户城市 :</label><input></input></div>
                            <div><label>*银行名称：</label><input placeholder="中国工商银行"></input></div>
                            <div><label>*户名：</label><input placeholder="李四"></input></div>
                            <div><label>*开户行支行：</label><input placeholder="中国农业银行成都天府三街支行"></input>
                                <span>(格式：开户行+城市+支行信息 例如：中国农业银行成都天府三街支行)</span>
                            </div>
                            <div><label>*账 号：</label><input ></input></div>
                            <a href>下一步</a>
                        </div>
                    </div>

                </div>






            </div>
        )
    }
}
