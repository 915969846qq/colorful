import React, { Component } from 'react'
import "./css/Craftsman_Settled_business.css"
import {Col, Row} from "antd";
import Footer from "../commen/footer";
import Header from "../commen/header";
import $ from "jquery"
//个人中心 商家入驻合同
export default class Craftsman_Settled_business extends Component {
    ty(){
        if ($(".checkbox").get(0).checked) {
            this.props.history.push('./Craftsman_Settled_company')
        }else {
            alert("请同意以下条款才能下一步操作")
        }
    }
    render() {

        return (
            <div className="xt3">
                <div className="header-top">
                    {/*//表头*/}
                    <Header/>
                    <Row>
                        <Col span={1}></Col>
                        <Col span={22}>



                            {/*表头大图*/}
                            <div className="header_center">
                                <div className="headerlogo"><img className="full" src={require("../../assets/images/logo2.png")} alt=""/>
                                </div>
                                <div className="headerh4">商家入驻合同</div>
                            </div>
                            <div className="top_maina"><span className="text">填写个人信息 </span><span className="text2">*为必填项</span></div>

                            <div className="contract">
                                <p className="dtatle">成都科乐福科技股份有限公司家装电子商务服务平台应用服务合同</p>
                            </div>
                            <form className="clause">
                                <input type="checkbox" className="checkbox"/>
                                    <label>我已阅读上述条款确认无误，愿遵守上述条款</label>
                            </form>
                            <div className="tj">
                                <input className="submit" onClick={this.ty.bind(this)} type="button" name="submit" value="我同意"/>
                            </div>





                        </Col>
                        <Col span={1}></Col>
                    </Row>
                    {/* 页脚*/}
                    <Footer/>
                </div>
                </div>
        )
    }
}
