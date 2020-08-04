import React, {Component} from 'react'
import { Row, Col,} from 'antd';
import "./header.css"

class header extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={1}></Col>
                    <Col span={22}>
                {/*//表头*/}
                <div className="ress_img"><img className="full" src={require("../../assets/images/address.png")} alt=""/></div>
                
                <div id="addresspp" className="addresspp">成都</div>
                <div className="readssswitch"><a
                    href="1" tjjj="top.cities.list" title="切换城市"
                    rel="nofollow" className="qh">【切换】</a>
                    <div className="welcome">您好，欢迎您访问 <a className="welcome_index"
                                                         href="../../index.js"> Colorful</a> !
                    </div>
                    
                    <div className="headerRight">
                        <div className="LoginorRegister">登录</div>
                        <div className="LoginorRegister">免费注册</div>
                        <div className="Iwantdecorate">我要装修</div>
                        <div className="Advisory_hotline">
                            <div className="img"><img className="full" src={require("../../assets/images/hotline.png")} alt=""/></div>
                            <div className="hotline">咨询热线：4006-900-288</div>
                        </div>
                    </div>
                </div>
                    </Col>
                    <Col span={1}></Col>
                </Row>

            </div>

            
        )
    }
}

export default header