import React, {Component} from 'react'
import "./footer.css"
import {Col, Row} from "antd";

class footer extends Component {
    render() {
        return (
            <div className="gonggong">
                <Row>
                    <Col span={1}></Col>
                    <Col span={22}>
                {/* 页脚*/}
                        {/*页脚*/}
                        <div id="footer">
                            <div className="footer">
                                <div className="footer-top">
                                    <div className="footer-top-left">
                                        <p>购物指南</p>
                                        <ul>
                                            <li>
                                                <a href="1">会员注册</a>
                                            </li>
                                            <li>
                                                <a href="1">如何订购</a>
                                            </li>
                                            <li>
                                                <a href="1">如何支付</a>
                                            </li>
                                            <li>
                                                <a href="1">订单处理</a>
                                            </li>
                                            <li>
                                                <a href="1">配送方式</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer-top-left">
                                        <p>装修服务</p>
                                        <ul>
                                            <li>
                                                <a href="1">装修齐家保</a>
                                            </li>
                                            <li>
                                                <a href="1">免费第三方监理</a>
                                            </li>
                                            <li>
                                                <a href="1">环保装修</a>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="footer-top-left">
                                        <p>购物保障</p>
                                        <ul>
                                            <li>
                                                <a href="1">正品保障</a>
                                            </li>
                                            <li>
                                                <a href="1">先行赔付</a>
                                            </li>
                                            <li>
                                                <a href="1">延迟赔偿</a>
                                            </li>
                                            <li>
                                                <a href="1">7天无理由退换货</a>
                                            </li>
                                            <li>
                                                <a href="1">投诉维权</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer-top-left">
                                        <p>团购知识</p>
                                        <ul>
                                            <li>
                                                <a href="1">团购知识</a>
                                            </li>
                                            <li>
                                                <a href="1">团购活动</a>
                                            </li>
                                            <li>
                                                <a href="1">团购价格</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer-top-left">
                                        <p>定制服务</p>
                                        <ul>
                                            <li>
                                                <a href="1">价格特搜</a>
                                            </li>
                                            <li>
                                                <a href="1">装修顾问</a>
                                            </li>
                                            <li>
                                                <a href="1">齐家装修学堂</a>
                                            </li>
                                            <li>
                                                <a href="1">装修齐家保</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <p className="center1">About PCGROUP | 网站介绍 | 隐私政策 | 广告服务 | 合作媒体 | 投稿指南 | 使用条款 | 联系我们 | 招聘精英 | 网站地图 | 用户体验提升计划</p>
                                <p className="center">太平洋网络: 太平洋电脑网 | 太平洋汽车网 | 太平洋时尚网 | 太平洋亲子网 | 太平洋家居网</p>
                                <p className="center">未经授权禁止转载、摘编、复制或建立镜像，如有违反，追究法律责任</p>
                                <div className="footer-bottom">
                                    <p>2005-2016 科乐福版权所有，并保留所有权利。</p>
                                    <p>
                                        关于我们 联系我们 友情链接 帮助中心 意见反馈 高薪聘请 法律声明
                                    </p>
                                    <p>ICP备案证书号:蜀ICP备00000000号</p>

                                    <div className="footer-icon">
                                        <img
                                            className="full1"
                                            src={require('../../assets/images/footer-icon_03.png')}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={1}></Col>
                </Row>
            </div>

        )
    }
}

export default footer