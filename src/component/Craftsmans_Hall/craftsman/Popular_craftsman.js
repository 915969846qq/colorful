import React, { Component } from 'react';
import {Link} from "react-router-dom"

//引入css
import "../css/PopularCraftsman.css"
import "whatwg-fetch"

class PopularCraftsman extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            craftsmanArr:[]
         }
    }
    
    UNSAFE_componentWillMount(){
                fetch('http://47.100.90.56:8080/banJu/craftsmanDetail/selectByHot',{                     
                  method:'POST',
                  headers:{
                      'Content-Type':'application/json' 
                  },
                  // credentials: 'include',
                  // 传参
                  body:JSON.stringify({
                    limit:"4"
                  })
                  }).then((res)=>{            
                      return res.json();       
                  }).then((data)=>{
                    console.log(data);  
                    // 存放数组            
                      this.setState({
                        craftsmanArr:data.data
                      },()=>{
                          this.arr();
                      })
                  }).catch((e) => {
                      console.log("数据有误");
                  });
    }

    //当前点击事件的id
    toDetails = (id,event)=>{
        console.log(id);
     }
     //预约
     book(id,e){
        console.log(id);
    }
    //函数
    arr=()=>{
        let arr=this.state.craftsmanArr.map((item)=>{
            return (
              <div className="craftsman craftsmancss" key={item.id}>
                  {/* 点击图片进入详情页面 */}
                  <Link to={
                      {
                          pathname:`/Craftsman_details`,
                          state:{key:item.id}
                      }
                      
                  }>
                      <img src={require(`../../../${item.avatar}`)} alt="" className="cursor" onClick={this.toDetails.bind(this,item.id)} className="imgSize"/></Link>
                  <div className="flex craftsman_Info">
                      <div>
                          <Link to={
                              {
                                  pathname:`/Craftsman_details`,
                                  state:{key:item.id}
                              }
                      
                          }> 
                          {/* onClick={this.toDetails.bind(this,item.id)} */}
                          <span className="craftsman_name cursor" >{item.realName}</span>
                          </Link>
                          <span className="cursor">{item.occupation}首席师{item.experience}年</span>
                      </div>
                      <div className="TranslateNow cursor" onClick={this.book.bind(this,item.id)}>立即预约</div>
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
            <div className="craftsmanStyle flex">
                {/* 热门工匠 */}
                {this.state.arr}

                </div>
         );
    }
}
 
export default PopularCraftsman;