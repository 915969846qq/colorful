import React, { Component } from 'react';
import './css/secpublish.css'



class Secpublish extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <div className="secpublish_menu">
                <div className="borderbottom"><i>1</i><span>选择类别</span></div>
                <div><i>2</i><span>填写信息</span></div>
                <div><i>3</i><span>发布成功</span></div>
            </div>
        
        
         

        </div> 
        );
    }
}
 
export default Secpublish;