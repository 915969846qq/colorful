import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd'
import { withRouter } from 'react-router-dom'
import { Pagination } from 'antd'
import axios from 'axios'
import $ from 'jquery'
import '../../assets/iconfont/Fang_iconfont/iconfont.css'
//我的二手管理
function onChange(pageNumber) {
  console.log('Page: ', pageNumber)
}
// 列表展示内容
function SecondHand(props) {
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
      <Row className="fang_Button50 fang_minhei150" key={item.id}>
        <Col span={22} offset={1} className="fang_Border">
          <Row className="fang_height30">
            <Col span={12} className="fang_padding20">
              信息号:{item.id}
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
                    下架
                  </div>
                </Col>
              </Row>
            </Col>
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
class Personal_second_hand_management extends Component {
  // 页面创建时发送请求获取二手管理的内容
  constructor(props) {
    super(props)
    // console.log(props)
    this.state = {
      visible: false,
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
            console.log(this.state)
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
    // 用户点输入页数时
    $('.ant-pagination-options-quick-jumper')
      .children()
      .off()
      .on('blur', function () {
        let number = parseInt(
          $('.ant-pagination-options-quick-jumper').children().val()
        )
        if (number > that.state.pageNumber || number < 0) {
          console.log('1111')
          $('.ant-pagination-options-quick-jumper').children().val('')
        } else {
          that.setState({ page: number }, () => {
            console.log(that.state)
          })
        }
      })
  }
  render() {
    return (
      <div className="fang_relative fang_height100">
        <h3 className="fang_height30">我的二手管理</h3>
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
            <button className="fang_width200 fang_height30 fang_border fang_wcolor fang_RBColor fang_myhover">
              <span className="iconfont icon-dianhua fang_marginR20"></span>
              123456789089
            </button>
            <button
              className="fang_marginL20 fang_width200 fang_height30 fang_border fang_wcolor fang_BbColor fang_myhover"
              type="primary"
            >
              <span className="iconfont icon-jia fang_marginR20"></span>
              发布二手商品
            </button>
          </Col>
        </Row>
        <h5>最近发布信息</h5>
        <Divider />
        {/* 展示列表 */}
        <div className="fang_relative">
          <SecondHand mydata={this.state.data} loc={this} />
        </div>
        {/* 底部的分页 */}
        <Row className="fang_absolute fang_location">
          <Pagination
            showQuickJumper
            defaultCurrent={this.state.pageNumber}
            defaultPageSize={this.state.Lnumber}
            total={this.state.totle}
            onChange={onChange}
          />
        </Row>
      </div>
    )
  }
}
export default withRouter(Personal_second_hand_management)
