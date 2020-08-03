import React, { Component } from 'react'
// 使用路由
import { withRouter } from 'react-router-dom'
import { Divider, Row, Col, Pagination } from 'antd'
// import $ from 'jquery'
class Decoration_show extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // data: {
      //   city: ['成都', '重庆', '武汉', '北京', '上海'],
      //   style: ['古风', '现代', '洋房', '四合院', '欧式'],
      //   Size: ['60以下', '60-80', '80-100', '100-120', '120以上'],
      // },
    }
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
    // // 用户点击查看详情时
    // $('.details').on('click', function () {
    //   console.log($(this))
    // })
  }
  details = () => {
    console.log(this.state)
    this.setState(
      {
        data: {
          Customer_Img: '../../assets/images/Decoration_img/Sellers_1.jpg',
          Customer_Name: '那一天',
          Customer_Date: '2020.8.2',
          Customer_Comment: '还需要进一步装修',
          Customer_Reply: '希望快一点',
          Renovation_Style: '古风',
          Renovation_Size: '120',
          Renovation_City: '成都',
          Renovation_Materials: '油漆',
          Renovation_people: '那是一阵风',
          Renovation_Area: '天府之境',
          Renovation_Img: '../../assets/images/Decoration_img/Sellers_1.jpg',
          Journal_See: '237',
          Journal_Collection: '99',
          Journal_Comment: '66',
          Journal_Date: '2020.8.31',
          Journal_Img: '../../assets/images/Decoration_img/Sellers_1.jpg',
          Company_Comment: '你好，我们将于9.31日装修完毕',
          Reply_Name: '智能家居',
        },
      },
      // 当数据进行更改之后再进行跳转
      () => {
        this.props.history.push({
          pathname: '/Decoration_My_diary',
          params: this.state.data,
        })
      }
    )
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
                  <div onClick={this.details.bind(this)} className="font18 myh">
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

export default withRouter(Decoration_show)
