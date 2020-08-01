import React, { Component } from 'react'

//引入组件
import personnalDetails from "./CraftsmanDetails/personnalDetails"
import designCase from "./CraftsmanDetails/designCase"

//工匠详情
export default class Craftsman_details extends Component {
    render() {
        return (
            <div>
                <h1>详情页面</h1>
                <personnalDetails></personnalDetails>
                <designCase></designCase>
            </div>
        )
    }
}
