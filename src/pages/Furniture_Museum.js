import React, { Component } from 'react'


//引入css
import "./css/Furniture_Museum.css"

//引入头部
import HeaderSearch from "../component/commen/indexHeader1"
import HeaderBanner from "../component/commen/indexHeader2"

//引入底部
import Footer from "../component/commen/footer"

//引入组件
import FurnitureArr from '../component/Furniture_house/FurnitureArr'

//优惠券领取成功模态框
import { Modal, Button, Space } from 'antd';


//家具馆
class Furniture_Museum extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cuponArr:[
                {
                    money:"￥20",
                    title:"优惠券订单满79元立减现领现用",
                },
                {
                    money:"￥20",
                    title:"优惠券订单满79元立减现领现用",
                },
                {
                    money:"￥20",
                    title:"优惠券订单满79元立减现领现用",
                },
            ],
           //优惠券
           money:0,

           //优惠券返回字符串
           content:"",

        }
    }

    //获取优惠券
    cuopon=(money,e)=>{
        console.log(money);
        this.setState({
            money:money,
        },()=>{
    fetch('http://47.100.90.56/banJu/user/getconpon',{           
                  method:'POST',
                  headers:{
                      'Content-Type':'application/json' 
                  },
                  credentials: 'include',
                  // 传参
                  body:JSON.stringify({
                        uid:1,
                        cid:this.state.money,
                  })
                  }).then((res)=>{
                      return res.json();       
                  }).then((data)=>{
                    console.log(data); //领取成功
                  // 存放数组            
                      this.setState({
                        content:data.msg
                      },()=>{
                          this.success();
                      })
        console.log(type(this.state.money))
                  }).catch((e) => {
                      console.log("数据有误");
                  });
        })

    }

    //模态框
     success() {
        Modal.success({
          content:this.state.content,
        });
      }

      
    render() { 
        let arr=this.state.cuponArr.map((item,index)=>{
            return(
            <div className="cuoponBox cuoponFlex" key={index}>
                {/* 优惠券1 */}
                <div className="cuoponBox_content cuoponFlex" onClick={this.cuopon.bind(this,1)}>
                <div className="cuoponBox_Money">{item.money}</div>
                <div className="cuoponBox_text">{item.title}</div>
                </div>
                </div>
                )
            })
        return ( 
                <div className="Furniture">
                    <HeaderSearch></HeaderSearch>
                    <HeaderBanner></HeaderBanner>
                    {/* //优惠券 */}
                    {arr}
                   {/* 卧室 */}
                    <div className="cuoponBox">
                        <FurnitureArr></FurnitureArr>
                    </div>
                    {/* <Footer></Footer> */}
                </div>
         );
    }
}
 
export default Furniture_Museum;
