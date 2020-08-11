import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { withRouter, Route, Redirect } from 'react-router-dom'
import { secroutes } from '../router/manageRoute'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import './css/manage.css'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
@withRouter
class Manage extends Component {
  // constructor() {
  //   super();
  // }
  go = ({ item, key, keyPath, domEvent }) => {
    //onClik那里虽然看不到传值,但是默认会传过来四个参数,详见官网
    this.props.history.push(key) //编程式导航
  }
  state = {
    collapsed: false,
  }
  onCollapse = (collapsed) => {
    console.log(collapsed)
    this.setState({ collapsed })
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo"></div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="0">
              <img
                className="logo"
                src={require('../assets/images/logo2.png')}
                alt=""
              ></img>
            </Menu.Item>
            <Menu.Item
              key="/manage/AdvertManage"
              onClick={this.go}
              icon={<PieChartOutlined />}
            >
              广告管理
            </Menu.Item>
            <Menu.Item
              key="/manage/OrderStatistics"
              onClick={this.go}
              icon={<DesktopOutlined />}
            >
              订单管理
            </Menu.Item>
            <Menu.Item
              key="/manage/RootManage"
              onClick={this.go}
              icon={<DesktopOutlined />}
            >
              权限管理
            </Menu.Item>
            <Menu.Item
              key="/manage/SearchManage"
              onClick={this.go}
              icon={<DesktopOutlined />}
            >
              订单管理
            </Menu.Item>
            <SubMenu
              key="/manage/UsersStatistics"
              title="用户统计"
              icon={<DesktopOutlined />}
            >
              <Menu.Item
                key="/manage/UsersStatistics"
                onClick={this.go}
                icon={<DesktopOutlined />}
              >
                消费者统计
              </Menu.Item>
              <Menu.Item
                key="/manage/MerchantStatistics"
                onClick={this.go}
                icon={<DesktopOutlined />}
              >
                商户统计
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="/manage/Usersaudit"
              title="用户审核"
              icon={<DesktopOutlined />}
            >
              <Menu.Item
                key="/manage/Usersaudit"
                onClick={this.go}
                icon={<DesktopOutlined />}
              >
                未审核用户
              </Menu.Item>
              <Menu.Item
                key="/manage/Usersaudited"
                onClick={this.go}
                icon={<DesktopOutlined />}
              >
                已审核用户
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} />
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {secroutes.map((item) => {
                return (
                  <Route
                    key={item.path}
                    path={item.path}
                    component={item.component}
                  ></Route>
                )
              })}
              {/* <Redirect from="/manage" to="/manage/AdvertManage"></Redirect> */}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    )
  }
}
export default Manage
// ReactDOM.render(<Manage />, mountNode);
