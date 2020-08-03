import React, { Component } from 'react'
import "./css/Personal_A_collection_shops.css"
import { Table } from 'antd';
import "antd/dist/antd.css"
/*收藏的店铺*/
const columns = [
    {
        dataIndex: 'img',
        align:'center'
    },

    {
        dataIndex: 'zhuangtai',
        align:'center'
    },
    {
        dataIndex: 'price',
        align:'center'
    },
    {
        dataIndex: 'address',
        align:'center'
    }
];

// const data = [];
// for (let i = 0; i < 1; i++) {
//     data.push({
//         key: i,
//         name: `Edward King ${i}`,
//         age: 32,
//         address: `London, Park Lane no. ${i}`,
//     });
// }


//收藏的活动
export default class Personal_Collection_goods extends Component {
    constructor() {
        super();
        this.state={data:[{ key: 1,
                img: <div>
                    <div className="coolra-two">
                        <div className="top">
                            <div><img src={require("../../assets/images/min-banner1_03.jpg")} alt=""/></div>
                            <h5>成都直营店</h5>
                        </div>
                        <p className="popularity">关注人气 : <span>23</span></p>
                        <p className="evaluation">服务评价 : <span>2344</span></p>
                        <p className="Attention">关注时间 : <span>2016-6-6</span></p>
                        <div className="buton">
                            <a href="1" className="Aleft">联系客户</a>
                            <a href="1" className="Aleft Aright">取消关注</a>
                        </div>
                        <a href="1" className="GoToinmaoim">进入店铺</a>
                    </div>
                    <div className="Shop_introduction">
                        <h4>店铺介绍：</h4>
                        <p>欢迎光临本店，本店新开张，诚信经营，只赚信誉不赚钱。 本店商品均属正品，假一罚十信誉保证。 欢迎广大顾客前来放心选购，我们将竭诚为您服务!
                            本店专门营销什么什么商品，假一罚十信誉保证。本店的服务宗旨是用心服务，以诚待人！</p>
                    </div>
                    <div className="canPin">
                        <div className="oimg">
                            <img src={require("../../assets/images/min-banner1_03.jpg")} alt=""/>
                            <p>地中海风格服复式家居</p>
                            <span>￥123.00</span>
                        </div>
                    </div>

                    <div className="canPin">
                        <div className="oimg">
                            <img src={require("../../assets/images/min-banner1_03.jpg")} alt=""/>
                        </div>
                        <p>地中海风格服复式家居</p>
                        <span>￥123.00</span>
                    </div>
                </div>
                ,



            }]}


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
            <div>
                <div className="box">
                    <div className="title">收藏的店铺</div>
                    <div className="setion">
                        <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
                        <div className="All-out">
                            <form action="" method="get">
                                <label className="join">加入购物车 </label>
                                <label>|</label>
                                <label className="join cancwel">取消关注</label>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
