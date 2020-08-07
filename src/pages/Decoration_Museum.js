import React, { Component } from 'react'
import { Carousel,Row, Col,Table, } from 'antd';
// import "antd/dist/antd.css"
import "./css/Decoration_Museum.css"
import zhCN from "antd/es/locale/zh_CN";
import $ from "jquery"

//装修馆


const columns = [
    {
        dataIndex: 'name',
        render:(record,data) => {
           return <div> <div className="main-left-top">
               <div className="left-IMGe"><a href="1"><img
                   src={require("../assets/images/min-banner1_03.jpg")} alt=""/></a></div>
               <div className="left_text">
                   <h6 id="Company"><a href="1">四川居美家装饰工程有限公司</a></h6>
                   <p>营业执照惠5月大型家装团购活动</p>
                   <p className="Comparddss">地址 : <span>青羊区铜丝街8号</span></p>
                   <p className="allvalue">效果图 :<span> 16</span>套 &nbsp;&nbsp;   签约
                       : <span>30</span> 个 </p>
               </div>
               <div className="left-bottun">

                   <p>口碑值 </p>
                   <span>90</span>
                   <a href="1">立即预约</a>

               </div>
           </div>
               <div className="top20"></div>
           </div>
        }
    },

];

const data = [
    {
        key: '1',

    },
    {
        key: '2',

    },
    {
        key: '3',

    },
];

export default class Decoration_Museum extends Component {
    componentDidMount(){
        $(".zhuangxiu .top_table ul li").click(function () {
           $(this).css("background","#ff0000").css("color","white")
           $(this).siblings().css("background","none").css("color","#333")
        })
    }
    state = {
        selectedRowKeys: [], // Check here to configure the default column
    };
    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    render() {


        const { selectedRowKeys } = this.state;

        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            selections: [
                Table.SELECTION_ALL,
                Table.SELECTION_INVERT,
                {
                    // key: 'odd',
                    // text: 'Select Odd Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return false;
                            }
                            return true;
                        });
                        this.setState({ selectedRowKeys: newSelectedRowKeys });
                    },
                },
                {
                    // key: 'even',
                    // text: 'Select Even Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return true;
                            }
                            return false;
                        });
                        this.setState({ selectedRowKeys: newSelectedRowKeys });
                    },
                },
            ],
        };

        return (
            <div className="zhuangxiu">

                {/*轮播*/}
                <Carousel autoplay>
                    <div>
                        <h3><img src={require("../assets/images/twoimages/Building-banner_02.jpg")} alt=""/></h3>
                    </div>
                    <div>
                        <h3><img src={require("../assets/images/twoimages/Building-banner_02.jpg")} alt=""/></h3>
                    </div>
                    <div>
                        <h3><img src={require("../assets/images/twoimages/Building-banner_02.jpg")} alt=""/></h3>
                    </div>
                </Carousel>
                <Row>
                    <Col span={1}></Col>
                    <Col span={22}>
                <div className="main">
                    <div className="top_table">
                        <h5>类型</h5>
                        <ul>
                            <li className="btchecker" >普通住宅</li>
                            <li className="">小户型</li>
                            <li className="">别墅</li>
                            <li className="">局部装修</li>
                            <li className="">KTV</li>
                            <li className="">商铺餐厅</li>
                            <li className="">酒楼美容</li>
                            <li className="">娱乐场所</li>
                            <li className="">办公室</li>
                            <li className="">更多</li>
                        </ul>
                        <h5>服务区域</h5>
                        <ul>
                            <li className="btchecker">都江堰</li>
                            <li className="">彭州</li>
                            <li className="">邛崃</li>
                            <li className="">崇州</li>
                            <li className="">金堂县</li>
                            <li className="">郫县</li>
                            <li className="">新津县</li>
                            <li className="">双流县</li>
                            <li className="">龙泉驿区</li>
                            <li className="">更多</li>
                        </ul>
                        <h5>承接价位</h5>
                        <ul>
                            <li className="btchecker">3万以下</li>
                            <li className="">3——5万</li>
                            <li className="">5——8万</li>
                            <li className="">8——12万</li>
                            <li className="">12——30万</li>
                            <li className="">30——100万</li>
                            <li className="">100万以上</li>
                        </ul>
                        <h5>所在区域</h5>
                        <ul>
                            <li className="btchecker" >都江堰</li>
                            <li className="">彭州</li>
                            <li className="">邛崃</li>
                            <li className="">崇州</li>
                            <li className="">金堂县</li>
                            <li className="">郫县</li>
                            <li className="">新津县</li>
                            <li className="">双流县</li>
                            <li className="">龙泉驿区</li>
                            <li className="">更多</li>
                        </ul>
                    </div>
            </div>
                        <div className="Today_recommended ">
                            <ul className="ul">
                                <li className="btchecker">综合推荐</li>
                                <li>口碑值 v</li>
                                <li>设计方案数 v</li>
                                <li>施工案例数 v</li>
                            </ul>


                            <div className="main-left">



                                <Table rowSelection={rowSelection}
                                       columns={columns}
                                       dataSource={data}
                                       bordered="true"
                                       border="1px solid black"
                                       tableLayout="fixed"
                                       locale={zhCN}
                                       pagination={{showQuickJumper: true,hideOnSinglePage:false,pageSize:2}}

                                />



                            </div>

                            <div className="main-right">
                                <div className="main-right-one">
                                    <h4>体验科乐福服务</h4>
                                    <p>已有 <span>5326</span> 位用户选择齐家装修</p>
                                    <p>今日已有 <span>3584</span> 用户预约装修</p>
                                    <form className="text"><input type="text" placeholder="您的名字"/></form>
                                    <form className="tel"><input type="tel" placeholder="您的电话" maxLength="18"
                                                                 />
                                    </form>
                                    <form className="city"><input type="text" placeholder="输入您所在的城市"/></form>
                                    <form><input type="checkbox" value=""/>&nbsp; 我已阅读并同意科乐福的用户协议</form>
                                    <a href="1" className="botton">免费获取</a>
                                </div>
                            </div>

                        </div>


                        {/*页脚*/}
                        <div id="footer">
                            <div className="footer">
                                <div className="footer-top">
                                    <div className="footer-top-left">
                                        <p>购物指南</p>
                                        <ul>
                                            <li>
                                                <a href="1">会员注册</a>
                                            </li>
                                            <li>
                                                <a href="1">如何订购</a>
                                            </li>
                                            <li>
                                                <a href="1">如何支付</a>
                                            </li>
                                            <li>
                                                <a href="1">订单处理</a>
                                            </li>
                                            <li>
                                                <a href="1">配送方式</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer-top-left">
                                        <p>装修服务</p>
                                        <ul>
                                            <li>
                                                <a href="1">装修齐家保</a>
                                            </li>
                                            <li>
                                                <a href="1">免费第三方监理</a>
                                            </li>
                                            <li>
                                                <a href="1">环保装修</a>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="footer-top-left">
                                        <p>购物保障</p>
                                        <ul>
                                            <li>
                                                <a href="1">正品保障</a>
                                            </li>
                                            <li>
                                                <a href="1">先行赔付</a>
                                            </li>
                                            <li>
                                                <a href="1">延迟赔偿</a>
                                            </li>
                                            <li>
                                                <a href="1">7天无理由退换货</a>
                                            </li>
                                            <li>
                                                <a href="1">投诉维权</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer-top-left">
                                        <p>团购知识</p>
                                        <ul>
                                            <li>
                                                <a href="1">团购知识</a>
                                            </li>
                                            <li>
                                                <a href="1">团购活动</a>
                                            </li>
                                            <li>
                                                <a href="1">团购价格</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer-top-left">
                                        <p>定制服务</p>
                                        <ul>
                                            <li>
                                                <a href="1">价格特搜</a>
                                            </li>
                                            <li>
                                                <a href="1">装修顾问</a>
                                            </li>
                                            <li>
                                                <a href="1">齐家装修学堂</a>
                                            </li>
                                            <li>
                                                <a href="1">装修齐家保</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            <p className="center1">About PCGROUP | 网站介绍 | 隐私政策 | 广告服务 | 合作媒体 | 投稿指南 | 使用条款 | 联系我们 | 招聘精英 | 网站地图 | 用户体验提升计划</p>
                            <p className="center">太平洋网络: 太平洋电脑网 | 太平洋汽车网 | 太平洋时尚网 | 太平洋亲子网 | 太平洋家居网</p>
                            <p className="center">未经授权禁止转载、摘编、复制或建立镜像，如有违反，追究法律责任</p>
                                <div className="footer-bottom">
                                    <p>2005-2016 科乐福版权所有，并保留所有权利。</p>
                                    <p>
                                        关于我们 联系我们 友情链接 帮助中心 意见反馈 高薪聘请 法律声明
                                    </p>
                                    <p>ICP备案证书号:蜀ICP备00000000号</p>

                                    <div className="footer-icon">
                                        <img
                                            className="full1"
                                            src={require('../assets/images/footer-icon_03.png')}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Col>
                    <Col span={1}></Col>
                </Row>
            </div>

        )
    }
}
