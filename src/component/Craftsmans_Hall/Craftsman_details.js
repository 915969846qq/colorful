import React, { Component } from 'react'

//引入组件
import PersonnalDetails from "./CraftsmanDetails/personnalDetails"
import DesignCase from "./CraftsmanDetails/designCase"

//引入css
import "./css/personDetail.css"

//引入底部
import Footer from '../commen/footer'

//工匠详情
class Craftsman_details extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    // 当前用户的id值
    UNSAFE_componentWillMount(){
        console.log(this.props.location.state.key)
       let personId=(this.props.location.state.key);
    }
    render() { 
        return ( 
            <div>
                <div className="mainBox person">
                    <PersonnalDetails></PersonnalDetails>
                    <h1 className="">所有设计案例</h1>
                    <DesignCase></DesignCase>
                </div>
                <Footer></Footer>
            </div>
         );
    }
}
 
export default Craftsman_details;
