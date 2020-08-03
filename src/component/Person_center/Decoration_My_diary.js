import React, { Component } from 'react'
import { Row, Col, Button, Divider } from 'antd'
// import { WechatOutlined } from '@ant-design/icons'
import '../../assets/iconfont/Fang_iconfont/iconfont.css'
//个人中心-我的装修日记
export default class Decoration_My_diary extends Component {
  constructor(props) {
    super(props)
    // console.log(props.location.params)
    this.state = {}
  }
  render() {
    return (
      <div className="Width1200">
        <div className="GBcolor title">我的装修日记</div>
        <Row className="Border">
          {/* 用户头像 */}
          <Col span={4} className="center marginT20">
            <img
              src={require('../../assets/images/Decoration_img/Sellers_1.jpg')}
              alt=""
              className="portraitL"
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
            <Row align="middle" className="height">
              <Col span={6} className="rline" offset={6}>
                <p>多少人</p>
                <span>浏览</span>
              </Col>
              <Col span={6} className="rline">
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
          <Col span={4} offset={1} className="align">
            <img
              src={require('../../assets/images/Decoration_img/weixin.jpg')}
              alt=""
            />
          </Col>
        </Row>
        {/* 日记篇数 */}
        <div className="marginT20">
          <Button type="primary" danger>
            全部日记共**篇
          </Button>
        </div>
        {/* 拆改装修信息 */}
        <div className="marginT20">
          <div>
            <span>拆改</span>
            <span>前期准备</span>
          </div>
          {/* 下划线 */}

          {/* 评论内容 */}
          <div className="width1100">
            <Divider />
            <p className="relative">
              评论时间
              <span className="option_write RBcolor">编辑</span>
              <span className="option_delet RBcolor">删除</span>
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
            <div className="marginT20 flex">
              <div className="align">
                <span className="iconfont icon-xinxi RBcolor"></span>
                <span className="marginL20">多少条回复</span>
              </div>
              <div className="align">
                <span className="align">分享到：</span>
                <span className="iconfont icon-qqkongjian1 fontS marginR20 YColor"></span>
                <span className="iconfont icon-weixin-copy fontS marginR20 RColor"></span>
                <span className="iconfont icon-weibo fontS LColor"></span>
              </div>
            </div>
            <Divider />
            <Row className="Button50">
              <Col span={5}>所有评论 | 多少条</Col>
              <Col span={19}></Col>
            </Row>
            <Row>
              <Col span={1} offset={1} className="WBcolor">
                <div>
                  <img
                    src={require('../../assets/images/Decoration_img/Sellers_1.jpg')}
                    alt=""
                    className="portraitS"
                  />
                </div>
              </Col>
              <Col span={20}>
                <div className="WBcolor Middel relative">
                  <span>评论用户名</span>
                  <span className="marginL20">评论发布时间</span>
                  <span className="option_delet RBcolor">回复</span>
                </div>
              </Col>
            </Row>
            <Row className="WBcolor">
              <Col span={20} offset={2} className="padding20 marginT20">
                <div>
                  <span>用户 </span>
                  <span>回复</span>
                  <span> 装修人员</span>
                </div>
                <div className="padding20">
                  <span>快装修好了！你家呢？</span>
                </div>
              </Col>
            </Row>
            <Row className="marginT20">
              <textarea
                name="comment"
                id="comment"
                cols="200"
                rows="5"
                maxLength="200"
                className="noborder padding20 paddingt10"
                onBlur={this.mytext.bind(this)}
                placeholder="随便说说你的想法吧，或者你有什么问题？和大家一起探讨吧......."
              ></textarea>
            </Row>
            <Row className="WBcolor marginT20">
              <Col span={24} className="relative height30">
                <span className="option_Tips GColor">你还可以输入**个字</span>
                <button
                  className="mybtn option_delet"
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
    document.getElementsByClassName('noborder')[0].value = ''
    console.log(this.state)
  }
  // 获取输入的文本
  mytext = (data) => {
    console.log(data)
    this.setState({
      text: data.target.value,
    })
  }
}
