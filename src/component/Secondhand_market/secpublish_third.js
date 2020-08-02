import React, { Component } from 'react';
import {Button} from 'antd'
import './css/secpublish_third.css'
class Secpublish_third extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div >
            <div className="upload_success">
                <p>发布成功</p>
                <div>该条信息已发布在科乐福-----二手市场</div>
                <div>
                    <Button type="primary" danger>查看信息</Button>
                    <Button  type="primary" danger>管理信息</Button>
                    <Button  type="primary"  danger>再发一条</Button>
                </div>
            </div>
        </div> );
    }
}
 
export default Secpublish_third;