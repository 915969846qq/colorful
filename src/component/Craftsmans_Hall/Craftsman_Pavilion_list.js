import React, { Component } from 'react';

import { Row, Col, } from 'antd';
import { Pagination } from 'antd';
import { Modal, Button, Space } from 'antd';
import "whatwg-fetch"

//引入css
import "./css/PopularCraftsman.css"

//引入底部
import Footer from '../commen/footer'


//引入icon
import "./icon/iconfont.css"

class Craftsman_Pavilion_list extends Component {
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
            //总数
            total:1,
            //年月日
            bookDate:"",
            id:"",

            //预约样式的状态值
            // status:"true",

             //模态框的值
             content:"",
        }
    }

    //初始化
    UNSAFE_componentWillMount() {
        console.log(this.props.location.state.key);
        fetch('http://172.16.10.4:8080/banJu/craftsman/craftsmanFindByLike', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            // 传参
            body: JSON.stringify({
                occupation: this.props.location.state.key,
                experienceMin: this.state.experienceMin,
                experienceMax: this.state.experienceMax,
                orderList: this.state.orderList,
                // page: this.state.current,
                // limit: 4,
            })
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            // 存放数组            
            this.setState({
                craftsmanArr:data.data,
                total:parseInt(data.total),
            }
            ,()=>{
                this.arr()
            }
            )
        }).catch((e) => {
            console.log("数据有误");
        });
        
    }


    //职业// 点击事件中调接口
    occupationFn = (e, name) => {
        console.log(e);
        this.setState({
            occupation: e
        },()=>{
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
                    // page: this.state.current,
                    // limit: 10,
                })
            }).then((res) => {
                return res.json();
            }).then((data) => {
                console.log(data);
                // 存放数组            
                this.setState({
                    craftsmanArr: data.data
                },()=>{
                    this.arr()
                })
            }).catch((e) => {
                console.log("数据有误");
            })
        }
        );
    }


    // 经验
    experFn = (e, name) => {
        console.log(typeof e);
        console.log(e.substring(0, 1));
        this.setState({
            exper: e,
            experienceMin: e.substring(0, 1),
            experienceMax: e.substring(1, 1),
        },()=>{
            // 点击事件中调接口
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
                    // page: this.state.current,
                    // limit: 8,
                })
            }).then((res) => {
                return res.json();
            }).then((data) => {
                console.log(data);
                // 存放数组            
                this.setState({
                    craftsmanArr: data
                },()=>{
                    this.arr();
                })
            }).catch((e) => {
                console.log("数据有误");
            });
        });
        

       
    }

    // 今日推荐
    oneShowFn = (e, name) => {
        console.log(e);
        this.setState({
            orderList: e
        },()=>{
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
            },()=>{
                this.arr();
            })
        }).catch((e) => {
            console.log("数据有误");
        });
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

            },()=>{
                this.arr();
            })
        }).catch((e) => {
            console.log("数据有误");
        });
        


    };

    //预约
    book = (id, e) => {
        console.log(id);
        var date=new Date();
        
        let year=date.getFullYear();//年
        let mouth=date.getMonth()+1;//月
        let day=date.getDate();//日

        //拼接年月日
        let myDate=year+"-"+mouth+"-"+day;
        console.log(typeof (myDate));
        this.setState({
            // status:"true",
            bookDate:date,
            id:id,
        },()=>{
            console.log(typeof(this.state.id))
            fetch('http://172.16.10.15:8080/banJu/user/reservation',{           
                        method:'POST',
                        headers:{
                            'Content-Type':'application/json' 
                        },
                        credentials: 'include',
                        // 传参
                        body:JSON.stringify({
                          reservationDate: this.state.bookDate,
                          uid: 1,
                          cid:this.state.id,
                        })
                        }).then((res)=>{
                            return res.json();       
                        }).then((data)=>{
                          console.log(data);  
                     
                            // 存放数组            
                            this.setState({
                            content:data.msg,
                            },()=>{
                                this.arr();
                                this.success();
                            })
                        }).catch((e) => {
                            console.log("数据有误");
                        })
          }
          );
        
    }

    //带参数查询
    queryFn=(name,e)=>{
        console.log(name);
        this.setState({
            occupation: name,
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
                // limit: 8,
            })
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            // 存放数组            
            this.setState({
                craftsmanArr: data
            },()=>{
                this.arr();
            })
        }).catch((e) => {
            console.log("数据有误");
        });
    }

     //模态框
     success() {
        Modal.success({
          content:this.state.content,
        });
      }
    //函数
    arr=()=>{
        let arr = this.state.craftsmanArr.map((item) => {
            console.log(this.state.craftsmanArr)
            return (
                <div className="craftsman" key={item.cid}>
                    {/* <img src={require(`../../${item.avatar}`)} alt="" className="pavilionLImg"/> */}
                    <div className="craftsman_list_padding">
                        <div className="flex craftsman_Info">
                            <div className="craftsman_list_name">{item.realName}</div>
                            <div className="craftsman_company">{item.occupation}</div>
                        </div>
                        <div className="flex craftsman_Info">
                            <span><span className="iconfont icon-aixin"></span>{item.hot}</span>
                            <div className="design cursor" onClick={this.book.bind(this, item.cid)}>预约设计</div>
                        </div>
                    </div>
                </div>
            )
        });
        this.setState({
            arr,
        })
    }
    
    render() {
        
        // console.log(this.state.craftsmanArr)
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
                            <div className="tableBox_left ">职位</div>
                            <div className="tableBox_right">
                                <span className={this.state.occupation === "" ? 'myChioce' : 'myCancle'} onClick={this.queryFn.bind(this, "")}>不限</span>
                                <span className={this.state.occupation === "木工" ? 'myChioce' : 'myCancle'} onClick={this.queryFn.bind(this, "木工")}>木工</span>
                                <span className={this.state.occupation === "泥工" ? 'myChioce' : 'myCancle'} onClick={this.queryFn.bind(this, "泥工")}>泥工</span>
                                <span className={this.state.occupation === "漆工" ? 'myChioce' : 'myCancle'} onClick={this.queryFn.bind(this, "漆工")}>漆工</span>
                            </div>
                        </div>
                        {/* 第2行 */}
                        <div className=" flex liStyle">
                            {/* 左边 */}
                            <div className="tableBox_left ">经验</div>
                            <div className="tableBox_right">
                                <span className={this.state.exper === "" ? 'myChioce' : 'myCancle'} onClick={this.queryFn.bind(this, "")}>不限</span>
                                <span className={this.state.exper === "12" ? 'myChioce' : 'myCancle'} onClick={this.queryFn.bind(this, "12")}>1-2年</span>
                                <span className={this.state.exper === "25" ? 'myChioce' : 'myCancle'} onClick={this.queryFn.bind(this, "25")}>2-5年</span>
                                <span className={this.state.exper === "58" ? 'myChioce' : 'myCancle'} onClick={this.queryFn.bind(this, "58")}>5-8年</span>
                            </div>
                        </div>
                    </div>
                    {/* bottom */}
                    <div className="table-bottom">
                        <span >今日推荐</span>
                        <span className={this.state.orderList === "" ? 'myShow' : 'myHide'} onClick={this.queryFn.bind(this, "")}>最受欢迎</span>
                        <span className={this.state.orderList === "人气排行" ? 'myShow' : 'myHide'} onClick={this.queryFn.bind(this, "人气排行")}>人气排行</span>
                    </div>
                </div>
                {/* 工匠人员 */}
                <div className="craftsmanStyle flex ">

                    {/* {arr} */}
                    {this.state.arr}

                </div>
                <div className="craftsmanStyle">
                     <Pagination defaultCurrent={2} pageSize={2} defaultPageSize={2} total={50} onChange={this.onChange.bind(this)}/>
                     {/* {this.state.craftsmanArr.total} 返回数据的总条数*/}
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Craftsman_Pavilion_list;