import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { withRouter, Route, Redirect, Link } from 'react-router-dom'
import { secroutes } from '../router/manageRoute'
import $ from 'jquery'
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
  constructor() {
    super()
    this.state = {
      leftMenu: [],
    }
  }

  // componentDidMount() {
  // if (this.props.location.state.name==0){
  //   console.log(111111)
  //   $("#ds").css("display","none")
  // }

  // }
  xuaran = (menuList) => {
    let a
    if (this.props.location.state.power == 0) {
      a = 0
    } else if (this.props.location.state.power == 1) {
      a = 1
    }
    let menulist = menuList[a]
    let MenuList = this.bindMenu(menulist)
    this.setState({
      leftMenu: MenuList,
    })
  }

  // 获取数据动态生成左边栏菜单
  bindMenu(menulist) {
    // console.log(this)
    // console.log(this.props.user)
    // console.log(menmenulist[a]ulist)
    console.log(menulist)
    let MenuList = menulist.map((item) => {
      if (item.menuChilds.length === 0) {
        //没有子菜单
        return (
          <Menu.Item
            key={item.componentPath}
            onClick={this.go}
            icon={<DesktopOutlined />}
          >
            {item.menuName}
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu
            key={item.componentPath}
            icon={<UserOutlined />}
            title={item.menuName}
          >
            {this.bindMenu(item.menuChilds)}
          </SubMenu>
        )
      }
    })
    return MenuList
  }
  componentDidMount() {
    // console.log()
    let menulist = [
      [
        {
          menuId: 2,
          menuName: '广告管理',
          menuUrl: '/manage/AdvertManage',
          pathname: 'userlist' /*===模块的名称==*/,
          componentPath: '/manage/AdvertManage', //---
          menuImgClass: 'el-icon-s-custom',
          menuState: '0',
          menuChilds: [], //---------------没有子菜单
        },

        {
          menuId: 7,
          menuName: '角色列表',
          menuUrl: '/manage/OrderStatistics',
          pathname: 'OrderStatistics',
          componentPath: '/manage/OrderStatistics',
          menuImgClass: '',
          menuState: '0',
          menuChilds: [],
        },
        {
          menuId: 1,
          menuName: '权限管理',
          menuUrl: '/manage/RootManage',
          pathname: 'RootManage',
          componentPath: '/manage/RootManage',
          menuImgClass: '',
          menuState: '0',
          menuChilds: [],
        },
        {
          menuId: 5,
          menuName: '订单管理',
          menuUrl: '/manage/SearchManage',
          pathname: 'SearchManage',
          componentPath: '/manage/SearchManage',
          menuImgClass: '',
          menuState: '0',
          menuChilds: [],
        },
        {
          menuId: 6,
          menuName: '用户统计',
          menuUrl: '/manage/UsersStatistics',
          pathname: 'SearchManage',
          componentPath: '/manage/UsersStatistics',
          menuImgClass: '',
          menuState: '0',
          menuChilds: [],
        },
        {
          menuId: 6,
          menuName: '用户审核',
          menuUrl: '/manage/Usersaudit',
          pathname: 'SearchManage',
          componentPath: '/manage/Usersaudit',
          menuImgClass: '',
          menuState: '0',
          menuChilds: [
            {
              menuId: 77,
              menuName: '未审核用户',
              menuUrl: '/manage/Usersaudit',
              pathname: 'Usersaudit',
              componentPath: '/manage/Usersaudit',
              menuImgClass: '',
              menuState: '0',
              menuChilds: [],
            },
            {
              menuId: 78,
              menuName: '已审核用户',
              menuUrl: '/manage/Usersaudited',
              pathname: 'Usersaudited',
              componentPath: '/manage/Usersaudited',
              menuImgClass: '',
              menuState: '0',
              menuChilds: [],
            },
          ],
        },
        {
          menuId: 54,
          menuName: '商家管理',
          menuUrl: '/manage/Kstore',
          pathname: 'SearchManage',
          componentPath: '/manage/Kstore',
          menuImgClass: '',
          menuState: '0',
          menuChilds: [
            {
              menuId: 35,
              menuName: '配送方式',
              menuUrl: '/manage/payfor',
              pathname: 'Usersaudit',
              componentPath: '/manage/payfor',
              menuImgClass: '',
              menuState: '0',
              menuChilds: [], //---------------没有子菜单
            },
            {
              menuId: 63,
              menuName: '商品列表',
              menuUrl: '/manage/Kstore',
              pathname: 'Usersaudited',
              componentPath: '/manage/Kstore',
              menuImgClass: '',
              menuState: '0',
              menuChilds: [], //---------------没有子菜单
            },
            {
              menuId: 28,
              menuName: ' 订单列表',
              menuUrl: '/manage/border',
              pathname: 'Usersaudited',
              componentPath: '/manage/border',
              menuImgClass: '',
              menuState: '0',
              menuChilds: [], //---------------没有子菜单
            },
          ],
        },
      ],
      [
        {
          menuId: 2,
          menuName: '广告管理',
          menuUrl: '/manage/AdvertManage',
          pathname: 'userlist' /*===模块的名称==*/,
          componentPath: '/manage/AdvertManage', //---
          menuImgClass: 'el-icon-s-custom',
          menuState: '0',
          menuChilds: [], //---------------没有子菜单
        },

        {
          menuId: 7,
          menuName: '角色列表',
          menuUrl: '/manage/OrderStatistics',
          pathname: 'OrderStatistics',
          componentPath: '/manage/OrderStatistics',
          menuImgClass: '',
          menuState: '0',
          menuChilds: [],
        },
        {
          menuId: 5,
          menuName: '订单管理',
          menuUrl: '/manage/SearchManage',
          pathname: 'SearchManage',
          componentPath: '/manage/SearchManage',
          menuImgClass: '',
          menuState: '0',
          menuChilds: [],
        },
        {
          menuId: 6,
          menuName: '用户统计',
          menuUrl: '/manage/UsersStatistics',
          pathname: 'SearchManage',
          componentPath: '/manage/UsersStatistics',
          menuImgClass: '',
          menuState: '0',
          menuChilds: [],
        },
        {
          menuId: 6,
          menuName: '用户审核',
          menuUrl: '/manage/Usersaudit',
          pathname: 'SearchManage',
          componentPath: '/manage/Usersaudit',
          menuImgClass: '',
          menuState: '0',
          menuChilds: [
            {
              menuId: 77,
              menuName: '未审核用户',
              menuUrl: '/manage/Usersaudit',
              pathname: 'Usersaudit',
              componentPath: '/manage/Usersaudit',
              menuImgClass: '',
              menuState: '0',
              menuChilds: [], //---------------没有子菜单
            },
            {
              menuId: 78,
              menuName: '已审核用户',
              menuUrl: '/manage/Usersaudited',
              pathname: 'Usersaudited',
              componentPath: '/manage/Usersaudited',
              menuImgClass: '',
              menuState: '0',
              menuChilds: [], //---------------没有子菜单
            },
          ],
        },
        {
          menuId: 54,
          menuName: '商家管理',
          menuUrl: '/manage/Kstore',
          pathname: 'SearchManage',
          componentPath: '/manage/Kstore',
          menuImgClass: '',
          menuState: '0',
          menuChilds: [
            {
              menuId: 35,
              menuName: '配送方式',
              menuUrl: '/manage/payfor',
              pathname: 'Usersaudit',
              componentPath: '/manage/payfor',
              menuImgClass: '',
              menuState: '0',
              menuChilds: [], //---------------没有子菜单
            },
            {
              menuId: 63,
              menuName: '商品列表',
              menuUrl: '/manage/Kstore',
              pathname: 'Usersaudited',
              componentPath: '/manage/Kstore',
              menuImgClass: '',
              menuState: '0',
              menuChilds: [], //---------------没有子菜单
            },
            {
              menuId: 28,
              menuName: ' 订单列表',
              menuUrl: '/manage/border',
              pathname: 'Usersaudited',
              componentPath: '/manage/border',
              menuImgClass: '',
              menuState: '0',
              menuChilds: [], //---------------没有子菜单
            },
          ],
        },
      ],
    ]
    if (this.props.location.state === undefined) {
      console.log(this.props.location.state)

      this.props.history.push('/backstage')
    } else {
      this.xuaran(menulist)
    }
  }

  go = ({ item, key, keyPath, domEvent }) => {
    //onClik那里虽然看不到传值,但是默认会传过来四个参数,详见官网
    console.log(key)
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
              ></img>
            </Menu.Item>
            {/*<Menu.Item key="/manage/AdvertManage" onClick={this.go} icon={<PieChartOutlined />}>*/}
            {/*广告管理*/}
            {/*</Menu.Item>*/}
            {/*<Menu.Item key="/manage/OrderStatistics" onClick={this.go} icon={<DesktopOutlined />}>*/}
            {/*订单管理*/}
            {/*</Menu.Item>*/}
            {/*<Menu.Item key="/manage/RootManage" id="ds" onClick={this.go}  icon={<DesktopOutlined />}>*/}
            {/*权限管理*/}
            {/*</Menu.Item>*/}
            {/*<Menu.Item key="/manage/SearchManage"  onClick={this.go} icon={<DesktopOutlined />}>*/}
            {/*订单管理*/}
            {/*</Menu.Item>*/}
            {/*<Menu.Item key="/manage/UsersStatistics" onClick={this.go} icon={<DesktopOutlined />}>*/}
            {/*用户统计*/}
            {/*</Menu.Item>*/}
            {/*<Menu.Item key="/manage/Usersaudit" onClick={this.go} icon={<DesktopOutlined />}>*/}
            {/*用户审核*/}
            {/*</Menu.Item>*/}

            {this.state.leftMenu}
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
              <Redirect from="/manage" to="/manage/AdvertManage"></Redirect>
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
