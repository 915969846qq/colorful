import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd'
import { Drawer, Button, Radio, Space, Rate } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
// 上传图片
import { Upload, Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Pagination } from 'antd'
import axios from 'axios'
import $ from 'jquery'
import '../../assets/Fang_Css/Decoration_diary.css'
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']
// 上传评论图片
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}
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
          <span className="fang_marginR20 fang_myh" onClick={that.showDrawer}>
            评论
          </span>
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
      previewVisible: false,
      previewImage: '',
      previewTitle: '',
      fileList: [],
      value: 3,
      visible: false,
      placement: 'top',
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
  // 模态框方法
  showDrawer = () => {
    this.setState({
      visible: true,
    })
  }

  onClose = () => {
    this.setState({
      visible: false,
    })
  }
  // 评分
  handleChange = (value) => {
    this.setState({ value })
  }
  // 上传图片
  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    })
  }

  UPChange = ({ fileList }) => this.setState({ fileList })
  render() {
    const { placement, visible } = this.state
    const { value } = this.state
    // 上传图片
    const { previewVisible, previewImage, fileList, previewTitle } = this.state
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div className="ant-upload-text">上传图片</div>
      </div>
    )
    return (
      <div className="fang_relative fang_height100">
        {/* 模态框 */}
        <Drawer
          title="评价订单"
          className="fang_FangCenter fang_border"
          placement={placement}
          closable={false}
          onClose={this.onClose}
          visible={visible}
          key={placement}
          height={850}
          headerStyle={{ background: '#f5f5f5' }}
          bodyStyle={{ background: '#f5f5f5' }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
              className="fang_FangCenter"
            >
              <Button
                onClick={this.onClose}
                style={{ marginRight: 8, width: 120 }}
              >
                取消
              </Button>
              <Button
                onClick={this.onClose}
                type="primary"
                style={{ width: 120 }}
              >
                发布
              </Button>
            </div>
          }
        >
          <div className="fang_WBColor fang_Width1200">
            <p className="fang_paddingt20">
              订单号 : ******
              <span className="fang_padding45">下单时间</span>
            </p>
            <Row>
              <Col span={6} className="fang_lineR fang_paddingall">
                <div>
                  <img
                    src={require('../../assets/images/Decoration_img/Sellers_1.jpg')}
                    className="fang_kuang100"
                    alt=""
                  />
                </div>
                <p className="fang_paddingt20">
                  锦骑海款休闲裤男秋季九分裤男装裤子修身春夏天男裤收口港风小却裤加厚哈伦裤男韩版运动男生東裤男9分裤海款黑色
                </p>
                <p className="fang_paddingt10">商品价格</p>
                <p className="fang_paddingt10">商品出售信息</p>
              </Col>
              <Col span={18} className="fang_TLeft fang_padding20">
                <div className="icons-list fang_OColor">
                  <InfoCircleOutlined />
                  <span className="fang_marginL20">请至少评论一件商品</span>
                </div>
                <Row className="fang_paddingt30">
                  <Col span={3} className="fang_relative">
                    <span className="fang_absolute fang_botton0">商品评分</span>
                  </Col>
                  <Col span={21}>
                    <Rate
                      tooltips={desc}
                      onChange={this.handleChange}
                      value={value}
                    />
                    {value ? (
                      <span className="ant-rate-text">{desc[value - 1]}</span>
                    ) : (
                      ''
                    )}
                  </Col>
                </Row>
                <Row className="fang_paddingt20">
                  <Col span={3}>评论晒单</Col>
                  <Col span={21}>
                    <textarea
                      name="commitorder"
                      id="commitorder"
                      cols="100"
                      rows="10"
                      className="fang_padding30 fang_paddingt20 fang_noborder"
                      placeholder="请输入评论内容"
                    ></textarea>
                  </Col>
                </Row>
                <Row className="fang_paddingt30 fang_Button50">
                  <Col span={21} offset={3} className="clearfix">
                    <p className="fang_RColor">
                      <InfoCircleOutlined className="fang_marginR20" />
                      请选择上传图片，每张低于5M，支持JPG/JPEG/PNG格式，最多9张
                    </p>
                    <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={this.handlePreview}
                      onChange={this.UPChange}
                    >
                      {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    <Modal
                      visible={previewVisible}
                      title={previewTitle}
                      footer={null}
                      onCancel={this.handleCancel}
                    >
                      <img
                        alt="example"
                        style={{ width: '100%' }}
                        src={previewImage}
                      />
                    </Modal>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Drawer>

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
