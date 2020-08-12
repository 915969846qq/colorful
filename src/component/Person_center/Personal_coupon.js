import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Pagination } from 'antd'
import axios from 'axios'
import $ from 'jquery'
//优惠券
function onChange(pageNumber) {
  console.log('Page: ', pageNumber)
}
// 优惠券内容
function MyCoupon(props) {
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
      <Col span={8} key={item.desc}>
        <Row
          className="fang_wcolor fang_FangCenter fang_paddingt30"
          key={item.id}
        >
          <Col
            span={13}
            className={[
              item.state === '立即使用' ? 'fang_RBColor' : 'fang_outdate',
              'fang_FangCenter',
            ]}
            offset={2}
          >
            <Row>
              <Col span={12} offset={6}>
                <p className="fang_marginT20 fang_TLeft">
                  <span className="fang_fontS fang_marginR20">
                    {item.money}
                  </span>
                  <span className="fang_font18">元</span>
                </p>
                <div className="fang_font22 fang_fontW fang_WBColor fang_RColor">
                  {item.desc}
                </div>
                <h3 className="fang_wcolor fang_marginT20 fang_TLeft fang_marginB20">
                  满{item.satisfy}使用
                </h3>
              </Col>
            </Row>
          </Col>
          {item.state === '立即使用' ? (
            <Col
              span={5}
              className="fang_0BColor fang_FangCenter fang_font22 fang_padding30 fang_varticalTEXT fang_paddingt30"
            >
              立即使用
            </Col>
          ) : (
            <Col
              span={5}
              className="fang_0BColor fang_Bcolor9 fang_FangCenter fang_font22 fang_padding30 fang_paddingt30"
            >
              已使用
            </Col>
          )}
        </Row>
      </Col>
    ))
    return myList
  }
  if (props.mydata === undefined) {
    return 3
  }
}
class Personal_coupon extends Component {
  // 页面创建时发送请求获取优惠券的数据
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
    // 发送请求
    // 获取用户id
    let isdata = {}
    let ruie = JSON.parse(sessionStorage.getItem('user'))
    if (ruie === null) {
      window.location.href = '/Sign_in'
    } else {
      isdata.id = ruie.id
      axios
        .post('http://172.16.10.56:8080/banJu/user/usercoupon', isdata)
        .then((response) => {
          // 生成当前时间，判断是否过期
          var d = new Date()
          let d1 = d.getTime(d)
          // 继续操作
          let mydata = response.data.data
          // console.log(mydata)
          for (let i = 0; i < mydata.length; i++) {
            if (mydata[i].faildate < d1) {
              mydata[i].state = '已过期'
            } else {
              mydata[i].state = '立即使用'
            }
          }
          // 总共的页数
          let getnumber = Math.ceil(mydata.length / this.state.Lnumber)
          // 总数据条数
          let getlength = mydata.length
          this.setState(
            { data: mydata, pageNumber: getnumber, totle: getlength },
            () => {
              console.log(this.state)
            }
          )
        })
    }
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
        <h3>我的优惠券</h3>
        <Row>
          <MyCoupon mydata={this.state.data} loc={this} />
        </Row>
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

export default Personal_coupon
