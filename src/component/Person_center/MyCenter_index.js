import React, { Component } from 'react'

//引入css
import "./css/mycenter.css"
//个人中心
class Personal_Center_index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="myCenter myCenter_flex">
                <div className="myCenter_left">
                    <img src={require(`../../assets/images/head_portrait_img.png`)} alt="" className="myCenter_left_img"/>
                    <span>兰陵笑笑生</span>
                </div>
                <div className="myCenter_right">
                    <div className="myCenter_right_wallet">我的钱包</div>
                    <div className="myCenter_right_account">账户余额：<span className="myCenter_right_money">0</span></div>
                    <div className="myCenter_flex myCenter_margin">
                        <div className="myCenter_pay">充值</div>
                        <div className="myCenter_pay">提现</div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Personal_Center_index;
