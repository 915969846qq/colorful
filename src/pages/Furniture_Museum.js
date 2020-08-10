import React, { Component } from 'react'


//引入css
import "./css/Furniture_Museum.css"



//引入组件
import BedroomArr from '../component/Furniture_house/bedArr'


//家具馆
class Furniture_Museum extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           

        }
    }
    render() { 
    
        return ( 
                <div className="Furniture">
                    <div className="cuoponBox cuoponFlex">

                        {/* 优惠券1 */}
                        <div className="cuoponBox_content cuoponFlex">
                            <div className="cuoponBox_Money">￥20</div>
                            <div className="cuoponBox_text">优惠券订单满79元立减现领现用</div>
                        </div>
                    
                        {/* 优惠券2 */}
                            <div className="cuoponBox_content cuoponFlex">
                                <div className="cuoponBox_Money">￥20</div>
                                <div className="cuoponBox_text">优惠券订单满79元立减现领现用</div>
                            </div>
                        {/* 优惠券3 */}
                        <div className="cuoponBox_content cuoponFlex">
                            <div className="cuoponBox_Money">￥20</div>
                            <div className="cuoponBox_text">优惠券订单满79元立减现领现用</div>
                        </div>

                    </div>
                    {/* 卧室 */}
                    <div className="cuoponBox">
                        <BedroomArr></BedroomArr>
                    </div>
                    
                </div>
         );
    }
}
 
export default Furniture_Museum;
