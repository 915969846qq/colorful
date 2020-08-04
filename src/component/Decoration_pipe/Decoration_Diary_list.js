import React, { Component } from 'react'

// 引入自己的组件
import Decorationcheck from './Decoration_check'
import Decorationshow from './Decoration_show'
import '../../assets/iconfont/Fang_iconfont/iconfont.css'

//装修日记列表
export default class Decoration_Diary_list extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      city: '',
      style: '',
      Size: '',
    }
  }
  passdata = (data) => {
    // console.log(data)
    console.log(this)
    if (data.city !== undefined) {
      console.log(data)
      this.setState(
        {
          city: data.city,
        },
        () => {
          console.log(this.state)
        }
      )
    }
    if (data.style !== undefined) {
      this.setState({
        style: data.style,
      })
    }
    if (data.Size !== undefined) {
      this.setState({
        Size: data.Size,
      })
    }
  }
  render() {
    return (
      <div className="Width1200">
        {/* 日记选择组件 */}
        <Decorationcheck passdata={this.passdata}></Decorationcheck>
        {/* 日记列表展示组件 */}
        <Decorationshow showpassdata={this.state}></Decorationshow>
      </div>
    )
  }
}
