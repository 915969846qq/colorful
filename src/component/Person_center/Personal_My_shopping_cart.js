import React, { Component } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'
import './css/Personal_My_shopping_cart.css'
// import Personal_My_shopping_oeder_two from './Personal_My_shopping_oeder_two'
// import '../Style/map'
//我的购物车
import City from '../../util/chajian/cityzcx.js'
class Personal_My_shopping_cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartlogo: require('../../assets/images/shoop-icon/gwc1.png'),
            choosearr: [],
        }
    }

    choose(index, s, gid) {
        console.log(s);
        let checked = $(".cart-content-content-tr").children().children("input[type='checkbox']")[index].checked;
        let cartarr = this.state.choosearr;
        if (checked === true) {
            cartarr.push(this.state.cartarr[index]);
            this.setState({
                choosearr: cartarr
            }, () => {
                console.log(this.state.choosearr)
            })
        } else {
            let itemindex = this.state.choosearr.findIndex(function (item, itemindex, arr) {
                return item.gid == gid;
            })
            console.log(itemindex)
            cartarr.splice(itemindex, 1);
            this.setState({
                choosearr: cartarr
            }, () => {
                console.log(this.state.choosearr)

            })
        }
        this.sumprice();
    }
    cartList() {
        // console.log(this.state.cartarr)
        let cartList = this.state.cartarr.map((item, index) => {
            return (<tr className="cart-content-content-tr" key={index}>
                <td>
                    <input type="checkbox" onChange={this.choose.bind(this, index, item.gid)}></input>
                </td>
                <td className="cart-content-content-td-srcname">
                    <div>
                        <img src={item.goods} alt="商品图片"></img>
                        <span>{item.name}</span>
                    </div>
                </td>
                <td><span>￥{item.price}</span></td>
                <td className="cart-content-content-td-number">
                    <div>
                        <span onClick={this.reduce.bind(this, index)}>-</span>
                        <span>{item.quantity}</span>
                        <span onClick={this.add.bind(this, index)}>+</span>
                    </div>
                </td>
                <td><span>￥{item.price * item.quantity}</span></td>
                <td><span>{item.specifications}</span></td>
                <td className="cart-content-content-td-operation">
                    <p>移入收藏</p>
                    <p onClick={this.del.bind(this,index,item.gid)}>删除</p>
                </td>
            </tr>)
        })
        this.setState({
            cartlist: cartList,
        },()=>{
            this.sumprice();
        })
    }
    del(index,id, s) {
        this.props.delcart(id)
        let cartarr = this.state.cartarr;
        cartarr.splice(index, 1);
        this.setState({
            cartarr: cartarr
        }, () => {
            this.cartList();
        })
    }
    add(index, s) {
        let cartarr = this.state.cartarr;
        // console.log(cartarr[index].quantity);
        cartarr[index].quantity = cartarr[index].quantity + 1;
        this.setState({
            cartarr: cartarr
        }, () => {
            this.cartList();
        })
    }
    reduce(index, s) {
        let cartarr = this.state.cartarr;
        // console.log(cartarr[index].quantity);
        if (cartarr[index].quantity > 0) {
            cartarr[index].quantity = cartarr[index].quantity - 1;
        }
        if (cartarr[index].number === 0) {
            cartarr.splice(index, 1);
        }
        this.setState({
            cartarr: cartarr
        }, () => {
            this.cartList();
        })
    }
    recommendlist() {
        let recommend = this.props.rcommend;
        // console.log(this)
        let Recommend = recommend.map((item, index) => {
            return (
                <div key={index}>
                    <div className="cart-content-footer-content-img">
                        <img src={item.imgsrc} alt="商品图片"></img>
                    </div>
                    <div className="cart-content-footer-content-p">
                        <p>{item.name}</p>
                        <p>{item.title}</p>
                        <h5>￥{item.price}</h5>
                    </div>
                </div>
            )
        })
        this.setState({
            recommendlist: Recommend,
        })
    }
    componentDidMount() {
        console.log(this.props)
        this.setState({
            cartarr: this.props.cartlist
            // cartarr: this.props.mycart
        }, () => {
            this.cartList();
        })
        this.recommendlist();

    }
    CheckAll() {
        console.log($(".checkall").prop('checked'))
        if ($(".checkall").prop('checked') == false) {
            this.setState({
                choosearr: []
            }, () => {
                $(".cart-content-content-tr").children().children("input[type='checkbox']").prop("checked", false);
                this.sumprice();
            })

        } else {
            this.setState({
                choosearr: this.state.cartarr
            }, () => {
                $(".cart-content-content-tr").children().children("input[type='checkbox']").prop("checked", true);
                console.log(this.state.cartarr);
                this.sumprice();
            })

        }

    }
    sumprice(){
        let sumprice = this.state.choosearr.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0);
        this.setState({
            sumprice: sumprice
        })
    }
    gopage = () => {
        console.log(this)
        this.props.getcarttoorder(this);
        this.props.history.push('/Personal_My_shopping_order_two');
    }

    render() {

        return (
            <div className="cart-content">
                <div className="cart-content-top">
                    <div className="cat-content-top-logo">
                        <img src={this.state.cartlogo} alt="cart"></img>
                        <span>我的购物车</span>

                    </div>
                    <a href="/Personal/">个人中心</a>
                    <div>
                        <img src={require('../../assets/images/address.png')} alt="adderss"></img>
                        <span>配送地址：</span>
                        <City></City>
                    </div>
                    <div>
                        <a href="/index">继续购物 ↺</a>
                    </div>
                </div>
                <div className="cart-content-content">
                    <table >
                        <thead>
                            <tr className="cart-content-content-top">
                                <td>
                                    <input type="checkbox" className="checkall" onClick={this.CheckAll.bind(this)}></input>
                                    <label>全选</label>
                                </td>
                                <td>商品信息</td>
                                <td>单价</td>
                                <td>购买数量</td>
                                <td>合计</td>
                                <td>规格</td>
                                <td>操作</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.cartlist}
                        </tbody>

                    </table>
                    <div className="cart-content-content-footer">
                        <div>
                            {/* <div><input type="checkbox" /><label>全选</label></div> */}
                            <span className="cart-content-content-footer-span">删除选中的商品</span>
                            <span className="cart-content-content-footer-span">清空购物车</span>
                        </div>
                        <div>
                            <span>总价:<span>￥{this.state.sumprice}</span></span>
                            <button onClick={this.gopage.bind(this)}>去结算</button>
                        </div>

                    </div>
                </div>
                <div className="cart-content-footer">
                    <div className="cart-content-footer-top">
                        <span>多多推荐</span>
                    </div>
                    <div className="cart-content-footer-content">
                        {this.state.recommendlist}
                    </div>
                </div>

            </div>
        )
    }
}
const MapStateToProps = (state, OwnProps) => {
    return {
        carttoorder: state.cartorder.carttoorder,
        // mycart: state.cartorder.mycart,
        rcommend: state.cartorder.recommend,
        cartlist: state.cartorder.cartlist.data,
        local: state.cartorder.local,
    }

}
const MapDispatchToProps = (dispatch) => {
    return {
        getcarttoorder: (t) => {
            console.log(t)
            dispatch({
                type: 'CARTTOORDER',
                carttoorder: t.state.choosearr,
                sumprice:t.state.sumprice
            })
        },
        delcart:(gid)=>{
            dispatch({
                type:'DELCART',
                gid:gid
            })
        }
    }
};
export default connect(MapStateToProps, MapDispatchToProps)(Personal_My_shopping_cart)
