import React, { Component } from 'react'
<<<<<<< HEAD
import { Row, Col, Button, Divider } from 'antd'
//个人中心-我的装修日记
export default class Decoration_My_diary extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="Width1200">
        <div className="GBcolor title padding20">我的装修日记</div>
        <Row className="Border">
          {/* 用户头像 */}
          <Col span={4}>
            <img src="../../Sellers_1.jpg" alt="" />
          </Col>
          {/* 装修基本信息 */}
          <Col span={6}>
            <h2>用户名</h2>
            <p>评论时间</p>
            <p>房屋信息</p>
            <p>房屋地址</p>
            <p>
              装修公司 <span>修改资料</span>
            </p>
          </Col>
          {/* 他人浏览 */}
          <Col span={9}>
            <Row align="middle" className="height">
              <Col span={6} className="rline" offset={6}>
                <p>多少人</p>
                <span>浏览</span>
              </Col>
              <Col span={6} className="rline">
                <p>多少人</p>
                <span>收藏</span>
              </Col>
              <Col span={6}>
                <p>多少人</p>
                <span>回复</span>
              </Col>
            </Row>
          </Col>
          {/* 微信二维码 */}
          <Col span={4} offset={1}>
            <img src="../../Sellers_1.jpg" alt="" />
          </Col>
        </Row>
        {/* 日记篇数 */}
        <div>
          <Button type="primary" danger>
            全部日记共**篇
          </Button>
        </div>
        {/* 拆改装修信息 */}
        <div>
          <div>
            <span>拆改</span>
            <span>前期准备</span>
          </div>
          {/* 下划线 */}
          <Divider />
          {/* 评论内容 */}
          <div className="width1100">
            <p>
              评论时间
              <span>编辑</span>
              <span>删除</span>
            </p>
            <p>装修公司对客户提醒合同信息</p>
            {/* 发送的图片 */}
            <div>
              <div>
                <img src="../../Sellers_1.jpg" alt="" />
              </div>
            </div>
            <div>
              <span>信息图标</span>
              <span>多少条回复</span>
              <span>分享到：</span>
              <span>图标</span>
            </div>
            <Divider />
            <Row>
              <Col span={5}>111</Col>
              <Col span={19}>
                <textarea
                  name="comment"
                  id="comment"
                  cols="150"
                  rows="10"
                  placeholder="随便说说你的想法，或者你有什么问题，和大家一起探讨吧..."
                ></textarea>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
=======
//个人中心-我的装修日记
export default class Decoration_My_diary extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
>>>>>>> 7236783ec6e93840a83988944b86f8400b6eea9d
}
