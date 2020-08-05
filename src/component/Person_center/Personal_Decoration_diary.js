import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
