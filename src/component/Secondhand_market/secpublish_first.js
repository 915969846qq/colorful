import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './css/secpublish_first.css'
class Secpublish_first extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            menulistarray:[
                {cid:1,cname:"二手手机"},
                {cid:2,cname:"台式电脑"},
                {cid:3,cname:"笔记本"},
                {cid:4,cname:"平板电脑"},
                {cid:5,cname:"数码产品"},
                {cid:6,cname:"家用电器"},
                {cid:7,cname:"二手家具"},
                {cid:8,cname:"服饰箱包"}
            ],
            menulist:[]
         }
    }


    // ===========================按钮======================
    bindmenu=()=>{
        let menulist=this.state.menulistarray.map((item)=>{
            return (
                    <li key={item.cid}>
                        <Link to={"/Secondhand_Market/Secpublish/fillform/"+item.cid}>{item.cname}</Link>
                    </li>
            )
        })
        return menulist
    }

    // ==================================选项初始化=======================
    componentDidMount(){
        let menulist=this.bindmenu()
        this.setState({
            menulist:menulist
        })
    }



    chooseopt=(e)=>{

    }
    render() { 
        return ( 
        <div>
            <div className="secpublish_menu">
                <div className="borderbottom"><i>1</i><span>选择类别</span></div>
                <div><i>2</i><span>填写信息</span></div>
                <div><i>3</i><span>发布成功</span></div>
                
            </div>
            <div className="sec_typrchoose">
                <p>类别选择</p>
                <ul>
                   {this.state.menulist} 
                </ul>
            </div>
        </div> 
        );
    }
}
 
export default Secpublish_first;