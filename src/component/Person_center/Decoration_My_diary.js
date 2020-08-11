import React, { Component } from 'react'
import { Row, Col, Button, Divider } from 'antd'
import axios from 'axios'
// import axios from 'axios'
import Store from '../../store/Decoration_store'
import '../../assets/iconfont/Fang_iconfont/iconfont.css'
//个人中心-我的装修日记
export default class Decoration_My_diary extends Component {
  constructor(props) {
    super(props)
    // console.log(props.location.params)
    this.state = {
      data: 1,
    }
    if (props.location.params !== undefined) {
      sessionStorage.setItem('data', JSON.stringify(props.location.params))
    }
    // 页面获取数据
    // console.log('现在是获取数据111')
    // console.log(this.state.data)
    Store.dispatch({
      type: 'Decoration_data',
      id: this.state.data,
    })
    // 发送请求
    // axios
    //   .get('http://localhost:8888/user.do', { username: '2495944984@111' })
    //   .then((response) => {
    //     console.log(response)
    //   })
  }
  // componentDidMount() {
  //   console.log('现在是获取数据')
  //   console.log(this.state.data)
  //   Store.dispatch({
  //     type: 'Decoration_data',
  //     data: '传递数据',
  //   })
  // }
  componentWillUnmount() {
    // console.log('1111')
    sessionStorage.clear()
  }
  render() {
    return (
      <div className="fang_Width1200">
        <div className="fang_GBcolor fang_title">我的装修日记</div>
        <Row className="fang_Border">
          {/* 用户头像 */}
          <Col span={4} className="fang_center fang_marginT20">
            <img
              src={require('../../assets/images/Decoration_img/Sellers_1.jpg')}
              alt=""
              className="fang_portraitL"
            />
          </Col>
          {/* 装修基本信息 */}
          <Col span={5} offset={1}>
            <h2>用户名</h2>
            <p>评论时间</p>
            <p>房屋信息</p>
            <p>房屋地址</p>
            <p>
              装修公司 <span>修改资料</span>
            </p>
          </Col>
          {/* 他人浏览 */}
          <Col span={9}>
            <Row align="middle" className="fang_height">
              <Col span={6} className="fang_rline" offset={6}>
                <p>多少人</p>
                <span>浏览</span>
              </Col>
              <Col span={6} className="fang_rline">
                <p>多少人</p>
                <span>收藏</span>
              </Col>
              <Col span={6}>
                <p>多少人</p>
                <span>回复</span>
              </Col>
            </Row>
          </Col>
          {/* 微信二维码 */}
          <Col span={4} offset={1} className="fang_align">
            <img
              src={require('../../assets/images/Decoration_img/weixin.jpg')}
              alt=""
            />
          </Col>
        </Row>
        {/* 日记篇数 */}
        <div className="fang_marginT20">
          <Button type="primary" danger>
            全部日记共**篇
          </Button>
        </div>
        {/* 拆改装修信息 */}
        <div className="fang_marginT20">
          <div>
            <span>拆改</span>
            <span>前期准备</span>
          </div>
          {/* 下划线 */}

          {/* 评论内容 */}
          <div className="fang_width1100">
            <Divider />
            <p className="fang_relative">
              评论时间
              <span className="fang_option_write fang_RBcolor">编辑</span>
              <span className="fang_option_delet fang_RBcolor">删除</span>
            </p>
            <p>装修公司对客户提醒合同信息</p>
            {/* 发送的图片 */}
            <Row>
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
            </Row>
            <div className="fang_marginT20 fang_flex">
              <div className="fang_align">
                <span className="iconfont icon-xinxi fang_RBcolor"></span>
                <span className="fang_marginL20">多少条回复</span>
              </div>
              <div className="fang_align">
                <span className="fang_align">分享到：</span>
                <span className="iconfont icon-qqkongjian1 fang_fontS fang_marginR20 fang_YColor"></span>
                <span className="iconfont icon-weixin-copy fang_fontS fang_marginR20 fang_RColor"></span>
                <span className="iconfont icon-weibo fang_fontS fang_LColor"></span>
              </div>
            </div>
            <Divider />
            <Row className="fang_Button50">
              <Col span={5}>所有评论 | 多少条</Col>
              <Col span={19}></Col>
            </Row>
            <Row>
              <Col span={1} offset={1} className="fang_WBcolor">
                <div>
                  <img
                    src={require('../../assets/images/Decoration_img/Sellers_1.jpg')}
                    alt=""
                    className="fang_portraitS"
                  />
                </div>
              </Col>
              <Col span={20}>
                <div className="fang_WBcolor fang_Middel fang_relative">
                  <span>评论用户名</span>
                  <span className="fang_marginL20">评论发布时间</span>
                  <span className="fang_option_delet fang_RBcolor">回复</span>
                </div>
              </Col>
            </Row>
            <Row className="fang_WBcolor">
              <Col
                span={20}
                offset={2}
                className="fang_padding20 fang_marginT20"
              >
                <div>
                  <span>用户 </span>
                  <span>回复</span>
                  <span> 装修人员</span>
                </div>
                <div className="fang_padding20">
                  <span>快装修好了！你家呢？</span>
                </div>
              </Col>
            </Row>
            <Row className="fang_marginT20">
              <textarea
                name="comment"
                id="comment"
                cols="200"
                rows="5"
                maxLength="200"
                className="fang_noborder fang_padding20 fang_paddingt10"
                onBlur={this.mytext.bind(this)}
                placeholder="随便说说你的想法吧，或者你有什么问题？和大家一起探讨吧......."
              ></textarea>
            </Row>
            <Row className="fang_WBcolor fang_marginT20">
              <Col span={24} className="fang_relative fang_height30">
                <span className="fang_option_Tips fang_GColor">
                  你还可以输入**个字
                </span>
                <button
                  className="fang_mybtn fang_option_delet"
                  onClick={this.send.bind(this)}
                >
                  发送
                </button>
              </Col>
            </Row>
          </div>
          <Divider />
        </div>
      </div>
    )
  }
  // 调用方法
  send = (data) => {
    document.getElementsByClassName('fang_noborder')[0].value = ''
    console.log(this.state)
    axios
      .post('http://172.16.10.56:8080/banJu/Evaluation/saveToDiary', {
        did: '1',
        ruid: '1',
        desc: this.state.text,
      })
      .then((response) => {
        console.log(response)
      })
  }
  // 获取输入的文本
  mytext = (data) => {
    console.log(data)
    this.setState({
      text: data.target.value,
    })
  }
}
