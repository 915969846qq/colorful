import React, { Component } from 'react'
import "./css/Personal_Collection_activities.css"
// import { Table } from 'antd';
import "antd/dist/antd.css"
import { Table, } from 'antd';
/*收藏活动*/
const columns = [
    {
        title: '商品信息',
        dataIndex: 'img',
        align:'center',
        render:(record,data) => {
            // let m=data.slice(0,3)

            return <div className="xinxi"><img src={require(`../../assets/images/${data.img}`)} className="img" alt=""/>
                <label className="textw">精品家私，纯手工制作，价格不贵，超级实惠,走过路过，机会不要错过</label>
            </div>
        }
    },

    {
        title: '状态',
        dataIndex: 'state',
        align:'center',
        render:(record,data) => {
            return <span>{data.state}</span>
        }


    },
    {
        title: '活动价',
        dataIndex: 'price',
        align:'center',
        render:(record,data) => {
            return <span className="color">{data.price}</span>
        }
    },
    {
        title: '操作',
        dataIndex: 'address',
        align:'center',
        render:(record,data) => {
            return <p className="state butone">
                <span>马上抢</span>
                <span>取消收藏</span>
            </p>
        }
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


//需要的渲染数据
const data = [
    {
        key: '1',
        img: 'min-banner1_03.jpg',
        state:"还剩 : 21天 10 小时 21分 0 秒",
        price:"800"


    },
    {
        key: '2',
        img: 'div2_03.jpg',
        state:"还剩 : 21天 10 小时 21分 0 秒",
        price:"400"

    },
    {
        key: '3',
        img: 'min-banner1_03.jpg',
        state:"还剩 : 21天 10 小时 21分 0 秒",
        price:"600"

    },
    {
        key: '4',
        img: 'div2_03.jpg',
        state:"还剩 : 21天 10 小时 21分 0 秒",
        price:"900"

    },

    {
        key: '5',
        img: 'min-banner1_03.jpg',
        state:"还剩 : 21天 10 小时 21分 0 秒",
        price:"600"


    },
    {
        key: '6',
        img: 'div2_03.jpg',
        state:"已结束",
        price:"700"


    },
    {
        key: '7',
        img: 'min-banner1_03.jpg',
        state:"已结束",
        price:"200"


    },
    {
        key: '8',
        img: 'div2_03.jpg',
        state:"已结束",
        price:"400"


    },
    {
        key: '9',
        img: 'min-banner1_03.jpg',
        state:"已结束",
        price:"800"


    },
    {
        key: '10',
        img: 'div2_03.jpg',
        state:"已结束",
        price:"400"


    },
    {
        key: '11',
        img: 'min-banner1_03.jpg',
        state:"已结束",
        price:"500"


    },
    {
        key: '12',
        img: 'div2_03.jpg',
        state:"已结束",
        price:"700"

    },
   ]


//收藏的活动
export default class Personal_Collection_goods extends Component {
    onChange(page) {
        this.getData(page);
        this.setState({
            loading: true
        })
    }

    constructor(){
        super();
        this.state={
            orderList:[],
            // mykey:1
        }
    }




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
            <div className="xt6">
                <div className="box">
                    <div className="title">收藏的活动</div>
                    <div className="setion">
                        <Table rowSelection={rowSelection} columns={columns} dataSource={data}
                               pagination={{showQuickJumper: true,hideOnSinglePage:false,pageSize:3}}
                               loading={this.state.loading}
                               className="certificate"
                        >

                        </Table>


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
