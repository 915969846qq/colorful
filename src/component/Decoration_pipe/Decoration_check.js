import React, { Component } from 'react'
import { Row, Col } from 'antd'
import $ from 'jquery'
function Check(props) {
  const localtion = props.loc
  const numbers = props.numbers
  const listItems = numbers.map((number) => (
    <Col
      className="marginL20 myh"
      key={number}
      onClick={localtion.check.bind(localtion, numbers)}
    >
      {number}
    </Col>
  ))
  return (
    <Row>
      {listItems} <Col className="iconfont icon-xiala option_write"></Col>
    </Row>
  )
}
class Decoration_check extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        city: ['成都', '重庆', '武汉', '北京', '上海'],
        style: ['古风', '现代', '洋房', '四合院', '欧式'],
        Size: ['60以下', '60-80', '80-100', '100-120', '120以上'],
      },
    }
  }
  componentDidMount() {
    // 用户点击选项
    $('.myh').on('click', function () {
      // 点击更改样式
      $(this).parent().children().not(':last').css({
        color: '#595959',
      })
      $(this).css({
        color: '#d3522b',
      })
    })
  }
  // 上传选中参数
  check = (datas, e) => {
    console.log(datas)
    let data = $(e.target).html()
    // 查看选中的是什么城市
    for (let i = 0; i < this.state.data.city.length; i++) {
      // console.log(this.state.data.city[i])
      if (this.state.data.city[i] === data) {
        this.setState({ city: this.state.data.city[i] }, () => {
          console.log(this.state)
          this.props.passdata(this.state)
        })
        break
      }
    }
    // 查看选中的是什么风格

    for (let m = 0; m < this.state.data.style.length; m++) {
      // console.log(this.state.data.style[i])
      if (this.state.data.style[m] === data) {
        this.setState({ style: this.state.data.style[m] }, () => {
          console.log(this.state)
          this.props.passdata(this.state)
        })
        break
      }
    }
    // 查看选中的是什么面积
    for (let n = 0; n < this.state.data.Size.length; n++) {
      // console.log(this.state.data.Size[n])
      if (this.state.data.Size[n] === data) {
        this.setState({ Size: this.state.data.Size[n] }, () => {
          console.log(this.state)
          this.props.passdata(this.state)
        })
        break
      }
    }
    // 调用父组件的方法传参
  }
  render() {
    return (
      <div>
        <h1>装修日志选择列表</h1>
        <div className="Border">
          <Row className="height50 myCenter Bborder">
            <Col span={3}>
              全部日记
              <span className="iconfont icon-next-page fontX marginL20"></span>
            </Col>
          </Row>
          <Row className="height50 BBorder">
            <Col span={2} className="GBcolor myCenter">
              风格
            </Col>
            <Col span={22} className="padding20 relative">
              <Check numbers={this.state.data.style} loc={this} />
              {/* <span className="iconfont icon-xiala option_write"></span> */}
            </Col>
          </Row>
          <Row className="height50 BBorder">
            <Col span={2} className="GBcolor myCenter">
              面积
            </Col>
            <Col span={22} className="padding20">
              <Check numbers={this.state.data.Size} loc={this} />
            </Col>
          </Row>
          <Row className="height50">
            <Col span={2} className="GBcolor myCenter">
              城市
            </Col>
            <Col span={22} className="padding20 relative">
              <Check numbers={this.state.data.city} loc={this} />
              {/* <span className="iconfont icon-xiala option_write"></span> */}
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Decoration_check
