import React, { Component } from 'react'


//引入组件
import PopularCraftsman from  "../component/Craftsmans_Hall/Popular_craftsman"
//工匠馆
export default class Craftsman_Pavilion extends Component {
    render() {
        return (
            <div>
                {/* 工匠馆 */}
                <PopularCraftsman></PopularCraftsman>
            </div>
        )
    }           
}
