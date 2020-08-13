import React, { Component } from 'react'

import { Table } from 'antd';

import {Link} from 'react-router-dom'

export default class usersaudited extends Component {
  constructor(props) {
    super(props)
    this.state = {

      isShow:false,
      //表格
      data:[],

      //每一行的值
      rowData:1,

    }
  }
  UNSAFE_componentWillMount() {
    fetch('http://47.100.90.56:8080/banJu/manager/selectIsLegal',{           
                      method:'POST',
                      headers:{
                          'Content-Type':'application/json' 
                      },
                      credentials: 'include',
                      // 传参
                      body:JSON.stringify({
                          audit:1
                      })
                      }).then((res)=>{
                          return res.json();       
                      }).then((data)=>{
                        console.log(data.data);  
                    let newData=[];
                    data.data.map((item,index)=>{
                      item.key=index;
                      // item.imgage="footer-icon_03.png"
                      newData.push(item);
                    })
                    console.log(newData)
                      // 存放数组            
                          this.setState({
                            data:data.data,
                          })
                      }).catch((e) => {
                          console.log("数据有误");
                      });

  };

  check(){
    this.setState({
      isShow: !this.state.isShow,
      // flag: false,
      // passFlag: true,
      // onPassFlag: false,
    })
  }
  test(id,e){
this.setState({
  rowData:e,
})
  }
  render() {

    const columns = [
      // {
      //   title: '头像',
      //   dataIndex: 'license',
      //   key: 'id',
      //   render: (record,data) => <img src={`../../../${record.license}`} alt="true" />,
      // },
      {
        title: '头像',
        dataIndex: 'license',
        key: 'id',
        render: (record,data) => <img src={require(`../../../assets/images/Collection_icon_08.png`)} alt="true"/>
      },
      { title: '名字', dataIndex: 'acountName', key: 'name' },
      { title: '住址', dataIndex: 'address', key: 'name' },
      { title: '身份证', dataIndex: 'idCard', key: 'age' },
      { title: '开户银行', dataIndex: 'bankCard', key: 'address' },
      { title: '资金', dataIndex: 'registereCapital', key: 'age' },
      // { title: '状态', dataIndex: 'isisLegalL', key: 'age' },
    ]

    return (
      <div>
         {/* 表格 */}
         <Table columns={columns} expandable={{ expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
            rowExpandable: record => record.name !== 'Not Expandable',}}
          dataSource={this.state.data}
         />,
      </div>
    )
  }
}
