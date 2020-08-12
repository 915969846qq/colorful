import React, { Component } from 'react';
import './css/secprodmarket-message.css'
import {Button} from 'antd'
import Myfooter from '../commen/footer'
import Myheader from '../commen/header'
import Mysecheader from './secheader'
class secprodmarket_detail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
            secdetail:{
                title:"",
                 price:"",
                 img:["assets/images/min-banner1_03.jpg","assets/images/min-banner1_03.jpg"],
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
        shoucang:"收藏"
        }
    }


// ========================================获取数据=====================================

getproduct=(e)=>{
   console.log(this.props.match.params.id)
            fetch(`http://172.16.10.4:8080/banJu/secondHand/findById`,{                     
              method:'POST',
              headers:{
                  'Content-Type':'application/json' 
              },
              credentials: 'include',
              body:JSON.stringify(e)
              }).then((res)=>{   
                      
                  return res.json();       
              }).then((data)=>{
      console.log(data.data)
  
        this.setState({
            secdetail:{
              title:data.data.title,
               price:data.data.price,
               img:["assets/images/min-banner1_03.jpg","assets/images/min-banner1_03.jpg"],
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
                    <img src={require(`../../${item}`)} style={{marginRight:10}} key={"sec"+index} alt="商品图片"/>
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

this.getproduct({id:parseInt(this.props.match.params.id)})


   
}
 
// =============================收藏=======================================
shoucang=()=>{
    if(this.state.shoucang==="收藏"){
        this.setState({
            shoucang:"取消收藏"
        },()=>{})
    }else{
        this.setState({
            shoucang:"收藏"
        },()=>{})
    }
}


// ============================分享============================================




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
                    <div>
        <p>价格：{this.state.secdetail.price}</p>

    


            <p>成色：{this.state.secdetail.newOld}</p>
            <p>区域：{this.state.secdetail.address}</p>
            <p>卖家：{this.state.secdetail.user.name}</p>
            <p>电话：{this.state.secdetail.phoneNumber}</p>
                        <p>咨询：<span className="leavemessage">给我留言</span></p>
                        <div className="save_and_share">
                        <Button onClick={this.shoucang}>{this.state.shoucang}</Button>
                            <Button>分享</Button>
                           
                        </div>
                            <Button type="primary" danger style={{width:200,marginTop:35}}>购买</Button>
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