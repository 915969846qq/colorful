import React, { Component } from 'react';
import {Link} from 'react-router-dom'

//加载界面
import { Spin } from 'antd';


//引入组件
// import Parlour from './parlour'

//引入css
import "./css/bedArr.css"

//引入底部
import Footer from"../../component/commen/footer"

class FurnitureArr extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            //沙发
             FurnitureArr:[],

             //桌椅
             parlour:[],

             arr:[],
             arr1:[],

             //加载
             loading:"",

         }
    }

    change(id,e){
        console.log(id);
    }

     //初始化
     UNSAFE_componentWillMount() {
        //  this.loading();
         this.myFetch();
    }

    //沙发fetch
    myFetch=()=>{
        fetch('http://47.100.90.56:8080/banJu/goods/findAll', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                type:17,
            })
        }).then((res) => {
            return res.json();
        }).then((data) => {
            
            console.log(data.data);
            
            // 存放数组            
            this.setState({
                FurnitureArr:data.data,
            },()=>{
                this.arr();
                this.myFetch2();
                console.log("aaaaaaaaaaaaaaaaaaaaaaaaa")
            }
            )
        }).catch((e) => {
            console.log("数据有误");
        });
    }


    //桌椅fetch
    myFetch2=()=>{
        fetch('http://47.100.90.56:8080/banJu/goods/findType', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                
                body: JSON.stringify({
                    type:18,
                })
                }).then((res) => {
                    return res.json();
                }).then((data) => {
                console.log(data.data);
                console.log("aaaaaa111111111111111111111111111111111111aaaaa")

                // 存放数组            
                this.setState({
                    parlour:data.data,
                }
                ,()=>{
                    this.arr1()
                }
                )
            }).catch((e) => {
                console.log("数据有误");
            });
    }

    //沙发
    arr=()=>{
        let arr=this.state.FurnitureArr.map((item)=>{
            return (
                    <div className="craftsman" key={item.id}>
                        <Link to={
                            {
                                pathname:`/Furniture_Museum_details`,
                                state:{key:item.id}
                            }
                        }><img src={item.image} alt="" className="pavilionLImg" onClick={this.change.bind(this,item.id)}/></Link>
                        <div className="craftsman_list_padding">
                        <Link to={
                            {
                                pathname:`/Furniture_Museum_details`,
                                state:{key:item.id}
                            }
                        }>
                            <div className="craftsman_list_name">{item.desc}</div>
                            </Link>
                            <div className="craftsman_Info Flex">
                                <div className="">
                                    <span className="money-small">￥<span className="money-money">{item.vipPrice}</span></span>
                                    <span className="money-big"><del>{item.price}</del></span>
                                </div>
                                <div className="money-sale">已售{item.sell}</div>
                            </div>
                        </div>
                    </div>
            )      
        });
        this.setState({
            arr:arr,
        })
    }

    //座椅
    arr1=()=>{
        let arr1=this.state.parlour.map((item)=>{
            return (
                    <div className="craftsman" key={item.id}>
                        <Link to={
                            {
                                pathname:`/Furniture_Museum_details`,
                                state:{key:item.id}
                            }
                        }><img src={item.image} alt="" className="pavilionLImg" onClick={this.change.bind(this,item.id)}/></Link>
                        <div className="craftsman_list_padding">
                            <div className="craftsman_list_name">{item.desc}</div>
                            <div className="craftsman_Info Flex">
                                <div className="">
                                    <span className="money-small">￥<span className="money-money">{item.vipPrice}</span></span>
                                    <span className="money-big"><del>{item.price}</del></span>
                                </div>
                    <div className="money-sale">已售{item.sell}</div>
                            </div>
                                
                        </div>
                    </div>
            )      
        });
        this.setState({
            arr1:arr1,
        })
    }

    render() { 
        return ( 
            <div className="bedStyle">
                {/* 卧室 */}
                <div className="title">1F 沙发</div>
                <div className="Flex">
                    {this.state.arr}
                </div>


                {/* 客厅 */}
                <div className="title">2F 桌椅</div>
                <div className="Flex ">
                    {/* <Parlour></Parlour> */}
                    {this.state.arr1}
                </div>
                
                <Footer></Footer>

            </div>

         );
    }
}
 
export default FurnitureArr;