import React, { Component } from 'react'

import { Table } from 'antd';
//引入css
import "./css/usesrsaudit.css"



export default class usersaudit extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      //审核的flag
      flag:true,
      passFlag:false,
      onPassFlag:false,

      //遮罩层
      isShow:false,

      //商家的个人资料
      businessArr:[
        {
          name:"pxq"
        },
        {
          name:"pxq"
        },
        {
          name:"pxq"
        },
        {
          name:"pxq"
        },
        {
          name:"pxq"
        },
      ] 
    
    }
}
UNSAFE_componentWillMount(){
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
      render: () =>
      <div>
        <div className={this.state.flag?'textShow':'textNone'} onClick={()=>{
          this.setState({
            // 两种方法
            isShow:!(this.state.isShow)
            // isShow:this.state.isShow?'false':'true'
          })
        }}>审核</div>
        <div className={this.state.passFlag?'passShow':'textNone'}>审核通过</div>
        <div className={this.state.onPassFlag?'passShow':'textNone'}>审核未通过</div>
      </div> ,
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
pass(){
  this.setState({
    isShow:!(this.state.isShow),
    flag:false,
    passFlag:true,
    onPassFlag:false,
  }) 
}
onPass(){
  this.setState({
    isShow:!(this.state.isShow),
    flag:false,
    passFlag:false,
    onPassFlag:true,
  }) 
}
  render() {
    let businessArr=this.state.businessArr.map((item,index)=>{
      return(
        <p key={index}>
        姓名：<input type="text" defaultValue={item.name} />
        </p>
      )
    })
    return (
      //css总样式
      <div className="auditStyle">
        {/* 父相子绝 */}
        <div className="big">
          {/* 遮罩层 */}
          <div className={this.state.isShow?'myShow':'myHide'}>
          <img src={require(`../../../assets/images/close.png`)} alt="" className="closeImg" onClick={this.closeFn.bind(this)}/>
            {/* 详情页面 */}
            <div className="detailsPage">
              <div >
              {businessArr}
              </div>
              <div >
              {businessArr}
              </div>
              </div>
              <div onClick={this.pass.bind(this)}>审核通过</div>
              <div onClick={this.onPass.bind(this)}>审核未通过</div>
            
          </div>
          {/* 表格 */}
          <Table columns={this.state.columns} dataSource={this.state.data} scroll={{ x: 1300 }}></Table>

        </div>    
      </div>
    )
  }
}
