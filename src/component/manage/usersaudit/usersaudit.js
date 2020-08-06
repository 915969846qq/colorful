import React, { Component } from 'react'

import { Table } from 'antd';
//引入css
import "./css/usesrsaudit.css"



export default class usersaudit extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        isShow:false
    }
}
componentWillMount(){
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
      render: () => <div className="actionStyle" onClick={()=>{
        
        this.setState({

          // 两种方法
          isShow:!(this.state.isShow)
          // isShow:this.state.isShow?'false':'true'
        })
      }}>详情</div>,
    },
    
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
      // action:'审核',
      delete:'删除'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
      // action:'审核',
      delete:'删除'
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
  render() {
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

            </div>
          </div>
          {/* 表格 */}
          <Table columns={this.state.columns} dataSource={this.state.data} scroll={{ x: 1300 }}></Table>

        </div>    
      </div>
    )
  }
}
