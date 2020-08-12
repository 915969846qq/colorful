import React, { Component } from 'react'

//引入css
import "./css/mycenter.css"

//引入antd表格
import { Table } from 'antd';
import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';


//个人中心
class Personal_My_reservation extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            //预约的信息
            book:[],

            //表格
            data:[],

         }
    }
    UNSAFE_componentWillMount() {
    fetch('http://47.100.90.56:8080/banJu/user/findUserReservation',{           
                method:'POST',
                headers:{
                    'Content-Type':'application/json' 
                },
                credentials: 'include',
                // 传参
                body:JSON.stringify({
                    uid:1,
                })
                }).then((res)=>{
                    return res.json();       
                }).then((data)=>{
                  console.log(data.data);
                //添加key 属性
                let newData=[];
                data.data.map((item,index)=>{
                  item.key=index;
                  newData.push(item);
                })
                // 存放数组            
                    this.setState({
                      data:data.data,
                    })
                }).catch((e) => {
                    console.log("数据有误");
                });
    }
     
    onConfirm=(e)=>{
      console.log("aaaaaaaaaaa")
    }
    render() { 
      

    const columns = [
              {
                title: 'Action',
                dataIndex: 'avatar',
                key: 'id',
                // render: (record,data) => <img src={require(`../../../${data.avatar}`)} alt="true"/>
              },
              { title: '工匠名字', dataIndex: 'name', key: 'name' },
              { title: '工匠类型', dataIndex: 'occupation', key: 'occupation' },
              { title: '联系方式', dataIndex: 'phoneNumber', key: 'phoneNumber' },
              { title: '所属公司', dataIndex: 'company', key: 'company' },
              { title: '预约时间', dataIndex: 'reservationDate', key: 'reservationDate' },
              {
                title: 'Action',
                dataIndex: '',
                key: 'x',
                render: () => <a href='1'><Popconfirm title="Are you sure？" icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                <a href="#">取消预约</a>
              </Popconfirm></a>,
              },
              
    ];

        return ( 
            //避免样式重复
            <div className="myReservation">
            <div className="myCenter myCenter_flex">
                <div className="myCenter_left">
                    <img src={require(`../../assets/images/head_portrait_img.png`)} alt="" className="myCenter_left_img"/>
                    <span>兰陵笑笑生</span>
                </div>
                <div className="myCenter_right">
                    <div className="myCenter_right_wallet">我的钱包</div>
                    <div className="myCenter_right_account">账户余额：<span className="myCenter_right_money">0</span></div>
                    <div className="myCenter_flex myCenter_margin">
                        <div className="myCenter_pay">充值</div>
                        <div className="myCenter_pay">提现</div>
                    </div>
                </div>
            </div>
             {/* 表格 */}
          <Table data={this.state.dataSource}
          columns={columns}
          
          expandable={{
            expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
            rowExpandable: record => record.name !== 'Not Expandable',
          }}
          dataSource={this.state.data}
        />
        
        </div>
         );
    }
}
 
export default Personal_My_reservation;
