import React, { Component } from 'react';
import {Link} from "react-router-dom"

//引入css
import "../css/PopularCraftsman.css"
import "whatwg-fetch"

class PopularCraftsman extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            craftsmanArr:[
                // {
                //     id:4,
                //     img:"assets/images/craftsman_07.jpg",
                //     name:"老王",
                //     info:"首席漆工6年"
                // },
                // {
                //     id:5,
                //     img:"assets/images/craftsman_07.jpg",
                //     name:"老李",
                //     info:"首席漆工6年"
                // },
                // {
                //     id:6,
                //     img:"assets/images/craftsman_07.jpg",
                //     name:"老子",
                //     info:"首席漆工6年"
                // },
                // {
                //     id:7,
                //     img:"assets/images/craftsman_07.jpg",
                //     name:"老子",
                //     info:"首席漆工6年"
                // },
            ]
         }
    }
    
    UNSAFE_componentWillMount(){
                fetch('http://172.16.10.10:8080/banJu/craftsmanDetail/selectByHot',{                     
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
                        craftsmanArr:data  
                      })
                  }).catch((e) => {
                      console.log("数据有误");
                  });
    }

    //当前点击事件的id
    toDetails = (id,event)=>{
        console.log(id);
     }
     book(id,e){
        console.log(id);
    }
    render() { 
        let arr=this.state.craftsmanArr.map((item)=>{
              return (
                <div className="craftsman craftsmancss" key={item.id}>
                    {/* 点击图片进入详情页面 */}
                    {/* <Link to={
                        {
                            pathname:`/Craftsman_details`,
                            state:{key:item.id}
                        }
                        
                    }>
                        <img src={require(`${item.avatar}`)// (`../../../${item.img}`)
                        
                    } alt="" className="cursor" onClick={this.toDetails.bind(this,item.id)}/></Link> */}
                    <div className="flex craftsman_Info">
                        <div>
                            <Link to={
                                {
                                    pathname:`/Craftsman_details`,
                                    state:{key:item.id}
                                }
                        
                            }> 
                            <span className="craftsman_name cursor" onClick={this.toDetails.bind(this,item.id)}>{item.realName}</span>
                            </Link>
                            <span className="cursor">{item.occupation}首席师{item.experience}年</span>
                        </div>
                        <div className="TranslateNow cursor" onClick={this.book.bind(this,item.id)}>立即预约</div>
                    </div>
                </div>
              )      
        })
        return ( 
            <div className="craftsmanStyle flex">
                {/* 热门工匠 */}
                {arr}

                </div>
         );
    }
}
 
export default PopularCraftsman;