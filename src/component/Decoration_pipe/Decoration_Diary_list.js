import React, { Component } from 'react'
<<<<<<< HEAD
=======
// 引入自己的组件
import Decorationcheck from './Decoration_check'
import Decorationshow from './Decoration_show'
import '../../assets/iconfont/Fang_iconfont/iconfont.css'
>>>>>>> 3f3950c0a0fcac9129e738e33d78906bfddae69b
//装修日记列表
export default class Decoration_Diary_list extends Component {
  render() {
    return (
      <div className="Width1200">
        {/* 日记选择组件 */}
        <Decorationcheck></Decorationcheck>
        {/* 日记列表展示组件 */}
        <Decorationshow></Decorationshow>
      </div>
    )
  }
}
