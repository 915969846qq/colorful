import React, { Component } from 'react'
import { Row, Col } from 'antd'
class Decoration_check extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <h1>装修日志选择列表</h1>
        <div className="Border">
          <Row className="height50 myCenter Bborder">
            <Col span={3}>
              全部日记
              <span className="iconfont icon-next-page fontX marginL20"></span>
            </Col>
          </Row>
          <Row className="height50 BBorder">
            <Col span={2} className="GBcolor myCenter">
              风格
            </Col>
            <Col span={22} className="padding20 relative">
              1111
              <span className="iconfont icon-xiala option_write"></span>
            </Col>
          </Row>
          <Row className="height50 BBorder">
            <Col span={2} className="GBcolor myCenter">
              面积
            </Col>
            <Col span={22} className="padding20">
              222
            </Col>
          </Row>
          <Row className="height50">
            <Col span={2} className="GBcolor myCenter">
              城市
            </Col>
            <Col span={22} className="padding20 relative">
              333
              <span className="iconfont icon-xiala option_write"></span>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Decoration_check
