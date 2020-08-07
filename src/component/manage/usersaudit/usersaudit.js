import React, { Component } from 'react'
<<<<<<< HEAD
// input框
import { Table } from 'antd';
import {  Input } from 'antd'
// 模态框
import { Modal, Button } from 'antd';

//引入css
import "./css/usesrsaudit.css"

=======

import { Table } from 'antd'
//引入css
import './css/usesrsaudit.css'
>>>>>>> 15e973b57ebd936665ddebf6322a7bfe8e2eba69

export default class usersaudit extends Component {
  constructor(props) {
    super(props)
    this.state = {
<<<<<<< HEAD
      //通过审核的状态值
      pass:1,
      onPass:0,
      visible: false,
     
=======
      //审核的flag
      flag: true,
      passFlag: false,
      onPassFlag: false,
>>>>>>> 15e973b57ebd936665ddebf6322a7bfe8e2eba69

      //遮罩层
      isShow: false,

      //商家的个人资料
      businessArr: [
        {
          name: 'pxq',
        },
        {
          name: 'pxq',
        },
        {
          name: 'pxq',
        },
        {
          name: 'pxq',
        },
        {
          name: 'pxq',
        },
      ],
    }
<<<<<<< HEAD
}
UNSAFE_componentWillMount(){
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <a href='1'>Delete</a>,
    },
  ];
  
  
  const data = [
    {
      key: 1,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
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
  ];
  this.setState({
    data,
    columns,
  })
}

closeFn(){
  this.setState({

    // 两种方法
    isShow:!(this.state.isShow)
    // isShow:this.state.isShow?'false':'true'
  })
}
pass(status,e){
  console.log(status)
  this.setState({
    isShow:!(this.state.isShow),
  })
 

}
onPass(id,event){
console.log(id);
  this.setState({
    isShow:!(this.state.isShow),
    
  }) 

}
// 模态框
showModal = () => {
  this.setState({
    visible: true,
  });
};

handleOk = e => {
  console.log(e);
  this.setState({
    visible: false,
  });
};

handleCancel = e => {
  console.log(e);
  this.setState({
    visible: false,
  });
};


=======
  }
  UNSAFE_componentWillMount() {
    const columns = [
      {
        title: '用户姓名',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
      },
      {
        title: '年龄',
        width: 100,
        dataIndex: 'age',
        key: 'age',
        fixed: 'left',
      },
      { title: 'Column 1', dataIndex: 'address', key: '1' },
      { title: 'Column 2', dataIndex: 'address', key: '2' },
      { title: 'Column 3', dataIndex: 'address', key: '3' },
      { title: 'Column 4', dataIndex: 'address', key: '4' },
      { title: 'Column 5', dataIndex: 'address', key: '5' },
      { title: 'Column 6', dataIndex: 'address', key: '6' },
      { title: 'Column 7', dataIndex: 'address', key: '7' },
      { title: 'Column 8', dataIndex: 'address', key: '8' },
      {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => (
          <div>
            <div
              className={this.state.flag ? 'textShow' : 'textNone'}
              onClick={() => {
                this.setState({
                  // 两种方法
                  isShow: !this.state.isShow,
                  // isShow:this.state.isShow?'false':'true'
                })
              }}
            >
              审核
            </div>
            <div className={this.state.passFlag ? 'passShow' : 'textNone'}>
              审核通过
            </div>
            <div className={this.state.onPassFlag ? 'passShow' : 'textNone'}>
              审核未通过
            </div>
          </div>
        ),
      },
    ]
    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
    ]
    this.setState({
      data,
      columns,
    })
  }
  closeFn() {
    this.setState({
      // 两种方法
      isShow: !this.state.isShow,
      // isShow:this.state.isShow?'false':'true'
    })
  }
  pass() {
    this.setState({
      isShow: !this.state.isShow,
      flag: false,
      passFlag: true,
      onPassFlag: false,
    })
  }
  onPass() {
    this.setState({
      isShow: !this.state.isShow,
      flag: false,
      passFlag: false,
      onPassFlag: true,
    })
  }
>>>>>>> 15e973b57ebd936665ddebf6322a7bfe8e2eba69
  render() {
    let businessArr = this.state.businessArr.map((item, index) => {
      return (
        <p key={index}>
          姓名：
          <input type="text" defaultValue={item.name} />
        </p>
      )
    })
    return (
      //css总样式
      <div className="auditStyle">
        {/* 父相子绝 */}
        <div className="big">
          {/* 遮罩层 */}
<<<<<<< HEAD
          <div className={this.state.isShow?'myShow':'myHide'}>
           <img src={require(`../../../assets/images/close.png`)} alt="" className="closeImg" onClick={this.closeFn.bind(this)}/>
            {/* 详情页面 */}
            <div className="detailsPage">
              <form className="formBox"> 
                                 {/*基本信息*/}
                                <div className="information">基本信息</div>
                                <div className="namebox1">
                                    <div className="name"><span className="color">*</span>公司名</div><Input className="Input"/>
                                </div>
                                <div className="namebox1 ">
                                    <div className="name "><span className="color">*</span>公司地址</div><Input className="Input" />
                                </div>
                                <div className="namebox1 ">
                                    <div className="name "><span className="color">*</span>邮编</div><Input className="Input" />
                                </div>
                                <div className="namebox1 ">
                                    <div className="name "><span className="color">*</span>税务登记证号</div><Input className="Input" />
                                </div>
                                {/*法人代表/经营者信息*/}
                                <h4 className="information">法人代表/经营者信息</h4>
                                <div className="namebox1 ">
                                    <div className="name "><span className="color">*</span>姓名</div><Input className="Input" placeholder="张三" />
                                </div>
                                <div className="namebox1 ">
                                    <div className="name "><span className="color">*</span>联系电话</div><Input className="Input" />
                                </div>
                                <div className="namebox1 ">
                                    <div className="name "><span className="color">*</span>身份证号</div><Input className="Input" placeholder="您的电话号码"/>
                                </div>
                                {/*银行账号信息*/}
                                <div className="information">银行账号信息</div>
                                <div className="namebox1 ">
                                    <div className="name "><span className="color">*</span>户名</div><Input className="Input" placeholder="您的电话号码"/>
                                </div>
                                <div className="namebox1">
                                    <div className="name"><span className="color">*</span>账号</div><Input className="Input" placeholder="中国农业银行"/>
                                </div>

                                <div className="namebox1">
                                    <div className="name"><span className="color">*</span>开户城市</div><Input className="Input" placeholder="张三"/>
                                </div>
                                <div className="namebox1">
                                    <div className="name"><span className="color">*</span>开户支行:</div><Input className="Input" placeholder="中国农业银行成都天府三街支行"/>
                                </div>
                                <div className="namebox1">
                                    <div className="name"><span className="color">*</span>银行名称</div><Input className="Input" />
                                </div>
                                
                                
                                </form>
                                <div className="btnFlex ">
                                  <div className="btnStyle" onClick={this.pass.bind(this,this.state.pass)}>审核通过</div>
                                  <div className="btnStyle" onClick={this.onPass.bind(this,0)}>审核未通过</div>
                                </div>
      </div> 
              
            
          </div>
          {/* 表格 */}
          <Table columns={this.state.columns} expandable={{
            expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
            rowExpandable: record => record.name !== 'Not Expandable',
          }}
    dataSource={this.state.data}
  />,
  mountNode,
        </div>    
=======
          <div className={this.state.isShow ? 'myShow' : 'myHide'}>
            {/* <img src={require(`../../../assets/images/close.png`)} alt="" className="closeImg" onClick={this.closeFn.bind(this)}/> */}
            {/* 详情页面 */}
            <div className="detailsPage">
              <div>{businessArr}</div>
              <div>{businessArr}</div>
            </div>
            <div onClick={this.pass.bind(this)}>审核通过</div>
            <div onClick={this.onPass.bind(this)}>审核未通过</div>
          </div>
          {/* 表格 */}
          <Table
            columns={this.state.columns}
            dataSource={this.state.data}
            scroll={{ x: 1300 }}
          ></Table>
        </div>
>>>>>>> 15e973b57ebd936665ddebf6322a7bfe8e2eba69
      </div>
    )
  }
}
