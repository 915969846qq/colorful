import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd'
import { Pagination } from 'antd'
//评价晒单
function onChange(pageNumber) {
  console.log('Page: ', pageNumber)
}
export default class Personal_Review_sheet extends Component {
  render() {
    return (
      <div>
        <h3 className="fang_height30">我的评论</h3>
        <Row className="fang_height30">
          <Col span={2} className="fang_FangCenter">
            商品评论
          </Col>
          <Col span={2} className="fang_FangCenter">
            待评论（*）
          </Col>
          <Col span={2} className="fang_FangCenter">
            未评论（*）
          </Col>
        </Row>
        {/* 展示区域 */}
        <div>
          <Row className="fang_height30">
            <Col span={6} className="fang_FangCenter">
              订单编号
            </Col>
            <Col span={6} className="fang_FangCenter">
              订单商品
            </Col>
            <Col span={6} className="fang_FangCenter">
              购买时间
            </Col>
            <Col span={6} className="fang_FangCenter">
              操作
            </Col>
          </Row>
          <Row className="fang_height30">
            <Col span={6} className="fang_FangCenter">
              12345678976
            </Col>
            <Col span={6} className="fang_FangCenter">
              高级沙发
            </Col>
            <Col span={6} className="fang_FangCenter">
              2016-7-8
            </Col>
            <Col span={6} className="fang_FangCenter">
              <span className="fang_marginR20 fang_myh">评论</span>
              <span className="fang_myh">删除</span>
            </Col>
          </Row>
          <Divider />
        </div>
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
