import React, { Component } from 'react'
import { Row, Col, Divider, Table } from 'antd'
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
      textar: '',
      visible: false,
      placement: 'top',
      pageNumber: 1,
      page: 1,
      Lnumber: 3,
      totle: 1,
      ModelDate: {},
      // 发布评论
      loading: false,
      visible: false,
      // 表格样式
      columns: [
        {
          title: '订单编号',
          dataIndex: 'id',
        },
        {
          title: '订单商品',
          dataIndex: 'shopname',
        },
        {
          title: '购买时间',
          dataIndex: 'createdDate',
        },
        {
          title: '订单状态',
          dataIndex: 'status',
        },
        {
          title: '价格',
          dataIndex: 'price',
        },
        {
          title: '操作',
          dataIndex: 'option',
          render: (text, record) =>
            record.status === '待评论' ? (
              <div>
                <span
                  className="fang_marginR20 fang_myh"
                  onClick={this.showDrawer.bind(this, record)}
                >
                  评论
                </span>
                <span className="fang_myh">删除</span>
              </div>
            ) : null,
        },
      ],
    }
    // page——当前页数，pageNumber——总共的页数，totle——总数据条数，Lnumber——每页展示的条数
    // 发送请求
    this.mydata = {}
    // 验证用户是否登录
    let isdata = {}
    let ruie = JSON.parse(sessionStorage.getItem('user'))
    if (ruie === null) {
      window.location.href = '/Sign_in'
    } else {
      isdata.uid = ruie.id
      axios
        .post('http://47.100.90.56:8080/banJu/user/lookEvaStatus', isdata)
        .then((response) => {
          console.log(response.data)
          let mydata = response.data.data
          // 分页处理
          // 分页处理 --暂定每页两条
          let da = this.state.page * this.state.Lnumber
          let xiao = (this.state.page - 1) * this.state.Lnumber
          let isdata = []

          for (let i = xiao; i < da; i++) {
            if (mydata[i] === undefined) {
              break
            } else {
              isdata.push(mydata[i])
            }
          }
          console.log(isdata)
          let m = 0,
            n = 0
          for (let i = 0; i < response.data.data.length; i++) {
            response.data.data[i].key = response.data.data[i].id
            mydata[i].shopname = mydata[i].goods.name
            mydata[i].price = mydata[i].goods.price
            if (mydata[i].status === '已完成') {
              m++
            }
            if (mydata[i].status === '待评价') {
              n++
            }
          }
          this.setState(
            { data: mydata, tabledata: isdata, uid: ruie.id, wite: n, end: m },
            () => {
              // 总共的页数
              let getnumber = Math.ceil(
                this.state.data.length / this.state.Lnumber
              )
              // 总数据条数
              let getlength = this.state.data.length
              this.setState({ pageNumber: getnumber, totle: getlength }, () => {
                console.log(this.state)
              })
            }
          )
        })
    }
  }

  // 评论商品
  writecommit = () => {
    console.log('现在进行评论')
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
        let da = that.state.page * that.state.Lnumber
        let xiao = (that.state.page - 1) * that.state.Lnumber
        let isdata = []
        for (let i = xiao; i < da; i++) {
          if (that.state.data[i] === undefined) {
            break
          } else {
            isdata.push(that.state.data[i])
          }
        }
        console.log(isdata)
        that.setState({
          tabledata: isdata,
        })
      })
    // 用户点击评论分类
    $('.fang_mycomment').on('click', function () {
      $('.fang_mycomment').css({
        color: '#595959',
      })
      $(this).css({
        color: '#ff0000',
      })
    })
  }
  // table表格
  //评价晒单
  onChange = (pageNumber) => {
    console.log('Page: ', pageNumber)
    let da = this.state.page * this.state.Lnumber
    let xiao = (this.state.page - 1) * this.state.Lnumber
    let isdata = []
    for (let i = xiao; i < da; i++) {
      if (this.state.data[i] === undefined) {
        break
      } else {
        isdata.push(this.state.data[i])
      }
    }
    console.log(isdata)
    this.setState({
      tabledata: isdata,
    })
  }
  // 模态框方法
  showDrawer = (data, as) => {
    console.log(as)
    console.log(data)
    this.setState(
      {
        visible: true,
        ModelDate: data,
      },
      () => {
        console.log(this.state)
      }
    )
  }

  onClose = () => {
    this.setState({
      visible: false,
    })
  }
  handleOk = () => {
    console.log(this.state)
    let data = {}
    let img
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false, visible: false })
    }, 3000)
    if (this.state.value !== undefined) {
      data.level = this.state.value
      data.desc = this.state.textar
      data.oid = this.state.ModelDate.id
      data.uid = this.state.uid
      data.gid = this.state.ModelDate.gid
    }
    if (this.state.fileList.length === 0) {
      data.img1 = ''
    }
    if (this.state.fileList.length !== 0) {
      for (let j = 0; j < this.state.fileList.length; j++) {
        if (j === 0) {
          img = this.state.fileList[j].name
        } else {
          img += +'/' + this.state.fileList[j].name
        }
      }
      data.img1 = img
    }
    console.log(data)
    axios
      .post('http://47.100.90.56:8080/banJu/Evaluation/saveToGoods', data)
      .then((response) => {
        console.log(response)
        this.setState({ ModelDate: {}, textar: '', fileList: [] }, () => {
          console.log(this.state)
        })
      })
  }
  // 评分
  handleChange = (value) => {
    this.setState({ value: value })
  }
  // 评论
  textdesc = () => {
    let text = $('#commitorder').val()
    this.setState({
      textar: text,
    })
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
  UPChange = ({ fileList }) => {
    console.log(fileList)
    let arr = []
    for (let i = 0; i < fileList.length; i++) {
      arr.push(fileList[i].name)
    }
    this.setState({ fileList, img1: arr })
  }
  render() {
    const { placement, visible, loading } = this.state
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
                loading={loading}
                onClick={this.handleOk}
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
              订单号 : {this.state.ModelDate.id}
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
                      key={value}
                      defaultValue={value}
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
                      defaultValue={this.state.textar}
                      onBlur={this.textdesc}
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
          <Col span={2} className="fang_FangCenter fang_mycomment fang_myh">
            商品评论
          </Col>
          <Col span={2} className="fang_FangCenter fang_mycomment fang_myh">
            已评论（{this.state.end}）
          </Col>
          {/* <Col
            span={2}
            className="fang_FangCenter fang_mycomment fang_myh"
            onClick={this.writecommit}
          >
            待评论（{this.state.wite}）
          </Col> */}
        </Row>
        {/* 展示区域 */}
        <div>
          <Table
            columns={this.state.columns}
            dataSource={this.state.tabledata}
            bordered
            pagination={false}
          />
          <Divider />
        </div>
        {/* 底部的分页 */}
        <Row className="fang_absolute fang_location">
          <Pagination
            showQuickJumper
            defaultCurrent={this.state.pageNumber}
            defaultPageSize={this.state.Lnumber}
            total={this.state.totle}
            onChange={this.onChange}
          />
        </Row>
      </div>
    )
  }
}

export default Personal_Review_sheet
