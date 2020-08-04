<<<<<<< HEAD
import React, { Component } from 'react'
import './footer.css'

class footer extends Component {
  render() {
    return (
      <div>
        {/* 页脚*/}
        <div id="footer">
          <div className="footer">
            <div className="footer-top">
              <div className="footer-top-left">
                <p>购物指南</p>
                <ul>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                </ul>
              </div>
              <div className="footer-top-left">
                <p>服务保障</p>
                <ul>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                </ul>
              </div>
              <div className="footer-top-left">
                <p>配送方式</p>
                <ul>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                </ul>
              </div>
              <div className="footer-top-left">
                <p>售后服务</p>
                <ul>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                </ul>
              </div>
              <div className="footer-top-left">
                <p>关于我们</p>
                <ul>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                  <li>
                    <a href="1">指南1</a>
                  </li>
                </ul>
              </div>
            </div>
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
      </div>
    )
  }
=======
import React, {Component} from 'react'
import "./footer.css"
import {Col, Row} from "antd";

class footer extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={1}></Col>
                    <Col span={22}>
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

        )
    }
>>>>>>> fd829ad69b3b26c9a51080a9a60427d312da30a3
}

export default footer
