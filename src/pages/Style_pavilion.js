import React, { Component } from 'react'

//引入css
import './css/Style_pavilion.css'

import { Link } from 'react-router-dom'

//引入底部
import Footer from '../component/commen/footer'

import { Carousel } from 'antd'

//风格馆
class Stylepavilion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bedRoom: [
        {
          bedRoomImg: 'assets/images/min-banner1_03.jpg',
          bedRoomTitle: '简约新古典两居室',
        },
        {
          bedRoomImg: 'assets/images/min-banner1_03.jpg',
          bedRoomTitle: '简约新古典两居室',
        },
        {
          bedRoomImg: 'assets/images/min-banner1_03.jpg',
          bedRoomTitle: '简约新古典两居室',
        },
        {
          bedRoomImg: 'assets/images/min-banner1_03.jpg',
          bedRoomTitle: '简约新古典两居室',
        },
        {
          bedRoomImg: 'assets/images/min-banner1_03.jpg',
          bedRoomTitle: '简约新古典两居室',
        },
        {
          bedRoomImg: 'assets/images/min-banner1_03.jpg',
          bedRoomTitle: '简约新古典两居室',
        },
        {
          bedRoomImg: 'assets/images/min-banner1_03.jpg',
          bedRoomTitle: '简约新古典两居室',
        },
        {
          bedRoomImg: 'assets/images/min-banner1_03.jpg',
          bedRoomTitle: '简约新古典两居室',
        },
      ],
      studyRoom: [
        {
          studyRoomImg: 'assets/images/min-banner1_03.jpg',
          studyRoomTitle: '阳台上的书房',
        },
        {
          studyRoomImg: 'assets/images/min-banner1_03.jpg',
          studyRoomTitle: '阳台上的书房',
        },
        {
          studyRoomImg: 'assets/images/min-banner1_03.jpg',
          studyRoomTitle: '阳台上的书房',
        },
        {
          studyRoomImg: 'assets/images/min-banner1_03.jpg',
          studyRoomTitle: '阳台上的书房',
        },
        {
          studyRoomImg: 'assets/images/min-banner1_03.jpg',
          studyRoomTitle: '阳台上的书房',
        },
      ],
      toiletRoom: [
        {
          toiletRoomImg: 'assets/images/min-banner1_03.jpg',
          toiletRoomTitle: '卫生间的墙纸',
        },
        {
          toiletRoomImg: 'assets/images/min-banner1_03.jpg',
          toiletRoomTitle: '卫生间的墙纸',
        },
        {
          toiletRoomImg: 'assets/images/min-banner1_03.jpg',
          toiletRoomTitle: '卫生间的墙纸',
        },
      ],
      changeRoom: [
        {
          changeRoomImg: 'assets/images/min-banner1_03.jpg',
          changeRoomTitle: '服装店',
        },
        {
          changeRoomImg: 'assets/images/min-banner1_03.jpg',
          changeRoomTitle: '幼儿园',
        },
        {
          changeRoomImg: 'assets/images/min-banner1_03.jpg',
          changeRoomTitle: '酒吧',
        },
      ],
    }
  }
  render() {
    let bedRoomArr = this.state.bedRoom.map((item, index) => {
      return (
        <div className="bedRoomStyle" key={index}>
          <img src={require(`../${item.bedRoomImg}`)} alt="" />
          <div className="bedRoomStyle_title">{item.bedRoomTitle}</div>
        </div>
      )
    })
    let studyRoomArr = this.state.studyRoom.map((item, index) => {
      return (
        <div className="studyRoomImg" key={index}>
          <img src={require(`../${item.studyRoomImg}`)} alt="" />
          <div className="roomTitleStyle">{item.studyRoomTitle}</div>
        </div>
      )
    })
    let toiletRoomArr = this.state.toiletRoom.map((item, index) => {
      return (
        <div className="studyRoomImg" key={index}>
          <img src={require(`../${item.toiletRoomImg}`)} alt="" />
          <div className="roomTitleStyle">{item.toiletRoomTitle}</div>
        </div>
      )
    })
    let changeRoomArr = this.state.changeRoom.map((item, index) => {
      return (
        <div key={index}>
          <img
            src={require(`../${item.changeRoomImg}`)}
            alt=""
            className="changeRoomStyle"
          />
          <div className="roomTitleStyle changeTitleStyle">
            {item.changeRoomTitle}
          </div>
        </div>
      )
    })
    return (
      <div className="stylePavCss">
        <div className=" bg">
          <div className="styleBox">
            {/* 上 */}
            <div className="styleFlex">
              {/* left */}
              <div className="styleLeft">
                {/* 右一 */}
                <div className="styleFlex">
                  <div className="styleTitle">空间</div>
                  <div className="styleSon">
                    <div className="styleCursor">客厅</div>
                    <div className="styleCursor">卫生间</div>
                  </div>
                  <div className="styleSon">
                    <div className="styleCursor">厨房</div>
                    <div className="styleCursor">玄关</div>
                  </div>
                  <div className="styleSon">
                    <div className="styleCursor">卧室</div>
                    <div className="styleCursor">餐厅</div>
                  </div>
                </div>
                {/* 右二*/}
                <div className="styleFlex">
                  <div className="styleTitle">风格</div>
                  <div className="styleSon">
                    <div className="styleCursor">客厅</div>
                    <div className="styleCursor">卫生间</div>
                  </div>
                  <div className="styleSon">
                    <div className="styleCursor">厨房</div>
                    <div className="styleCursor">玄关</div>
                  </div>
                  <div className="styleSon">
                    <div className="styleCursor">卧室</div>
                    <div className="styleCursor">餐厅</div>
                  </div>
                </div>
                {/* 右三*/}
                <div className="styleFlex">
                  <div className="styleTitle">局部</div>
                  <div className="styleSon">
                    <div className="styleCursor">客厅</div>
                    <div className="styleCursor">卫生间</div>
                  </div>
                  <div className="styleSon">
                    <div className="styleCursor">厨房</div>
                    <div className="styleCursor">玄关</div>
                  </div>
                  <div className="styleSon">
                    <div className="styleCursor">卧室</div>
                    <div className="styleCursor">餐厅</div>
                  </div>
                </div>
                {/* 右四*/}
                <div className="styleFlex">
                  <div className="styleTitle">户型</div>
                  <div className="styleSon">
                    <div className="styleCursor">客厅</div>
                    <div className="styleCursor">卫生间</div>
                  </div>
                  <div className="styleSon">
                    <div className="styleCursor">厨房</div>
                    <div className="styleCursor">玄关</div>
                  </div>
                  <div className="styleSon">
                    <div className="styleCursor">卧室</div>
                    <div className="styleCursor">餐厅</div>
                  </div>
                </div>
              </div>
              {/* right */}
              <div className="styleRight">
                <Carousel autoplay>
                  <div>
                    <img
                      src={require(`../assets/images/banner1_03.jpg`)}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={require(`../assets/images/min-banner1_03.jpg`)}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={require(`../assets/images/banner1_03.jpg`)}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={require(`../assets/images/min-banner1_03.jpg`)}
                      alt=""
                    />
                  </div>
                </Carousel>
                ,
              </div>
            </div>
            {/* 中 */}
            <div className="styleMiddle ">
              <div className="styleFlex">
                <div className="styleMiddle_Title">精选图库</div>
                <div className=" ">
                  <Link to={'/Style_pavilion_case'}>更多</Link>
                </div>
              </div>
              <div className="styleFlex ">
                <img
                  src={require(`../assets/images/banner1_03.jpg`)}
                  alt=""
                  className="styleMiddle_Img"
                />

                <img
                  src={require(`../assets/images/banner1_03.jpg`)}
                  alt=""
                  className="styleMiddle_Img"
                />
              </div>
            </div>
            <div className="styleFlex">{bedRoomArr}</div>

            {/* 局部之美 */}
            <div>
              <div className="styleMiddle_Title">局部之美</div>
              <div className="styleFlex">
                <div className="roomStyle">书房</div>
                {studyRoomArr}
              </div>
              <div className="styleFlex">
                <div className="roomStyle">卫生间</div>
                {toiletRoomArr}
              </div>
              <div className="styleMiddle_Title">百变空间</div>
              <div className="styleFlex">{changeRoomArr}</div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default Stylepavilion
