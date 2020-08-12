import React, { Component } from 'react'
import "./css/Personal_Collection_goods.css"
import { Table,Popconfirm,message  } from 'antd';
import "antd/dist/antd.css"
import $ from "jquery"

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
        state:"销售中",
        price:"800"


    },
    {
        key: '2',
        img: 'div2_03.jpg',
        state:"销售中",
        price:"400"

    },
    {
        key: '3',
        img: 'min-banner1_03.jpg',
        state:"销售中",
        price:"600"

    },
    {
        key: '4',
        img: 'div2_03.jpg',
        state:"销售中",
        price:"900"

    },

    {
        key: '5',
        img: 'min-banner1_03.jpg',
        state:"销售中",
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
        state:"销售中",
        price:"500"


    },
    {
        key: '12',
        img: 'div2_03.jpg',
        state:"已结束",
        price:"700"

    },
]


/*确认框*/
function confirm(e) {
    console.log(e);
    message.success('确定');
    /*==================================取消收藏===========================*/
    fetch('http://47.100.90.56:8080/banJu/user/deleteusergoods',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        credentials: 'include',
        body:JSON.stringify({
            uid:3,
            gid:this.state.selectedRowKeys[0],
            status:1
        })
    }).then((res)=>{
        return res.json();
    }).then((data)=>{
        this.setState({
            shangpin:data.data
        },()=> {
            this.xuanran()

        })
    }).catch((e) => {
        console.log("数据有误");
    });


}

function cancel(e) {
    console.log(e);
    message.error('取消');
}

//收藏的商品
export default class Personal_Collection_goods extends Component {

    constructor() {
        super();
        this.state={
            selectedRowKeys:[],
            shangpin:"",
            data:""
        }


    }

    xuanran=()=>{
        /*我的收藏商品初始化数据渲染*/
        fetch('http://47.100.90.56:8080/banJu/user/findusergoods',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            credentials: 'include',
            body:JSON.stringify({
                uid:3,
                status:1,

            })
        }).then((res)=>{
            return res.json();
        }).then((data)=>{
            this.setState({
                shangpin:data.data
            },()=> {
                console.log(data)
                let data1=this.state.shangpin
                let changeData = JSON.parse(JSON.stringify(data1).replace(/gid/g, 'key'));/*将数组里的id属性名改为key*/
                this.setState({
                    data:changeData
                })
            })
        }).catch((e) => {
            console.log("数据有误");
        });
    }



    componentDidMount() {
       this.xuanran()


    }

    gouwuce(){
        fetch('http://47.100.90.56:8080/banJu/user/findusergoods',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            credentials: 'include',
            body:JSON.stringify({
                uid:3,
                status: 1,
                gid:this.state.selectedRowKeys[0]
            })
        }).then((res)=>{
            return res.json();
        }).then((data)=>{
            this.setState({
                shangpin:data.data
            },()=> {
                console.log(data)
                let data1=this.state.shangpin
                let changeData = JSON.parse(JSON.stringify(data1).replace(/gid/g, 'key'));/*将数组里的id属性名改为key*/
                this.setState({
                    data:changeData
                })
            })
        }).catch((e) => {
            console.log("数据有误");
        });
        this.xuanran()
    }



    onSelectChange = selectedRowKeys => {
        console.log( selectedRowKeys);

        this.setState({ selectedRowKeys:selectedRowKeys });

    };

    render() {
        const columns = [
            {
                title: '商品信息',
                dataIndex: 'img',
                align:'center',
                render:(record,data) => {
                    // let m=data.slice(0,3)
                    return <div className="xinxi">
                        <img src={require("../../assets/images/jaju200.jpg")}/>
                        <label className="textw">{data.name}    {data.desc}</label>
                    </div>
                }
            },

            {
                title: '状态',
                dataIndex: 'state',
                align:'center',
                render:(record,data) => {
                    return <span>销售中</span>
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
                render:(record,data,) => {
                    return <p className="state butone">
                        <span>马上抢</span>
                        <Popconfirm
                            title="确定要取消改商品?"
                            onConfirm={confirm.bind(this)}
                            onCancel={cancel}
                            okText="确定"
                            cancelText="取消"
                        >
                            <span className="quxiao">取消收藏</span>
                        </Popconfirm>,
                    </p>
                }
            }
        ];



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
            <div className="xt4">
                <div className="box">
                    <div className="title">收藏的商品</div>
                    <div className="setion">
                        <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data}
                               pagination={{showQuickJumper: true,hideOnSinglePage:false,pageSize:3}}/>


                    </div>

                </div>
                <p className="qx">全选</p>
                <div className="All-out">

                    <form action="" method="get">
                        <label className="join" onClick={this.gouwuce.bind(this)}>加入购物车 </label>
                        <label>|</label>
                        <label className="join cancwel">取消关注</label>
                    </form>
                </div>

            </div>
        )
    }
}
