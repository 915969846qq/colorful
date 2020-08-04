import React, { Component } from 'react'
// 使用路由
import { withRouter } from 'react-router-dom'
import { Divider, Row, Col, Pagination } from 'antd'
import axios from 'axios'
import $ from 'jquery'
class Decoration_show extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {}
    // 发送请求
    this.mydata = {}
    axios
      .post('http://localhost:8888/user.do', { username: '13018282973' })
      .then((response) => {
        let mydata = response.data
        this.setState({ data: mydata }, function () {
          // console.log(this.state.data)
        })
      })
  }
  componentDidMount() {
    // console.log(this)
    // 当用户点击跳转页数时
    $('.ant-pagination-item').on('click', function () {
      // console.log($(this))
    })
    // 用户点击，下一页
    $('.ant-pagination-next').on('click', function () {
      // console.log($(this))
    })
    // 用户点击上一页
    $('.ant-pagination-prev').on('click', function () {
      // console.log($(this))
    })
    $('.ant-pagination-item').on('click', function () {
      // console.log($(this))
    })
    // 用户点击，下一页
    $('.ant-pagination-next').on('click', function () {
      // console.log($(this))
    })
    // 用户点击上一页
    $('.ant-pagination-prev').on('click', function () {
      // console.log($(this))
    })
    // 用户点击查看详情时
    $('.details').on('click', function () {
      // console.log($(this))
    })
  }
  details = (e) => {
    console.log($(e.target).attr('id'))
    let ID = parseInt($(e.target).attr('id'))
    let mydata = this.state.data
    let DATA = {}
    mydata.map((item, index) => {
      if (item.id === ID) {
        DATA = item
      }
      return item
    })
    console.log(DATA)

    // const mydata = {
    //   Customer_Img: '../../assets/images/Decoration_img/Sellers_1.jpg',
    //   Customer_Name: '那一天',
    //   Customer_Date: '2020.8.2',
    //   Customer_Comment: '还需要进一步装修',
    //   Customer_Reply: '希望快一点',
    //   Renovation_Style: '古风',
    //   Renovation_Size: '120',
    //   Renovation_City: '成都',
    //   Renovation_Materials: '油漆',
    //   Renovation_people: '那是一阵风',
    //   Renovation_Area: '天府之境',
    //   Renovation_Img: '../../assets/images/Decoration_img/Sellers_1.jpg',
    //   Journal_See: '237',
    //   Journal_Collection: '99',
    //   Journal_Comment: '66',
    //   Journal_Date: '2020.8.31',
    //   Journal_Img: '../../assets/images/Decoration_img/Sellers_1.jpg',
    //   Company_Comment: '你好，我们将于9.31日装修完毕',
    //   Reply_Name: '智能家居',
    // }

    this.props.history.push({
      pathname: '/Decoration_My_diary',
      params: DATA,
    })
  }
  render() {
    return (
      <div className="marginT20">
        <h1 className="RBcolor">最新日志</h1>
        <Show mydata={this.state.data} loc={this} />
        <Divider />
        <div className="marginT20"></div>
        <div>
          <Pagination
            defaultCurrent={this.state.pageNumber}
            defaultPageSize={this.state.Lnumber}
            total={this.state.totle}
            className="fang_FangCenter"
          />
        </div>
        <div onClick={this.details.bind(this)}>111</div>
      </div>
    )
  }
}
// 循环日记列表
function Show(props) {
  // console.log(props)
  const that = props.loc
  if (props.mydata !== undefined) {
    // console.log(this)
    let data = props.mydata
    let myList = data.map((item, index) => (
      <Row className="paddingt30" key={item.id}>
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
              <div
                onClick={that.details.bind(that)}
                className="font18 myh"
                id={item.id}
              >
                {/* <div className="font18 myh"> */}
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
    ))
    return myList
  }
  if (props.mydata === undefined) {
    return 3
  }
}
export default withRouter(Decoration_show)
