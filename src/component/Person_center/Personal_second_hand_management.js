import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd'
import { withRouter } from 'react-router-dom'
// 模态框
import { Modal, Button, Space } from 'antd'
import { FormOutlined } from '@ant-design/icons'
// 下拉框
import { Select } from 'antd'
// input输入框
// 上传图片
import { Upload } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Input, Tooltip } from 'antd'
import { Pagination } from 'antd'
import axios from 'axios'
import $ from 'jquery'
import '../../assets/iconfont/Fang_iconfont/iconfont.css'
import '../../util/chajian/citychenming'
// 上传图片
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}
// 下拉框
const { Option } = Select
// 文本域
const { TextArea } = Input
//我的二手管理
function onChange(pageNumber) {
  console.log('Page: ', pageNumber)
}

// 列表展示内容
function SecondHand(props) {
  const that = props.loc
  // console.log(that)
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
      <Row className="fang_Button50 fang_minhei150" key={item.id}>
        <Col span={22} offset={1} className="fang_Border">
          <Row className="fang_height30">
            <Col span={12} className="fang_padding20">
              信息号:{item.cid}
            </Col>
            <Col span={12} className="fang_Tright fang_paddingr20">
              是否同步:分享至微信/手机QQ
            </Col>
          </Row>
          <Row className="fang_marginT20 fang_marginB20">
            <Col span={12} className="fang_rline fang_padding20">
              <Row>
                <Col span={6} className="fang_kuang100">
                  <img
                    src={require('../../assets/images/Decoration_img/Sellers_1.jpg')}
                    className="fang_kuang100"
                    alt=""
                  />
                </Col>
                <Col span={17}>
                  <div className="fang_height30">
                    商品名称:<span className="fang_marginL20">{item.name}</span>
                  </div>
                  <div className="fang_height30">
                    上架时间:
                    <span className="fang_marginL20">{item.createdDate}</span>
                  </div>
                  <div className="fang_height30">
                    商品类型:
                    <span className="fang_marginL20">{item.description}</span>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={12} className="fang_padding20">
              <Row>
                <Col span={20} className="fang_kuang100" offset={1}>
                  <div className="fang_height30">
                    价格:<span className="fang_marginL20">{item.price}</span>
                  </div>
                  <div className="fang_height30">
                    新旧:
                    <span className="fang_marginL20">{item.newOld}</span>
                  </div>
                  <div className="fang_height30">
                    地址:
                    <span className="fang_marginL20">
                      {item.furtherAddress}
                    </span>
                  </div>
                </Col>
                <Col span={2}>
                  <div
                    className="fang_height30 fang_FangCenter fang_myh"
                    onClick={that.showModal.bind(that, item)}
                  >
                    <Space>修改</Space>
                  </div>
                  <div className="fang_height30 fang_FangCenter fang_myh">
                    刷新
                  </div>
                  <div
                    className="fang_height30 fang_FangCenter fang_myh"
                    onClick={Delete.bind(that, item)}
                  >
                    下架
                  </div>
                </Col>
              </Row>
            </Col>
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
// 下架
function Delete(data, myda) {
  console.log(this)
  console.log(data)
  axios
    .post('http://47.100.90.56:8080/banJu/SecondHandGoods/deleteById', {
      id: data.id,
    })
    .then((response) => {
      console.log(response)
    })
  // 发送请求删除当前上架商品
}
class Personal_second_hand_management extends Component {
  // 页面创建时发送请求获取二手管理的内容
  constructor(props) {
    super(props)
    // console.log(props)
    this.state = {
      data: [],
      // 图片上传
      previewVisible: false,
      previewImage: '',
      previewTitle: '',
      fileList: [],
      // 车门还是
      province: '',
      city: '',
      county: '',
      provinces: [
        '四川',
        '安徽',
        '澳门',
        '北京',
        '福建',
        '甘肃',
        '广东',
        '广西',
        '贵州',
        '海南',
        '河北',
        '河南',
        '黑龙江',
        '湖北',
        '湖南',
        '吉林',
        '江苏',
        '江西',
        '辽宁',
        '内蒙古',
        '宁夏',
        '青海',
        '山东',
        '山西',
        '陕西',
        '上海',
        '台湾',
        '天津',
        '西藏',
        '香港',
        '新疆',
        '云南',
        '浙江',
        '重庆',
        '其他',
      ],
      cities: ['成都'],
      counties: [
        '武侯',
        '成华',
        '金牛',
        '青羊',
        '锦江',
        '崇州',
        '大邑',
        '都江堰',
        '金堂',
        '彭州',
        '郫县',
        '蒲江',
        '邛崃',
        '双流',
        '新津',
      ],
      // 模态框
      visible: false,
      modeldata: {},
      // 分页
      pageNumber: 1,
      page: 1,
      Lnumber: 2,
      totle: 1,
      // 修改时加载状态
      loading: false,
      visible: false,
      // 修改参数
      imgsrc: [],
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
      isdata.id = ruie.id
      axios
        .post('http://47.100.90.56:8080/banJu/secondHand/findByUid', isdata)
        .then((response) => {
          let mydata = response.data.data
          console.log(response.data.data)
          // 总共的页数
          let getnumber = Math.ceil(
            response.data.data.secondHandGoodsList.length / this.state.Lnumber
          )
          // 总数据条数
          let getlength = response.data.data.secondHandGoodsList.length

          this.setState(
            {
              data: mydata,
              pageNumber: getnumber,
              totle: getlength,
            },
            () => {
              console.log(this.state)
            }
          )
        })
    }
  }
  // 初始化================
  componentDidMount() {
    this.setState({
      province: '四川',
      cities: getCity('四川'),
      city: getCity('四川')[0],
      counties: getCounty('四川', getCity('四川')[0]),
      county: getCounty('四川', getCity('四川')[0])[0],
    })
  }

  // =======================================================
  cityChange = (value) => {
    console.log(value)
    console.log(getCounty(this.state.province, value))
    this.setState({
      counties: getCounty(this.state.province, value),
      county: getCounty(this.state.province, value)[0],
    })
  }
  handleChange = (value) => {
    console.log(value)
    console.log(getCity(value)[0])
    this.setState({
      province: value,
      cities: getCity(value),
      city: getCity(value)[0],
    })
  }

  // 图片上传
  UPCancel = () => this.setState({ previewVisible: false })
  UPPreview = async (file) => {
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
    this.setState({ fileList, imgsrc: arr })
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
  // 模态框
  showModal = (data, as) => {
    let str = data.address.split('-')
    this.setState(
      {
        visible: true,
        modeldata: data,
        province: str[0],
        city: str[1],
        county: str[2],
      },
      () => {
        console.log(this.state.modeldata)
      }
    )
  }
  handleOk = () => {
    console.log(this.state)
    // 发送请求修改数据
    let data = {}
    let img = ''
    let unmber = this.state.imgsrc.length
    let mystr = this.state.modeldata.address.split('-')

    if (this.state.newNew !== undefined) {
      data.newOld = this.state.newNew
    }
    // if (this.state.newOld !== undefined) {
    //   data.newOld = this.state.newNew
    // }
    if (this.state.newdescription !== undefined) {
      data.description = this.state.newdescription
    }
    if (this.state.newprice !== undefined) {
      data.price = this.state.newprice
    }
    if (this.state.newtitle !== undefined) {
      data.title = this.state.newtitle
    }
    if (this.state.newtype !== undefined) {
      data.name = this.state.newtype
    }
    if (this.state.imgsrc !== undefined) {
      console.log(this.state.imgsrc.length)

      for (let k = 0; k < unmber; k++) {
        if (k === 0) {
          img = this.state.imgsrc[k]
        } else {
          img += +'/' + this.state.imgsrc[k]
        }
      }
      data.img = img
    }
    if (
      this.state.province !== mystr[0] &&
      this.state.city !== mystr[1] &&
      this.state.county !== mystr[2]
    ) {
      data.address =
        this.state.province + '-' + this.state.city + '-' + this.state.county
    }
    if (this.state.modeldata.id !== undefined) {
      data.id = this.state.modeldata.id
    }
    // 查看
    console.log(data)

    axios
      .post(
        'http://47.100.90.56:8080/banJu/SecondHandGoods/updateSecondHandGoods',
        data
      )
      .then((response) => {
        console.log(response)
      })
    // 显示加载并延迟关闭时间
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false, visible: false, modeldata: {} }, () => {
        window.location.reload()
      })
    }, 3000)
  }

  handleCancel = () => {
    this.setState({ visible: false })
  }
  //新旧的值
  choiceChange = (value) => {
    this.setState({
      newNew: value,
    })
  }
  // 商品类型
  typeChange = (value) => {
    this.setState({
      newtype: value,
    })
  }
  // 新的价格
  newprice = (e) => {
    this.setState({
      newprice: e.target.value,
    })
  }
  // 新的标题
  newtitle = (e) => {
    this.setState({
      newtitle: e.target.value,
    })
  }
  // 新的城市
  countyChange = (value) => {
    this.setState({
      county: value,
    })
  }
  // 新的描述
  newdescription = (e) => {
    console.log(e.target.value)
    this.setState({
      newdescription: e.target.value,
    })
  }
  // 发布二手
  pushsecond = () => {
    window.location.href = '/Secondhand_Market'
  }
  render() {
    const { visible, loading } = this.state
    // 图片上传
    const { previewVisible, previewImage, fileList, previewTitle } = this.state
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    return (
      <div className="fang_relative fang_height100">
        {/* 模态框 */}
        <Modal
          title="二手管理"
          width={800}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              退出
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={this.handleOk}
            >
              修改
            </Button>,
          ]}
        >
          <div>
            <Row>
              <Col span={11}>
                <span>商品类型</span>
                <br />
                <Select
                  defaultValue={this.state.modeldata.name}
                  key={this.state.modeldata.name}
                  style={{ width: 340 }}
                  onChange={this.typeChange}
                >
                  <Option value="床">床</Option>
                  <Option value="沙发">沙发</Option>
                  <Option value="桌子">桌子</Option>
                  <Option value="椅子">椅子</Option>
                </Select>
              </Col>
              <Col span={12} offset={1}>
                <span>商品价格</span>
                <Input
                  prefix="￥"
                  suffix="RMB"
                  maxLength={280}
                  defaultValue={this.state.modeldata.price}
                  key={this.state.modeldata.price}
                  onBlur={this.newprice}
                />
              </Col>
            </Row>
            <Row className="fang_marginT20">
              <Col span={11}>
                <span>新旧程度</span>
                <br />
                <Select
                  defaultValue={this.state.modeldata.newOld}
                  key={this.state.modeldata.newOld}
                  style={{ width: 340 }}
                  onChange={this.choiceChange}
                >
                  <Option value="全新">全新</Option>
                  <Option value="八成新">八成新</Option>
                  <Option value="五成新">五成新</Option>
                  <Option value="三成新">三成新</Option>
                </Select>
              </Col>
              <Col span={12} offset={1}>
                <span>标题</span>
                <Input
                  maxLength={280}
                  defaultValue={this.state.modeldata.title}
                  key={this.state.modeldata.title}
                  onBlur={this.newtitle}
                />
              </Col>
            </Row>
            <Row className="fang_marginT20">
              <Col span={11}>
                <span>交易地点</span>
                <br />
                <div className="city">
                  <Select
                    style={{ width: 100 }}
                    onChange={this.handleChange}
                    value={this.state.provinces[0]}
                  >
                    {this.state.provinces.map((province, index) => (
                      <Option value={province} key={index}>
                        {province}
                      </Option>
                    ))}
                  </Select>
                  <Select
                    value={this.state.city}
                    style={{ width: 100 }}
                    onChange={this.cityChange}
                    className="fang_marginL20"
                  >
                    {this.state.cities.map((city, index) => (
                      <Option value={city} key={index}>
                        {city}
                      </Option>
                    ))}
                  </Select>
                  <Select
                    value={this.state.county}
                    style={{ width: 100 }}
                    onChange={this.countyChange}
                    className="fang_marginL20"
                  >
                    {this.state.counties.map((county, index) => (
                      <option value={county} key={index}>
                        {county}
                      </option>
                    ))}
                  </Select>
                </div>
              </Col>
              <Col span={12} offset={1}>
                <span>地址</span>
                <Input
                  maxLength={280}
                  value={this.state.modeldata.furtherAddress}
                  disabled
                />
              </Col>
            </Row>
            {/* 商品描述 */}
            <Row className="fang_marginT20">
              <Col span={24}>
                <span>商品描述</span>
                <br />
                <TextArea
                  rows={5}
                  defaultValue={this.state.modeldata.description}
                  key={this.state.modeldata.description}
                  onBlur={this.newdescription}
                ></TextArea>
              </Col>
            </Row>
            {/* 上传图片 */}
            <Row className="fang_marginT20">
              <Col span={24}>
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={this.UPPreview}
                  onChange={this.UPChange}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Modal
                  visible={previewVisible}
                  title={previewTitle}
                  footer={null}
                  onCancel={this.UPCancel}
                >
                  <img
                    alt="example"
                    style={{ width: '100%' }}
                    src={previewImage}
                  />
                </Modal>
              </Col>
            </Row>
          </div>
        </Modal>

        <h3 className="fang_height30">我的二手管理</h3>
        <Row className="fang_marginT20 fang_Button50">
          <Col span={3} offset={1}>
            <img
              src={require('../../assets/images/Decoration_img/Sellers_1.jpg')}
              className="fang_portrait80"
              alt=""
            />
          </Col>
          <Col span={20}>
            <h3>
              用户名
              <span className="fang_marginL20">{this.state.data.name}</span>
            </h3>
            <button className="fang_width200 fang_height30 fang_border fang_wcolor fang_RBColor fang_myhover fang_noborder">
              <span className="iconfont icon-dianhua fang_marginR20"></span>
              <span className="fang_marginL20">
                {this.state.data.phoneNumber}
              </span>
            </button>
            <button
              className="fang_marginL20 fang_width200 fang_height30 fang_border fang_wcolor fang_BbColor fang_myhover fang_noborder"
              type="primary"
            >
              <span
                className="iconfont icon-jia fang_marginR20"
                onClick={this.pushsecond}
              ></span>
              发布二手商品
            </button>
          </Col>
        </Row>
        <h5>最近发布信息</h5>
        <Divider />
        {/* 展示列表 */}
        <div className="fang_relative">
          <SecondHand mydata={this.state.data.secondHandGoodsList} loc={this} />
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

export default withRouter(Personal_second_hand_management)
