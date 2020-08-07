import React, { Component } from 'react';
import { Row, Col, } from 'antd';

//引入css
import "./css/PopularCraftsman.css"

//引入底部
import Footer from '../commen/footer'


//引入icon
import "./icon/iconfont.css"

class Craftsman_Pavilion_list extends Component {
       constructor(props) {
        super(props);
        this.state = { 
            craftsmanArr:[
                {
                    img:"assets/images/craftsman_07.jpg",
                    name:"王师傅",
                    company:"成都欧元装饰公司",
                    fans:2355
                },
                {
                    img:"assets/images/craftsman_07.jpg",
                    name:"王师傅",
                    company:"成都欧元装饰公司",
                    fans:2355
                },
                {
                    img:"assets/images/craftsman_07.jpg",
                    name:"王师傅",
                    company:"成都欧元装饰公司",
                    fans:2355
                },  {
                    img:"assets/images/craftsman_07.jpg",
                    name:"王师傅",
                    company:"成都欧元装饰公司",
                    fans:2355
                },
                {
                    img:"assets/images/craftsman_07.jpg",
                    name:"王师傅",
                    company:"成都欧元装饰公司",
                    fans:2355
                },
                {
                    img:"assets/images/craftsman_07.jpg",
                    name:"王师傅",
                    company:"成都欧元装饰公司",
                    fans:2355
                },
                {
                    img:"assets/images/craftsman_07.jpg",
                    name:"王师傅",
                    company:"成都欧元装饰公司",
                    fans:2355
                },  {
                    img:"assets/images/craftsman_07.jpg",
                    name:"王师傅",
                    company:"成都欧元装饰公司",
                    fans:2355
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
    render() { 
        let arr=this.state.craftsmanArr.map((item,index)=>{
              return (
                <div className="craftsman" key={index}>
                    <img src={require(`../../${item.img}`)} alt="" className="pavilionLImg"/>
                    <div className="craftsman_list_padding">
                        <div className="flex craftsman_Info">
                            <div className="craftsman_list_name">{item.name}</div>
                            <div className="craftsman_company">{item.company}</div>
                        </div>
                        <div className="flex craftsman_Info">
                            <span><span class="iconfont icon-aixin"></span>{item.fans}</span>
                            <div className="design cursor">预约设计</div>
                        </div>
                    </div>
                </div>
              )      
        })
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
                            <div className="tableBox_left ">职位</div>
                            <div className="tableBox_right">
                                <span>不限</span>
                                <span>木工</span>
                                <span>泥工</span>
                                <span>漆工</span>
                            </div>
                        </div>
                        {/* 第2行 */}
                        <div className="tableBox flex liStyle">
                            {/* 左边 */}
                            <div className="tableBox_left ">经验</div>
                            <div className="tableBox_right">
                                <span>不限</span>
                                <span>1-2年</span>
                                <span>2-5年</span>
                                <span>5-8年</span>
                            </div>
                        </div>
                        {/* 第3行 */}
                        <div className="tableBox flex liStyle">
                            {/* 左边 */}
                            <div className="tableBox_left ">经验</div>
                            <div className="tableBox_right">
                                <span>不限</span>
                                <span>1-2年</span>
                                <span>2-5年</span>
                                <span>5-8年</span>
                            </div>
                        </div>
                        {/* 第4行 */}
                        <div className="tableBox flex liStyle">
                            {/* 左边 */}
                            <div className="tableBox_left ">经验</div>
                            <div className="tableBox_right">
                                <span>不限</span>
                                <span>1-2年</span>
                                <span>2-5年</span>
                                <span>5-8年</span>
                            </div>
                        </div>
                    </div>
                    {/* bottom */}
                    <div className="table-bottom">
                        <span>今日推荐</span>
                        <span>最受欢迎</span>
                        <span>人气排行</span>

                    </div>
                </div>    
                {/* 工匠人员 */}
                <div className="craftsmanStyle flex ">
                    

                    {arr}

                </div>
                <Footer></Footer>
            </div>
         );
    }
}
 
export default Craftsman_Pavilion_list ;