import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd'
import { Pagination } from 'antd'
import axios from 'axios'
import $ from 'jquery'
import '../../assets/Fang_Css/Decoration_diary.css'
//评价晒单
function onChange(pageNumber) {
  console.log('Page: ', pageNumber)
}
// 评论的内容
function MySheet(props) {
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
      <Row className="fang_height30 fang_marginT20" key={item.id}>
        <Col span={6} className="fang_FangCenter">
          12345678976+++++{item.id}
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
    ))
    return myList
  }
  if (props.mydata === undefined) {
    return 3
  }
}
class Personal_Review_sheet extends Component {
  // 页面创建时发送请求获取评论的数据
  constructor(props) {
    super(props)
    // console.log(props)
    this.state = {
      pageNumber: 1,
      page: 1,
      Lnumber: 5,
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
          <MySheet mydata={this.state.data} loc={this} />
          <Divider />
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

export default Personal_Review_sheet
