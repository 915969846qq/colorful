import React, { Component } from 'react'
// 使用路由
import { withRouter } from 'react-router-dom'
import { Divider, Row, Col, Pagination } from 'antd'
import axios from 'axios'
import $, { data } from 'jquery'
class Decoration_show extends React.Component {
  replay = () => {
    console.log('ok')
  }
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
      .post('http://47.100.90.56:8080/banJu/Diary/findAllByInfo', {})
      .then((response) => {
        console.log(response)
        let mydata = response.data.data
        // 图片地址
        for (let j = 0; j < mydata.length; j++) {
          if (mydata[j].img1 !== null) {
            mydata[j].img1 = 'assets/images/Decoration_img/' + mydata[j].img1
          }
        }
        // 总共的页数
        let getnumber = Math.ceil(
          response.data.data.length / this.state.Lnumber
        )
        // 总数据条数
        let getlength = response.data.data.length
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
    this.props.history.push({
      pathname: '/Decoration_Diary_list/Decoration_My_diary',
      params: DATA,
    })
  }
  // 点击选择后发送请求刷新展示数据
  componentDidMount() {
    this.props.onRef(this)
  }
  childFn = (data) => {
    console.log('我是子组件中的方法')
    let mydata = {}
    if (data.Size !== '') {
      // mydata.size = data.Size
      // let str,
      if (data.Size.indexOf('-') !== -1) {
        mydata.builtAreaMin = data.Size.split('-')[0]
        mydata.builtAreaMax = data.Size.split('-')[1]
      }
      if (data.Size.indexOf('以上') !== -1) {
        mydata.builtAreaMin = data.Size.split('以下')[0]
      }
      if (data.Size.indexOf('以下') !== -1) {
        mydata.builtAreaMax = data.Size.split('以上')[0]
      }
    }
    if (data.style !== '') {
      mydata.style = data.style
    }
    if (data.city !== '') {
      mydata.city = data.city
    }
    console.log(mydata)
    axios
      .post('http://47.100.90.56:8080/banJu/Diary/findAllByInfo', mydata)
      .then((response) => {
        console.log(response)
        let mydata = response.data.data
        // 总共的页数
        let getnumber = Math.ceil(
          response.data.data.length / this.state.Lnumber
        )
        if (getnumber < this.state.page) {
          this.setState({
            page: 1,
          })
        }
        // 总数据条数
        let getlength = response.data.data.length
        this.setState(
          { data: mydata, pageNumber: getnumber, totle: getlength },
          () => {
            console.log(this.state)
          }
        )
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
    console.log(data)
    let myList = data.map((item, index) => (
      <Row className="fang_paddingt30" key={item.id}>
        <Col span={2}>
          <div className="fang_FangCenter">
            {item.img1 !== null ? (
              <img
                src={require('../../' + item.img1)}
                alt=""
                className="fang_portrait80"
              />
            ) : null}
            <p className="fang_marginT20">
              {item.diaryEvaluationList[0].user.name}
            </p>
          </div>
        </Col>
        <Col span={22} className="fang_padding20">
          <Row>
            <Col span={18}>
              <div
                onClick={that.details.bind(that)}
                className="fang_font18 fang_myh"
                id={item.id}
              >
                {/* <div className="fang_font18 fang_myh"> */}
                {item.houseInfo.community} ———— {item.name}
                <span className="fang_font12">【{item.evaluationNum}篇】</span>
              </div>
              <div className="fang_marginT20">
                <span className="fang_marginR20">{item.houseInfo.city}</span>
                <span className="fang_marginR20">
                  {item.houseInfo.builtArea}
                </span>
                <span className="fang_marginR20">{item.houseInfo.style}</span>
                <span>{item.houseInfo.decorationCompany}</span>
              </div>
              <div className="fang_marginT20">{item.content}</div>
            </Col>
            <Col span={6}>
              <span className="iconfont icon-liulan fang_marginR20 fang_OColor"></span>
              <span className=" fang_marginR20">{item.viewsNum}</span>
              <span className="iconfont icon-hengxian1 fang_marginR20 fang_fontW"></span>
              <span className="iconfont icon-xinxi fang_marginR20 fang_OColor"></span>
              <span>{item.evaluationNum}</span>
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
