
//风格馆  装修案例
import React, { Component } from 'react';

import { Row, Col, } from 'antd';
import { Pagination } from 'antd';

//引入css
import "../Craftsmans_Hall/css/PopularCraftsman.css"

//引入底部
// import Footer from '../commen/footer'


//引入icon
// import "./icon/iconfont.css"

class Style_pavilion_case extends Component {
    constructor(props) {
        super(props);
        this.state = {

            craftsmanArr: [],

            //类型
            type:"",
            //风格
            style:"",
            // 页数
            current:1,

            
        }
    }

    //初始化
    UNSAFE_componentWillMount() {
        fetch('http://172.16.10.4:8080/banJu/style/findPicture', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            // 传参
            body: JSON.stringify({
                type:this.state.type,
                style:this.state.style,
            })
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data.data);
            // 存放数组            
            this.setState({
                craftsmanArr: data.data
            },()=>{
                this.arr();
            })
        }).catch((e) => {
            console.log("数据有误");
        });
    }

     //分页 
     onChange = page => {
        console.log(page);
        this.setState({
          current: page,
        });
    };

    //点击style
    style=(style,e)=>{
        console.log(this.state)
        this.setState({
            style:style,
            craftsmanArr:"",
        },()=>{
            console.log(this.state.style)
            fetch('http://172.16.10.4:8080/banJu/style/findPicture', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                // 传参
                body: JSON.stringify({
                    type:this.state.type,
                    style:this.state.style,
                })
            }).then((res) => {
                return res.json();
            }).then((data) => {
                console.log(this.state.craftsmanArr);
                // 存放数组            
                this.setState({
                    craftsmanArr: data.data
                },()=>{
                    this.arr();
                    console.log(this.state.craftsmanArr);
                })
            }).catch((e) => {
                console.log("数据有误");
            });
        })
    }

    //点击type
    type=(type,e)=>{
        this.setState({
            type:type,
            craftsmanArr:"",
        },()=>{
            console.log(this.state.type)
            fetch('http://172.16.10.4:8080/banJu/style/findPicture', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                // 传参
                body: JSON.stringify({
                    type:this.state.type,
                    style:this.state.style,
                })
            }).then((res) => {
                return res.json();
            }).then((data) => {
                console.log(data);
                // 存放数组            
                this.setState({
                    craftsmanArr:data.data
                },()=>{
                    this.arr();
                })
            }).catch((e) => {
                console.log("数据有误");
            });
        })
    }

    //函数
    arr=()=>{
        let arr = this.state.craftsmanArr.map((item) => {
            return (
                <div className="craftsman" key={item.cid}>
                    {/* <img src={require(`../../${item.avatar}`)} alt="" className="pavilionLImg"/> */}
                    <div className="craftsman_list_padding">
                        <div className="flex craftsman_Info">
                            <div className="craftsman_list_name">{item.realName}</div>
                            <div className="craftsman_company">{item.company}</div>
                        </div>
                        <div className="flex craftsman_Info">
                            <span><span className="iconfont icon-aixin"></span>{item.hot}</span>
                        </div>
                    </div>
                </div>
            )
        });
        this.setState({
            arr,
        })
    }

    render() {
        
        return (
            //外层css取名
            <div className="craftsmancss">
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

                    {this.state.arr}
                    {/* {this.state.arr} */}

                </div>
                <div className="craftsmanStyle">
                     <Pagination defaultCurrent={1}  total={50} onChange={this.onChange.bind(this)}/>    
                     {/* {this.state.craftsmanArr.total} 返回数据的总条数*/}
                </div>
                {/* <Footer></Footer> */}
            </div>
        );
    }
}

export default Style_pavilion_case;