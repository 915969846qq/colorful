import React, { Component } from 'react';
import './css/secprodmarket-message.css'


class secprodmarket_detail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
        sec_detail:{ 
            secprod_title:"处理办公桌椅",
            secprod_price:"228",
            secprod_img:"assets/images/min-banner1_03.jpg",
            secprod_sellerimg:"assets/images/craftsman_07.jpg",
            secprod_region:"武侯区",
            secprod_region_detail:"玉林路",
            secprod_phone:12345678909,
            secprod_seller:"张倩倩",
            secprod_status:"全新",
            secprod_sellerdate:"2020-08-01",
            secprod_describe:"好得很，有意者请跟我联系"
        } 
        }
    }
    render() { 
        console.log(this.props.location)
        return ( 
            <div>
                {/* 主要内容盒子 */}
                <div className="sec_detail_wrap">
                {/* 详细信息盒子 */}
               <div className="sec_detail_box">
                <p className="sec_detail_header">{this.state.sec_detail.secprod_title}  {this.state.sec_detail.secprod_price}元</p>
                <div className="sec_detail">
                    <img src={require(`../../${this.state.sec_detail.secprod_img}`)} alt="商品图"/>
                    <div>
                        <p>价格：</p>
                        <p>成色：</p>
                        <p>区域：</p>
                        <p>卖家：</p>
                        <p>电话：</p>
                        <p>咨询：<span className="leavemessage">给我留言</span></p>
                        <div className="save_and_share">
                            <span><span></span>收藏</span>
                            <span><span></span>分享</span>
                        </div>
                    </div>
                </div>
                </div>
                 {/* 卖家头像 与名字信息*/}
               <div className="sec_seller_info">
                   <div className="sec_sellerimg">
                        <img src={require(`../../${this.state.sec_detail.secprod_sellerimg}`)} alt="卖家图片"/>
                   </div>
                   <p className="sec_seller">{this.state.sec_detail.secprod_seller}</p>
                   <p>注册时间：{this.state.sec_detail.secprod_sellerdate}</p>
               </div>
               </div>
              <p class="secprod_history">TA的故事</p>
               {/* 商品描述与图片 */}
               <div className="secprod_describe">
                    <p>新旧程度：{this.state.sec_detail.secprod_status}</p>
                    <p>详细情况：{this.state.sec_detail.secprod_describe}</p>
                    <div>
                        <img src={require(`../../${this.state.sec_detail.secprod_img}`)} alt="商品图片"/>
                        <img src={require(`../../${this.state.sec_detail.secprod_img}`)} alt="商品图片"/>
                        <img src={require(`../../${this.state.sec_detail.secprod_img}`)} alt="商品图片"/>
                    </div>
               </div>
            </div>
         );
    }
}
 
export default secprodmarket_detail;