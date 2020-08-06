import React, { Component } from 'react'
// 使用路由
import { withRouter } from 'react-router-dom'
import { Divider, Row, Col, Pagination } from 'antd'
import axios from 'axios'
import $ from 'jquery'
class Decoration_show extends Component {
  constructor(props) {
    super(props)
    // console.log(props)
    this.state = {
      pageNumber: 1,
      page: 1,
      Lnumber: 2,
      totle: 1,
    }
    // page——当前页数，pageNumber——总共的页数，totle——总数据条数，Lnumber——每页展示的条数
    // 发送请求
    this.mydata = {}
    axios
      .post('http://localhost:8888/user.do', { username: '13018282973' })
      .then((response) => {
        let mydata = response.data
        // 总共的页数
        let getnumber = Math.ceil(response.data.length / this.state.Lnumber)
        // 总数据条数
        let getlength = response.data.length
        this.setState(
          { data: mydata, pageNumber: getnumber, totle: getlength },
          () => {
            // console.log(this.state)
          }
        )
      })
  }
  // 数据更新后调用
  componentDidUpdate() {
    let that = this
    // 当用户点击跳转页数时
    $('.ant-pagination-item').on('click', function () {
      let number = parseInt($(this).children().eq(0).html())
      that.setState({ page: number }, () => {
        // console.log(that.state)
      })
    })
    // 用户点击，下一页
    $('.ant-pagination-next')
      .off()
      .on('click', function () {
        let next = that.state.page + 1
        console.log(next)
        console.log(that.state.pageNumber)
        if (that.state.pageNumber < next) {
          console.log('到底了')
        } else {
          that.setState(
            {
              page: next,
            },
            () => {
              // console.log(that.state.page)
            }
          )
        }
      })
    // 用户点击上一页
    $('.ant-pagination-prev')
      .off()
      .on('click', function () {
        let next = that.state.page - 1
        console.log(next)
        if (1 > next) {
          console.log('这是首页')
        } else {
          that.setState(
            {
              page: next,
            },
            () => {
              // console.log(that.state.page)
            }
          )
        }
      })
    // 用户点击查看详情时
    $('.details').on('click', function () {
      // console.log($(this))
    })
  }
  // 发送数据到子组件
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
      pathname: '/Personal_Decoration_diary/Decoration_My_diary',
      params: DATA,
    })
  }
  render() {
    return (
      <div className="fang_marginT20">
        <h1 className="fang_RBcolor">最新日志</h1>
        <Show mydata={this.state.data} loc={this} />
        <Divider />
        <div className="fang_marginT20"></div>
        <Row>
          <Col span={8} offset={8}>
            <Pagination
              defaultCurrent={this.state.pageNumber}
              defaultPageSize={this.state.Lnumber}
              total={this.state.totle}
              className="fang_FangCenter"
            />
          </Col>
        </Row>
      </div>
    )
  }
}
// 循环日记列表
function Show(props) {
  // console.log(props)
  const that = props.loc
  if (props.mydata !== undefined) {
    // 分页处理 --暂定每页两条
    let da = that.state.page * that.state.Lnumber
    let xiao = (that.state.page - 1) * that.state.Lnumber
    let isdata = []
    for (let i = xiao; i < da; i++) {
      if (props.mydata[i] === undefined) {
        break
      } else {
        isdata.push(props.mydata[i])
      }
    }
    // 页面渲染数据
    let data = isdata
    let myList = data.map((item, index) => (
      <Row className="fang_paddingt30" key={item.id}>
        <Col span={2}>
          <div className="fang_FangCenter">
            <img
              src={require('../../assets/images/Decoration_img/Sellers_1.jpg')}
              alt=""
              className="fang_portrait80"
            />
            <p className="fang_marginT20">用户名</p>
          </div>
        </Col>
        <Col span={22} className="fang_padding20">
          <Row>
            <Col span={15}>
              <div
                onClick={that.details.bind(that)}
                className="fang_font18 fang_myh"
                id={item.id}
              >
                {/* <div className="fang_font18 fang_myh"> */}
                小区地址———————— 用户 的装修日记
                <span className="fang_font12">【多少篇】</span>
              </div>
              <div className="fang_marginT20">
                <span className="fang_marginR20">城市地址</span>
                <span className="fang_marginR20">面积</span>
                <span className="fang_marginR20">风格</span>
                <span>使用材料</span>
              </div>
              <div className="fang_marginT20">用户的询问房屋的状态</div>
            </Col>
            <Col span={9}>
              <span className="iconfont icon-liulan fang_marginR20 fang_OColor"></span>
              <span className=" fang_marginR20">浏览人数</span>
              <span className="iconfont icon-hengxian1 fang_marginR20 fang_fontW"></span>
              <span className="iconfont icon-shoucang fang_marginR20 fang_OColor"></span>
              <span className=" fang_marginR20">收藏人数</span>
              <span className="iconfont icon-hengxian1 fang_marginR20 fang_fontW"></span>
              <span className="iconfont icon-xinxi fang_marginR20 fang_OColor"></span>
              <span>回复人数</span>
            </Col>
          </Row>
          <Row className="fang_marginT20">
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
