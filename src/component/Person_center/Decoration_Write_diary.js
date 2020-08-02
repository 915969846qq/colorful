import React, { Component, useState } from 'react'
import '../../assets/iconfont/Fang_iconfont/iconfont.css'
// 上传
// import { Upload } from 'antd'
// import ImgCrop from 'antd-img-crop'
// 结构
import { Divider, Row, Col } from 'antd'
// 步骤进行
import { Steps } from 'antd'
// 选择日期
import { DatePicker } from 'antd'
// 按钮
import { Button } from 'antd'

const { Step } = Steps
//个人中心 写日记
// 选择日期
function onChange(date, dateString) {
  console.log(date, dateString)
}
// 上传图片
const Demo = () => {
  // const [fileList, setFileList] = useState([
  //   {
  //     uid: '-1',
  //     name: 'image.png',
  //     status: 'done',
  //     url:
  //       'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  //   },
  // ])

  // const onChange = ({ fileList: newFileList }) => {
  //   setFileList(newFileList)
  // }

  // const onPreview = async (file) => {
  //   let src = file.url
  //   if (!src) {
  //     src = await new Promise((resolve) => {
  //       const reader = new FileReader()
  //       reader.readAsDataURL(file.originFileObj)
  //       reader.onload = () => resolve(reader.result)
  //     })
  //   }
    const image = new Image()
    // image.src = src
    // const imgWindow = window.open(src)
    // imgWindow.document.write(image.outerHTML)
  }

  // return (
  //   <ImgCrop rotate>
  //   {/* //   <Upload */}
  //   {/* //     action="https://www.mocky.io/v2/5cc8019d300000980a055e76" */}
  //   {/* //     listType="picture-card" */}
  //   {/* //     fileList={fileList} */}
  //   {/* //     onChange={onChange} */}
  //   {/* //     onPreview={onPreview} */}
  //   {/* //   > */}
  //   {/* //     {fileList.length < 5 && '+ Upload'} */}
  //   {/* //   </Upload> */}
  //   // </ImgCrop>
  // )
// }
export default class Decoration_Write_diary extends Component {
  render() {
    return (
      <div className="Width1200">
        <h2 className="RBcolor">写日记</h2>
        <Divider />
        <Row className="marginT20">
          <Col span={12}>
            <textarea
              name="WriteDiary"
              id="WriteDiary"
              cols="90"
              rows="20"
              className="paddingt10 padding20 noborder"
              placeholder="说点什么吧，记录您装修的点点滴滴........"
            ></textarea>
          </Col>
          <Col span={10}>
            <p className="font12 paddingt10">
              选择装修阶段
              制定整体预算。选择装修风格、主材、家具、家电配饰等。寻找合适的施工方，签订合同后开工！
            </p>
            <Steps current={1}>
              <Step title="Finished" />
              <Step title="In Progress" />
              <Step title="Waiting" />
            </Steps>
            <p className="marginT20">
              选择日记标签用一个标签来描述你日记的内容吧~
            </p>
            <Row>
              <Col
                span={3}
                className="Border myCenter marginT20 height30 font12"
                offset={1}
              >
                准备中
              </Col>
              <Col
                span={3}
                className="Border myCenter marginT20 height30 font12"
                offset={1}
              >
                拆改中
              </Col>
              <Col
                span={3}
                className="Border myCenter marginT20 height30 font12"
                offset={1}
              >
                改水电
              </Col>
              <Col
                span={3}
                className="Border myCenter marginT20 height30 font12"
                offset={1}
              >
                上泥木
              </Col>
              <Col
                span={3}
                className="Border myCenter marginT20 height30 font12"
                offset={1}
              >
                涂油漆
              </Col>
              <Col
                span={3}
                className="Border myCenter marginT20 height30 font12"
                offset={1}
              >
                马上竣工
              </Col>
              <Col
                span={3}
                className="Border myCenter marginT20 height30 font12"
                offset={1}
              >
                软装
              </Col>
              <Col
                span={3}
                className="Border myCenter marginT20 height30 font12"
                offset={1}
              >
                马上入住
              </Col>
            </Row>
          </Col>
        </Row>
        {/* 选择日期 */}
        <h2 className="RBcolor fontW marginT20">选择日期</h2>
        <DatePicker onChange={onChange} className="width200" />
        <Divider />
        <div>
          <p>
            <span className="RBcolor fontW marginT20 font18">上传装修照片</span>
            <span className="font12 marginL20">
              选择装修过程中的照片，每张低于5M，支持JPG/JPEG/PNG格式，最多9张
            </span>
          </p>
          <Demo />
        </div>
        <div className="marginT20 Button50">
          <Button type="primary" danger className="width200">
            发布日志
          </Button>
        </div>
      </div>
    )
  }
}
