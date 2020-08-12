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
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Age', dataIndex: 'age', key: 'age' },
      { title: 'sex', dataIndex: 'sex', key: 'address' },
      { title: 'Address', dataIndex: 'address', key: 'address' },
      {
        title: '状态',
        dataIndex: '',
        key: 'x',
        render: () => <div className={this.state.rowData === 1 ? 'myChioce' : 'myCancle'} onClick={this.test.bind(this,1)}>审核已通过</div>,
        render: () => <div className={this.state.rowData === 0 ? 'myChioce' : 'myCancle'} onClick={this.test.bind(this, 0)}>审核未通过</div>,
      },
    ];

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
