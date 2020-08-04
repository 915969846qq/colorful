import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Pagination } from 'antd'
//优惠券
function onChange(pageNumber) {
  console.log('Page: ', pageNumber)
}
export default class Personal_coupon extends Component {
  render() {
    return (
      <div>
        <h3>我的优惠券</h3>
        <Row>
          <Col span={8}>
            <Row className="fang_wcolor fang_FangCenter">
              <Col
                span={13}
                className="fang_RBColor fang_FangCenter"
                offset={2}
              >
                <Row>
                  <Col span={12} offset={6}>
                    <p className="fang_marginT20 fang_TLeft">
                      <span className="fang_fontS fang_marginR20">10</span>
                      <span className="fang_font18">元</span>
                    </p>
                    <div className="fang_font22 fang_fontW fang_WBColor fang_RColor">
                      商城优惠券
                    </div>
                    <h3 className="fang_wcolor fang_marginT20 fang_TLeft fang_marginB20">
                      满50使用
                    </h3>
                  </Col>
                </Row>
              </Col>
              <Col
                span={5}
                className="fang_0BColor fang_FangCenter fang_font22 fang_padding30 fang_varticalTEXT fang_paddingt30"
              >
                立即使用
              </Col>
            </Row>
          </Col>
          {/* <Col span={8}></Col>
          <Col span={8}></Col> */}
        </Row>
        <Row>
          <Col span={12} offset={12}>
            <Pagination
              showQuickJumper
              defaultCurrent={2}
              total={500}
              onChange={onChange}
              className="fang_Button50 fang_padding20"
            />
          </Col>
        </Row>
      </div>
    )
  }
}
