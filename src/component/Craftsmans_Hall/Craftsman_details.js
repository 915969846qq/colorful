import React, { Component } from 'react'

//引入组件
import PersonnalDetails from "./CraftsmanDetails/personnalDetails"
import DesignCase from "./CraftsmanDetails/designCase"

//引入css
import "./css/personDetail.css"

//工匠详情
class Craftsman_details extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="mainBox">
                <PersonnalDetails></PersonnalDetails>
                <h1 className="">所有设计案例</h1>
                <DesignCase></DesignCase>
            </div>
         );
    }
}
 
export default Craftsman_details;
