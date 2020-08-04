import React, { Component } from 'react'


//引入css
import "./css/Furniture_Museum.css"

//家具馆
class Furniture_Museum extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Furniture">
                {/* 优惠券1 */}
                <div>
                    <div>
                        <div>￥20</div>
                        <div>
                            <div>优惠券</div>
                            <div>订单满79元立减</div>
                            <div>现领现用</div>
                        </div>
                    </div>
                </div>
                {/* 优惠券2 */}
            </div>
         );
    }
}
 
export default Furniture_Museum;
