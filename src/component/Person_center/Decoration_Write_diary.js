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
// 下拉框
import { Select } from 'antd'
// 输入框
import { Input, Tooltip } from 'antd'
// jquery
import $ from 'jquery'
import Axios from 'axios'
// 引入城市
import '../../util/chajian/citychenming'
const { Step } = Steps
const { Option } = Select
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
      cities: [],
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
      // 装修风格
      style: '',
      styles: ['现代', '古典', '洋房'],
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
    console.log(getCity(this.state.province, value))
    this.setState({
      counties: getCounty(this.state.province, value),
      county: getCounty(this.state.province, value)[0],
    })
  }
  handleChange = (value) => {
    console.log(value)
    // console.log(getCity(value)[0])
    // console.log(getCounty(value, getCity(value)[0]))
    this.setState({
      province: value,
      cities: getCity(value),
      city: getCity(value)[0],
      counties: getCounty(value, getCity(value)[0]),
      county: getCounty(value, getCity(value)[0])[0],
    })
  }
  // 新的城市
  countyChange = (value) => {
    this.setState({
      county: value,
    })
  }
  // 房屋面积
  houseArea = (e) => {
    console.log(e.target.value)
    this.setState({
      houseArea: e.target.value,
    })
  }
  // 日志名
  diaryname = (e) => {
    this.setState({
      diaryname: e.target.value,
    })
  }
  // 小区
  decorationarea = (e) => {
    this.setState({
      decorationarea: e.target.value,
    })
  }
  // 公司
  decorationcompany = (e) => {
    this.setState({
      decorationcompany: e.target.value,
    })
  }
  // 风格
  mystyle = (value) => {
    this.setState({
      style: value,
    })
  }
  render() {
    return (
      <div className="fang_Width1200">
        <form action="/WriteDiary.do" method="post">
          <h2 className="fang_RBcolor fang_fontW fang_marginT20 fang_font18">
            房屋信息
          </h2>
          <Row>
            {/* 日志名 */}
            <Col span={6}>
              <span className="fang_height30">日志名</span>
              <br />
              <Input maxLength={300} onBlur={this.diaryname} />
            </Col>
            {/* 装修小区 */}
            <Col span={6} offset={2}>
              <span className="fang_height30">装修小区</span>
              <br />
              <Input
                suffix="小区"
                maxLength={300}
                onBlur={this.decorationarea}
              />
            </Col>
            {/* 装修公司 */}
            <Col span={6} offset={2}>
              <span className="fang_height30">装修公司</span>
              <br />
              <Input
                suffix="公司"
                maxLength={310}
                onBlur={this.decorationcompany}
              />
            </Col>
            {/* 装修风格 */}
            <Col span={8} className="fang_paddingt20">
              <span className="fang_height30">装修风格</span>
              <br />
              <Select
                style={{ width: 300 }}
                onChange={this.mystyle}
                value={this.state.style}
              >
                {this.state.styles.map((style, index) => (
                  <Option value={style} key={index}>
                    {style}
                  </Option>
                ))}
              </Select>
            </Col>
            {/* 房屋面积 */}
            <Col span={6} className="fang_paddingt20">
              <span className="fang_height30">房屋面积</span>
              <br />
              <Input suffix="平米" maxLength={280} onBlur={this.houseArea} />
            </Col>
            {/* 所在城市 */}
            <Col span={8} offset={2} className="fang_paddingt20">
              <span className="fang_height30">装修地点</span>
              <br />
              <div className="city">
                <Select
                  style={{ width: 100 }}
                  onChange={this.handleChange}
                  value={this.state.province}
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
          </Row>
          <h2 className="fang_RBcolor fang_fontW fang_marginT20 fang_font18">
            写日记
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
    let ruie = JSON.parse(sessionStorage.getItem('user'))
    let mydata = {
      uid: ruie.id,
      name: this.state.diaryname,
      content: this.state.textarea,
      community: this.state.decorationarea,
      decorationCompany: this.state.decorationcompany,
      style: this.state.style,
      city: this.state.city,
      builtArea: this.state.houseArea,
    }
    Axios.post('http://47.100.90.56:8080/banJu/Diary/saveDiary', mydata).then(
      (response) => {
        console.log(response)
      }
    )
  }
}
