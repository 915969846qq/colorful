import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import {
  Input,
  DatePicker,
  Select,
  Space,
  Button,
  Radio,
  Tooltip,
  Table,
  Pagination,
} from 'antd'
import axios from 'axios'
import $ from 'jquery'
import { AudioOutlined, SearchOutlined } from '@ant-design/icons'
const { Option } = Select
const { RangePicker } = DatePicker
const { Search } = Input
const { Header, Footer, Content } = Layout
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
)
function ChoiceChange(value) {
  console.log(`selected ${value}`)
  console.log(value)
}

function ChoiceBlur() {
  console.log('blur')
}

function ChoiceFocus() {
  console.log('focus')
}

function ChoiceSearch(val) {
  console.log('search:', val)
}
// table表格
const columns1 = [
  {
    title: '订单编号',
    dataIndex: 'goods_name',
  },
  {
    title: '订单地址',
    dataIndex: 'goods_remarks',
  },
  {
    title: '订单电话',
    dataIndex: 'goods_type',
  },
  {
    title: '订单人姓名',
    dataIndex: 'order_remarks',
  },
  {
    title: '订单操作',
    dataIndex: 'english',
    key: 'option',
    render: (text, record) => (
      <div>
        <Link
          className="edit-data "
          to={{
            pathname: '/manage/Orderdetails',
            data: record,
          }}
        >
          查看详情
        </Link>
        　　
        <span className="delete-data fang_bhov">取消订单</span>
      </div>
    ),
  },
]
// 表格二
const columns2 = [
  {
    title: '商店名称',
    dataIndex: 'goods_name',
  },
  {
    title: '商店地址',
    dataIndex: 'goods_remarks',
  },
  {
    title: '商店类型',
    dataIndex: 'goods_type',
  },
  {
    title: '商店销量',
    dataIndex: 'order_remarks',
  },
  {
    title: '订单操作',
    dataIndex: 'english',
    key: 'option',
    render: (text, record) => (
      <div>
        <Link
          className="edit-data "
          to={{
            pathname: '/manage/Orderdetails',
            data: record,
          }}
        >
          查看详情
        </Link>
        　　
        <span className="delete-data fang_bhov">取消订单</span>
      </div>
    ),
  },
]
function TableChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra)
}
class orderStatistics extends Component {
  constructor(props) {
    super(props)
    // console.log(props)
    this.state = {
      pageNumber: 1,
      page: 1,
      Lnumber: 5,
      totle: 1,
      // 选择日期
      size: 'default',
      // 展示列表
      columns: [],
      // 是否展示头部
      myshow: false,
    }
    // page——当前页数，pageNumber——总共的页数，totle——总数据条数，Lnumber——每页展示的条数
    // 发送请求
    this.mydata = {}
    axios
      .post('http://172.16.10.10:8080/banJu/order2/findAll')
      .then((response) => {
        console.log(response.data.data)
        let mydata = response.data.data
        mydata.shang = '用户'
        for (let i = 0; i < response.data.data.length; i++) {
          response.data.data[i].key = response.data.data[i].goods_type
        }
        this.setState(
          { data: mydata, columns: columns2, shang: '用户' },
          () => {
            // 判断是否展示头部
            if (this.state.shang === '用户') {
              this.setState({
                myshow: true,
              })
            }
            // 总共的页数
            let getnumber = Math.ceil(
              this.state.data.length / this.state.Lnumber
            )
            // 总数据条数
            let getlength = this.state.data.length
            this.setState({ pageNumber: getnumber, totle: getlength }, () => {
              console.log(this.state.data)
            })
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
    // 用户点击查看详情时
    $('.details').on('click', function () {
      // console.log($(this))
    })
    // 用户点击确定时间
  }
  // 获取选择行的内容
  selectRow = (record) => {
    console.log(record)
  }
  // 选择搜索
  Search = (value, option) => {
    console.log(value)
    let arr = []
    console.log(this.state.data)
    this.state.data.map((item, index) => {
      if (parseInt(value) === item.id) {
        arr.push(item)
      }
      return arr
    })
    console.log(arr)
    this.setState(
      {
        data: arr,
      },
      () => {
        console.log(this.state.data)
        // 总共的页数
        let getnumber = Math.ceil(this.state.data.length / this.state.Lnumber)
        // 总数据条数
        let getlength = this.state.data.length
        this.setState({ pageNumber: getnumber, totle: getlength }, () => {
          console.log(this.state.data)
        })
      }
    )
  }
  // 日期查询
  onOpenChange = (value) => {
    console.log('111')
    console.log(value)
    let arr = []
    for (let i = 0; i < value.length; i++) {
      var d = value[i]._d
      let youWant =
        d.getFullYear() +
        '-' +
        (d.getMonth() + 1) +
        '-' +
        d.getDate() +
        ' ' +
        d.getHours() +
        ':' +
        d.getMinutes() +
        ':' +
        d.getSeconds()
      arr.push(youWant)
    }

    console.log(arr)
  }
  render() {
    // 选择日期
    const { size } = this.state
    return (
      <div className=" fang_height100">
        <Layout>
          {/* <h1 className="fang_FangCenter fang_paddingb20">订单管理</h1> */}
          {this.state.myshow ? (
            <Header>
              {/* 搜索选择 */}
              <Row className="fang_GBcolor">
                <Col span={6} className="fang_FangCenter">
                  <label className="fang_marginR20 fang_fontX">订单号 : </label>
                  <Search
                    placeholder="请输入订单号"
                    className="fang_width200 fang_varMiddle"
                    onSearch={this.Search}
                    enterButton
                  />
                </Col>
                <Col span={8} className="fang_FangCenter">
                  <label className="fang_marginR20 fang_fontX">时间 : </label>
                  <Space direction="vertical" size={12}>
                    <RangePicker
                      size={size}
                      onChange={this.onOpenChange}
                      placeholder={['起始时间', '结束时间']}
                    />
                  </Space>
                </Col>
                <Col span={6} className="fang_FangCenter">
                  <label className="fang_marginR20 fang_fontX">
                    订单状态 :{' '}
                  </label>
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    className="fang_TLeft"
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={ChoiceChange}
                    onFocus={ChoiceFocus}
                    onBlur={ChoiceBlur}
                    onSearch={ChoiceSearch}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="以下单">以下单</Option>
                    <Option value="代发货">代发货</Option>
                    <Option value="以发货">以发货</Option>
                    <Option value="已收货">已收货</Option>
                    <Option value="订单取消">订单取消</Option>
                  </Select>
                </Col>
                <Col span={3} className="fang_padding45">
                  <Button type="primary" icon={<SearchOutlined />}>
                    查询热销商铺
                  </Button>
                </Col>
                {/* <Col span={6} className="fang_FangCenter">
                <Button type="primary" icon={<SearchOutlined />}>
                  查询
                </Button>
              </Col> */}
              </Row>
            </Header>
          ) : null}
          <Content className="fang_marginT20">
            <Table
              columns={this.state.columns}
              dataSource={this.state.data}
              onChange={TableChange}
              onRow={(record) => ({
                onClick: () => {
                  this.selectRow(record)
                },
              })}
              pagination={{
                defaultCurrent: this.state.pageNumber,
                defaultPageSize: this.state.Lnumber,
                total: this.state.totle,
                className: 'fang_FangCenter fang_margint50',
              }}
            />
          </Content>
        </Layout>
      </div>
    )
  }
}

export default orderStatistics
