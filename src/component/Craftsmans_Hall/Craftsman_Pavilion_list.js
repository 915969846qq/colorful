import React, { Component } from 'react';

//引入css
import "./css/PopularCraftsman.css"

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
            <div className="craftsmanStyle flex">
                {/* 工匠人员 */}

                {arr}

            </div>
         );
    }
}
 
export default Craftsman_Pavilion_list ;