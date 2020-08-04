import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Button,Input} from 'antd'
import './css/Secondhand_Market.css'
import './css/secondhand_Market_Detail.css'
import $ from 'jquery'
// 二手市场

export default class Secondhand_Market extends Component {
    constructor(){
        super()
        this.state={
            menu:[
                {productclass:["二手手机","台式电脑","笔记本","平板电脑","数码产品","家用电器","二手家具","服饰箱包"]},
                {region:["武侯区","金牛区","锦江区","青羊区","高新区","成华区","双流","郫县","龙泉驿","金堂","彭州","简阳","蒲江","都江堰","温江","邛崃","新津"]},
                {price:["20以下","20-160","160-500","500-1500","1500-4900","4900以上"]},
            ],
        selectmenu1:[],
        selectmenu2:[],
        selectmenu3:[],
        selectnewstatus:"闲置真心送",
        selectregion:"全成都",
        selectprice:"20以下",
        minprice:"",
        maxprice:"",
        currentpage:1,
        selectinfo:[
                {
                    selectid:1,
                    imgsrc:"min-banner1_03.jpg", 
                    sec_title:"出售实木托盘（全城最低价格,绝对）",
                    sec_price:0, sec_detailregion:"天府二街",
                    sec_sellerimg:"craftsman_07.jpg",
                    sec_sellername:"方太总",
                },
                {
                    selectid:2,
                    imgsrc:"min-banner1_03.jpg", 
                    sec_title:"出售实木托盘（全城最低价格,绝对）",
                    sec_price:0, sec_detailregion:"天府二街",
                    sec_sellerimg:"craftsman_07.jpg",
                    sec_sellername:"方太总",
                },
                {
                    selectid:3,
                    imgsrc:"min-banner1_03.jpg", 
                    sec_title:"出售实木托盘（全城最低价格,绝对）",
                    sec_price:0, sec_detailregion:"天府二街",
                    sec_sellerimg:"craftsman_07.jpg",
                    sec_sellername:"方太总",
                },
                {
                    selectid:4,
                    imgsrc:"min-banner1_03.jpg", 
                    sec_title:"出售实木托盘（全城最低价格,绝对）",
                    sec_price:0, sec_detailregion:"天府二街",
                    sec_sellerimg:"craftsman_07.jpg",
                    sec_sellername:"方总",
                },
            
            ],
        // 商品盒子
        selectproductresultbox:[]
        }
    }
// =======================================商品渲染===============================
  bindselectproduct(productselect,page){
      let productselect1=productselect.slice((page-1)*2,page*2)
      let productsmall=productselect1.map((item)=>{
          return ( 
           
                <div className="secprod_detailbox" key={item.selectid}>  
                 <Link to={"/Secondhand_Market/Secdetail/"+item.selectid}>
                    <div className="secprod_detail">
                        <img src={require(`../../assets/images/${item.imgsrc}`)} alt="二手货"/>
                        <div className="sec-textbox">
                            <p className="sec_title">{item.sec_title}</p>
                            <p>
                                <span className="sec_price">{item.sec_price}元</span>
                                <span className="sec_detailregion">{item.sec_detailregion}</span>
                            </p>
                            <p className="sec_seller_wrap">
                                <img className="secbox_sellerimg" src={require(`../../assets/images/${item.sec_sellerimg}`)} alt=""/>
                                <span>{item.sec_sellername}</span>
                            </p>
                        </div>
                    </div>  
                </Link> 
                </div>
          
      )

      })
      return productsmall
  }



    // ========================================页面初始化=========================================
    componentDidMount(){
        let selectmenu1=this.bindmenu(this.state.menu[0].productclass,"productclass")
        let selectmenu2=this.bindmenu(this.state.menu[1].region.slice(0,6),"region")
        let selectmenu3=this.bindmenu(this.state.menu[2].price,"price")
        this.setState({
            selectmenu1:selectmenu1,
            selectmenu2:selectmenu2,
            selectmenu3:selectmenu3
        })
       let that=this;

        let productlist=this.bindselectproduct(this.state.selectinfo,1)
this.setState({
    selectproductresultbox:productlist
})



        // ==============================筛选搜索事件==========================
      setTimeout(function() {
          $("li").click(function () {
              let mydataname=$(this).parent().eq(0).attr("id")
              let mydata=$(this)[0].innerHTML
              $(this).parent().children().removeClass("red")
              $(this).addClass("red")
              if(mydataname==="selectprice"){
                that.state.maxprice="";
                that.state.minprice=""
              }
            that.setState({
                [mydataname]:mydata
            })
          })
      })        
}











// ========================================筛选菜单循环初始化=========================================
    bindmenu(menulist,num){
        
      let selectmenu=menulist.map((item,index)=>{
            return <li key={num+index}>{item}</li>
        })
        return selectmenu;
    }


    // ===========================================更多=========================================
    more=()=>{
        let selectmenu2=this.bindmenu(this.state.menu[1].region,"region");
        this.setState({
            
            selectmenu2:selectmenu2,
           
        })
    }


  // ======================================价格双向数据绑定==================================

  price=(inform,e)=>{
    this.setState({
        [inform]:e.target.value
    })
}


// ==============================价格输入框=========================================

blurprice=(inform,e)=>{
    let myid=e.target.id
    let price2=$("#"+myid).siblings("input").eq(0).attr("id")
    if(this.state[inform].length!==0||this.state[price2].length!==0){
        $("#selectprice").children("li").removeClass("red")
    }else{
        this.setState({
            selectprice:"不限"
        },()=>{})
       
        $(".autoprice").eq(0).addClass("red")
    } 
} 






// =========================================确认搜索============================================

submitinfo=()=>{
 
     let selectprice=""
    let mymin=this.state.minprice.length
    let mymax=this.state.maxprice.length
    if(mymin!==0||mymax!==0){
        if(mymin!==0&&mymax!==0){
            selectprice=this.state.minprice+"-"+this.state.maxprice
        }else if(mymin!==0&&mymax===0){
            selectprice=this.state.minprice+"以上"
           
        }else if(mymin===0&&mymax!==0){
            selectprice=this.state.maxprice+"以下"
        }
    }else{
       selectprice=this.state.selectprice
    }
     let selectvalue={
         selectnewstatus:this.state.selectnewstatus,
         selectregion:this.state.selectregion,
         selctprice:selectprice
     }
   
    
    console.log(selectvalue)
   
}

// ===================================上一页==============================================
pagetoprev=()=>{
    if(this.state.currentpage-1>=1){
this.setState({
        currentpage:this.state.currentpage-1
    },()=>{
        console.log(this.state.currentpage)
        let productlist=this.bindselectproduct(this.state.selectinfo,this.state.currentpage)
        this.setState({
            selectproductresultbox:productlist
        })
    })
    }
    
}


// ======================================下一页=================================================
pagetonext=()=>{
    if(this.state.currentpage+1<=Math.ceil(this.state.selectinfo.length/2)){
this.setState({
        currentpage:this.state.currentpage+1
    },()=>{
        console.log(this.state.currentpage)
        let productlist=this.bindselectproduct(this.state.selectinfo,this.state.currentpage)
        this.setState({
            selectproductresultbox:productlist
        })
    })
    }
    
}

// =====================================输入页码=================================
onchange=(e)=>{
    this.setState({
        currentpage:e.target.value
    })
}
pageto=(e)=>{
    if(e.target.value>0&&e.target.value<=Math.ceil(this.state.selectinfo.length/2)){
        let productlist=this.bindselectproduct(this.state.selectinfo,this.state.currentpage)
        this.setState({
            selectproductresultbox:productlist
        })  
    }else{
        this.setState({
            currentpage:Math.ceil(this.state.selectinfo.length/2)
        },()=>{
            let productlist=this.bindselectproduct(this.state.selectinfo,this.state.currentpage)
        this.setState({
            selectproductresultbox:productlist
        }) 
        })
    }
}








    render() {
        
        return (
            <div>
                 {/* 二手馆 */}
                <div>
                    {/* 搜索框盒子 */}
                    <div className="searchbox">
                        {/* //二手 */}
                        <div >
                            <div>二手 ：</div>
                               <ul id="selectnewstatus">
                                    <li className="red">闲置真心送</li>
                                   {this.state.selectmenu1}
                                </ul> 
                        </div>
                        {/* 地区 */}
                        <div >
                            <div >地区 ：</div>
                            <ul id="selectregion" >
                                <li className="red">全成都</li>
                                {this.state.selectmenu2}
                                <li style={{position:"relative"}} onClick={this.more}>更多<span style={{fontSize:20,position:"absolute",top:-6}}>&gt;</span></li>
                            </ul> 

                        </div>
                        {/* 价格 */}
                        <div >
                            <div>价格 ：</div>
                            <ul id="selectprice">
                                <li className="red autoprice">不限</li>
                                {this.state.selectmenu3}
                                <div>
                                    <span>自定义价格 ：</span>
                                    <input id="minprice" type="number" value={this.state.minprice} onChange={this.price.bind(this,"minprice")} onBlur={this.blurprice.bind(this,"minprice")}  placeholder="最低" style={{width:70,height:20,border: "1px solid #b1b1b1",}} />----
                                    <input id="maxprice" type="number" value={this.state.maxprice} onChange={this.price.bind(this,"maxprice")} onBlur={this.blurprice.bind(this,"maxprice")} placeholder="最高" style={{width:70,height:20,border: "1px solid #b1b1b1",}} />
                                    <button type="button" className="submitprice" onClick={this.submitinfo}>确认</button>
                                </div>
                            </ul> 
                     
                        </div>
                    </div>
                    {/* 排序盒子 */}
                    <div className="sortproduct">
                        <div>
                            <ul>
                                <li className="red">默认排序</li>
                                <li>最新发布</li>
                                <li>价格</li>
                                <li>只看有图</li>
                            </ul>
                        </div>
                    </div>
                    {/* 搜索结果 */}
                    <div className="secproductselectbox">
                        {this.state.selectproductresultbox}
                        {/* <div className="secprod_detailbox">
                            <div className="secprod_detail">
                                <img src={require(`../../assets/images/min-banner1_03.jpg`)} alt="二手货"/>
                                <div className="sec-textbox">
                                    <p className="sec_title">{this.state.sec_title}</p>
                                    <p>
                                        <span className="sec_price">{this.state.sec_price}元</span>
                                        <span className="sec_detailregion">{this.state.sec_detailregion}</span>
                                    </p>
                                    <p className="sec_seller_wrap">
                                        <img className="secbox_sellerimg" src={require(`../../assets/images/craftsman_07.jpg`)} alt=""/>
                                        <span>{this.state.sec_sellername}</span>
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    
{/* =====================================分页按钮========================================= */}
                       <div class="chenmingpagebuttonbox">
                            <div className="chenmingpagebutton">
                                <Button onClick={this.pagetoprev} type="primary">上一页</Button>
                                <Input value={this.state.currentpage} type="number" onBlur={this.pageto} onChange={this.onchange} style={{width:50,height:32,fontSize:20,textAlign:"center",marginLeft:10}}></Input>
                                <span style={{height:32,lineHeight:1,display:"inline-block",marginRight:"5px",fontSize:24}}>/{Math.ceil(this.state.selectinfo.length/2)}</span>
                                <Button onClick={this.pagetonext} type="primary">下一页</Button>
                            </div>   
                        </div>         
                </div>
            </div>
        )
    }
}
