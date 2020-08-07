import React, { Component } from 'react';

//引入css
import "../css/PopularCraftsman.css"
//引入antd
import { Pagination } from 'antd';

class designCase extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            current: 1,
            person:[
                {
                    craftsmanImg:"assets/images/min-banner1_03.jpg",
                    title:"北欧简约风二居室装修案例图片",
                    style:"风格：简约",
                    date:"2020-8-2"
                },
                {
                    craftsmanImg:"assets/images/min-banner1_03.jpg",
                    title:"北欧简约风二居室装修案例图片",
                    style:"风格：中式",
                    date:"2020-7-2"
                },
                {
                    craftsmanImg:"assets/images/min-banner1_03.jpg",
                    title:"北欧简约风二居室装修案例图片",
                    style:"风格：轻奢",
                    date:"2020-8-2"
                },
                {
                    craftsmanImg:"assets/images/min-banner1_03.jpg",
                    title:"北欧简约风二居室装修案例图片",
                    style:"风格：轻奢",
                    date:"2020-8-2"
                },
            ]
         }
    }
    // componentWillMount(){
    //             fetch('http://172.16.10.15:8080/banJu/user/login',{                     
    //               method:'POST',
    //               headers:{
    //                   'Content-Type':'application/json' 
    //               },
    //               credentials: 'include',
    //     // 传参
    //     //           body:JSON.stringify({
    //     //             phoneNumber:this.state.num
    //     //           })
    //               }).then((res)=>{            
    //                   return res.json();       
    //               }).then((data)=>{
    //                 console.log(data);  
    //     // 存放数组            
    //                   this.setState({
    //                       yanzhengma:data  
    //                   })
    //               }).catch((e) => {
    //                   console.log("数据有误");
    //               });
    // }
    onChange = page => {
        console.log(page);
        this.setState({
          current: page,
        });
      };
    render() { 
        let arr=this.state.person.map((item,index)=>{
            return(
                <div className="craftsman" key={index}>
                    <img src={require(`../../../${item.craftsmanImg}`)} alt="" className="caseImg"/>
                    <div className="craftsman_list_padding">
                        <div className="craftsman_Info">{item.title}</div>
                        <div className="flex craftsman_Info">
                            <span>{item.style}</span>
                            <div>{item.date}</div>
                        </div>
                    </div>
                </div>
            )
        })
        return ( 
            //外层css取名
            <div className="craftsmancss">

                <div className="flex craftsmanStyle ">
                    {arr}
                    <div className="page"><Pagination current={this.state.current} onChange={this.onChange} total={50} /></div>
                </div>
            </div>
         );
    }
}
 
export default designCase;