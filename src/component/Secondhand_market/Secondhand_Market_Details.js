import React, { Component } from 'react'
//二手市场详情
import './css/secondhand_Market_Detail.css'
export default class Secondhand_Market_Details extends Component {
    constructor(){
        super();
        this.state={
            sec_title:"出售实木托盘（全城最低价格,绝对）",
            sec_price:0,
            sec_detailregion:"天府二街",
            sec_sellerimg:"",
            sec_sellername:"方太总"
        }
    }
    render() {
        return (
            <div className="secprod_detailbox">
                <div className="secprod_detail">
                    <img src={require(`../../assets/images/min-banner1_03.jpg`)} alt="二手货"/>
                    <div className="sec-textbox">
                    <p className="sec_title">{this.state.sec_title}</p>
                    <p>
                        <span className="sec_price">{this.state.sec_price}元</span>
                        <span className="sec_detailregion">{this.state.sec_detailregion}</span>
                    </p>
                    <p className="sec_seller_wrap">
                        <img className="sec_sellerimg" src={require(`../../assets/images/craftsman_07.jpg`)} alt=""/>
                        <span>{this.state.sec_sellername}</span>
                    </p>
                    </div>
                </div>
            </div>
        )
    }
}
