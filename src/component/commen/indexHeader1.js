import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class indexHeader extends Component {
    render() {
        
        return (
            <div className="index">
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
                                        
                                        <Link to="/Style_pavilion_case">                                              
                                               风格馆
                                            
                                            <div className="hover-pic"></div>
                                        </Link>
                                        
                                        <Link to="/Decoration_Museum">                                            
                                                装修馆
                                            

                                            
                                            <div className="hover-pic"></div>
                                        </Link>
                                        
                                        <Link to="/Craftsman_Pavilion">                                          
                                                工匠馆
                                            

                                            
                                            <div className="hover-pic"></div>
                                        </Link>
                                        <Link to="/Secondhand_Market">   
                                            
                                                二手馆
                                            

                                            <div className="hover-pic"></div>
                                        </Link>
                                        
                                        <Link to="/Building_materials_Museum">                                               
                                                建材馆
                                            

                                            
                                            <div className="hover-pic"></div>
                                        </Link>
                                        
                                        <Link to="/Home_Museum">                                            
                                                家居馆
                                            
                                            <div className="hover-pic"></div>
                                        </Link>

                                        <Link to="/Furniture_Museum">
                                            
                                                家具馆
                                            
                                            <div className="hover-pic"></div>
                                        </Link>
                                        
                                    </div>
                                </div>
                            </div>
                            {/* banner */}
                            <div className="j_category category-con">
                                <div className="category-inner-con j_categoryInnerCon j_categoryTab">
                                    <div className="j_logo logo-con">
                                        <img className="tmall-logo-img" src={require('../../assets/images/logo2.png')} alt=""/>
                                    </div>
                                   
                                   
                                </div>
                                </div>
                                </div>
                                </div>
                                
                             
            </div>
        )
    }
}
