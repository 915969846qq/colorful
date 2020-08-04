import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
// 记录日记
import Decoration_Diary_list from '../Decoration_pipe/Decoration_Diary_list'
import Decoration_My_diary from './Decoration_My_diary'
import Decoration_Write_diary from './Decoration_Write_diary'
//装修日记
export default class Personal_Decoration_diary extends Component {
  render() {
    return (
      <div>
        <h1>装修日记</h1>
        <Link to="/Personal_Decoration_diary/Decoration_Diary_list">
          查看装修日志
        </Link>
        <Link to="/Personal_Decoration_diary/Decoration_Write_diary">
          发布装修日志
        </Link>
      </div>
    )
  }
}
