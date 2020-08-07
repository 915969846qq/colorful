import React, { Component } from 'react'
import "./css/Craftsman_Settled_business.css"
import {Col, Row} from "antd";
//个人中心 商家入驻合同
export default class Craftsman_Settled_business extends Component {
    render() {
        return (
            <div className="xt3">
                <div className="header-top">
                    <Row>
                        <Col span={1}></Col>
                        <Col span={22}>

                            {/*//表头*/}
                            <div className="ress_img"><img className="full" src={require("../../assets/images/address.png")} alt=""/></div>

                            <div id="addresspp" className="addresspp">成都</div>
                            <div className="readssswitch"><a
                                href="1" tjjj="top.cities.list" title="切换城市"
                                rel="nofollow" className="qh">【切换】</a>
                                <div className="welcome">您好，欢迎您访问 <a href="1"  className="welcome_index"
                                                                     > Colorful</a> !
                                </div>

                                <div className="headerRight">
                                    <div className="LoginorRegister">登录</div>
                                    <div className="LoginorRegister">免费注册</div>
                                    <div className="Iwantdecorate">我要装修</div>
                                    <div className="Advisory_hotline">
                                        <div className="img"><img src={require("../../assets/images/hotline.png")} alt=""/></div>
                                        <div className="hotline">咨询热线：4006-900-288</div>
                                    </div>
                                </div>

                                </div>
                            {/*表头大图*/}
                            <div className="header_center">
                                <div className="headerlogo"><img className="full" src={require("../../assets/images/logo2.png")} alt=""/>
                                </div>
                                <div className="headerh4"><p>商家入驻合同</p></div>
                            </div>
                            <div className="top_maina"><span className="text">填写个人信息 </span><span className="text2">*为必填项</span></div>

                            <div className="contract">
                                <p className="dtatle">成都科乐福科技股份有限公司家装电子商务服务平台应用服务合同</p>
                            </div>
                            <form className="clause">
                                <input type="checkbox"/>
                                    <label>我已阅读上述条款确认无误，愿遵守上述条款</label>
                            </form>
                            <div className="tj">
                                <input className="submit" type="submit" name="submit" value="我同意"/>
                            </div>


                            {/* 页脚*/}
                            <div id="footer">
                            <div className="footer">
                                <div className="footer-top">
                                    <div className="footer-top-left">
                                        <p>购物指南</p>
                                        <ul>
                                            <li><a href="1">指南1</a></li>
                                            <li><a href="1">指南1</a></li>
                                            <li><a href="1">指南1</a></li>
                                            <li><a href="1">指南1</a></li>
                                            <li><a href="1">指南1</a></li>
                                        </ul>
                                    </div>
                                    <div className="footer-top-left">
                                        <p>服务保障</p>
                                        <ul>
                                            <li><a href="1">指南1</a></li>
                                            <li><a href="1">指南1</a></li>
                                            <li><a href="1">指南1</a></li>
                                            <li><a href="1">指南1</a></li>
                                            <li><a href="1">指南1</a></li>
                                        </ul>
                                    </div>
                                    <div className="footer-top-left">
                                        <p>配送方式</p>
                                        <ul>
                                            <li><a href="1">指南1</a></li>
                                            <li><a href="1">指南1</a></li>
                                            <li><a href="1">指南1</a></li>
                                            <li><a href="1">指南1</a></li>
                                            <li><a href="1">指南1</a></li>
                                        </ul>
                                    </div>
                                    <div className="footer-top-left">
                                        <p>售后服务</p>
                                        <ul>
                                            <li><a href="1">指南1</a></li>
                                            <li><a href="1">指南1</a></li>
                                            <li><a href="1">指南1</a></li>
                                            <li><a href="1">指南1</a></li>
                                            <li><a href="1">指南1</a></li>
                                        </ul>
                                    </div>
                                    <div className="footer-top-left">
                                        <p>关于我们</p>
                                        <ul>
                                            <li><a href="1">指南1</a></li>
                                            <li><a href="1">指南1</a></li>
                                            <li><a href="1">指南1</a></li>
                                            <li><a href="1">指南1</a></li>
                                            <li><a href="1">指南1</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-bottom">
                                    <p>2005-2016 科乐福版权所有，并保留所有权利。</p>
                                    <p>关于我们 联系我们 友情链接 帮助中心 意见反馈 高薪聘请 法律声明</p>
                                    <p>ICP备案证书号:蜀ICP备00000000号</p>

                                    <div className="footer-icon"><img className="full1" src={require("../../assets/images/footer-icon_03.png")} alt=""/></div>
                                </div>
                            </div>
                            </div>

                        </Col>
                        <Col span={1}></Col>
                    </Row>
                </div>
                </div>
        )
    }
}
