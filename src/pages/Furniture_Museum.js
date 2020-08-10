import React, { Component } from 'react'


//引入css
import "./css/Furniture_Museum.css"



//引入组件
import BedroomArr from '../component/Furniture_house/bedArr'

//优惠券领取成功模态框
import { Modal, Button, Space } from 'antd';


//家具馆
class Furniture_Museum extends Component {
    constructor(props) {
        super(props);
        this.state = { 
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
    fetch('http://172.16.10.15:8080/banJu/user/getconpon',{           
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
        return ( 
                <div className="Furniture">
                    <div className="cuoponBox cuoponFlex">

                        {/* 优惠券1 */}
                        <div className="cuoponBox_content cuoponFlex" onClick={this.cuopon.bind(this,1)}>
                            <div className="cuoponBox_Money">￥20</div>
                            <div className="cuoponBox_text">优惠券订单满79元立减现领现用</div>
                        </div>
                    
                        {/* 优惠券2 */}
                            <div className="cuoponBox_content cuoponFlex" onClick={this.cuopon.bind(this,2)}>
                                <div className="cuoponBox_Money" >￥20</div>
                                <div className="cuoponBox_text">优惠券订单满79元立减现领现用</div>
                            </div>
                        {/* 优惠券3 */}
                        <div className="cuoponBox_content cuoponFlex" onClick={this.cuopon.bind(this,3)}>
                            <div className="cuoponBox_Money">￥20</div>
                            <div className="cuoponBox_text">优惠券订单满79元立减现领现用</div>
                        </div>

                    </div>
                    {/* 卧室 */}
                    <div className="cuoponBox">
                        <BedroomArr></BedroomArr>
                    </div>
                    
                </div>
         );
    }
}
 
export default Furniture_Museum;
