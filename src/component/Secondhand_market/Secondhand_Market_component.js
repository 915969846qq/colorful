import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Input } from 'antd'
import './css/Secondhand_Market.css'
import './css/secondhand_Market_Detail.css'
import $ from 'jquery'
import Myfooter from '../commen/footer'
import Myheader from '../commen/header'
import Mysecheader from './secheader'
// 二手市场
import CAxios from '../../util/chenmingaxios'
export default class Secondhand_Market extends Component {
  constructor() {
    super()
    this.state = {
      menu: [
        {
          productclass: [
            '二手手机',
            '台式电脑',
            '笔记本',
            '平板电脑',
            '数码产品',
            '家用电器',
            '二手家具',
            '服饰箱包',
          ],
        },
        {
          region: [
            '武侯',
            '金牛',
            '锦江',
            '青羊',
            '高新',
            '成华',
            '双流',
            '郫县',
            '龙泉驿',
            '金堂',
            '彭州',
            '简阳',
            '蒲江',
            '都江堰',
            '温江',
            '邛崃',
            '新津',
          ],
        },
        {
          price: [
            '20以下',
            '20-160',
            '160-500',
            '500-1500',
            '1500-4900',
            '4900以上',
          ],
        },
      ],
      selectmenu1: [],
      selectmenu2: [],
      selectmenu3: [],
      selectnewstatus: '不限',
      selectregion: '成都',
      selectprice: '不限',
      order: '默认排序',
      minprice: '',
      maxprice: '',
      currentpage: 1,
      selectinfo: [],
      // 商品盒子
      selectproductresultbox: [],
      pageper: 5,
      totalpage: 0,
    }
  }

  //   ================================================发送请求============================================

  searchsecproduct = (e, page, limit) => {
    let m = { page: page, limit: limit }
    let mm = Object.assign(m, e)

    CAxios.post(`/banJu/select/secondHandSelectByLike`, mm)
      .then((res) => {
        console.log(res.data)
        return res.data
      })
      .then((data) => {
        this.setState(
          {
            totalpage: data.pages,
            selectinfo: data.data,
          },
          () => {
            //    ======================判断商品结果==============================
            if (this.state.selectinfo.length === 0) {
              this.setState({
                currentpage: 0,
                selectproductresultbox: [],
              })
            } else {
              let productlist = this.bindselectproduct(this.state.selectinfo)
              this.setState({
                selectproductresultbox: productlist,
              })
            }
          }
        )
      })
      .catch((e) => {
        this.setState({
          currentpage: 0,
        })
      })
  }

  // =======================================商品搜索结果渲染===============================
  bindselectproduct = (productselect) => {
    let productselect1 = productselect
    //   let productselect1=productselect.slice((page-1)*this.state.pageper,page*this.state.pageper)
    let productsmall = productselect1.map((item) => {
      return (
        <div className="secprod_detailbox" key={item.id}>
          <Link to={'/Secondhand_Market/Secdetail/' + item.id}>
            <div className="secprod_detail">
              {/* <img src={require(`../../assets/images/baobao1_1.jpg`)} alt="二手货"/> */}
              <div className="sec-textbox">
                <p className="sec_title">{item.title}</p>
                <p>
                  <span className="sec_price">{item.price}元</span>
                  <span className="sec_detailregion">
                    {item.furtherAddress.substring(0, 6) + '...'}
                  </span>
                </p>
                <p className="sec_seller_wrap">
                  <img
                    className="secbox_sellerimg"
                    src={require(`../../assets/images/craftsman_07.jpg`)}
                    alt=""
                  />
                  <span>方法法</span>
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
  componentDidMount() {
    // =========================菜单=========================
    let selectmenu1 = this.bindmenu(
      this.state.menu[0].productclass,
      'productclass'
    )
    let selectmenu2 = this.bindmenu(
      this.state.menu[1].region.slice(0, 6),
      'region'
    )
    let selectmenu3 = this.bindmenu(this.state.menu[2].price, 'price')
    this.setState({
      selectmenu1: selectmenu1,
      selectmenu2: selectmenu2,
      selectmenu3: selectmenu3,
    })
    let that = this

    // =============================================初次发送请求=======================
    this.searchsecproduct({}, 1, 5)

    // ==============================筛选搜索事件==========================
    setTimeout(function () {
      $('li').click(function () {
        let mydataname = $(this).parent().eq(0).attr('id')
        let mydata = $(this)[0].innerHTML
        $(this).parent().children().removeClass('red')
        $(this).addClass('red')
        if (mydataname === 'selectprice') {
          that.state.maxprice = ''
          that.state.minprice = ''
        }
        that.setState({
          [mydataname]: mydata,
        })
      })
      $('#order')
        .children()
        .click(function () {
          that.submitinfo(1)
          that.setState({
            currentpage: 1,
          })
        })
    })
  }

  // ========================================筛选菜单循环初始化=========================================
  bindmenu(menulist, num) {
    let selectmenu = menulist.map((item, index) => {
      return <li key={num + index}>{item}</li>
    })
    return selectmenu
  }

  // ===========================================更多=========================================
  more = () => {
    let selectmenu2 = this.bindmenu(this.state.menu[1].region, 'region')
    this.setState(
      {
        selectmenu2: selectmenu2,
      },
      () => {
        let that = this
        $('li').click(function () {
          let mydataname = $(this).parent().eq(0).attr('id')
          let mydata = $(this)[0].innerHTML
          $(this).parent().children().removeClass('red')
          $(this).addClass('red')
          if (mydataname === 'selectprice') {
            that.state.maxprice = ''
            that.state.minprice = ''
          }
          that.setState({
            [mydataname]: mydata,
          })
        })
      }
    )
  }

  // ======================================价格双向数据绑定==================================

  price = (inform, e) => {
    this.setState({
      [inform]: e.target.value,
    })
  }

  // ==============================价格输入框=========================================

  blurprice = (inform, e) => {
    let myid = e.target.id
    let price2 = $('#' + myid)
      .siblings('input')
      .eq(0)
      .attr('id')
    if (this.state[inform].length !== 0 || this.state[price2].length !== 0) {
      $('#selectprice').children('li').removeClass('red')
    } else {
      this.setState(
        {
          selectprice: '不限',
        },
        () => {}
      )

      $('.autoprice').eq(0).addClass('red')
    }
  }

  // =========================================搜索条件============================================

  submitinfo = (page) => {
    let selectprice = ''
    let searchprice = {}
    let sminprice
    let smaxprice
    let mymin = this.state.minprice.length
    let mymax = this.state.maxprice.length
    if (mymin !== 0 || mymax !== 0) {
      if (mymin !== 0 && mymax !== 0) {
        selectprice = this.state.minprice + '-' + this.state.maxprice
      } else if (mymin !== 0 && mymax === 0) {
        selectprice = this.state.minprice + '以上'
      } else if (mymin === 0 && mymax !== 0) {
        selectprice = this.state.maxprice + '以下'
      }
    } else {
      selectprice = this.state.selectprice
    }
    if (selectprice.includes('上')) {
      sminprice = parseInt(selectprice)
      searchprice = { minprice: sminprice, maxprice: null }
    } else if (selectprice.includes('下')) {
      smaxprice = parseInt(selectprice)
      searchprice = { minprice: 0, maxprice: smaxprice }
    } else if (selectprice.includes('-')) {
      let pricearray = selectprice.split('-')
      searchprice = {
        minprice: parseInt(pricearray[0]),
        maxprice: parseInt(pricearray[1]),
      }
    } else if (selectprice.includes('限')) {
      searchprice = { minprice: null, maxprice: null }
    }

    let selectvalue = {
      assort: this.state.selectnewstatus,
      address: this.state.selectregion,
      minPrice: searchprice.minprice,
      maxPrice: searchprice.maxprice,
      orderList: this.state.order,
    }

    this.searchsecproduct(selectvalue, page, 5)
  }

  // ====================================确认==================================

  confirmsearch = () => {
    this.submitinfo(1)
  }

  // ===================================上一页==============================================
  pagetoprev = () => {
    if (this.state.currentpage - 1 >= 1) {
      this.setState(
        {
          currentpage: this.state.currentpage - 1,
        },
        () => {
          this.submitinfo(this.state.currentpage)
        }
      )
    }
  }

  // ======================================下一页=================================================
  pagetonext = () => {
    console.log(this.state.currentpage)
    if (this.state.currentpage + 1 <= this.state.totalpage) {
      this.setState(
        {
          currentpage: this.state.currentpage + 1,
        },
        () => {
          this.submitinfo(this.state.currentpage)
        }
      )
    }
  }

  // =====================================输入页码=================================
  onchange = (e) => {
    this.setState({
      currentpage: parseInt(e.target.value),
    })
  }
  // ==============================鼠标移开跳页=========================
  pageto = (e) => {
    if (e.target.value > 0 && e.target.value <= this.state.totalpage) {
      console.log('=======================' + this.state.currentpage)
      this.submitinfo(this.state.currentpage)
    } else {
      this.setState(
        {
          currentpage: this.state.totalpage,
        },
        () => {
          this.submitinfo(this.state.currentpage)
        }
      )
    }
  }

  render() {
    return (
      <div>
        <Myheader></Myheader>
        <Mysecheader></Mysecheader>
        {/* 二手馆 */}
        <div className="chenmingsecproductbox">
          {/* 搜索框盒子 */}
          <div className="searchbox">
            {/* //二手 */}
            <div>
              <div>二手 ：</div>
              <ul id="selectnewstatus">
                <li className="red">不限</li>
                {this.state.selectmenu1}
              </ul>
            </div>
            {/* 地区 */}
            <div>
              <div>地区 ：</div>
              <ul id="selectregion">
                <li className="red">成都</li>
                {this.state.selectmenu2}
                <li style={{ position: 'relative' }} onClick={this.more}>
                  更多
                  <span style={{ fontSize: 20, position: 'absolute', top: -6 }}>
                    &gt;
                  </span>
                </li>
              </ul>
            </div>
            {/* 价格 */}
            <div>
              <div>价格 ：</div>
              <ul id="selectprice">
                <li className="red autoprice">不限</li>
                {this.state.selectmenu3}
                <div>
                  <span>自定义价格 ：</span>
                  <input
                    id="minprice"
                    type="number"
                    value={this.state.minprice}
                    onChange={this.price.bind(this, 'minprice')}
                    onBlur={this.blurprice.bind(this, 'minprice')}
                    placeholder="最低"
                    style={{
                      width: 70,
                      height: 20,
                      border: '1px solid #b1b1b1',
                    }}
                  />
                  ----
                  <input
                    id="maxprice"
                    type="number"
                    value={this.state.maxprice}
                    onChange={this.price.bind(this, 'maxprice')}
                    onBlur={this.blurprice.bind(this, 'maxprice')}
                    placeholder="最高"
                    style={{
                      width: 70,
                      height: 20,
                      border: '1px solid #b1b1b1',
                    }}
                  />
                  <button
                    type="button"
                    className="submitprice"
                    onClick={this.confirmsearch}
                  >
                    确认
                  </button>
                </div>
              </ul>
            </div>
          </div>
          {/* 排序盒子 */}
          <div className="sortproduct">
            <div>
              <ul id="order">
                <li className="red">默认排序</li>
                <li>最新发布</li>
                <li>价格</li>
                {/* <li>只看有图</li> */}
              </ul>
            </div>
          </div>
          {/* 搜索结果 */}
          <div className="secproductselectbox" style={{ width: 1200 }}>
            {this.state.selectproductresultbox}
          </div>

          {/* =====================================分页按钮========================================= */}
          <div className="chenmingpagebuttonbox">
            <div className="chenmingpagebutton">
              <Button onClick={this.pagetoprev} type="primary">
                上一页
              </Button>
              <Input
                value={this.state.currentpage}
                type="number"
                onBlur={this.pageto}
                onChange={this.onchange}
                style={{
                  width: 50,
                  height: 32,
                  fontSize: 20,
                  textAlign: 'center',
                  marginLeft: 10,
                }}
              ></Input>
              <span
                style={{
                  height: 32,
                  lineHeight: 1,
                  display: 'inline-block',
                  marginRight: '5px',
                  fontSize: 24,
                }}
              >
                /{this.state.totalpage}
              </span>
              <Button onClick={this.pagetonext} type="primary">
                下一页
              </Button>
            </div>
          </div>
        </div>
        <Myfooter></Myfooter>
      </div>
    )
  }
}
