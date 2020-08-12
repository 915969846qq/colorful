import React, { Component } from 'react'
import { Carousel } from 'antd'

export default class indexHeader2 extends Component {
  render() {
    const contentStyle = {
      color: 'red',
      lineHeight: '400px',
    }
    return (
      <div className="index">
        {/* banner1 */}
        <div className="banner-con banner-slider slider-content">
          <div className="main-banner">
            <div className="main1">
              <Carousel autoplay>
                <div>
                  <h3 style={contentStyle}>
                    <img
                      src={require('../../assets/images/banner5.jpg')}
                      alt=""
                    />
                  </h3>
                </div>
                <div>
                  <h3 style={contentStyle}>
                    <img
                      src={require('../../assets/images/banner6.webp')}
                      alt=""
                    />
                  </h3>
                </div>
                <div>
                  <h3 style={contentStyle}>
                    <img
                      src={require('../../assets/images/banner1.webp')}
                      alt=""
                    />
                  </h3>
                </div>
                <div>
                  <h3 style={contentStyle}>
                    <img
                      src={require('../../assets/images/banner3.jpg')}
                      alt=""
                    />
                  </h3>
                </div>
              </Carousel>
              ,
            </div>
          </div>
        </div>
      </div>
    )
  }
}
