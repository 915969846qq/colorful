import React, { Component } from 'react'
import { Divider, Row, Col, Pagination } from 'antd'
// import $ from 'jquery'
class Decoration_show extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    // console.log()
    // 当用户点击跳转页数时
    // $('.ant-pagination-item').on('click', function () {
    //   console.log($(this))
    // })
    // // 用户点击，下一页
    // $('.ant-pagination-next').on('click', function () {
    //   console.log($(this))
    // })
    // // 用户点击上一页
    // $('.ant-pagination-prev').on('click', function () {
    //   console.log($(this))
    // })
  }
  render() {
    return (
      <div className="marginT20">
        <h1 className="RBcolor">最新日志</h1>
        <Divider />
        <div className="marginT20">
          <Row className="paddingt30">
            <Col span={2}>
              <div className="myCenter">
                <img
                  src={require('../../assets/images/Decoration_img/Sellers_1.jpg')}
                  alt=""
                  className="portrait80"
                />
                <p className="marginT20">用户名</p>
              </div>
            </Col>
            <Col span={22} className="padding20">
              <Row>
                <Col span={15}>
                  <div className="font18">
                    小区地址———————— 用户 的装修日记
                    <span className="font12">【多少篇】</span>
                  </div>
                  <div className="marginT20">
                    <span className="marginR20">城市地址</span>
                    <span className="marginR20">面积</span>
                    <span className="marginR20">风格</span>
                    <span>使用材料</span>
                  </div>
                  <div className="marginT20">用户的询问房屋的状态</div>
                </Col>
                <Col span={9}>
                  <span className="iconfont icon-liulan marginR20 OColor"></span>
                  <span className=" marginR20">浏览人数</span>
                  <span className="iconfont icon-hengxian1 marginR20 fontW"></span>
                  <span className="iconfont icon-shoucang marginR20 OColor"></span>
                  <span className=" marginR20">收藏人数</span>
                  <span className="iconfont icon-hengxian1 marginR20 fontW"></span>
                  <span className="iconfont icon-xinxi marginR20 OColor"></span>
                  <span>回复人数</span>
                </Col>
              </Row>
              <Row className="marginT20">
                <Col>
                  <img
                    src={require('../../assets/images/Decoration_img/Sellers_1.jpg')}
                    alt=""
                  />
                </Col>
                <Col offset={1}>
                  <img
                    src={require('../../assets/images/Decoration_img/Sellers_1.jpg')}
                    alt=""
                  />
                </Col>
                <Col offset={1}>
                  <img
                    src={require('../../assets/images/Decoration_img/Sellers_1.jpg')}
                    alt=""
                  />
                </Col>
                <Divider dashed />
              </Row>
            </Col>
          </Row>
        </div>
        <div>
          <Pagination defaultCurrent={1} total={50} className="myCenter" />
        </div>
      </div>
    )
  }
}

export default Decoration_show
