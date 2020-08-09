import React, { Component } from 'react'

//引入css
import "./css/mycenter.css"

//引入antd表格
import { Table } from 'antd';

//个人中心
class Personal_Center_index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    };
    UNSAFE_componentWillMount() {
        const columns = [
          { title: 'Name', dataIndex: 'name', key: 'name' },
          { title: 'Age', dataIndex: 'age', key: 'age' },
          { title: 'sex', dataIndex: 'sex', key: 'address' },
          { title: 'Address', dataIndex: 'address', key: 'address' },
          {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: () => <a href='1'>取消预约</a>,
          },
          {
            title: '头像',
            dataIndex: 'image',
            key: 'image',
            // render: (record) => (<img src={require(record)} alt=""/>),
          },
        ];
        const data = [
          {
            key: 1,
            name: 'John Brown',
            age: 32,
            sex:'woman',
            address: 'New York No. 1 Lake Park',
            description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
            // image:'./footer-icon_03.png'
          },
          {
            key: 2,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
          },
          {
            key: 3,
            name: 'Not Expandable',
            age: 29,
            address: 'Jiangsu No. 1 Lake Park',
            description: 'This not expandable',
          },
          {
            key: 4,
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
          },
        ]
        this.setState({
            columns,
            data,
        })
    }
    render() { 
        return ( 
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
                columns={this.state.columns}
                
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
 
export default Personal_Center_index;
