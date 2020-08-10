import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Steps, Divider, Button, Row, Col, Table } from 'antd'

const { Step } = Steps

class Orderdetails extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    // console.log('1111')
    // console.log(this.props.location.data)
    // 将数据储存到session里面
    if (this.props.location.data !== undefined) {
      sessionStorage.setItem('data', JSON.stringify(this.props.location.data))
    }
    let mydata = JSON.parse(sessionStorage.getItem('data'))
    console.log(mydata)
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
    return (
      <div>
        <h1 className="fang_FangCenter fang_paddingb20">订单详情</h1>
        <Row className="fang_EBColor fang_paddingt20">
          <Col span={3} className=" fang_font18 fang_marginB20 fang_Tright">
            物流编号 :
          </Col>
          <Col span={5} className="fang_font18 fang_marginB20 fang_padding30">
            123
          </Col>
          <Col span={3} className=" fang_font18 fang_marginB20 fang_Tright">
            订单编号 :
          </Col>
          <Col span={5} className="fang_font18 fang_marginB20 fang_padding30">
            123
          </Col>
          <Col span={3} className=" fang_font18 fang_marginB20 fang_Tright">
            订单生成时间 :
          </Col>
          <Col span={5} className="fang_font18 fang_marginB20 fang_padding30">
            123
          </Col>

          <Col span={3} className=" fang_font18 fang_marginB20 fang_Tright">
            订单商家名称 :
          </Col>
          <Col span={5} className="fang_font18 fang_marginB20 fang_padding30">
            123
          </Col>
          <Col span={3} className=" fang_font18 fang_marginB20 fang_Tright">
            货运类型 :
          </Col>
          <Col span={5} className="fang_font18 fang_marginB20 fang_padding30">
            123
          </Col>
          <Col span={3} className=" fang_font18 fang_marginB20 fang_Tright">
            物流路线 :
          </Col>
          <Col span={5} className="fang_font18 fang_marginB20 fang_padding30">
            123
          </Col>
        </Row>
        <h3 className="fang_marginT20 fang_marginB20 fang_padding30 fang_Lline">
          订单详情信息
        </h3>
        <div>
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
                    联系人:
                  </Col>
                  <Col span={18} className="fang_padding20">
                    123
                  </Col>
                </Row>
                <Row className="fang_paddingt10">
                  <Col span={3} offset={1} className="fang_Tright">
                    联系人:
                  </Col>
                  <Col span={18} className="fang_padding20">
                    123
                  </Col>
                </Row>
                <Row className="fang_paddingt10">
                  <Col span={3} offset={1} className="fang_Tright">
                    联系人:
                  </Col>
                  <Col span={18} className="fang_padding20">
                    123
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
                    联系人:
                  </Col>
                  <Col span={18} className="fang_padding20">
                    123
                  </Col>
                </Row>
                <Row className="fang_paddingt10">
                  <Col span={3} offset={1} className="fang_Tright">
                    联系人:
                  </Col>
                  <Col span={18} className="fang_padding20">
                    123
                  </Col>
                </Row>
                <Row className="fang_paddingt10">
                  <Col span={3} offset={1} className="fang_Tright">
                    联系人:
                  </Col>
                  <Col span={18} className="fang_padding20">
                    123
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* 物流信息 */}
            <Row className="fang_EBColor fang_height30">
              <Col span={24} className="fang_padding20">
                物流信息
              </Col>
            </Row>
            {/* 物流详情 */}
            <Row className="fang_lineR fang_lineL">
              <Col span={24} className="fang_paddingt20 fang_paddingb20">
                <Row className="fang_paddingt10">
                  <Col span={1} offset={1} className="fang_Tright">
                    联系人:
                  </Col>
                  <Col span={22} className="fang_padding20">
                    123
                  </Col>
                </Row>
                <Row className="fang_paddingt10">
                  <Col span={1} offset={1} className="fang_Tright">
                    联系人:
                  </Col>
                  <Col span={22} className="fang_padding20">
                    123
                  </Col>
                </Row>
                <Row className="fang_paddingt10">
                  <Col span={1} offset={1} className="fang_Tright">
                    联系人:
                  </Col>
                  <Col span={22} className="fang_padding20">
                    123
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* 货物轨迹 */}
            <Row className="fang_EBColor fang_height30">
              <Col span={24} className="fang_padding20">
                货物轨迹
              </Col>
            </Row>
            {/* 货物轨迹详情 */}
            <Row className="fang_lineR fang_lineL fang_lineB">
              <Col
                span={23}
                offset={1}
                className="fang_paddingt20 fang_paddingb20"
              >
                <Steps progressDot current={1} direction="vertical">
                  <Step
                    title="Finished"
                    description="This is a description. This is a description."
                  />
                  <Step
                    title="Finished"
                    description="This is a description. This is a description."
                  />
                  <Step
                    title="In Progress"
                    description="This is a description. This is a description."
                  />
                  <Step title="Waiting" description="This is a description." />
                  <Step title="Waiting" description="This is a description." />
                </Steps>
              </Col>
            </Row>
          </div>
          <Row></Row>
          <Row></Row>
        </div>
        <h3 className="fang_marginT20 fang_marginB20 fang_padding30 fang_Lline">
          货物信息
        </h3>
        <Row className="fang_lineR fang_lineL">
          <Col span={24}>
            <Table columns={columns} dataSource={data} pagination={false} />
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
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
]
// 表格填充数据
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
]
export default Orderdetails
