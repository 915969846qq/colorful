import React, { Component } from 'react';
import {Link} from 'react-router-dom'

//引入css
import "./css/bedArr.css"
//引入底部
import Footer from"../../component/commen/footer"

class bedArr extends Component {
    constructor(props) {
        super(props);
        this.state = { 
             FurnitureArr:[
                {
                    id:1,
                    img:"assets/images/min-banner1_03.jpg",
                    title:"多空间纯木质大空间把手晾衣柜",
                    preMoney:"￥669",
                    money:369,
                    sale:200,
                },
                {
                    id:2,
                    img:"assets/images/min-banner1_03.jpg",
                    title:"多空间纯木质大空间把手晾衣柜",
                    preMoney:"￥669",
                    money:369,
                    sale:200,
                },
                {
                    id:3,
                    img:"assets/images/min-banner1_03.jpg",
                    title:"多空间纯木质大空间把手晾衣柜",
                    preMoney:"￥669",
                    money:369,
                    sale:200,
                },
                {
                    id:4,
                    img:"assets/images/min-banner1_03.jpg",
                    title:"多空间纯木质大空间把手晾衣柜",
                    preMoney:"￥669",
                    money:369,
                    sale:200,
                },
                {
                    id:5,
                    img:"assets/images/min-banner1_03.jpg",
                    title:"多空间纯木质大空间把手晾衣柜",
                    preMoney:"￥669",
                    money:369,
                    sale:200,
                },
                {
                    id:6,
                    img:"assets/images/min-banner1_03.jpg",
                    title:"多空间纯木质大空间把手晾衣柜",
                    preMoney:"￥669",
                    money:369,
                    sale:200,
                },
                {
                    id:7,
                    img:"assets/images/min-banner1_03.jpg",
                    title:"多空间纯木质大空间把手晾衣柜",
                    preMoney:"￥669",
                    money:369,
                    sale:200,
                },
                {
                    id:8,
                    img:"assets/images/min-banner1_03.jpg",
                    title:"多空间纯木质大空间把手晾衣柜",
                    preMoney:"￥669",
                    money:369,
                    sale:200,
                },
               
            ],
            parlour:[
                {
                    id:1,
                    img:"assets/images/duanwujiancai_03.jpg",
                    title:"乐驰剑姬落地窗帘",
                    money:"￥45.00",
                },
                {
                    id:4,
                    img:"assets/images/duanwujiancai_03.jpg",
                    title:"乐驰剑姬落地窗帘",
                    money:"￥45.00",
                },
                {
                    id:5,
                    img:"assets/images/duanwujiancai_03.jpg",
                    title:"乐驰剑姬落地窗帘",
                    money:"￥45.00",
                },
                {
                    id:6,
                    img:"assets/images/duanwujiancai_03.jpg",
                    title:"乐驰剑姬落地窗帘",
                    money:"￥45.00",
                },
                {
                    id:7,
                    img:"assets/images/duanwujiancai_03.jpg",
                    title:"乐驰剑姬落地窗帘",
                    money:"￥45.00",
                },
                {
                    id:8,
                    img:"assets/images/duanwujiancai_03.jpg",
                    title:"乐驰剑姬落地窗帘",
                    money:"￥45.00",
                },
            ]
    
         }
    }
    change(id,e){
        console.log(id);
    }
    render() { 
        let bedroomArr=this.state.FurnitureArr.map((item)=>{
            return (
                    <div className="craftsman" key={item.id}>
                        <Link to={
                            {
                                pathname:`/Furniture_Museum_details`,
                                state:{key:item.id}
                            }
                        }><img src={require(`../../${item.img}`)} alt="" className="pavilionLImg" onClick={this.change.bind(this,item.id)}/></Link>
                        <div className="craftsman_list_padding">
                            <div className="craftsman_list_name">{item.title}</div>
                            <div className="craftsman_Info Flex">
                                <div className="">
                                    <span className="money-small">￥<span className="money-money">{item.money}</span></span>
                                    <u className="money-big">{item.preMoney}</u>
                                </div>
                                <div className="money-sale">已售{item.sale}</div>
                            </div>
                                
                        </div>
                    </div>
            )      
        });
        let parlourArrLeft=this.state.parlour.map((item)=>{
            return (
                   <div className="parlourStyle" key={item.id}>
                       <div className="parlourStyleTitle">{item.title}</div>
                       <div className="parlourStyleMoney">{item.money}</div>
                            <img src={require(`../../${item.img}`)} alt="" className="parlourStyleImg"/>
                   </div>
            )      
        });
        
        return ( 
            <div className="bedStyle">

                {/* 卧室 */}
                <div className="title">1F 卧室</div>
                <div className="Flex">
                    {bedroomArr}
                </div>


                {/* 客厅 */}
                <div className="title">2F 客厅</div>
                <div className="Flex ">
                    {/* left */}
                    <div className="saleStyle">
                        <div className="saleTitle">
                            <img src={require(`../../assets/images/twoimages/icon_time_03.png`)} alt="" />
                            <div className="saleFont">新品上架&nbsp;限时抢购</div>
                            <div className="saleGood">精品好货都在这</div>
                        </div>
                        <img src={require(`../../assets/images/duanwujiancai_03.jpg`)} alt="" className="saleImg"/>
                        <div className="Flex">
                            <div className="saleBuy">品质保证还包邮哦！亲</div>
                            <div className="saleBuyNow">￥390<br/>限量抢</div>
                        </div>
                    </div>
                    {/* right */}
                    <div className="Flex size">
                        {parlourArrLeft}
                    </div>
                </div>
                
                <Footer></Footer>

            </div>

         );
    }
}
 
export default bedArr;