import React, { Component } from 'react'
import './css/Secondhand_Market.css'
// 二手市场
export default class Secondhand_Market extends Component {
    render() {
        return (
            <div>
                {/* 二手馆 */}

    constructor(){
        super()
        this.state={
            menu:[
                {productclass:["闲置真心送","二手手机","台式电脑","笔记本","平板电脑","数码产品","家用电器","二手家具","服饰箱包"]},
                {region:["全成都","武侯区","金牛区","锦江区","青羊区","高新区","成华区","双流","郫县","龙泉驿","金堂","彭州","简阳","蒲江","都江堰","温江","邛崃","新津"]},
                {price:["不限","20以下","20-160","160-500","500-1500","1500-4900","4900以上"]},
        ],
        selectmenu1:[],
        selectmenu2:[],
        selectmenu3:[],
        selectsubmit:{}
        }
    }
    bindmenu(menulist,num){
        console.log(menulist)
      let selectmenu=menulist.map((item,index)=>{
            return <li key={num+index}>{item}</li>
        })
        return selectmenu;
    }
    more=()=>{
        let selectmenu2=this.bindmenu(this.state.menu[1].region,"region");
        this.setState({
            
            selectmenu2:selectmenu2,
           
        })
    }
    componentDidMount(){
            let selectmenu1=this.bindmenu(this.state.menu[0].productclass,"productclass")
            let selectmenu2=this.bindmenu(this.state.menu[1].region.slice(0,6),"region")
            let selectmenu3=this.bindmenu(this.state.menu[2].price,"price")
            this.setState({
                selectmenu1:selectmenu1,
                selectmenu2:selectmenu2,
                selectmenu3:selectmenu3
            })
    }
    render() {
        return (
            <div>
                 {/* 二手馆 */}
                <div>
                    {/* 搜索框盒子 */}
                    <div className="searchbox">
                        {/* //二手 */}
                        <div>
                            <div>二手 ：</div>
                               <ul>{this.state.selectmenu1}</ul> 
                        </div>
                        {/* 地区 */}
                        <div>
                            <div>地区 ：</div>
                            <ul >{this.state.selectmenu2}
                                <li style={{position:"relative"}} onClick={this.more}>更多<span style={{fontSize:20,position:"absolute",top:-6}}>&gt;</span></li>
                            </ul> 

                        </div>
                        {/* 价格 */}
                        <div>
                            <div>价格 ：</div>
                            <ul>{this.state.selectmenu3}
                                <div>
                                    <span>自定义价格 ：</span>
                                    <input type="text" placeholder="最低" style={{width:70,height:20,border: "1px solid #b1b1b1",}} />
                                    <input type="text" placeholder="最高" style={{width:70,height:20,border: "1px solid #b1b1b1",}} />
                                    <button type="button" className="submitprice">确认</button>
                                </div>
                            </ul> 
                     
                        </div>
                    </div>
                    {/* 排序盒子 */}
                    <div className="sortproduct">
                        <div>
                            <ul>
                                <li>默认排序</li>
                                <li>最新发布</li>
                                <li>价格</li>
                                <li>只看有图</li>
                            </ul>
                        </div>
                    </div>
                    {/* 搜索结果 */}
                </div>

            </div>
        )
    }
}
