import React, { Component } from 'react'

// 引入自己的组件
import Decorationcheck from './Decoration_check'
import Decorationshow from './Decoration_show'
import '../../assets/Fang_Css/Decoration_diary.css'

//装修日记列表
export default class Decoration_Diary_list extends React.Component {
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
    let oj = {}
    if (data.city !== undefined) {
      console.log(data)
      this.setState(
        {
          city: data.city,
        },
        () => {
          this.Child.childFn(this.state)
        }
      )
    }
    if (data.style !== undefined) {
      this.setState(
        {
          style: data.style,
        },
        () => {
          this.Child.childFn(this.state)
        }
      )
    }
    if (data.Size !== undefined) {
      this.setState(
        {
          Size: data.Size,
        },
        () => {
          this.Child.childFn(this.state)
        }
      )
    }
  }
  onRef = (ref) => {
    this.Child = ref
  }

  render() {
    return (
      <div className="fang_Width1200">
        {/* 日记选择组件 */}
        <Decorationcheck passdata={this.passdata}></Decorationcheck>
        {/* 日记列表展示组件 */}
        <Decorationshow onRef={this.onRef}></Decorationshow>
      </div>
    )
  }
}
