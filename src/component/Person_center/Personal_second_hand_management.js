import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd'
import { Pagination } from 'antd'
import '../../assets/iconfont/Fang_iconfont/iconfont.css'
//我的二手管理
function onChange(pageNumber) {
  console.log('Page: ', pageNumber)
}
export default class Personal_second_hand_management extends Component {
  render() {
    return (
      <div>
        <h1 className="fang_height30">我的二手管理</h1>
        <Row className="fang_marginT20 fang_Button50">
          <Col span={3} offset={1}>
            <img
              src={require('../../assets/images/Decoration_img/Sellers_1.jpg')}
              className="fang_portrait80"
              alt=""
            />
          </Col>
          <Col span={20}>
            <h3>用户名</h3>
            <button className="fang_width200 fang_height30 fang_border fang_wcolor fang_RBColor">
              <span className="iconfont icon-dianhua fang_marginR20"></span>
              123456789089
            </button>
          </Col>
        </Row>
        <h5>最近发布信息</h5>
        <Divider />
        {/* 展示列表 */}
        <div>
          <Row className="fang_Button50">
            <Col span={22} offset={1} className="fang_Border">
              <Row className="fang_height30">
                <Col span={12} className="fang_padding20">
                  信息号:***
                </Col>
                <Col span={12} className="fang_Tright fang_paddingr20">
                  是否同步:分享至微信/手机QQ
                </Col>
              </Row>
              <Row className="fang_marginT20 fang_marginB20">
                <Col span={12} className="fang_rline fang_padding20">
                  <Row>
                    <Col span={6} className="fang_kuang100">
                      <img
                        src={require('../../assets/images/Decoration_img/Sellers_1.jpg')}
                        className="fang_kuang100"
                        alt=""
                      />
                    </Col>
                    <Col span={17}>
                      <div className="fang_height30">二手办公座椅</div>
                      <div className="fang_height30">2016-05-12 15:00</div>
                      <div className="fang_height30">
                        科乐福 - 二手市场 - 二手家具
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col span={12} className="fang_padding20">
                  <Row>
                    <Col span={20} className="fang_kuang100" offset={1}>
                      显示中。。。
                    </Col>
                    <Col span={2}>
                      <div className="fang_height30 fang_FangCenter fang_myh">
                        修改
                      </div>
                      <div className="fang_height30 fang_FangCenter fang_myh">
                        刷新
                      </div>
                      <div className="fang_height30 fang_FangCenter fang_myh">
                        删除
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
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
      </div>
    )
  }
}
