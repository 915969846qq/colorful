import React, { Component } from 'react';
import './css/secpublish_first.css'
class Secpublish_first extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <div className="sec_typrchoose">
                <p>类别选择</p>
                <ul>
                    <li>台式机/配件</li>
                    <li>笔记本电脑</li>
                    <li>平板电脑</li>
                    <li>二手手机</li>
                    <li>数码产品</li>
                    <li>二手家电</li>
                    <li>二手家具/家居</li>
                    
                </ul>
            </div>
        </div> 
        );
    }
}
 
export default Secpublish_first;