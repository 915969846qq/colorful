import React, { Component } from 'react';
import {Link} from "react-router-dom"
import "whatwg-fetch"
//模态框
import { Modal, Button, Space } from 'antd';
//引入css
import "../css/PopularCraftsman.css"

class Masons extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            craftsmanArr:[],

             //预约的参数
             bookDate:"",//年月日
             id:"",

             //预约成功的模态框
             content:"",
         }
    }

    UNSAFE_componentWillMount(){
                    fetch('http://47.100.90.56:8080/banJu/craftsmanDetail/selectNiGongByHot',{                     
                      method:'POST',
                      headers:{
                          'Content-Type':'application/json' 
                      },
                      credentials: 'include',
            // 传参
                      body:JSON.stringify({
                            limit:"3"
                      })
                      }).then((res)=>{            
                          return res.json();       
                      }).then((data)=>{
                        console.log(data);  
            // 存放数组            
                          this.setState({
                            craftsmanArr:data.data},()=>{
                                this.arr();
                            }
                            )
                      }).catch((e) => {
                          console.log("数据有误");
                      });
    }

    //当前点击事件的id
    toDetails = (id,event)=>{
        console.log(id);
        this.setState({
            id,
        })
        // console.log(this.state);
        // console.log(event.currentTarget.parentElement.parentElement.getAttribute('data-key'));
        // console.log(event.currentTarget.getAttribute("key"));
        // console.log(event);
        }
        
    //预约
    book = (id, e) => {
        console.log(id)
        //点击预约，文字样式改变
        e.target.style.color="gray";
        // e.target.style.background="gray";
        e.target.innerHTML="已预约";

        var date=new Date();
        let year=date.getFullYear();//年
        let mouth=date.getMonth()+1;//月
        let day=date.getDate();//日

        //拼接年月日
        let myDate=year+"-"+mouth+"-"+day;
        console.log(typeof (myDate));
        this.setState({
            // status:"true",
            bookDate:date,
            id:id,
        },()=>{
            console.log(typeof(this.state.id))
            fetch('http://47.100.90.56:8080/banJu/user/reservation',{           
                        method:'POST',
                        headers:{
                            'Content-Type':'application/json' 
                        },
                        credentials: 'include',
                        // 传参
                        body:JSON.stringify({
                          reservationDate: this.state.bookDate,
                          uid: 1,
                          cid:this.state.id,
                        })
                        }).then((res)=>{
                            return res.json();       
                        }).then((data)=>{
                          console.log(data);  
                     
                            // 存放数组            
                            this.setState({
                            content:data.msg,
                            },()=>{
                                this.arr();
                                this.success();
                            })
                        }).catch((e) => {
                            console.log("数据有误");
                        })
          }
          );
        
    }

    //模态框
    success() {
        Modal.success({
          content:this.state.content,
        });
      }


    //函数
    arr=()=>{
            let arr=this.state.craftsmanArr.map((item)=>{
                return (
                  <div className="craftsman craftsmancss" key={item.id}>
                      {/* <Link to={
                          {
                              pathname:`/Craftsman_details`,
                              state:{key:item.id}
                          }
                          
                      }
                      // {"/Craftsman_details/"+item.id}
                      ><img src={require(`../../../${item.avatar}`)} alt="" onClick={this.toDetails.bind(this,item.id)}/></Link> */}
                      <div className="flex craftsman_Info">
                          <div>
                              <span className="craftsman_name cursor">{item.realName}</span>
                              <span className="cursor">{item.occupation}首席师{item.experience}年</span>
                          </div>
                          <div className="TranslateNow">立即预约</div>
                      </div>
                  </div>
                )      
          });
          this.setState({
              arr,
          })
    }
    
    render() { 
        let arr=this.state.craftsmanArr.map((item)=>{
            console.log(this.state.craftsmanArr);
            return (
              <div className="craftsman craftsmancss" key={item.id}>
                  {/* <Link to={
                      {
                          pathname:`/Craftsman_details`,
                          state:{key:item.id}
                      }
                      
                  }
                  // {"/Craftsman_details/"+item.id}
                  ><img src={require(`../../../${item.avatar}`)} alt="" onClick={this.toDetails.bind(this,item.id)}/></Link> */}
                  <div className="flex craftsman_Info">
                      <div>
                          <span className="craftsman_name cursor">{item.realName}</span>
                          <span className="cursor">{item.occupation}首席师{item.experience}年</span>
                      </div>
                      <div className="TranslateNow" onClick={this.book.bind(this, item.cid)}>立即预约000001</div>
                  </div>
              </div>
            )      
      });
        return ( 
            <div className="craftsmanStyle flex">
                {/* 热门工匠 */}
                {this.state.arr}

            </div>
         );
    }
}
 
export default Masons;