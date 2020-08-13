import React, { Component } from 'react'
import { Carousel, Row, Col, Table } from 'antd'
import Footer from '../component/commen/footer'
// import "antd/dist/antd.css"
import './css/Decoration_Museum.css'
import zhCN from 'antd/es/locale/zh_CN'
import $ from 'jquery'

//装修馆

export default class Decoration_Museum extends Component {
  constructor() {
    super()
    this.state = {
      selectmenu1: '' /*类型*/,
      selectmenu2: '' /*服务区域*/,
      selectmenu3: '' /*价格*/,
      selectmenu4: '' /*所在区域*/,
      ul: '综合推荐',
      mix: '',
      max: '',
      zhuangxiu: '',
      data: '',
    }
  }

  /*=====================数据渲染请求接口==============================*/

  xuanran = () => {
    fetch('http://172.16.10.32:8080/banJu/service/selectByLike', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        page: 2,
        type: this.state.selectmenu1,
        serviceAddress: this.state.selectmenu2,
        undertakePriceMin: this.state.mix,
        undertakePriceMax: this.state.max,
        companyAddress: this.state.selectmenu4,
        orderList: this.state.ul,
      }),
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        this.setState(
          {
            zhuangxiu: data.data,
          },
          () => {
            let data1 = this.state.zhuangxiu
            let changeData = JSON.parse(
              JSON.stringify(data1).replace(/id/g, 'key')
            ) /*将数组里的id属性名改为key*/
            // console.log(changeData)
            console.log(data1)
            this.setState({
              data: changeData,
            })
          }
        )
      })
      .catch((e) => {
        console.log('数据有误')
      })
  }

  componentDidMount() {
    this.xuanran()
    let that = this
    let mix
    let max
    $('.zhuangxiu .top_table ul li').click(function () {
      $(this).css('background', '#ff0000').css('color', 'white')
      $(this).siblings().css('background', 'none').css('color', '#333')
      that.setState(
        {
          [$(this).parent().attr('id')]: $(this).text(),
        },
        () => {
          let pirce = that.state.selectmenu3
          var reg = RegExp(/上/)
          var reg2 = RegExp(/下/)
          if (pirce.match(reg) || pirce.match(reg2)) {
            if (pirce.substring(0, pirce.length - 3) === 3) {
              mix = pirce.substring(0, pirce.length - 3)
            } else {
              max = pirce.substring(0, pirce.length - 3)
            }
          } else {
            let idx = pirce.indexOf('—')
            mix = pirce.substring(0, idx)
            max = pirce.substring(idx + 2, pirce.length - 1)
            that.setState({
              mix: mix,
              max: max,
            })
          }

          // that.xuanran()
        }
      )
      that.xuanran()
    })
    $('.ul li').click(function () {
      $(this).css('background', '#ff0000').css('color', 'white')
      $(this).siblings().css('background', 'none').css('color', '#333')
      that.setState({
        [$(this).parent().attr('class')]: $(this).text(),
      })
    })

    let xuanxiang = that.state.ul

    console.log(xuanxiang.replace(' v', ''))

    that.xuanran()
  }

  state = {
    selectedRowKeys: [], // Check here to configure the default column
  }
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    this.setState({ selectedRowKeys })
  }

  render() {
    const columns = [
      {
        dataIndex: 'name',
        render: (record, data) => {
          console.log(data)
          return (
            <div>
              {' '}
              <div className="main-left-top">
                <div className="left-IMGe">
                  <a href="1">
                    <img
                      src={require('../assets/images/min-banner1_03.jpg')}
                      alt=""
                    />
                  </a>
                </div>
                <div className="left_text">
                  <h6 className="Company">
                    <a href="1">{data.service.companyName}</a>
                  </h6>
                  <p>营业执照惠5月大型家装团购活动</p>
                  <p className="Comparddss">
                    地址 : <span>青羊区铜丝街8号</span>
                  </p>
                  <p className="allvalue">
                    效果图 :<span> {data.signUpNum}</span>套 &nbsp;&nbsp; 签约 :{' '}
                    <span>{data.companyAddress}</span> 个{' '}
                  </p>
                </div>
                <div className="left-bottun">
                  <p>口碑值 </p>
                  <span>{data.service.praise}</span>
                  <a href="1">立即预约</a>
                </div>
              </div>
              <div className="top20"></div>
            </div>
          )
        },
      },
    ]

    const { selectedRowKeys } = this.state

    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        {
          // key: 'odd',
          // text: 'Select Odd Row',
          onSelect: (changableRowKeys) => {
            let newSelectedRowKeys = []
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false
              }
              return true
            })
            this.setState({ selectedRowKeys: newSelectedRowKeys })
          },
        },
        {
          // key: 'even',
          // text: 'Select Even Row',
          onSelect: (changableRowKeys) => {
            let newSelectedRowKeys = []
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true
              }
              return false
            })
            this.setState({ selectedRowKeys: newSelectedRowKeys })
          },
        },
      ],
    }

    return (
      <div className="zhuangxiu">
        {/*轮播*/}
        <Carousel autoplay>
          <div>
            <h3>
              <img
                src={require('../assets/images/twoimages/Building-banner_02.jpg')}
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                src={require('../assets/images/twoimages/Building-banner_02.jpg')}
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                src={require('../assets/images/twoimages/Building-banner_02.jpg')}
                alt=""
              />
            </h3>
          </div>
        </Carousel>
        <Row>
          <Col span={1}></Col>
          <Col span={22}>
            <div className="main">
              <div className="top_table">
                <h5>类型</h5>
                <ul id="selectmenu1">
                  <li className="btchecker">普通住宅</li>
                  <li className="">小户型</li>
                  <li className="">别墅</li>
                  <li className="">局部装修</li>
                  <li className="">KTV</li>
                  <li className="">商铺餐厅</li>
                  <li className="">酒楼美容</li>
                  <li className="">娱乐场所</li>
                  <li className="">办公室</li>
                  <li className="">更多</li>
                </ul>
                <h5>服务区域</h5>
                <ul id="selectmenu2">
                  <li className="btchecker">都江堰</li>
                  <li className="">彭州</li>
                  <li className="">邛崃</li>
                  <li className="">崇州</li>
                  <li className="">金堂县</li>
                  <li className="">郫县</li>
                  <li className="">新津县</li>
                  <li className="">双流县</li>
                  <li className="">龙泉驿区</li>
                  <li className="">更多</li>
                </ul>
                <h5>承接价位</h5>
                <ul id="selectmenu3">
                  <li className="btchecker">3万以下</li>
                  <li className="">3——5万</li>
                  <li className="">5——8万</li>
                  <li className="">8——12万</li>
                  <li className="">12——30万</li>
                  <li className="">30——100万</li>
                  <li className="">100万以上</li>
                </ul>
                <h5>所在区域</h5>
                <ul id="selectmenu4">
                  <li className="btchecker">都江堰</li>
                  <li className="">彭州</li>
                  <li className="">邛崃</li>
                  <li className="">崇州</li>
                  <li className="">金堂县</li>
                  <li className="">郫县</li>
                  <li className="">新津县</li>
                  <li className="">双流县</li>
                  <li className="">龙泉驿区</li>
                  <li className="">更多</li>
                </ul>
              </div>
            </div>
            <div className="Today_recommended ">
              <ul className="ul">
                <li className="btchecker">综合推荐</li>
                <li>口碑值 v</li>
                <li>设计方案数 v</li>
                <li>施工案例数 v</li>
              </ul>

              <div className="main-left">
                <Table
                  rowSelection={rowSelection}
                  columns={columns}
                  dataSource={this.state.data}
                  bordered="true"
                  border="1px solid black"
                  tableLayout="fixed"
                  locale={zhCN}
                  pagination={{
                    showQuickJumper: true,
                    hideOnSinglePage: false,
                    pageSize: 2,
                  }}
                />
              </div>

              <div className="main-right">
                <div className="main-right-one">
                  <h4>体验科乐福服务</h4>
                  <p>
                    已有 <span>5326</span> 位用户选择齐家装修
                  </p>
                  <p>
                    今日已有 <span>3584</span> 用户预约装修
                  </p>
                  <form className="text">
                    <input type="text" placeholder="您的名字" />
                  </form>
                  <form className="tel">
                    <input type="tel" placeholder="您的电话" maxLength="18" />
                  </form>
                  <form className="city">
                    <input type="text" placeholder="输入您所在的城市" />
                  </form>
                  <form>
                    <input type="checkbox" value="" />
                    &nbsp; 我已阅读并同意科乐福的用户协议
                  </form>
                  <a href="1" className="botton">
                    免费获取
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col span={1}></Col>
        </Row>
        {/*页脚*/}
        <Footer />
      </div>
    )
  }
}
