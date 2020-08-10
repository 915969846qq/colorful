
//风格馆  装修案例
import React, { Component } from 'react';

import { Row, Col, } from 'antd';
import { Pagination } from 'antd';

//引入css
import "../Craftsmans_Hall/css/PopularCraftsman.css"

//引入底部
// import Footer from '../commen/footer'


//引入icon
// import "./icon/iconfont.css"

class Style_pavilion_case extends Component {
    constructor(props) {
        super(props);
        this.state = {
            craftsmanArr: [],

            //职业
            occupation: "",
            //经验
            exper: "",
            experienceMin: "",
            experienceMax: "",
            // 今日推荐
            orderList: "",
            // 页数
            current:1,
        }
    }

    //初始化
    UNSAFE_componentWillMount() {
        // fetch('http://172.16.10.4:8080/banJu/craftsman/craftsmanFindByLike', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     credentials: 'include',
        //     // 传参
        //     body: JSON.stringify({
        //         occupation: this.props.location.state.key,
        //         experienceMin: this.state.experienceMin,
        //         experienceMax: this.state.experienceMax,
        //         orderList: this.state.orderList,
        //         page: this.state.current,
        //         limit: 8,
        //     })
        // }).then((res) => {
        //     return res.json();
        // }).then((data) => {
        //     console.log(data);
        //     // 存放数组            
        //     this.setState({
        //         craftsmanArr:data
        //     })
        // }).catch((e) => {
        //     console.log("数据有误");
        // });
        // =============================================================================
        // let arr = this.state.craftsmanArr.map((item) => {
        //     return (
        //         <div className="craftsman" key={item.cid}>
        //             {/* <img src={require(`../../${item.avatar}`)} alt="" className="pavilionLImg"/> */}
        //             <div className="craftsman_list_padding">
        //                 <div className="flex craftsman_Info">
        //                     <div className="craftsman_list_name">{item.realName}</div>
        //                     <div className="craftsman_company">{item.company}</div>
        //                 </div>
        //                 <div className="flex craftsman_Info">
        //                     <span><span className="iconfont icon-aixin"></span>{item.hot}</span>
        //                     <div className="design cursor" onClick={this.book.bind(this, item.cid)}>预约设计</div>
        //                 </div>
        //             </div>
        //         </div>
        //     )
        // });
        
        // this.setState({
        //     arr,
        // })
    }

    //职业
    occupationFn = (e, name) => {
        console.log(e);
        this.setState({
            occupation: e
        });
        // 点击事件中调接口
        // this.state.position=e.target.innerHTML;

        fetch('http://172.16.10.4:8080/banJu/craftsman/craftsmanFindByLike', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            // 传参
            body: JSON.stringify({
                occupation: this.state.occupation,
                experienceMin: this.state.experienceMin,
                experienceMax: this.state.experienceMax,
                orderList: this.state.orderList,
                page: this.state.current,
                limit: 8,
            })
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            // 存放数组            
            this.setState({
                craftsmanArr: data
            })
        }).catch((e) => {
            console.log("数据有误");
        });
    }


    // 经验
    experFn = (e, name) => {
        console.log(typeof e);
        console.log(e.substring(0, 1));
        this.setState({
            exper: e,
            experienceMin: e.substring(0, 1),
            experienceMax: e.substring(1, 1),
        });
        // 点击事件中调接口
        // this.state.position=e.target.innerHTML;

        fetch('http://172.16.10.4:8080/banJu/craftsman/craftsmanFindByLike', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            // 传参
            body: JSON.stringify({
                occupation: this.state.occupation,
                experienceMin: this.state.experienceMin,
                experienceMax: this.state.experienceMax,
                orderList: this.state.orderList,
                page: this.state.current,
                limit: 8,
            })
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            // 存放数组            
            this.setState({
                craftsmanArr: data
            })
        }).catch((e) => {
            console.log("数据有误");
        });
    }

    // 今日推荐
    oneShowFn = (e, name) => {
        console.log(e);
        this.setState({
            orderList: e
        });
        // 点击事件中调接口
        // this.state.position=e.target.innerHTML;

        fetch('http://172.16.10.4:8080/banJu/craftsman/craftsmanFindByLike', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            // 传参
            body: JSON.stringify({
                occupation: this.state.occupation,
                experienceMin: this.state.experienceMin,
                experienceMax: this.state.experienceMax,
                orderList: this.state.orderList,
                page: this.state.current,
                limit: 8,
            })
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            // 存放数组            
            this.setState({
                craftsmanArr: data
            })
        }).catch((e) => {
            console.log("数据有误");
        });
    }

     //分页 
     onChange = page => {
        console.log(page);
        this.setState({
          current: page,
        });
        //点击分页
        fetch('http://172.16.10.4:8080/banJu/craftsman/craftsmanFindByLike', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            // 传参
            body: JSON.stringify({
                occupation: this.state.occupation,
                experienceMin: this.state.experienceMin,
                experienceMax: this.state.experienceMax,
                orderList: this.state.orderList,
                page: this.state.current,
                limit: 8,
            })
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            // 存放数组            
            this.setState({
                craftsmanArr: data
            })
        }).catch((e) => {
            console.log("数据有误");
        });
    };

    //预约
    book = (id, e) => {
        console.log(id);
    }

    render() {
        
        console.log(this.state.craftsmanArr)
        let arr = this.state.craftsmanArr.map((item) => {
            return (
                <div className="craftsman" key={item.cid}>
                    {/* <img src={require(`../../${item.avatar}`)} alt="" className="pavilionLImg"/> */}
                    <div className="craftsman_list_padding">
                        <div className="flex craftsman_Info">
                            <div className="craftsman_list_name">{item.realName}</div>
                            <div className="craftsman_company">{item.company}</div>
                        </div>
                        <div className="flex craftsman_Info">
                            <span><span className="iconfont icon-aixin"></span>{item.hot}</span>
                            <div className="design cursor" onClick={this.book.bind(this, item.cid)}>预约设计</div>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            //外层css取名
            <div className="craftsmancss">
                {/* 表格 */}
                <div className="table">
                    {/* top */}
                    <div className="table-top">
                        {/* 第一行 */}
                        <div className="tableBox flex liStyle">
                            {/* 左边 */}
                            <div className="tableBox_left ">风格</div>
                            <div className="tableBox_right">
                                <span className={this.state.occupation === "" ? 'myChioce' : 'myCancle'} onClick={this.occupationFn.bind(this, "")}>不限</span>
                                <span className={this.state.occupation === "木工" ? 'myChioce' : 'myCancle'} onClick={this.occupationFn.bind(this, "木工")}>中式</span>
                                <span className={this.state.occupation === "泥工" ? 'myChioce' : 'myCancle'} onClick={this.occupationFn.bind(this, "泥工")}>轻奢</span>
                                <span className={this.state.occupation === "漆工" ? 'myChioce' : 'myCancle'} onClick={this.occupationFn.bind(this, "漆工")}>简式</span>
                            </div>
                        </div>
                        {/* 第2行 */}
                        <div className=" flex liStyle">
                            {/* 左边 */}
                            <div className="tableBox_left ">类型</div>
                            <div className="tableBox_right">
                                <span className={this.state.exper === "" ? 'myChioce' : 'myCancle'} onClick={this.experFn.bind(this, "")}>不限</span>
                                <span className={this.state.exper === "12" ? 'myChioce' : 'myCancle'} onClick={this.experFn.bind(this, "12")}>客厅</span>
                                <span className={this.state.exper === "25" ? 'myChioce' : 'myCancle'} onClick={this.experFn.bind(this, "25")}>卧室</span>
                                <span className={this.state.exper === "58" ? 'myChioce' : 'myCancle'} onClick={this.experFn.bind(this, "58")}>书房</span>
                            </div>
                        </div>
                    </div>
                    {/* bottom */}
                    <div className="table-bottom">
                        <span >地区</span>
                        <span className={this.state.orderList === "" ? 'myShow' : 'myHide'} onClick={this.oneShowFn.bind(this, "")}>全成都</span>
                        <span className={this.state.orderList === "人气排行" ? 'myShow' : 'myHide'} onClick={this.oneShowFn.bind(this, "人气排行")}>武侯区</span>
                        <span className={this.state.orderList === "人气排行" ? 'myShow' : 'myHide'} onClick={this.oneShowFn.bind(this, "人气排行")}>青羊区</span>
                        <span className={this.state.orderList === "人气排行" ? 'myShow' : 'myHide'} onClick={this.oneShowFn.bind(this, "人气排行")}>成华区</span>
                    </div>
                </div>
                {/* 工匠人员 */}
                <div className="craftsmanStyle flex ">

                    {arr}
                    {/* {this.state.arr} */}

                </div>
                <div className="craftsmanStyle">
                     <Pagination defaultCurrent={1}  total={50} onChange={this.onChange.bind(this)}/>    
                     {/* {this.state.craftsmanArr.total} 返回数据的总条数*/}
                </div>
                {/* <Footer></Footer> */}
            </div>
        );
    }
}

export default Style_pavilion_case;