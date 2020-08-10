import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Layout } from 'antd'

import { Input } from 'antd'
import { AudioOutlined } from '@ant-design/icons'

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
export default class orderStatistics extends Component {
  render() {
    return (
      <div className=" fang_height100">
        <h1>订单管理</h1>
        <Layout>
          <Header>
            {/* 搜索选择 */}
            <Row>
              <Col span={6} className="fang_FangCenter">
                <label className="fang_marginR20 fang_fontX">订单号 : </label>
                <Search
                  placeholder="请输入订单号"
                  className="fang_width200"
                  onSearch={(value) => console.log(value)}
                  enterButton
                />
                {/* <input
                  type="text"
                  placeholder="请输入订单号"
                  className="fang_height30 fang_width200 fang_padding20"
                /> */}
              </Col>
            </Row>
          </Header>
          <Content>222</Content>
          <Footer>333</Footer>
        </Layout>
      </div>
    )
  }
}
