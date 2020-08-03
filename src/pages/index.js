import React, { Component } from 'react'
import {BrowserRouter as Router,Route}  from 'react-router-dom'
import '../Css/index11.css'
import '../Css/iconfont-index/iconfont.css'
import { Carousel } from 'antd'
import Building_materials_Museum from './Building_materials_Museum'

// 记录日记
// import Decoration_Diary_list from '../component/Decoration_pipe/Decoration_Diary_list'
// import Decoration_My_diary from '../component/Person_center/Decoration_My_diary'




//首页
export default class index extends Component {    
    render() {
        const contentStyle = {
            color: 'red',
            lineHeight: '400px',
          };
        return (
            <div id="body">          
                    <Router>
                        <Route path="/Building_materials_Museum"  component={Building_materials_Museum}></Route>
                        {/* <Route path="/Craftsman_Pavilion" component={Craftsman_Pavilion}></Route>
                        <Route path="/Decoration_Museum" component={Decoration_Museum}></Route>
                        <Route path="/Furniture_Museum" component={Furniture_Museum}></Route>
                        <Route path="/Home_Museum" component={Home_Museum}></Route>
                        <Route path="/Personal_Center_index" component={Personal_Center_index}></Route> 
                        <Route path="/Secondhand_Market" component={Secondhand_Market}></Route>
                        <Route path="/Style_pavilion" component={Style_pavilion}></Route>      */}
                        
                        <div className="body">
                        
                        <div id="site-nav" data-spm="a2226mz" role="navigation">
                            <div id="sn-bg">
                                <div className="sn-bg-right">
                                </div>
                            </div>
                            <div id="sn-bd">
                                <div className="sn-container">
                                    <p id="login-info" className="sn-login-info"><em data-spm-anchor-id="875.7931836/B.a2226mz.i0.2cc94265bHtErm">欢迎来科乐福</em><a className="sn-login" href="//login.tmall.com/?redirectURL=https%3A%2F%2Fwww.tmall.com%2F%3Ffrom%3Dzebra%3Aoffline" target="_top">请登录</a><a className="sn-register" href="//register.tmall.com/" target="_top">免费注册</a></p>
                                    <ul className="sn-quick-menu">
                                        <li className="sn-mytaobao menu-item j_MyTaobao"></li>
                                        <li className="sn-cart"><i className="fp-iconfont iconfont icon-qicheqianlian-"></i>
                                            <a className="sn-cart-link" href="//cart.tmall.com/cart/myCart.htm?from=btop" target="_top" rel="nofollow" data-spm-anchor-id="875.7931836/B.a2226mz.7">购物车
                                            </a>
                                        </li>
                                        <li className="sn-favorite menu-item">
                                            <div className="sn-menu">
                                                <a className="menu-hd" href="//shoucang.taobao.com/shop_collect_list.htm?scjjc=c1" target="_top" rel="nofollow"  aria-haspopup="true" aria-expanded="false" data-spm-anchor-id="875.7931836/B.a2226mz.8">收藏夹<b></b></a>
                                            </div>
                                        </li>
                                        <li className="sn-separator"></li>
                                        <li className="sn-mobile">
                                            <i className="mui-global-iconfont">㑈</i>
                                            <a title="天猫无线" target="_top" className="sn-mobile-link" href="//pages.tmall.com/wow/portal/act/app-download?scm=1027.1.1.1" data-spm-anchor-id="875.7931836/B.a2226mz.11">手机版</a>
                                        </li>
                                        <li className="sn-home">
                                            <a href="//www.taobao.com/" data-spm-anchor-id="875.7931836/B.a2226mz.12">我要装修</a>
                                        </li>
                                        <li className="sn-seller menu-item">
                                            <a href="11" className="menu-hd">个人中心</a>
                                        </li>
                                        <li className="sn-sitemap">
                                            <a href="11" className="menu-hd">网站导航</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id="header" data-spm="a2226n0" data-spm-anchor-id="875.7931836/B.0.a2226n0.2cc94265bHtErm">
                            <div className="headerLayout">
                                <div className="headerCon">
                                    <h1 id="mallLogo">
                                        <span className="mlogo">
                                        <a href="//www.tmall.com/" title="天猫Tmall.com"><s></s>天猫Tmall.com</a>
                                        
                                        </span>
                                        
                                    </h1>
                                    <div className="header-extra" data-spm-anchor-id="875.7931836/B.a2226n0.i1.2cc94265bHtErm">
                                        
                                            <div className="header-banner" data-spm-anchor-id="875.7931836/B.a2226n0.i0.2cc94265bHtErm">
                                                
                                                    
                                    <div></div>                           
                                    </div>
                                    <div id="mallSearch" className="mall-search">
                            <form name="searchTop" action="//list.tmall.com/search_product.htm" className="mallSearch-form clearfix">
                                <fieldset>
                                        <div className="mallSearch-input clearfix">
                                            <label>搜索 天猫 商品/品牌/店铺</label>
                                            <div className="s-combobox" id="s-combobox-130" aria-pressed="false">
                                                <div className="s-combobox-input-wrap">
                                                        <input type="text" name="q"   id="mq" className="s-combobox-input" placeholder="搜索  商品/品牌/店铺" />
                                                </div>
                                            <label className="s-combobox-placeholder">搜索 天猫 商品/品牌/店铺</label></div>
                                            <button type="submit">搜索<s></s></button>
                                            <input id="J_Type" type="hidden" name="type" value="p"/>
                                            <input id="J_MallSearchStyle" type="hidden" name="style" value=""/>
                                            <input id="J_Cat" type="hidden" name="cat" value="all"/>
                                            <input type="hidden" name="vmarket" value=""/>
                                        </div>
                                </fieldset>
                            </form>
                            </div>
                            </div>    
                            </div>
                            </div>
                            </div>          
                         {/* Content内容 */}
                         <div id="content">
                            <div className="main-nav">
                            <div className="inner-con0">
                                <div className="inner-con1">
                                    <div className="inner-con2 clearfix">
                                        
                                        {/* <Link  to="/Building_materials_Museum"> */}
                                              
                                            <div className="hover-pic"></div>
                                        {/* </Link> */}
                                        
                                        <a href="//www.tmall.hk/?acm=lb-zebra-148799-667861.1003.4.2429983&amp;scm=1003.4.lb-zebra-148799-667861.OTHER_14561833841102_2429983" aria-label="天猫国际" data-spm-anchor-id="875.7931836/B.2016004.2">
                                            
                                              优秀案例
                                            

                                            
                                            <div className="hover-pic"></div>
                                        </a>
                                        
                                        <a href="//vip.tmall.com/vip/index.htm?spm=875.7931836/B.2016004.3.2cc94265bHtErm&amp;acm=lb-zebra-148799-667861.1003.4.2429983&amp;scm=1003.4.lb-zebra-148799-667861.OTHER_14561845383563_2429983" data-spm-anchor-id="875.7931836/B.2016004.3">
                                            
                                                网上商城
                                            

                                            
                                            <div className="hover-pic"></div>
                                        </a>
                                        
                                        <a href="//3c.tmall.com/?acm=lb-zebra-148799-667861.1003.4.2429983&amp;scm=1003.4.lb-zebra-148799-667861.OTHER_14561822298635_2429983" data-spm-anchor-id="875.7931836/B.2016004.4">
                                            
                                               家政服务
                                            

                                            
                                            <div className="hover-pic"></div>
                                        </a>
                                        
                                        <a href="//miao.tmall.com/?acm=lb-zebra-148799-667861.1003.4.2429983&amp;scm=1003.4.lb-zebra-148799-667861.OTHER_14561818451146_2429983" data-spm-anchor-id="875.7931836/B.2016004.5">
                                            
                                                装修馆
                                            

                                            
                                            <div className="hover-pic"></div>
                                        </a>
                                        
                                        <a href="//yao.tmall.com/?acm=lb-zebra-148799-667861.1003.4.2429983&amp;scm=1003.4.lb-zebra-148799-667861.OTHER_14561829993617_2429983" data-spm-anchor-id="875.7931836/B.2016004.6">
                                            
                                                工匠馆
                                            

                                            
                                            <div className="hover-pic"></div>
                                        </a>
                                        
                                        <a href="//wt.tmall.com/?acm=lb-zebra-148799-667861.1003.4.2429983&amp;scm=1003.4.lb-zebra-148799-667861.OTHER_14561826146128_2429983" data-spm-anchor-id="875.7931836/B.2016004.7">
                                            
                                                二手馆
                                            

                                            
                                            <div className="hover-pic"></div>
                                        </a>
                                        
                                        <a href="//www.tmall.com/wow/mlh/act/timei?spm=875.7931836/B.2016004.8.2cc94265bHtErm&amp;acm=lb-zebra-148799-667861.1003.4.2429983&amp;scm=1003.4.lb-zebra-148799-667861.OTHER_14561806908679_2429983" data-spm-anchor-id="875.7931836/B.2016004.8">
                                            
                                                建材馆
                                            

                                            
                                            <div className="hover-pic"></div>
                                        </a>
                                        
                                        <a href="//www.alitrip.com/?acm=lb-zebra-148799-667861.1003.4.2429983&amp;scm=1003.4.lb-zebra-148799-667861.OTHER_145618030611810_2429983" data-spm-anchor-id="875.7931836/B.2016004.9">
                                            
                                                家居馆
                                            

                                            
                                            <div className="hover-pic"></div>
                                        </a>
                                        
                                        <a href="//suning.tmall.com?acm=lb-zebra-148799-667861.1003.4.2429983&amp;scm=1003.4.lb-zebra-148799-667861.OTHER_11_2429983" data-spm-anchor-id="875.7931836/B.2016004.10">
                                            
                                                家具馆
                                            

                                            
                                            <div className="hover-pic"></div>
                                        </a>
                                        
                                    </div>
                                </div>
                            </div>
                            {/* banner */}
                            <div className="j_category category-con">
                                <div className="category-inner-con j_categoryInnerCon j_categoryTab">
                                    <div className="j_logo logo-con">
                                        <img className="tmall-logo-img" src={require('../assets/images/logo2.png')} alt=""/>
                                    </div>
                                    <div className="category-type">
                                        <i className="fp-iconfont iconfont icon-gengduo"></i>
                                        <div className="text" data-spm-anchor-id="875.7931836/B.0.i2.2cc94265bHtErm">
                                            商品分类
                                        </div>
                                    </div>
                                    <div className="category-tab-content">
                                        <div className="nav-con j_tabPannel category-tab-pannel pannel-normal">
                                        <ul className="normal-nav clearfix">
                                                <li className="j_MenuNav nav-item nav-item-0 category-loaded" data-spm="category2016010">
                                                    <i className="fp-iconfont iconfont icon-nvzhuang"></i>
                                                    <a href="//nvzhuang.tmall.com/?acm=lb-zebra-148799-667863.1003.4.708026&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_14561681423980_708026">女装</a>
                                                    
                                                        /<a href="//neiyi.tmall.com/?acm=lb-zebra-148799-667863.1003.4.708026&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_14561681423980_708026">内衣</a>
                                                    
                                                    
                                                    <b className="arrow"></b>
                                                </li>
                                                
                                                <li className="j_MenuNav nav-item nav-item-1 category-loaded" data-spm="category2016011">
                                                    <i className="fp-iconfont iconfont icon-nvzhuang"></i>
                                                    <a href="//nanzhuang.tmall.com/?acm=lb-zebra-148799-667863.1003.4.708026&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_14561677576501_708026">男装</a>
                                                    
                                                        / <a href="//sports.tmall.com/?acm=lb-zebra-148799-667863.1003.4.708026&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_14561677576501_708026">运动户外</a>
                                                    
                                                    
                                                    <b className="arrow"></b>
                                                </li>
                                                
                                                <li className="j_MenuNav nav-item nav-item-2 category-loaded" data-spm="category2016012">
                                                    <i className="fp-iconfont iconfont icon-nvxie"></i>
                                                    <a href="//nvxie.tmall.com/?acm=lb-zebra-148799-667863.1003.4.708026&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_14561689118972_708026">女鞋</a>
                                                    
                                                        /<a href="//nanxie.tmall.com/?acm=lb-zebra-148799-667863.1003.4.708026&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_14561689118972_708026">男鞋</a>
                                                    
                                                    
                                                        /<a href="//bag.tmall.com/?acm=lb-zebra-148799-667863.1003.4.708026&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_14561689118972_708026">箱包</a>
                                                    
                                                    <b className="arrow"></b>
                                                </li>
                                                
                                                <li className="j_MenuNav nav-item nav-item-3 category-loaded" data-spm="category2016013">
                                                    <i className="fp-iconfont iconfont icon-icon-test1"></i>
                                                    <a href="//list.tmall.com/search_product.htm?q=%B9%D9%B7%BD%D6%B1%CA%DB&amp;spm=875.7931836/B.subpannel2016034.1.GU94AS&amp;vmarket=29890&amp;style=w&amp;theme=275&amp;acm=lb-zebra-148799-667863.1003.4.708026&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_14561685271493_708026&amp;smAreaId=330100">美妆</a>
                                                    
                                                        /<a href="//list.tmall.com/search_product.htm?q=%B9%D9%B7%BD%D6%B1%CA%DB&amp;spm=875.7931836/B.subpannel2016034.1.GU94AS&amp;vmarket=29890&amp;style=w&amp;theme=275&amp;acm=lb-zebra-148799-667863.1003.4.708026&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_14561685271493_708026&amp;smAreaId=330100">个人护理</a>
                                                    
                                                    
                                                    <b className="arrow"></b>
                                                </li>
                                                
                                                <li className="j_MenuNav nav-item nav-item-4 category-loaded" data-spm="category2016014">
                                                    <i className="fp-iconfont iconfont icon-icon-test"></i>
                                                    <a href="//watch.tmall.com/?acm=lb-zebra-148799-667863.1003.4.708026&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_14561666034064_708026">腕表</a>
                                                    
                                                        /<a href="//list.tmall.com/search_product.htm?abbucket=&amp;active=1&amp;acm=lb-zebra-148799-667863.1003.4.708026&amp;sort=s&amp;spm=3.7396704.20000007.22.7CvfAH&amp;abtest=&amp;pos=3&amp;cat=50023064&amp;theme=469&amp;from=sn_1_rightnav&amp;style=g&amp;search_condition=7&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_14561666034064_708026&amp;aldid=75994#J_crumbs">眼镜</a>
                                                    
                                                    
                                                        /<a href="//dai.tmall.com/?acm=lb-zebra-148799-667863.1003.4.708026&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_14561666034064_708026">珠宝饰品</a>
                                                    
                                                    <b className="arrow"></b>
                                                </li>
                                                
                                                <li className="j_MenuNav nav-item nav-item-5 category-loaded" data-spm="category2016015">
                                                    <i className="fp-iconfont iconfont icon-shouji"></i>
                                                    <a href="//shouji.tmall.com/?acm=lb-zebra-148799-667863.1003.4.708026&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_14561662186585_708026">手机</a>
                                                    
                                                        /<a href="//3c.tmall.com?go=act&amp;acm=lb-zebra-148799-667863.1003.4.708026&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_14561662186585_708026">数码</a>
                                                    
                                                    
                                                        /<a href="//3c.tmall.com/?go=digt&amp;acm=lb-zebra-148799-667863.1003.4.708026&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_14561662186585_708026">电脑办公</a>
                                                    
                                                    <b className="arrow"></b>
                                                </li>
                                                
                                                <li className="j_MenuNav nav-item nav-item-6 category-loaded" data-spm="category2016016">
                                                    <i className="fp-iconfont iconfont icon-muying"></i>
                                                    <a href="//baby.tmall.com/?acm=lb-zebra-148799-667863.1003.4.708026&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_14561673729066_708026">母婴玩具</a>
                                                    
                                                    
                                                    <b className="arrow"></b>
                                                </li>
                                                
                                                <li className="j_MenuNav nav-item nav-item-7 category-loaded" data-spm="category2016017">
                                                    <i className="fp-iconfont iconfont icon-lingshi"></i>
                                                    <a href="//list.tmall.com/search_product.htm?q=%C1%E3%CA%B3&amp;spm=875.7931836%2FB.a2227oh.d100&amp;vmarket=&amp;from=mallfp..pc_1_searchbutton&amp;acm=lb-zebra-148799-667863.1003.4.708026&amp;type=p&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_14561669881597_708026">零食</a>
                                                    
                                                        /<a href="//list.tmall.com/search_product.htm?q=%B2%E8%BE%C6&amp;spm=a220m.1000858.a2227oh.d100&amp;from=.list.pc_1_searchbutton&amp;acm=lb-zebra-148799-667863.1003.4.708026&amp;type=p&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_14561669881597_708026">茶酒</a>
                                                    
                                                    
                                                        /<a href="//list.tmall.com/search_product.htm?q=%BD%F8%BF%DA%CA%B3%C6%B7&amp;spm=a220m.1000858.a2227oh.d100&amp;from=.list.pc_1_searchbutton&amp;acm=lb-zebra-148799-667863.1003.4.708026&amp;type=p&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_14561669881597_708026">进口食品</a>
                                                    
                                                    <b className="arrow"></b>
                                                </li>
                                                
                                                <li className="j_MenuNav nav-item nav-item-8 category-loaded" data-spm="category2016018">
                                                    <i className="fp-iconfont iconfont icon-shuiguo"></i>
                                                    <a href="//miao.tmall.com?acm=lb-zebra-148799-667863.1003.4.708026&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_14593834779268_708026">生鲜水果</a>
                                                    
                                                    
                                                    <b className="arrow"></b>
                                                </li>
                                                
                                                <li className="j_MenuNav nav-item nav-item-9 category-loaded selected" data-spm="category2016019">
                                                    <i className="fp-iconfont iconfont icon-dianqi"></i>
                                                    <a href="//3c.tmall.com?go=appl&amp;acm=lb-zebra-148799-667863.1003.4.708026&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_14561650644158_708026">大家电</a>
                                                    
                                                        /<a href="//3c.tmall.com?go=kich&amp;acm=lb-zebra-148799-667863.1003.4.708026&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_14561650644158_708026">生活电器</a>
                                                    
                                                    
                                                    <b className="arrow"></b>
                                                </li>
                                                
                                                <li className="j_MenuNav nav-item nav-item-10 category-loaded" data-spm="category2016020">
                                                    <i className="fp-iconfont iconfont icon-jiaju"></i>
                                                    <a href="//jia.tmall.com/?acm=lb-zebra-148799-667863.1003.4.708026&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_14561646796679_708026">家具建材</a>
                                                    
                                                    
                                                    <b className="arrow"></b>
                                                </li>
                                                
                                                <li className="j_MenuNav nav-item nav-item-11 category-loaded" data-spm="category2016021">
                                                    <i className="fp-iconfont iconfont icon-qiche"></i>
                                                    <a href="//car.tmall.com/?acm=lb-zebra-148799-667863.1003.4.708026&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_145616583391510_708026">汽车</a>
                                                    
                                                        /<a href="//list.tmall.com/search_product.htm?abbucket=&amp;active=1&amp;acm=lb-zebra-148799-667863.1003.4.708026&amp;industryCatId=50660004&amp;uuid=75987&amp;spm=875.7789098.20150017.3.pPRs0I&amp;abtest=&amp;pos=11&amp;cat=56772006&amp;style=g&amp;from=sn_1_rightnav&amp;search_condition=55&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_145616583391510_708026&amp;aldid=431510#J_crumbs">配件</a>
                                                    
                                                    
                                                        /<a href="//list.tmall.com/search_product.htm?abbucket=&amp;active=1&amp;acm=lb-zebra-148799-667863.1003.4.708026&amp;industryCatId=50660004&amp;uuid=75987&amp;spm=875.7789098.20150017.3.P1jZNx&amp;abtest=&amp;pos=11&amp;cat=56838011&amp;style=g&amp;from=sn_1_rightnav&amp;search_condition=55&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_145616583391510_708026&amp;aldid=431510#J_crumbs">用品</a>
                                                    
                                                    <b className="arrow"></b>
                                                </li>
                                                
                                                <li className="j_MenuNav nav-item nav-item-12 category-loaded" data-spm="category2016022">
                                                    <i className="fp-iconfont iconfont icon-shouye"></i>
                                                    <a href="//myhome.tmall.com/?acm=lb-zebra-148799-667863.1003.4.708026&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_145616544916711_708026">家纺</a>
                                                    
                                                        /<a href="//myhome.tmall.com/?spm=3.7396704.20000007.27.7CvfAH&amp;abtest=&amp;act=4,2&amp;abbucket=&amp;pos=2&amp;acm=lb-zebra-148799-667863.1003.4.708026&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_145616544916711_708026&amp;aldid=74660">家饰</a>
                                                    
                                                    
                                                        /<a href="//list.tmall.com/search_product.htm?spm=a220m.1000858.0.0.d811797DgxXDC&amp;cat=50024897&amp;style=g&amp;from=sn_1_rightnav&amp;acm=lb-zebra-148799-667863.1003.4.708026&amp;sort=s&amp;search_condition=7&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_145616544916711_708026&amp;industryCatId=50024897&amp;smAreaId=330100#J_crumbs">鲜花</a>
                                                    
                                                    <b className="arrow"></b>
                                                </li>
                                                
                                                <li className="j_MenuNav nav-item nav-item-13 category-loaded" data-spm="category2016023">
                                                    <i className="fp-iconfont iconfont icon-yiyao"></i>
                                                    <a href="//yao.tmall.com/?acm=lb-zebra-148799-667863.1003.4.708026&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_145616352542412_708026">医药保健</a>
                                                    
                                                    
                                                    <b className="arrow"></b>
                                                </li>
                                                
                                                <li className="j_MenuNav nav-item nav-item-14 category-loaded" data-spm="category2016024">
                                                    <i className="fp-iconfont iconfont icon-chuju"></i>
                                                    <a href="//list.tmall.com/search_product.htm?spm=a220m.1000858.0.0.v7yFGa&amp;cat=50036640&amp;active=1&amp;style=g&amp;from=sn_1_rightnav&amp;acm=lb-zebra-148799-667863.1003.4.708026&amp;sort=s&amp;search_condition=23&amp;tmhkmain=0&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_145616314067613_708026&amp;industryCatId=50036640&amp;smAreaId=330100#J_crumbs">厨具</a>
                                                    
                                                        /<a href="//list.tmall.com/search_product.htm?abbucket=&amp;active=1&amp;acm=lb-zebra-148799-667863.1003.4.708026&amp;sort=s&amp;industryCatId=50071816&amp;spm=3.7396704.20000007.31.7CvfAH&amp;abtest=&amp;pos=2&amp;cat=50071786&amp;from=sn_1_rightnav&amp;style=g&amp;search_condition=7&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_145616314067613_708026&amp;aldid=75975#J_crumbs">收纳</a>
                                                    
                                                    
                                                        /<a href="//list.tmall.com/search_product.htm?abbucket=&amp;active=1&amp;acm=lb-zebra-148799-667863.1003.4.708026&amp;sort=s&amp;industryCatId=50043495&amp;uuid=92196&amp;spm=3.7396704.20000007.32.7CvfAH&amp;abtest=&amp;pos=3&amp;cat=50034368&amp;from=sn_1_rightnav&amp;style=g&amp;search_condition=7&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_145616314067613_708026&amp;aldid=75975#J_crumbs">宠物</a>
                                                    
                                                    <b className="arrow"></b>
                                                </li>
                                                
                                                <li className="j_MenuNav nav-item nav-item-15 category-loaded" data-spm="category2016025">
                                                    <i className="fp-iconfont iconfont icon-tushu"></i>
                                                    <a href="//book.tmall.com/?acm=lb-zebra-148799-667863.1003.4.708026&amp;scm=1003.4.lb-zebra-148799-667863.OTHER_145616429492414_708026">图书音像</a>
                                                    
                                                    
                                                    <b className="arrow"></b>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* banner1 */}
                                <div className="banner-con banner-slider slider-content">
                                    <div className="main-banner">
                                        <div className="main1">
                                            <Carousel autoplay>
                                                <div>
                                                    <h3 style={contentStyle}><img src={require('../assets/images/banner4.jpg')} alt=""/></h3>
                                                </div>
                                                <div>
                                                <h3 style={contentStyle}><img src={require('../assets/images/banner2.jpg')} alt=""/></h3>
                                                </div>
                                                <div>
                                                <h3 style={contentStyle}><img src={require('../assets/images/banner1.webp')} alt=""/></h3>
                                                </div>
                                                <div>
                                                <h3 style={contentStyle}><img src={require('../assets/images/banner3.jpg')} alt=""/></h3>
                                                </div>
                                            </Carousel>,
                                            </div>
                                        </div>
                                </div>
                            </div>

                           {/* 装修流程 */}
                           <div className="main-1">
            <div className="main-top-img"><img src={require('../assets/images/technological_03.png')} alt=""/>
                <a href="/" className="goTomore">更多 &gt; </a>
            </div>
            <div>
                <div className="technological_left">
                    <div className="technological_left_top">装修前—准备阶段</div>
                    <div className="technological_left_bottom">
                        <div className="classification">
                            <div className="classification_man"><img src={require('../assets/images/icon_10.png')} alt=""/>
                                <p>收房</p>
                            </div>
                        </div>
                        <div className="classification">
                            <div className="classification_man classification_man2"><img src={require('../assets/images/icon_03.png')} alt=""/>
                                <p>验房</p>
                            </div>
                        </div>
                        <div className="classification">
                            <div className="classification_man classification_man3"><img src={require('../assets/images/icon_36.png')} alt=""/>
                                <p>设计</p>
                            </div>
                        </div>
                        <div className="classification ">
                            <div className="classification_man classification_man2 classification_man3"><img src={require('../assets/images/icon_35.png')} alt=""/>
                                <p>预算</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="technological_left ">
                    <div className="technological_left_top technological_center_top">装修中—施工阶段</div>
                    <div className="technological_left_bottom">
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min"><img src={require('../assets/images/icon_05.png')} alt=""/>
                                <p>材料</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min"><img src={require('../assets/images/icon_13.png')} alt=""/>
                                <p>拆改</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min"><img src={require('../assets/images/icon_16.png')} alt=""/>
                                <p>水电</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man2"><img src={require('../assets/images/icon_07.png')} alt=""/>
                                <p>防水</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man3"><img src={require('../assets/images/icon_38.png')} alt=""/>
                                <p>泥工</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man3"><img src={require('../assets/images/icon_40.png')} alt=""/>
                                <p>木工</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man3"><img src={require('../assets/images/icon_33.png')} alt=""/>
                                <p>漆工</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man2 classification_man3"><img src={require('../assets/images/icon_43.png')} alt=""/>
                                <p>安装收尾</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="technological_left technological_right">
                    <div className="technological_left_top technological_right_top">装修后—入住阶段</div>
                    <div className="technological_left_bottom">
                        <div className="classification classificationmax">
                            <div className="classification_man classification_manbm"><img src={require('../assets/images/icon_28.png')} alt=""/>
                                <p>软装</p>
                            </div>
                        </div>
                        <div className="classification classificationmax">
                            <div className="classification_man classification_man2 classification_manbm"><img src={require('../assets/images/icon_25.png')} alt=""/>
                                <p>入住</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
                       


                {/* 风格馆 */}
                     {/* 装修流程 */}
                     <div className="main-1">
            <div className="main-top-img"><img src={require('../assets/images/technological_03.png')} alt=""/>
                <a href="/" className="goTomore">更多 &gt; </a>
            </div>
            <div>
                <div className="technological_left">
                    <div className="technological_left_top">装修前—准备阶段</div>
                    <div className="technological_left_bottom">
                        <div className="classification">
                            <div className="classification_man"><img src={require('../assets/images/icon_10.png')} alt=""/>
                                <p>收房</p>
                            </div>
                        </div>
                        <div className="classification">
                            <div className="classification_man classification_man2"><img src={require('../assets/images/icon_03.png')} alt=""/>
                                <p>验房</p>
                            </div>
                        </div>
                        <div className="classification">
                            <div className="classification_man classification_man3"><img src={require('../assets/images/icon_36.png')} alt=""/>
                                <p>设计</p>
                            </div>
                        </div>
                        <div className="classification ">
                            <div className="classification_man classification_man2 classification_man3"><img src={require('../assets/images/icon_35.png')} alt=""/>
                                <p>预算</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="technological_left ">
                    <div className="technological_left_top technological_center_top">装修中—施工阶段</div>
                    <div className="technological_left_bottom">
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min"><img src={require('../assets/images/icon_05.png')} alt=""/>
                                <p>材料</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min"><img src={require('../assets/images/icon_13.png')} alt=""/>
                                <p>拆改</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min"><img src={require('../assets/images/icon_16.png')} alt=""/>
                                <p>水电</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man2"><img src={require('../assets/images/icon_07.png')} alt=""/>
                                <p>防水</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man3"><img src={require('../assets/images/icon_38.png')} alt=""/>
                                <p>泥工</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man3"><img src={require('../assets/images/icon_40.png')} alt=""/>
                                <p>木工</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man3"><img src={require('../assets/images/icon_33.png')} alt=""/>
                                <p>漆工</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man2 classification_man3"><img src={require('../assets/images/icon_43.png')} alt=""/>
                                <p>安装收尾</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="technological_left technological_right">
                    <div className="technological_left_top technological_right_top">装修后—入住阶段</div>
                    <div className="technological_left_bottom">
                        <div className="classification classificationmax">
                            <div className="classification_man classification_manbm"><img src={require('../assets/images/icon_28.png')} alt=""/>
                                <p>软装</p>
                            </div>
                        </div>
                        <div className="classification classificationmax">
                            <div className="classification_man classification_man2 classification_manbm"><img src={require('../assets/images/icon_25.png')} alt=""/>
                                <p>入住</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  


        {/* 装修馆 */}
             {/* 装修流程 */}
             <div className="main-1">
            <div className="main-top-img"><img src={require('../assets/images/technological_03.png')} alt=""/>
                <a href="/" className="goTomore">更多 &gt; </a>
            </div>
            <div>
                <div className="technological_left">
                    <div className="technological_left_top">装修前—准备阶段</div>
                    <div className="technological_left_bottom">
                        <div className="classification">
                            <div className="classification_man"><img src={require('../assets/images/icon_10.png')} alt=""/>
                                <p>收房</p>
                            </div>
                        </div>
                        <div className="classification">
                            <div className="classification_man classification_man2"><img src={require('../assets/images/icon_03.png')} alt=""/>
                                <p>验房</p>
                            </div>
                        </div>
                        <div className="classification">
                            <div className="classification_man classification_man3"><img src={require('../assets/images/icon_36.png')} alt=""/>
                                <p>设计</p>
                            </div>
                        </div>
                        <div className="classification ">
                            <div className="classification_man classification_man2 classification_man3"><img src={require('../assets/images/icon_35.png')} alt=""/>
                                <p>预算</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="technological_left ">
                    <div className="technological_left_top technological_center_top">装修中—施工阶段</div>
                    <div className="technological_left_bottom">
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min"><img src={require('../assets/images/icon_05.png')} alt=""/>
                                <p>材料</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min"><img src={require('../assets/images/icon_13.png')} alt=""/>
                                <p>拆改</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min"><img src={require('../assets/images/icon_16.png')} alt=""/>
                                <p>水电</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man2"><img src={require('../assets/images/icon_07.png')} alt=""/>
                                <p>防水</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man3"><img src={require('../assets/images/icon_38.png')} alt=""/>
                                <p>泥工</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man3"><img src={require('../assets/images/icon_40.png')} alt=""/>
                                <p>木工</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man3"><img src={require('../assets/images/icon_33.png')} alt=""/>
                                <p>漆工</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man2 classification_man3"><img src={require('../assets/images/icon_43.png')} alt=""/>
                                <p>安装收尾</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="technological_left technological_right">
                    <div className="technological_left_top technological_right_top">装修后—入住阶段</div>
                    <div className="technological_left_bottom">
                        <div className="classification classificationmax">
                            <div className="classification_man classification_manbm"><img src={require('../assets/images/icon_28.png')} alt=""/>
                                <p>软装</p>
                            </div>
                        </div>
                        <div className="classification classificationmax">
                            <div className="classification_man classification_man2 classification_manbm"><img src={require('../assets/images/icon_25.png')} alt=""/>
                                <p>入住</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  


        {/* 建材馆 */}
             {/* 装修流程 */}
             <div className="main-1">
            <div className="main-top-img"><img src={require('../assets/images/technological_03.png')} alt=""/>
                <a href="/" className="goTomore">更多 &gt; </a>
            </div>
            <div>
                <div className="technological_left">
                    <div className="technological_left_top">装修前—准备阶段</div>
                    <div className="technological_left_bottom">
                        <div className="classification">
                            <div className="classification_man"><img src={require('../assets/images/icon_10.png')} alt=""/>
                                <p>收房</p>
                            </div>
                        </div>
                        <div className="classification">
                            <div className="classification_man classification_man2"><img src={require('../assets/images/icon_03.png')} alt=""/>
                                <p>验房</p>
                            </div>
                        </div>
                        <div className="classification">
                            <div className="classification_man classification_man3"><img src={require('../assets/images/icon_36.png')} alt=""/>
                                <p>设计</p>
                            </div>
                        </div>
                        <div className="classification ">
                            <div className="classification_man classification_man2 classification_man3"><img src={require('../assets/images/icon_35.png')} alt=""/>
                                <p>预算</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="technological_left ">
                    <div className="technological_left_top technological_center_top">装修中—施工阶段</div>
                    <div className="technological_left_bottom">
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min"><img src={require('../assets/images/icon_05.png')} alt=""/>
                                <p>材料</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min"><img src={require('../assets/images/icon_13.png')} alt=""/>
                                <p>拆改</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min"><img src={require('../assets/images/icon_16.png')} alt=""/>
                                <p>水电</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man2"><img src={require('../assets/images/icon_07.png')} alt=""/>
                                <p>防水</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man3"><img src={require('../assets/images/icon_38.png')} alt=""/>
                                <p>泥工</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man3"><img src={require('../assets/images/icon_40.png')} alt=""/>
                                <p>木工</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man3"><img src={require('../assets/images/icon_33.png')} alt=""/>
                                <p>漆工</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man2 classification_man3"><img src={require('../assets/images/icon_43.png')} alt=""/>
                                <p>安装收尾</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="technological_left technological_right">
                    <div className="technological_left_top technological_right_top">装修后—入住阶段</div>
                    <div className="technological_left_bottom">
                        <div className="classification classificationmax">
                            <div className="classification_man classification_manbm"><img src={require('../assets/images/icon_28.png')} alt=""/>
                                <p>软装</p>
                            </div>
                        </div>
                        <div className="classification classificationmax">
                            <div className="classification_man classification_man2 classification_manbm"><img src={require('../assets/images/icon_25.png')} alt=""/>
                                <p>入住</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  


        {/* 家具馆 */}
             {/* 装修流程 */}
             <div className="main-1">
            <div className="main-top-img"><img src={require('../assets/images/technological_03.png')} alt=""/>
                <a href="/" className="goTomore">更多 &gt; </a>
            </div>
            <div>
                <div className="technological_left">
                    <div className="technological_left_top">装修前—准备阶段</div>
                    <div className="technological_left_bottom">
                        <div className="classification">
                            <div className="classification_man"><img src={require('../assets/images/icon_10.png')} alt=""/>
                                <p>收房</p>
                            </div>
                        </div>
                        <div className="classification">
                            <div className="classification_man classification_man2"><img src={require('../assets/images/icon_03.png')} alt=""/>
                                <p>验房</p>
                            </div>
                        </div>
                        <div className="classification">
                            <div className="classification_man classification_man3"><img src={require('../assets/images/icon_36.png')} alt=""/>
                                <p>设计</p>
                            </div>
                        </div>
                        <div className="classification ">
                            <div className="classification_man classification_man2 classification_man3"><img src={require('../assets/images/icon_35.png')} alt=""/>
                                <p>预算</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="technological_left ">
                    <div className="technological_left_top technological_center_top">装修中—施工阶段</div>
                    <div className="technological_left_bottom">
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min"><img src={require('../assets/images/icon_05.png')} alt=""/>
                                <p>材料</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min"><img src={require('../assets/images/icon_13.png')} alt=""/>
                                <p>拆改</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min"><img src={require('../assets/images/icon_16.png')} alt=""/>
                                <p>水电</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man2"><img src={require('../assets/images/icon_07.png')} alt=""/>
                                <p>防水</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man3"><img src={require('../assets/images/icon_38.png')} alt=""/>
                                <p>泥工</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man3"><img src={require('../assets/images/icon_40.png')} alt=""/>
                                <p>木工</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man3"><img src={require('../assets/images/icon_33.png')} alt=""/>
                                <p>漆工</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man2 classification_man3"><img src={require('../assets/images/icon_43.png')} alt=""/>
                                <p>安装收尾</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="technological_left technological_right">
                    <div className="technological_left_top technological_right_top">装修后—入住阶段</div>
                    <div className="technological_left_bottom">
                        <div className="classification classificationmax">
                            <div className="classification_man classification_manbm"><img src={require('../assets/images/icon_28.png')} alt=""/>
                                <p>软装</p>
                            </div>
                        </div>
                        <div className="classification classificationmax">
                            <div className="classification_man classification_man2 classification_manbm"><img src={require('../assets/images/icon_25.png')} alt=""/>
                                <p>入住</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  


        {/* 家居馆 */}
             {/* 装修流程 */}
             <div className="main-1">
            <div className="main-top-img"><img src={require('../assets/images/technological_03.png')} alt=""/>
                <a href="/" className="goTomore">更多 &gt; </a>
            </div>
            <div>
                <div className="technological_left">
                    <div className="technological_left_top">装修前—准备阶段</div>
                    <div className="technological_left_bottom">
                        <div className="classification">
                            <div className="classification_man"><img src={require('../assets/images/icon_10.png')} alt=""/>
                                <p>收房</p>
                            </div>
                        </div>
                        <div className="classification">
                            <div className="classification_man classification_man2"><img src={require('../assets/images/icon_03.png')} alt=""/>
                                <p>验房</p>
                            </div>
                        </div>
                        <div className="classification">
                            <div className="classification_man classification_man3"><img src={require('../assets/images/icon_36.png')} alt=""/>
                                <p>设计</p>
                            </div>
                        </div>
                        <div className="classification ">
                            <div className="classification_man classification_man2 classification_man3"><img src={require('../assets/images/icon_35.png')} alt=""/>
                                <p>预算</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="technological_left ">
                    <div className="technological_left_top technological_center_top">装修中—施工阶段</div>
                    <div className="technological_left_bottom">
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min"><img src={require('../assets/images/icon_05.png')} alt=""/>
                                <p>材料</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min"><img src={require('../assets/images/icon_13.png')} alt=""/>
                                <p>拆改</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min"><img src={require('../assets/images/icon_16.png')} alt=""/>
                                <p>水电</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man2"><img src={require('../assets/images/icon_07.png')} alt=""/>
                                <p>防水</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man3"><img src={require('../assets/images/icon_38.png')} alt=""/>
                                <p>泥工</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man3"><img src={require('../assets/images/icon_40.png')} alt=""/>
                                <p>木工</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man3"><img src={require('../assets/images/icon_33.png')} alt=""/>
                                <p>漆工</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man2 classification_man3"><img src={require('../assets/images/icon_43.png')} alt=""/>
                                <p>安装收尾</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="technological_left technological_right">
                    <div className="technological_left_top technological_right_top">装修后—入住阶段</div>
                    <div className="technological_left_bottom">
                        <div className="classification classificationmax">
                            <div className="classification_man classification_manbm"><img src={require('../assets/images/icon_28.png')} alt=""/>
                                <p>软装</p>
                            </div>
                        </div>
                        <div className="classification classificationmax">
                            <div className="classification_man classification_man2 classification_manbm"><img src={require('../assets/images/icon_25.png')} alt=""/>
                                <p>入住</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  


        {/* 工匠馆 */}
             {/* 装修流程 */}
             <div className="main-1">
            <div className="main-top-img"><img src={require('../assets/images/technological_03.png')} alt=""/>
                <a href="/" className="goTomore">更多 &gt; </a>
            </div>
            <div>
                <div className="technological_left">
                    <div className="technological_left_top">装修前—准备阶段</div>
                    <div className="technological_left_bottom">
                        <div className="classification">
                            <div className="classification_man"><img src={require('../assets/images/icon_10.png')} alt=""/>
                                <p>收房</p>
                            </div>
                        </div>
                        <div className="classification">
                            <div className="classification_man classification_man2"><img src={require('../assets/images/icon_03.png')} alt=""/>
                                <p>验房</p>
                            </div>
                        </div>
                        <div className="classification">
                            <div className="classification_man classification_man3"><img src={require('../assets/images/icon_36.png')} alt=""/>
                                <p>设计</p>
                            </div>
                        </div>
                        <div className="classification ">
                            <div className="classification_man classification_man2 classification_man3"><img src={require('../assets/images/icon_35.png')} alt=""/>
                                <p>预算</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="technological_left ">
                    <div className="technological_left_top technological_center_top">装修中—施工阶段</div>
                    <div className="technological_left_bottom">
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min"><img src={require('../assets/images/icon_05.png')} alt=""/>
                                <p>材料</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min"><img src={require('../assets/images/icon_13.png')} alt=""/>
                                <p>拆改</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min"><img src={require('../assets/images/icon_16.png')} alt=""/>
                                <p>水电</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man2"><img src={require('../assets/images/icon_07.png')} alt=""/>
                                <p>防水</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man3"><img src={require('../assets/images/icon_38.png')} alt=""/>
                                <p>泥工</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man3"><img src={require('../assets/images/icon_40.png')} alt=""/>
                                <p>木工</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man3"><img src={require('../assets/images/icon_33.png')} alt=""/>
                                <p>漆工</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man2 classification_man3"><img src={require('../assets/images/icon_43.png')} alt=""/>
                                <p>安装收尾</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="technological_left technological_right">
                    <div className="technological_left_top technological_right_top">装修后—入住阶段</div>
                    <div className="technological_left_bottom">
                        <div className="classification classificationmax">
                            <div className="classification_man classification_manbm"><img src={require('../assets/images/icon_28.png')} alt=""/>
                                <p>软装</p>
                            </div>
                        </div>
                        <div className="classification classificationmax">
                            <div className="classification_man classification_man2 classification_manbm"><img src={require('../assets/images/icon_25.png')} alt=""/>
                                <p>入住</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  


        {/* 二手市场 */}
             {/* 装修流程 */}
             <div className="main-1">
            <div className="main-top-img"><img src={require('../assets/images/technological_03.png')} alt=""/>
                <a href="/" className="goTomore">更多 &gt; </a>
            </div>
            <div>
                <div className="technological_left">
                    <div className="technological_left_top">装修前—准备阶段</div>
                    <div className="technological_left_bottom">
                        <div className="classification">
                            <div className="classification_man"><img src={require('../assets/images/icon_10.png')} alt=""/>
                                <p>收房</p>
                            </div>
                        </div>
                        <div className="classification">
                            <div className="classification_man classification_man2"><img src={require('../assets/images/icon_03.png')} alt=""/>
                                <p>验房</p>
                            </div>
                        </div>
                        <div className="classification">
                            <div className="classification_man classification_man3"><img src={require('../assets/images/icon_36.png')} alt=""/>
                                <p>设计</p>
                            </div>
                        </div>
                        <div className="classification ">
                            <div className="classification_man classification_man2 classification_man3"><img src={require('../assets/images/icon_35.png')} alt=""/>
                                <p>预算</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="technological_left ">
                    <div className="technological_left_top technological_center_top">装修中—施工阶段</div>
                    <div className="technological_left_bottom">
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min"><img src={require('../assets/images/icon_05.png')} alt=""/>
                                <p>材料</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min"><img src={require('../assets/images/icon_13.png')} alt=""/>
                                <p>拆改</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min"><img src={require('../assets/images/icon_16.png')} alt=""/>
                                <p>水电</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man2"><img src={require('../assets/images/icon_07.png')} alt=""/>
                                <p>防水</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man3"><img src={require('../assets/images/icon_38.png')} alt=""/>
                                <p>泥工</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man3"><img src={require('../assets/images/icon_40.png')} alt=""/>
                                <p>木工</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man3"><img src={require('../assets/images/icon_33.png')} alt=""/>
                                <p>漆工</p>
                            </div>
                        </div>
                        <div className="classification classification_man_min">
                            <div className="classification_man classification_xyz_min classification_man2 classification_man3"><img src={require('../assets/images/icon_43.png')} alt=""/>
                                <p>安装收尾</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="technological_left technological_right">
                    <div className="technological_left_top technological_right_top">装修后—入住阶段</div>
                    <div className="technological_left_bottom">
                        <div className="classification classificationmax">
                            <div className="classification_man classification_manbm"><img src={require('../assets/images/icon_28.png')} alt=""/>
                                <p>软装</p>
                            </div>
                        </div>
                        <div className="classification classificationmax">
                            <div className="classification_man classification_man2 classification_manbm"><img src={require('../assets/images/icon_25.png')} alt=""/>
                                <p>入住</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  





                        </div>

                        {/*底部 */}
                        <div id="footer">
                        <div id="tmall-ensure">
            
                               
                        </div>
                        <div id="tmall-desc">
        
            <div className="mui-global-fragment-load" data-fragment="tmbase/mui_footer_desc"><dl id="ensure">
    <dt><span>购物指南</span></dt>
    <dd><a href="//register.tmall.com/" >免费注册</a> <a href="https://www.alipay.com/user/reg_select.htm"  >开通支付宝</a> <a href="https://www.alipay.com/user/login.htm?goto=https%3A%2F%2Fwww.alipay.com%2Fuser%2Finpour_request.htm"  >支付宝充值</a></dd>
</dl>
<dl id="beginner">
    <dt><span>科乐福保障</span></dt>
    <dd><a href="//service.tmall.com/support/tmall/knowledge-1140860.htm"  data-spm-anchor-id="875.7931836/B.a2226n1.8">发票保障</a> <a href="//service.tmall.com/support/tmall/knowledge-1124063.htm"  data-spm-anchor-id="875.7931836/B.a2226n1.9">售后规则</a> <a href="//service.tmall.com/support/tmall/knowledge-1126800.htm"  data-spm-anchor-id="875.7931836/B.a2226n1.10">缺货赔付</a></dd>
</dl>
<dl id="payment">
    <dt><span>支付方式</span></dt>
    <dd><a href="https://payservice.alipay.com/intro/index.htm?c=kjzf"  data-spm-anchor-id="875.7931836/B.a2226n1.11">快捷支付</a> <a href="https://payservice.alipay.com/intro/index.htm?c=xyk" data-spm-anchor-id="875.7931836/B.a2226n1.12">信用卡</a> <a href="https://payservice.alipay.com/intro/index.htm?c=yeb"  data-spm-anchor-id="875.7931836/B.a2226n1.13">余额宝</a> <a href="https://payservice.alipay.com/intro/index.htm?c=hb"  data-spm-anchor-id="875.7931836/B.a2226n1.14">蚂蚁花呗</a> <a href="//tms.alicdn.com/market/cainiao/codchn.php"  data-spm-anchor-id="875.7931836/B.a2226n1.15">货到付款</a></dd>
</dl>
<dl id="seller">
    <dt><span>商家服务</span></dt>
    <dd>
    <a href="//guize.tmall.com/"  data-spm-anchor-id="875.7931836/B.a2226n1.16">科乐福规则</a> 
    <a href="//zhaoshang.tmall.com/"  className="join" data-spm-anchor-id="875.7931836/B.a2226n1.17">商家入驻</a> 
    <a href="//shangjia.tmall.com/portal.htm" data-spm-anchor-id="875.7931836/B.a2226n1.18">商家中心</a> 
    <a href="//peixun.tmall.com/"  data-spm-anchor-id="875.7931836/B.a2226n1.19">科乐福智库</a> 
    <a href="//e56.tmall.com"  data-spm-anchor-id="875.7931836/B.a2226n1.20">物流服务</a>
    <a href="//maowo.tmall.com/"  data-spm-anchor-id="875.7931836/B.a2226n1.21">喵言喵语</a> 
    <a href="//fw.tmall.com/"  data-spm-anchor-id="875.7931836/B.a2226n1.22">运营服务</a></dd>
</dl>
<dl id="mobile">
    <dt>手机科乐福</dt>
    <dd><a href="//mobile.tmall.com/" className="join" data-spm-anchor-id="875.7931836/B.a2226n1.23"><img src="//img.alicdn.com/tfscom/TB14MWoNhjaK1RjSZFAwu2dLFXa.png" width="105" height="105" alt="手机天猫"/></a>
    </dd>
</dl>
</div>
        
    </div>
                        </div>

                        </div>
                       
                    </div>     
        
                    
                
                   
                
             
               



                    </Router>
            </div>
                
        )
    }
}
