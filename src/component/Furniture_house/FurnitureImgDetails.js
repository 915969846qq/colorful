import React, { Component } from 'react'
// import Item from 'antd/lib/list/Item';

//引入css
import "../Craftsmans_Hall/css/goodsInfo.css"

class FurnitureImgDetails extends Component {

    
    render() { 
        return ( 
            //  详情图片 
            <div className="FurnitureGoods">
                <div className="goodsInfoImg">
                    <div className="goodsFlex border">
                        <div className="marginRight cursor">商品详情</div>
                        <div className="marginRight cursor">商品评论</div>
                        <div className="marginRight cursor">商品咨询</div>
                        <div className="marginRight cursor">进入店铺</div>
                    </div>
                    <img src={require(`../../assets/images/details/details_02.jpg`)} alt=""/>
                    <img src={require(`../../assets/images/details/details_03.jpg`)} alt=""/>
                    <img src={require(`../../assets/images/details/details_05.jpg`)} alt=""/>
                    <img src={require(`../../assets/images/details/details_06.jpg`)} alt=""/>
                    <img src={require(`../../assets/images/details/details_11.jpg`)} alt=""/>
                    <img src={require(`../../assets/images/details/details_12.jpg`)} alt=""/>
                </div> 
            </div>
            
        )
    }            
}
export default FurnitureImgDetails;
                   