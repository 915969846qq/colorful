
//风格馆  装修案例
import React, { Component } from 'react';

import { Row, Col, } from 'antd';
import $ from "jquery"

//引入css
import "../Craftsmans_Hall/css/PopularCraftsman.css"

// 引入头部
import HeaderSearch from "../commen/indexHeader1"
import HeaderBanner from "../commen/indexHeader2"

//引入底部
import Footer from '../commen/footer'


//引入icon
// import "./icon/iconfont.css"

class Style_pavilion_case extends Component {
    constructor(props) {
        super(props);
        this.state = {

            craftsmanArr: [
                {
                    avatar:"assets/images/craftsman_07.jpg",
                    realName:"wajwkd",
                    company:"ksd",
                    hot:65
                },
                {
                    avatar:"assets/images/craftsman_07.jpg",
                    realName:"wajwkd",
                    company:"ksd",
                    hot:65
                },
                {
                    avatar:"assets/images/craftsman_07.jpg",
                    realName:"wajwkd",
                    company:"ksd",
                    hot:65
                },
                {
                    avatar:"assets/images/craftsman_07.jpg",
                    realName:"wajwkd",
                    company:"ksd",
                    hot:65
                },
            ],

            //类型
            type:"",
            //风格
            style:"",
            // 当前页数
            current:1,
            //总数
            total:1,

            
        }
    }

    
 

    //点击style
    style=(style,e)=>{
        console.log(this.state)
        this.setState({
            style:style,
            craftsmanArr:"",
            total:1,
        },()=>{
            console.log(this.state.style)
            this.myFetch();
        })
    }

    //点击type
    type=(type,e)=>{
        this.setState({
            type:type,
            craftsmanArr:"",
            total:1,
        },()=>{
            console.log(this.state.type)
           this.myFetch();
        })
    }


    //点击收藏
    collection=(e)=>{
        console.log(e.target)
        if(e.target.style.color!=="red"){
            e.target.style.color="red";
        }
        else {
            e.target.style.color="gray";
        }
        
    }


    //上一页
    toUp=()=>{
        if(this.state.current-1!==0){
            this.setState({
                current:this.state.current-1,
         },()=>{
              // 点击事件中调接口
             this.myFetch();
         });
        }
    }

    //下一页
    toDown=()=>{
        if(this.state.current+1<=this.state.total){
            this.setState({
                current:this.state.current+1,
         },()=>{
              // 点击事件中调接口
             this.myFetch();
         });
        }
    }

   

    render() {
        let arr = this.state.craftsmanArr.map((item,index) => {
            return (
                <div className="craftsman" key={index}>
                    <img src={require(`../../${item.avatar}`)} alt="" className="pavilionLImg"/>
                    <div className="craftsman_list_padding">
                        <div className="flex craftsman_Info">
                            <div className="craftsman_list_name">{item.realName}</div>
                            <div className="craftsman_company">{item.company}</div>
                        </div>
                        <div className="flex craftsman_Info">
                            <span><span className="iconfont icon-aixin" onClick={this.collection.bind(this)}></span>{item.hot}</span>
                        </div>
                    </div>
                </div>
            )
        });
        
        return (
            //外层css取名
            <div className="craftsmancss">
                <HeaderSearch></HeaderSearch>
                <HeaderBanner></HeaderBanner>
                {/* 表格 */}
                <div className="table">
                    {/* top */}
                    <div className="table-top">
                        {/* 第一行 */}
                        <div className="tableBox flex liStyle">
                            {/* 左边 */}
                            <div className="tableBox_left ">风格</div>
                            <div className="tableBox_right">
                                <span className={this.state.style === "" ? 'myChioce' : 'myCancle'} onClick={this.style.bind(this, "")}>不限</span>
                                <span className={this.state.style === "中式" ? 'myChioce' : 'myCancle'} onClick={this.style.bind(this, "中式")}>中式</span>
                                <span className={this.state.style === "轻奢" ? 'myChioce' : 'myCancle'} onClick={this.style.bind(this, "轻奢")}>轻奢</span>
                                <span className={this.state.style === "简式" ? 'myChioce' : 'myCancle'} onClick={this.style.bind(this, "简式")}>简式</span>
                            </div>
                        </div>
                        {/* 第2行 */}
                        <div className=" flex liStyle">
                            {/* 左边 */}
                            <div className="tableBox_left ">类型</div>
                            <div className="tableBox_right">
                                <span className={this.state.type === "" ? 'myChioce' : 'myCancle'} onClick={this.type.bind(this, "")}>不限</span>
                                <span className={this.state.type === "客厅" ? 'myChioce' : 'myCancle'} onClick={this.type.bind(this, "客厅")}>客厅</span>
                                <span className={this.state.type === "卧室" ? 'myChioce' : 'myCancle'} onClick={this.type.bind(this, "卧室")}>卧室</span>
                                <span className={this.state.type === "书房" ? 'myChioce' : 'myCancle'} onClick={this.type.bind(this, "书房")}>书房</span>
                            </div>
                        </div>
                    </div>
                   
                </div>
                {/* 工匠人员 */}
                <div className="craftsmanStyle flex ">

                    {/* {this.state.arr} */}
                    {arr}
                </div>
                <div className="craftsmanStyle center">
                    <div className="flex centerFlex">
                        <div className="Pages cursor" onClick={this.toUp.bind(this)}>上一页</div>
                            <div className=" number"><span className=" currentNumber" >{this.state.current}</span>/{this.state.total}</div>
                        <div className="Pages cursor" onClick={this.toDown.bind(this)}>下一页</div>
                    </div>

                   
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Style_pavilion_case;