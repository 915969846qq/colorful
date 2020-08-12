import React, { Component, useState } from 'react'
import '../../assets/iconfont/Fang_iconfont/iconfont.css'
// 上传
import { Upload } from 'antd'
import ImgCrop from 'antd-img-crop'
// 结构
import { Divider, Row, Col } from 'antd'
// 步骤进行
import { Steps } from 'antd'
// 选择日期
// import { DatePicker } from 'antd'
// 按钮
import { Button } from 'antd'
// jquery
import $ from 'jquery'
import Axios from 'axios'
const { Step } = Steps
//个人中心 写日记
// // 选择日期
// function onChange(date, dateString) {
//   console.log(date, dateString)
// }
// 上传图片
const Demo = (props) => {
  // console.log(props.loc)
  let that = props.loc
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ])

  const UPonChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
    // console.log(newFileList)
    let arr = []
    // 将数据放入state
    for (let i = 0; i < newFileList.length; i++) {
      arr.push(newFileList[i].name)
    }
    that.setState({ ImgSrc: arr })
  }

  const onPreview = async (file) => {
    let src = file.url
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)
        reader.onload = () => resolve(reader.result)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow.document.write(image.outerHTML)
  }

  return (
    <ImgCrop rotate>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={UPonChange}
        onPreview={onPreview}
      >
        {fileList.length < 9 && '+ 上传图片'}
      </Upload>
    </ImgCrop>
  )
}
export default class Decoration_Write_diary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      diaryLable: '',
      textarea: '',
    }
  }
  fangLabel = (e) => {
    $('.fang_myLable').removeClass('fang_myqian')
    $(e.target).addClass('fang_myqian')
    // 将选中的标签放入state
    let text = $(e.target).html()
    this.setState({
      diaryLable: text,
    })
  }
  Writediary = (e) => {
    let text = $(e.target).val()
    if ($(e.target).val() !== '') {
      this.setState({
        textarea: text,
      })
    }
  }
  render() {
    return (
      <div className="fang_Width1200">
        <form action="/WriteDiary.do" method="post">
          <h2 className="fang_RBcolor fang_fontW fang_marginT20 fang_font18">
            写日记+++++++++++++++++++++++
          </h2>
          <Divider />
          <Row className="fang_marginT20">
            <Col span={12}>
              <textarea
                name="WriteDiary"
                id="WriteDiary"
                cols="90"
                rows="20"
                onBlur={this.Writediary.bind(this)}
                className="fang_paddingt10 fang_padding20 fang_noborder"
                placeholder="说点什么吧，记录您装修的点点滴滴........"
              ></textarea>
            </Col>
            <Col span={10}>
              <p className="fang_font12 fang_paddingt10">
                选择装修阶段
                制定整体预算。选择装修风格、主材、家具、家电配饰等。寻找合适的施工方，签订合同后开工！
              </p>
              <Steps current={3}>
                <Step title="Waiting" />
                <Step title="In Progress" />
                <Step title="Finished" />
              </Steps>
              <p className="fang_marginT20">
                选择日记标签用一个标签来描述你日记的内容吧~
              </p>
              <Row>
                <Col
                  span={3}
                  className="fang_Border fang_FangCenter fang_marginT20 fang_height30 fang_font12 fang_myLable"
                  onClick={this.fangLabel.bind(this)}
                  offset={1}
                >
                  准备中
                </Col>
                <Col
                  span={3}
                  className="fang_Border fang_FangCenter fang_marginT20 fang_height30 fang_font12 fang_myLable"
                  onClick={this.fangLabel.bind(this)}
                  offset={1}
                >
                  拆改中
                </Col>
                <Col
                  span={3}
                  className="fang_Border fang_FangCenter fang_marginT20 fang_height30 fang_font12 fang_myLable"
                  onClick={this.fangLabel.bind(this)}
                  offset={1}
                >
                  改水电
                </Col>
                <Col
                  span={3}
                  className="fang_Border fang_FangCenter fang_marginT20 fang_height30 fang_font12 fang_myLable"
                  onClick={this.fangLabel.bind(this)}
                  offset={1}
                >
                  上泥木
                </Col>
                <Col
                  span={3}
                  className="fang_Border fang_FangCenter fang_marginT20 fang_height30 fang_font12 fang_myLable"
                  onClick={this.fangLabel.bind(this)}
                  offset={1}
                >
                  涂油漆
                </Col>
                <Col
                  span={3}
                  className="fang_Border fang_FangCenter fang_marginT20 fang_height30 fang_font12 fang_myLable"
                  onClick={this.fangLabel.bind(this)}
                  offset={1}
                >
                  马上竣工
                </Col>
                <Col
                  span={3}
                  className="fang_Border fang_FangCenter fang_marginT20 fang_height30 fang_font12 fang_myLable"
                  onClick={this.fangLabel.bind(this)}
                  offset={1}
                >
                  软装
                </Col>
                <Col
                  span={3}
                  className="fang_Border fang_FangCenter fang_marginT20 fang_height30 fang_font12 fang_myLable"
                  onClick={this.fangLabel.bind(this)}
                  offset={1}
                >
                  马上入住
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider />
          <div>
            <p>
              <span className="fang_RBcolor fang_fontW fang_marginT20 fang_font18">
                上传装修照片
              </span>
              <span className="fang_font12 fang_marginL20">
                选择装修过程中的照片，每张低于5M，支持JPG/JPEG/PNG格式，最多9张
              </span>
            </p>
            <Demo loc={this} />
          </div>
          <div className="fang_marginT20 fang_Button50">
            <Button
              type="primary"
              danger
              className="fang_width200"
              onClick={this.releaseDiary.bind(this)}
            >
              发布日志
            </Button>
          </div>
        </form>
      </div>
    )
  }
  releaseDiary = () => {
    console.log('发布日志')
    console.log(this.state)
    let mydata = {
      uid: 1,
      name: '明天会更好',
      content: this.state.textarea,
      tag: this.state.diaryLable,
    }
    // console.log($('.ant-upload-list-item-thumbnail'))
    Axios.post('http://172.16.10.56:8080/banJu/Diary/saveDiary', mydata).then(
      (response) => {
        console.log(response)
      }
    )
  }
}
