import React, { Component } from 'react'
// import Item from 'antd/lib/list/Item';

//引入css
import "../Craftsmans_Hall/css/goodsInfo.css"

//引入组件
import FurnitureImgDetails from "./FurnitureImgDetails"
//模态框
import { Modal, Button, Space } from 'antd';



//家具馆详情
class Furniture_Museum_details extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            //当前商品的id
            id:0,
            //面料
            material:0,
            //尺寸
            size:1,


            //模态框的值
            content:"",

            //商品详情
            goodsInfo:[
                { }
            ],
            //商品推荐
            recommendedGoods:[],

            //购买的数量
            num:1,

            
            
         }
    }
    // 当前商品的id值
    UNSAFE_componentWillMount(){
        console.log(this.props.location.state.key)
       let id=(this.props.location.state.key);
       this.setState({
            id:id,
       },()=>{
        fetch('http://47.100.90.56:8080/banJu/goods/findGoodsById', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            // 传参
            body: JSON.stringify({
                id:this.state.id,
            })
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            // 存放数组            
            this.setState({
                goodsInfo:data.data[0],
                recommendedGoods:data.data2,
            },()=>{
               
                this.arr1();
            }
            )
        }).catch((e) => {
            console.log("数据有误");
        });
       })
    }

    chose=(id,e)=>{
        this.setState({
            size:parseInt(id) ,
        },()=>{
             console.log(this.state.size)
        //     fetch('http://172.16.10.32:8080/banJu/craftsman/craftsmanFindByLike', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     credentials: 'include',
        //     // 传参
        //     body: JSON.stringify({
        //         id:this.state.id,
        //         fabric:
        //         size
        //     })
        // }).then((res) => {
        //     return res.json();
        // }).then((data) => {
        //     console.log(data);
        //     // 存放数组            
        //     this.setState({
        //         craftsmanArr:data.data,
        //         total:parseInt(data.total),
        //     }
        //     ,()=>{
        //         this.arr()
        //     }
        //     )
        // }).catch((e) => {
        //     console.log("数据有误");
        // });
        })
    }

    choseMaterial(id,e){
        this.setState({
            material:id,
        })
    }

    //加载到购物车
    toCar=()=>{
        fetch('http://47.100.90.56:8080/banJu/user/usergoods', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            // 传参
            body: JSON.stringify({
                uid:1,
                gid:1,
                status:0,//购物车
            })
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            // 存放数组            
            this.setState({
                content: data.msg
            },()=>{
                this.success();
            })
        }).catch((e) => {
            console.log("数据有误");
        });
        
    }

    //点击收藏
    collection=(e)=>{
        e.target.style.color="goldyellow";
        this.setState({
        },()=>{
        // fetch('http://172.16.10.15:8080/banJu/user/usergoods', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     credentials: 'include',
        //     // 传参
        //     body: JSON.stringify({
        //         uid:1,
        //         gid:1,
        //         status:1,
        //     })
        // }).then((res) => {
        //     return res.json();
        // }).then((data) => {
        //     console.log(data);
        //     // 存放数组            
        //     this.setState({
        //         content: data.msg
        //     },()=>{
        //         this.success();
        //     })
        // }).catch((e) => {
        //     console.log("数据有误");
        // });
        });
    }

    //模态框
    success() {
        Modal.success({
          content:this.state.content,
        });
      }

      //add购物车
      addNum=()=>{
          this.setState({
                num:this.state.num+1,
          })
      }

      //dec购物车
      decNum=()=>{
          if(this.state.num-1!=0){
            this.setState({
                num:this.state.num-1,
          })
          }
        
    }
    // 商品推荐 
    arr1=()=>{
        let arr1=this.state.recommendedGoods.map((item,index)=>{
            return(
                    <div className="recommendedStyle" key={index}>
                        {/* <img src={require(`../../${item.image}`)} className="recommendedImgStyle cursor" alt=""/> */}
                        <div className="recommendedTitleStyle">{item.name}</div>
                        <div className="goodsFlex justify">
                            <div className="recommendedPriceStyle">{item.price}</div>
                            <img src={require(`../../assets/images/shoop-icon/gwc2.png`)} alt="" className="cursor" />
                        </div>
                    </div>
            )
        });
        this.setState({
            arr1,
        })
    }

    render() { 
        return ( 
            <div className="FurnitureGoods">
 <div >
                    {/* 商品详情 */}
                    <div className="goodsInfo_box">
                        <div className="goodsFlex">
                            {/* 左边 */}
                            <div className="leftBox">
                                {/* <img src={require(`../../${item.goodsImg}`)} className="goodsImgStyle cursor" alt=""/> */}
                                <div className="goodsFlex togglestyle">
                                <div className  ="buttonleft">&lt;</div>
                                <div className="buttonleft">&gt;</div>
                            </div>
                            </div>
                            {/* 右边 */}
                            <div className="goodsInfo_right">
                                <div className="goodstitle">{this.state.goodsInfo.name}</div>
                                <div className="goodsPrice">
                                    <div>销售价：{this.state.goodsInfo.price}</div>
                                    <div>会员价：{this.state.goodsInfo.vipPrice}</div>
                                    <div>商品编号：{this.state.goodsInfo.goodsId}</div>
                                </div>
                                <span className="goodsPrice">尺寸：</span>
                                <div className="goodsFlex">
                                    <div className={this.state.size === 1 ? 'sizeBox' : 'sizeBoxNone'} onClick={this.chose.bind(this,1)}>780*780*680</div>
                                    <div className={this.state.size === 2 ? 'sizeBox' : 'sizeBoxNone'} onClick={this.chose.bind(this,2)}>750*750*680</div>
                                    <div className={this.state.size === 3 ? 'sizeBox' : 'sizeBoxNone'} onClick={this.chose.bind(this,3)}>740*740*680</div>
                                    <div className={this.state.size === 4 ? 'sizeBox' : 'sizeBoxNone'} onClick={this.chose.bind(this,4)}> 720*720*680</div>
                                    <div className={this.state.size === 5 ? 'sizeBox' : 'sizeBoxNone'} onClick={this.chose.bind(this,5)}>730*730*680</div>
                                    <div className={this.state.size === 6 ? 'sizeBox' : 'sizeBoxNone'} onClick={this.chose.bind(this,6)}>730*730*680</div>
                                </div>
                                <span className="goodsPrice">面料：</span>
                                <div className="goodsFlex">
                                    <div className={this.state.material === 1?"sizeBox":"sizeBoxNone"} onClick={this.choseMaterial.bind(this,1)}>FS</div>
                                    <div className={this.state.material === 2?"sizeBox":"sizeBoxNone"} onClick={this.choseMaterial.bind(this,2)}>FA</div>
                                    <div className={this.state.material === 3?"sizeBox":"sizeBoxNone"} onClick={this.choseMaterial.bind(this,3)}>MA</div>
                                    <div className={this.state.material === 4?"sizeBox":"sizeBoxNone"} onClick={this.choseMaterial.bind(this,4)}>MA</div>
                                    <div className={this.state.material === 5?"sizeBox":"sizeBoxNone"} onClick={this.choseMaterial.bind(this,5)}>ZF</div>
                                    <div className={this.state.material === 6?"sizeBox":"sizeBoxNone"} onClick={this.choseMaterial.bind(this,6)}>SF</div>
                                </div>
                                <div className="goodsFlex ">
                                    <div className="goodsPrice">数量：</div>
                                    <div className="goodsFlex goodsPrice">
                                        <div className="addNum cursor" onClick={this.decNum.bind(this)}>-</div>
                                        <div className="buyNum">{this.state.num}</div> 
                                        <div className="addNum cursor" onClick={this.addNum.bind(this)}>+</div>
                                    </div>
                                    
                                    <img src={require(`../../assets/images/Collection_icon_05.png`)} alt="" className="shoucang cursor" onClick={this.collection.bind(this)}/>
                                    {/* <span className={this.state.material === '亚麻'?"sizeBox":"sizeBoxNone"} onClick={this.state.choseMaterial.bind(this,"亚麻")}className="goodsPrice cursor">收藏</span> */}
                                </div>
                                <div className="goodsFlex align">
                                    <div className="buyNow cursor">立即购买</div>
                                    <div className="buyNow cursor" onClick={this.toCar.bind(this)}>加入购物车</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* 详情图片 */}
                    <FurnitureImgDetails></FurnitureImgDetails>
                </div>
                <div className="recommendedGoods">推荐商品</div>
                <div className="recommended_box goodsFlex">
                    {this.state.arr1}
                </div>
            </div>
         );
    }
}
 
export default Furniture_Museum_details;