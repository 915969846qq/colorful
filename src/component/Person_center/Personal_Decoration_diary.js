import React, { Component } from 'react'
import './css/Personal_Decoration_diary.css'
// import thunk from 'redux-thunk'
import { connect } from 'react-redux';
import {
    // orderListAction,
    // recommendAction,mycartAction,
    // cartListAction,
    diaryListAction
  } from '../../action/peresonal_cartOrder_action'
import store from '../../store/personal_cartOrder_store'


//装修日记

export default class Personal_Decoration_diary extends Component {
  constructor() {
    super()
    this.state = {
      diary: [
        {
          title: '年月日',
          createtime: '2019-11-10',
          updatetime: '2020-1-4',
          roominfo: '110m² 现代 半包',
          village: '清和苑',
          decorationcompany: 'yijia装饰有限公司',
        },
        {
          title: '年月日',
          createtime: '2019-11-10',
          updatetime: '2020-1-4',
          roominfo: '110m² 现代 半包',
          village: '清和苑',
          decorationcompany: 'yijia装饰有限公司',
        },
      ],
      number: {
        look: 3,
        collection: 1,
        comment: 0,
      },
    }
  }

  diary() {
    let diary = this.state.diary
    let Diary = diary.map((item) => {
      return (
        <div className="diary-content">
          <div className="diary-content-header">
            <div className="diary-content-header-left">
              <h1>{this.state.diary[0].title}</h1>
              <p>
                创建时间：{this.state.diary[0].createtime}&nbsp;&nbsp;更新时间：
                {this.state.diary.updatetime}
              </p>
            </div>
            <div className="diary-content-header-right">
              <div>
                <img
                  src={require('../../assets/images/Collection_icon_03.png')}
                  alt="icon03"
                ></img>
                <span>{this.state.number.look}</span>
              </div>
              <div>
                <img
                  src={require('../../assets/images/Collection_icon_05.png')}
                  alt="icon05"
                ></img>
                <span>{this.state.number.collection}</span>
              </div>
              <div>
                <img
                  src={require('../../assets/images/Collection_icon_08.png')}
                  alt="icon08"
                ></img>
                <span>{this.state.number.comment}</span>
              </div>
            </div>
          </div>
          <div className="diary-content-content">
            <div>
              <p>房屋信息：{this.state.diary[0].roominfo}</p>
              <p>所在小区：{this.state.diary[0].village}</p>
              <p>装修公司{this.state.diary[0].decorationcompany}</p>
            </div>
            <a href>编辑</a>
          </div>
          <div className="diary-content-footer">
            <h2>全部日记{this.state.diary.length}篇</h2>
            <a href="/Personal_Center_index/Decoration_Write_diary">续写日记</a>
          </div>
        </div>
      )
    })
    return Diary
  }
  UNSAFE_componentWillMount() {
    let Diary = this.diary()
    // console.log(Diary)
    this.setState({
      diary: Diary,
    })
  }
  render() {
    return (
      <div>
        我的装修日记
        <div>
          {this.state.diary}
          <div className="diary-footer">
            <a href>+新建装修日记</a>
          </div>
        </div>
      </div>
    )
  }
}

const MapStateToProps = (state, OwnProps) => {
    
    return {
      diary:state.cartorder.alldiary
    }
  }
const MapDispatchProps = () => {
    return {
        getdiary: (param={param:9})=>{
           store.dispatch(diaryListAction(param))
        }
    }
}
export default connect(MapStateToProps,MapDispatchProps)(Personal_Decoration_diary)
