import React, { Component } from 'react';
import './css/secprodmarket-message.css'
import {Button,Modal,Space} from 'antd'
import Myfooter from '../commen/footer'
import Myheader from '../commen/header'
import Mysecheader from './secheader'
import CAxios from '../../util/chenmingaxios';
class secprodmarket_detail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            uid:null,
                secid:parseInt(this.props.match.params.id),
            secdetail:{
                title:"",
               
                 price:"",
                 img:["assets/images/dianqi1_1.jpg","assets/images/min-banner1_03.jpg"],
                 address:"",
                furtherAddress:"",
                 phoneNumber:"",
                  user:{
                      name:"",
                      avatar:"assets/images/craftsman_07.jpg",
                      createdDate:""
                  },
                  newOld:"",
                  description:""
              
                 },
        secimgdiv:[],
        shoucang:"收藏",
        alert:"添加成功"
        }
    }

   // ============================购物车============================================
addtocart=()=>{
    if(sessionStorage.getItem("user")!==null){
let mm={uid:this.state.uid,secid:this.state.secid,status:0}
        CAxios.post(`/banJu/user/usergoods`,mm).then((res)=>{   
         
                  return res.data;       
              }).then((data)=>{
     
                this.setState({
                    alert:data.msg
                },()=>{
                    this.info()
                })
              }).catch((e) => {
                    
              });
}else{
    location.href="/Sign_in"
}
}



// ==============================收藏查询=================
searchshoucang=(e)=>{
     CAxios.post(`/banJu/user/ifusersecgoods`,e).then((res)=>{   
         console.log(res)
                  return res.data;       
              }).then((data)=>{
        console.log(data.msg)
                this.setState({
                    shoucang:data.msg
                })
              }).catch((e) => {
                    
              });
}


// ==============================================删除收藏============
deleteshoucang=(e)=>{
    CAxios.post(`/banJu/user/deleteuseridgoods`,e).then((res)=>{   
                  return res.data;       
              }).then((data)=>{
        console.log(data.msg)
                this.setState({
                    shoucang:data.msg
                })
              }).catch((e) => {
                    
              });
}







// ================================================================添加收藏
addshoucang=(e)=>{
     CAxios.post(`/banJu/user/userssecgoods`,e).then(
        (res)=>{   
                  return res.data;       
              }).then((data)=>{
        console.log(data.msg)
                this.setState({
                    shoucang:data.msg
                })
              }).catch((e) => {
                    
              });
}





// ========================================获取数据=====================================

getproduct=(e)=>{

            CAxios.post(`/banJu/secondHand/findById`,e).then((res)=>{   
                      console.log(res)
                  return res.data;       
              }).then((data)=>{
      console.log(data.data)
  
        this.setState({
            secdetail:{
              title:data.data.title,
               price:data.data.price,
               img:["assets/images/dianqi1_1.jpg","assets/images/min-banner1_03.jpg"],
               address:data.data.address,
              furtherAddress:data.data.furtherAddress,
               phoneNumber:data.data.phoneNumber,
                user:{
                    name:data.data.user.name,
                    avatar:"assets/images/craftsman_07.jpg",
                    createdDate:data.data.createdDate
                },
                newOld:data.data.newOld,
                description:data.data.description
            
               }
        },()=>{
            let secimgdiv=this.state.secdetail.img.map((item,index)=>{
                console.log(item)
                return (
                    <img  src={require(`../../${item}`)} style={{marginRight:10,width:300,height:300}} key={"sec"+index} alt="商品图片"/>
                )
            })
            this.setState({
                secimgdiv:secimgdiv
            })
        })
               
              }).catch((e) => {
                    
              });
        }




// =======================================页面初始化=================================
componentDidMount(){



    this.getproduct({id:parseInt(this.state.secid)})
   
    if(sessionStorage.getItem("user")!==null){
        this.setState({
            uid:(JSON.parse(sessionStorage.getItem("user")).id)
        },()=>{
            this.searchshoucang({uid:this.state.uid,secid:parseInt(this.props.match.params.id),status:1})
        })  
    }


  
}
 

// ========================================提示信息=================================
info=()=> {
    let that=this
    Modal.info({
    
      content: (
        <div>
          <p>{that.state.alert}</p>
        </div>
      ),
      onOk() {  },
    });
  }


// =============================收藏=======================================
shoucang=()=>{
   
    if(sessionStorage.getItem("user")!==null){
 if(this.state.shoucang==="收藏"){
       this.addshoucang({uid:this.state.uid,secid:parseInt(this.props.match.params.id),status:1})
    }else if(this.state.shoucang==="已收藏"){
        this.deleteshoucang({uid:this.state.uid,secid:parseInt(this.props.match.params.id)})
    }
    }else{
        location.href="/Sign_in"
    }
   
}






// ===============================购买============================================


    render() { 
     
        return ( 
            <div>
                <Myheader></Myheader>
                <Mysecheader></Mysecheader>
               <div className="sec_detail_bigwrap">
                {/* 主要内容盒子 */}
                <div className="sec_detail_wrap">
                {/* 详细信息盒子 */}
               <div className="sec_detail_box">
                <p className="sec_detail_header">{this.state.secdetail.title}  {this.state.secdetail.price}元</p>
                <div className="sec_detail">
                    <img src={require(`../../${this.state.secdetail.img[0]}`)} alt="商品图"/>
                    <div >
                        <p >价格：{this.state.secdetail.price}</p>
                        <p>成色：{this.state.secdetail.newOld}</p>
                        <p>区域：{this.state.secdetail.address}</p>
                        <p>卖家：{this.state.secdetail.user.name}</p>
                        <p>电话：{this.state.secdetail.phoneNumber}</p>
                        <p>咨询：<span className="leavemessage">电话联系</span></p>
                        <div className="save_and_share">
                        <Button onClick={this.shoucang}>{this.state.shoucang}</Button>
                            <Button>分享</Button>
                           
                        </div>
                        <Space>
                            <Button type="primary" danger style={{width:200,marginTop:15}} onClick={this.addtocart}>加入购物车</Button>
                           </Space>
                            <Button type="primary" danger style={{width:200,marginTop:10}}>购买</Button>
                    </div>
                </div>
                </div>
                 {/* 卖家头像 与名字信息*/}
               <div className="sec_seller_info">
                   <div className="sec_sellerimg">
                        <img src={require(`../../${this.state.secdetail.user.avatar}`)} alt="卖家图片"/>
                   </div>
                   <p className="sec_seller">{this.state.secdetail.user.name}</p>
            <p>注册时间：
                {this.state.secdetail.user.createdDate.substring(0,10)}
                </p>
               </div>
               </div>
              <p className="secprod_history">TA的故事</p>
               {/* 商品描述与图片 */}
               <div className="secprod_describe">
                    <p>新旧程度：{this.state.secdetail.newOld}</p>
                    <p>详细情况：{this.state.secdetail.description}</p>
                    <div style={{display:"flex"}}>
                       {this.state.secimgdiv}
                    </div>
               </div>
               </div>
               <Myfooter></Myfooter>
            </div>
         );
    }
}
 
export default secprodmarket_detail;