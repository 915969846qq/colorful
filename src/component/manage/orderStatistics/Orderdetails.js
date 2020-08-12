import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Steps, Divider, Button, Row, Col, Table } from 'antd'

const { Step } = Steps

class Orderdetails extends Component {
  constructor(props) {
    super(props)
    // console.log('1111')
    // console.log(this.props.location.data)
    // 将数据储存到session里面
    if (this.props.location.data !== undefined) {
      sessionStorage.setItem('data', JSON.stringify(this.props.location.data))
    }
    let mydata = JSON.parse(sessionStorage.getItem('data'))
    mydata.goods.goodsNum = mydata.goodsNum
    mydata.goods.allprice = mydata.goods.goodsNum * mydata.goods.price
    let arr = []
    arr.push(mydata.goods)
    this.state = {
      data: mydata,
      tabledata: arr,
    }
  }
  // 页面销毁时清除session
  componentWillUnmount() {
    sessionStorage.clear()
  }
  // 跳转页面
  Close = () => {
    console.log('1111')
    console.log(this.props.history.push('/manage/OrderStatistics'))
  }
  render() {
    console.log(this.state.data)
    return (
      <div>
        {/* <h1 className="fang_FangCenter fang_paddingb20">订单详情</h1> */}
        <Row className="fang_EBColor fang_paddingt20">
          {/* <Col span={3} className=" fang_font18 fang_marginB20 fang_Tright">
            物流编号 :
          </Col>
          <Col span={5} className="fang_font18 fang_marginB20 fang_padding30">
            {this.state.data.logisticsid}
          </Col> */}
          <Col span={3} className=" fang_font18 fang_marginB20 fang_Tright">
            订单编号 :
          </Col>
          <Col span={5} className="fang_font18 fang_marginB20 fang_padding30">
            {this.state.data.id}
          </Col>
          <Col span={3} className=" fang_font18 fang_marginB20 fang_Tright">
            订单生成时间 :
          </Col>
          <Col span={5} className="fang_font18 fang_marginB20 fang_padding30">
            {this.state.data.createdDate}
          </Col>

          <Col span={3} className=" fang_font18 fang_marginB20 fang_Tright">
            订单商家名称 :
          </Col>
          <Col span={5} className="fang_font18 fang_marginB20 fang_padding30">
            {this.state.data.merchantDetail.companyName}
          </Col>
          {/* <Col span={3} className=" fang_font18 fang_marginB20 fang_Tright">
            货运类型 :
          </Col>
          <Col span={5} className="fang_font18 fang_marginB20 fang_padding30">
            {this.state.data.goodstype}
          </Col>
          <Col span={3} className=" fang_font18 fang_marginB20 fang_Tright">
            物流路线 :
          </Col>
          <Col span={5} className="fang_font18 fang_marginB20 fang_padding30">
            {this.state.data.delivercity}——{this.state.data.receivingcity}
          </Col> */}
        </Row>
        <h3 className="fang_marginT20 fang_marginB20 fang_padding30 fang_Lline">
          订单详情信息
        </h3>
        <div className="fang_lineB">
          <div>
            <Row className="fang_EBColor fang_height30">
              <Col span={12} className="fang_padding20">
                收货信息
              </Col>
              <Col span={12} className="fang_padding20">
                发货信息
              </Col>
            </Row>
            <Row>
              {/* 收货信息 */}
              <Col
                span={12}
                className="fang_lineR fang_lineL fang_paddingt20 fang_paddingb20 "
              >
                <Row className="fang_paddingt10">
                  <Col span={3} offset={1} className="fang_Tright">
                    收货人:
                  </Col>
                  <Col span={18} className="fang_padding20">
                    {this.state.data.consigneeName}
                  </Col>
                </Row>
                <Row className="fang_paddingt10">
                  <Col span={3} offset={1} className="fang_Tright">
                    联系电话:
                  </Col>
                  <Col span={18} className="fang_padding20">
                    {this.state.data.phoneNumber}
                  </Col>
                </Row>
                <Row className="fang_paddingt10">
                  <Col span={3} offset={1} className="fang_Tright">
                    收货地址:
                  </Col>
                  <Col span={18} className="fang_padding20">
                    {this.state.data.newaddress}
                  </Col>
                </Row>
              </Col>
              {/* 发货信息 */}
              <Col
                span={12}
                className="fang_lineR fang_paddingt20 fang_paddingb20"
              >
                <Row className="fang_paddingt10">
                  <Col span={3} offset={1} className="fang_Tright">
                    发货商:
                  </Col>
                  <Col span={18} className="fang_padding20">
                    {this.state.data.merchantDetail.companyName}
                  </Col>
                </Row>
                <Row className="fang_paddingt10">
                  <Col span={3} offset={1} className="fang_Tright">
                    联系方式:
                  </Col>
                  <Col span={18} className="fang_padding20">
                    {this.state.data.merchantDetail.phoneNumber}
                  </Col>
                </Row>
                <Row className="fang_paddingt10">
                  <Col span={3} offset={1} className="fang_Tright">
                    发货地址:
                  </Col>
                  <Col span={18} className="fang_padding20">
                    {this.state.data.merchantDetail.address}
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* 物流信息
            <Row className="fang_EBColor fang_height30">
              <Col span={24} className="fang_padding20">
                物流信息
              </Col>
            </Row>
            物流详情
            <Row className="fang_lineR fang_lineL fang_lineB">
              <Col span={24} className="fang_paddingt20 fang_paddingb20">
                <Row className="fang_paddingt10">
                  <Col span={1} offset={1} className="fang_Tright">
                    物流公司:
                  </Col>
                  <Col span={22} className="fang_padding20">
                    {this.state.data.logisticsname}
                  </Col>
                </Row>
                <Row className="fang_paddingt10">
                  <Col span={1} offset={1} className="fang_Tright">
                    物流单号:
                  </Col>
                  <Col span={22} className="fang_padding20">
                    {this.state.data.logisticsid}
                  </Col>
                </Row>
                <Row className="fang_paddingt10">
                  <Col span={1} offset={1} className="fang_Tright">
                    备注说明:
                  </Col>
                  <Col span={22} className="fang_padding20">
                    {this.state.data.logisticsremarks}
                  </Col>
                </Row>
              </Col>
            </Row> */}
          </div>
          <Row></Row>
          <Row></Row>
        </div>
        <h3 className="fang_marginT20 fang_marginB20 fang_padding30 fang_Lline">
          货物信息
        </h3>
        <Row className="fang_lineR fang_lineL">
          <Col span={24}>
            <Table
              columns={columns}
              dataSource={this.state.tabledata}
              pagination={false}
            />
          </Col>
        </Row>
        <Row className="fang_margint50">
          <Col span={4} offset={10}>
            <Button
              type="primary"
              className="fang_width200"
              onClick={this.Close.bind(this)}
            >
              关闭
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

// 表格表头数据
const columns = [
  {
    title: '商品名称',
    dataIndex: 'name',
  },
  {
    title: '商品单价',
    dataIndex: 'price',
  },
  {
    title: '商品数量',
    dataIndex: 'goodsNum',
  },
  {
    title: '商品总价',
    dataIndex: 'allprice',
  },
]

export default Orderdetails
