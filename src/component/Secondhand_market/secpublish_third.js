import React, { Component } from 'react';
import {Button} from 'antd'
import {Link} from 'react-router-dom'
import './css/secpublish_third.css'
class Secpublish_third extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div >
            <div className="secpublish_menu">
                <div className="borderbottom"><i>1</i><span>选择类别</span></div>
                <div  style={{borderBottom:"4px solid red"}}><i>2</i><span>填写信息</span></div>
                <div  style={{borderBottom:"4px solid red"}}><i>3</i><span>发布成功</span></div>
                
            </div>
            <div className="upload_success">
                <p>发布成功</p>
                <div>该条信息已发布在科乐福-----二手市场</div>
                <div>
                    <Button type="primary" danger>查看信息</Button>
                    <Button  type="primary" danger>管理信息</Button>
                    
                    <Button  type="primary"  danger><Link to="/Secondhand_Market/Secpublish/">再发一条</Link></Button>
                </div>
            </div>
        </div> );
    }
}
 
export default Secpublish_third;