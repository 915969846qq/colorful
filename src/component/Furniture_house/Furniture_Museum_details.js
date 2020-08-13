import React, { Component } from 'react'
// import Item from 'antd/lib/list/Item';
import {connect} from 'react-redux'

//引入css
import '../Craftsmans_Hall/css/goodsInfo.css'

//家具馆详情
class Furniture_Museum_details extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //面料
      material: '',
      //尺寸
      size: '',
      //数量
      num:1,

      //商品详情
      goodsInfo: [
        {
          goodstitle: '万物生活馆-单人沙发',
          price: '￥1200.00',
          vipPrice: '￥1000.00',
          goodsId: 'FA-JCM-2015WW-S4-1',
          toggleImg: 'assets/images/min-banner1_03.jpg',
          goodsImg: 'assets/images/banner1_03.jpg',
          goodsInfo1: 'assets/images/details/details_02.jpg',
          goodsInfo2: 'assets/images/details/details_03.jpg',
          goodsInfo3: 'assets/images/details/details_05.jpg',
          goodsInfo4: 'assets/images/details/details_06.jpg',
          goodsInfo5: 'assets/images/details/details_11.jpg',
          goodsInfo6: 'assets/images/details/details_12.jpg',
        },
      ],
      recommendedGoods: [
        {
          recommendedImg: 'assets/images/min-banner1_03.jpg',
          title: '维格尚品生活馆——餐椅',
          price: '￥456',
          shoppingCar: 'assets/images/shoop-icon/gwc2.png',
        },
        {
          recommendedImg: 'assets/images/min-banner1_03.jpg',
          title: '维格尚品生活馆——餐椅',
          price: '￥456',
          shoppingCar: 'assets/images/shoop-icon/gwc2.png',
        },
        {
          recommendedImg: 'assets/images/min-banner1_03.jpg',
          title: '维格尚品生活馆——餐椅',
          price: '￥456',
          shoppingCar: 'assets/images/shoop-icon/gwc2.png',
        },
        {
          recommendedImg: 'assets/images/min-banner1_03.jpg',
          title: '维格尚品生活馆——餐椅',
          price: '￥456',
          shoppingCar: 'assets/images/shoop-icon/gwc2.png',
        },
      ],
    }
  }
  // 当前商品的id值
  UNSAFE_componentWillMount() {
    console.log(this.props)
    console.log(this.props.location.state.key)
    let personId = this.props.location.state.key
    this.setState({
      sumprice:10000,
    })
  }
  gobuy(index,t){
    this.setState({
      choosearr:[{
        goods:[],
        name:this.state.goodsInfo[index].goodstitle,
        price:parseInt(this.state.goodsInfo[index].price),
        recommendedImg:this.state.goodsInfo[index].recommendedImg,
        title:this.state.goodsInfo[index].title,
        name:this.state.goodsInfo[index].goodstitle,
        quantity:this.state.num,
        specifications:'',
        sumprice:this.state.goodsInfo[index].num*this.state.goodsInfo[index].price,
      }]
     
    },()=>{
      console.log(this.state.choosearr);
      console.log(this.state.choosearr.quantity*this.state.choosearr.price)
      this.props.getcarttoorder(this);
      this.props.history.push('Personal_Center_index/Personal_My_shopping_order_two');
    })

  }

  chose(e) {
    this.setState({
      size: e,
    })
  }
  choseMaterial(e) {
    this.setState({
      material: e,
    })
  }
  render() {
    let arr = this.state.goodsInfo.map((item, index) => {
      return (
        <div key={index}>
          {/* 商品详情 */}
          <div className="goodsInfo_box">
            <div className="goodsFlex">
              {/* 左边 */}
              <div className="leftBox">
                <img
                  src={require(`../../${item.goodsImg}`)}
                  className="goodsImgStyle cursor"
                  alt=""
                />
                {/* <div className="goodsFlex togglestyle">
                  <div className="buttonleft">&lt;</div>
                  <div>
                    <img src={require(`../../${item.toggleImg}`)} alt="" />
                  </div>
                  <div>
                    <img src={require(`../../${item.toggleImg}`)} alt="" />
                  </div>
                  <div>
                    <img src={require(`../../${item.toggleImg}`)} alt="" />
                  </div>
                  <div>
                    <img src={require(`../../${item.toggleImg}`)} alt="" />
                  </div>
                  <div className="buttonleft">&gt;</div>
                </div> */}
              </div>
              {/* 右边 */}
              <div className="goodsInfo_right">
                <div className="goodstitle">{item.goodstitle}</div>
                <div className="goodsPrice">
                  <div>销售价：{item.price}</div>
                  <div>会员价：{item.vipPrice}</div>
                  <div>商品编号：{item.goodsId}</div>
                </div>
                <span className="goodsPrice">尺寸：</span>
                <div className="goodsFlex">
                  <div
                    className={
                      this.state.size === '' ? 'sizeBox' : 'sizeBoxNone'
                    }
                    onClick={this.chose.bind(this, '')}
                  >
                    780*780*680
                  </div>
                  <div
                    className={
                      this.state.size === '780' ? 'sizeBox' : 'sizeBoxNone'
                    }
                    onClick={this.chose.bind(this, '780')}
                  >
                    780*780*680
                  </div>
                  <div
                    className={
                      this.state.size === '790' ? 'sizeBox' : 'sizeBoxNone'
                    }
                    onClick={this.chose.bind(this, '790')}
                  >
                    780*780*680
                  </div>
                  <div
                    className={
                      this.state.size === '800' ? 'sizeBox' : 'sizeBoxNone'
                    }
                    onClick={this.chose.bind(this, '800')}
                  >
                    {' '}
                    780*780*680
                  </div>
                  <div
                    className={
                      this.state.size === '810' ? 'sizeBox' : 'sizeBoxNone'
                    }
                    onClick={this.chose.bind(this, '810')}
                  >
                    780*780*680
                  </div>
                </div>
                <span className="goodsPrice">面料：</span>
                <div className="goodsFlex">
                  <div
                    className={
                      this.state.material === '' ? 'sizeBox' : 'sizeBoxNone'
                    }
                    onClick={this.choseMaterial.bind(this, '')}
                  >
                    FS
                  </div>
                  <div
                    className={
                      this.state.material === 'FA' ? 'sizeBox' : 'sizeBoxNone'
                    }
                    onClick={this.choseMaterial.bind(this, 'FA')}
                  >
                    FA
                  </div>
                  <div
                    className={
                      this.state.material === 'MA' ? 'sizeBox' : 'sizeBoxNone'
                    }
                    onClick={this.choseMaterial.bind(this, 'MA')}
                  >
                    CB
                  </div>
                  <div
                    className={
                      this.state.material === 'MA' ? 'sizeBox' : 'sizeBoxNone'
                    }
                    onClick={this.choseMaterial.bind(this, 'MA')}
                  >
                    MA
                  </div>
                  <div
                    className={
                      this.state.material === 'ZF' ? 'sizeBox' : 'sizeBoxNone'
                    }
                    onClick={this.choseMaterial.bind(this, 'ZF')}
                  >
                    ZF
                  </div>
                  <div
                    className={
                      this.state.material === '亚麻' ? 'sizeBox' : 'sizeBoxNone'
                    }
                    onClick={this.choseMaterial.bind(this, '亚麻')}
                  >
                    亚麻
                  </div>
                </div>
                <div>
                  <span className="goodsPrice">数量：</span>
                  <span>{this.state.num}</span>
                  {/* <img src={require(`../../assets/images/Collection_icon_05.png`)} alt="" className="shoucang cursor"/> */}
                  {/* <span className={this.state.material==='亚麻'?'sizeBox':'sizeBoxNone'} onClick={this.state.choseMaterial.bind(this,"亚麻")}className="goodsPrice cursor">收藏</span> */}
                </div>
                <div className="goodsFlex align">
                  <div className="buyNow cursor" onClick={this.gobuy.bind(this,index)}>立即购买</div>
                  <div className="buyNow cursor">加入购物车</div>
                </div>
              </div>
            </div>
          </div>
          {/* 详情图片 */}
          <div className="goodsInfoImg">
            <div className="goodsFlex border">
              <div className="marginRight cursor">商品详情</div>
              <div className="marginRight cursor">商品评论</div>
              <div className="marginRight cursor">商品咨询</div>
              <div className="marginRight cursor">进入店铺</div>
            </div>
            <img src={require(`../../${item.goodsInfo1}`)} alt="" />
            <img src={require(`../../${item.goodsInfo2}`)} alt="" />
            <img src={require(`../../${item.goodsInfo3}`)} alt="" />
            <img src={require(`../../${item.goodsInfo4}`)} alt="" />
            <img src={require(`../../${item.goodsInfo5}`)} alt="" />
            <img src={require(`../../${item.goodsInfo6}`)} alt="" />
          </div>
        </div>
      )
    })
    let arr1 = this.state.recommendedGoods.map((item, index) => {
      return (
        <div className="recommendedStyle" key={index}>
          <img
            src={require(`../../${item.recommendedImg}`)}
            className="recommendedImgStyle cursor"
            alt=""
          />
          <div className="recommendedTitleStyle">{item.title}</div>
          <div className="goodsFlex justify">
            <div className="recommendedPriceStyle">{item.price}</div>
            <img
              src={require(`../../${item.shoppingCar}`)}
              alt=""
              className="cursor"
            />
          </div>
        </div>
      )
    })
    return (
      <div className="FurnitureGoods">
        {arr}
        <div className="recommendedGoods">推荐商品</div>
        <div className="recommended_box goodsFlex">{arr1}</div>
      </div>
    )
  }
}
const MapStateToProps = (state, OwnProps) => {
  return {
      carttoorder: state.cartorder.carttoorder,
      rcommend: state.cartorder.recommend,
      // cartlist: state.cartorder.cartlist.data,
      local: state.cartorder.local,
  }

}
const MapDispatchToProps = (dispatch) => {
  return {
      getcarttoorder:(t) => {
          console.log(t)
          dispatch({
              type: 'CARTTOORDER',
              carttoorder:t.state.choosearr,
              sumprice:t.state.sumprice,
          })
      }
    }
  }
export default connect(MapStateToProps,MapDispatchToProps)(Furniture_Museum_details) 