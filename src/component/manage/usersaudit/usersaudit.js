import React, { Component } from 'react'
// input框
import { Table } from 'antd';
import {  Input } from 'antd'
// 模态框
import { Modal, Button } from 'antd';

//引入css
import "./css/usesrsaudit.css"

<<<<<<< HEAD
//引入css
import './css/usesrsaudit.css'
import { Link } from 'react-router-dom';
=======
>>>>>>> 9b00275f14b76a1782be84019b962b05b77dab0f

export default class usersaudit extends Component {

  constructor(props) {
    super(props)
    this.state = {
<<<<<<< HEAD
      //表格
      data:[],

      //每一行的值
      rowData:1,

      //遮罩层
      isShow: false,

=======
>>>>>>> 9b00275f14b76a1782be84019b962b05b77dab0f
      //通过审核的状态值
      pass:1,


      //显示模态框
      visible: false,
<<<<<<< HEAD
=======
     
>>>>>>> 9b00275f14b76a1782be84019b962b05b77dab0f

    //审核的状态值
    // pssOn:1,//通过
    // onPasson:0,//未通过

    }
<<<<<<< HEAD
=======
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
>>>>>>> 9b00275f14b76a1782be84019b962b05b77dab0f

    

    

  }


  UNSAFE_componentWillMount() {
    //查询未审核的数据
    fetch('http://172.16.10.4:8080/banJu/manager/selectIsLegal',{           
                      method:'POST',
                      headers:{
                          'Content-Type':'application/json' 
                      },
                      credentials: 'include',
                      // 传参
                      body:JSON.stringify({
                          audit:0
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


<<<<<<< HEAD
  }

  //点击图标
  closeFn(){
    this.setState({
      // 两种方法
      isShow:!(this.state.isShow)
      // isShow:this.state.isShow?'false':'true'
    })
  }

  // 点击审核通过
  pass(status,e){
    //id参数值
    console.log(status);
    //节点
    console.log(e);

    this.setState({
      id:status,
      isShow:!(this.state.isShow),
    },()=>{
      console.log(this.state.id)
      fetch('http://172.16.10.4:8080/banJu/manager/auditMerchant',{           
                  method:'POST',
                  headers:{
                      'Content-Type':'application/json' 
                  },
                  credentials: 'include',
                  // 传参
                  body:JSON.stringify({
                    id:this.state.id, 
                    isLegal:1,
                  })
                  }).then((res)=>{
                      return res.json();       
                  }).then((data)=>{
                    console.log(data);  
               
                  // 存放数组            
                      this.setState({
                        data:data.data,
                      })
                  }).catch((e) => {
                      console.log("数据有误");
                  })
    }
    );
  }

   // 点击审核未通过
   onPass(status,e){
    //id参数值
    console.log(status);
    //节点
    console.log(e);
    this.setState({
      id:status,
      isShow:!(this.state.isShow),
    },()=>{
      console.log(this.state.id)
      fetch('http://172.16.10.4:8080/banJu/manager/auditMerchant',{           
                  method:'POST',
                  headers:{
                      'Content-Type':'application/json' 
                  },
                  credentials: 'include',
                  // 传参
                  body:JSON.stringify({
                    id:this.state.id, 
                    isLegal:0,
                  })
                  }).then((res)=>{
                      return res.json();       
                  }).then((data)=>{
                    console.log(data.data);  
               
                  // 存放数组            
                      this.setState({
                        data:data.data,
                      })
                  }).catch((e) => {
                      console.log("数据有误");
                  })
    });
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

// 点击审核按钮
  check=(rowData)=>{
    this.setState({
      isShow: !this.state.isShow,
      rowData:rowData,
    });
  }

  
=======
>>>>>>> 9b00275f14b76a1782be84019b962b05b77dab0f
  render() {
    // table
    const columns = [
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'companyName', dataIndex: 'age', key: 'age' },
      { title: 'Address', dataIndex: 'address', key: 'address' },
      {
        title: 'Action',
        dataIndex: 'id',
        key: 'x',
        render: (e,record) => <Link to= "/manage/Usersaudit" onClick={this.check.bind(this,record)}>审核</Link>
      },
      {
        title: 'Action',
        dataIndex: 'license',
        key: 'id',
        render: (e,record) => <img src={record.license} alt="true" />

      },
    ];
    // let businessArr = this.state.businessArr.map((item, index) => {
    //   return (
    //     <p key={index}>
    //       姓名：
    //       <input type="text" defaultValue={item.name} />
    //     </p>
    //   )
    // })
      return (
<<<<<<< HEAD
              //css总样式
              <div className="auditStyle">
                {/* 父相子绝 */}
                      <div className="big">
                        {/* 遮罩层 */}
                        <div className={this.state.isShow?'myShow':'myHide'}>
                        <img src={require(`../../../assets/images/close.png`)} alt="" className="closeImg" onClick={this.closeFn.bind(this)}/>
                          {/* 详情页面 */}
                          <div className="detailsPage">
                            <form className="formBox"> 
=======
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
          <div className={this.state.isShow?'myShow':'myHide'}>
           {/* <img src={require(`../../../assets/images/close.png`)} alt="" className="closeImg" onClick={this.closeFn.bind(this)}/> */}
            {/* 详情页面 */}
            <div className="detailsPage">
              <form className="formBox"> 
>>>>>>> 9b00275f14b76a1782be84019b962b05b77dab0f
                                 {/*基本信息*/}
                                <div className="information">基本信息</div>
                                <div className="namebox1">
                                    <div className="name1"><span className="color">*</span>公司名</div><Input className="Input" value={this.state.rowData.companyName}/>
                                </div>
                                <div className="namebox1 ">
                                    <div className="name1"><span className="color">*</span>公司地址</div><Input className="Input" value={this.state.rowData.address}/>
                                </div>
                                <div className="namebox1 ">
                                    <div className="name1"><span className="color">*</span>邮编</div><Input className="Input" value={this.state.rowData.postcode}/>
                                </div>
                                <div className="namebox1 ">
                                    <div className="name1"><span className="color">*</span>税务登记证号</div><Input className="Input" value={this.state.rowData.registereCaptial}/>
                                </div>
                                {/*法人代表/经营者信息*/}
                                <h4 className="information">法人代表/经营者信息</h4>
                                <div className="namebox1">
                                    <div className="name1"><span className="color">*</span>姓名</div><Input className="Input" placeholder="张三" value={this.state.rowData.accountName}/>
                                </div>
                                <div className="namebox1 ">
                                    <div className="name1"><span className="color">*</span>联系电话</div><Input className="Input" placeholder="您的电话号码" value={this.state.rowData.phoneNumber}/>
                                </div>
                                <div className="namebox1 ">
                                    <div className="name1"><span className="color">*</span>身份证号</div><Input className="Input"  value={this.state.rowData.idCard}/>
                                </div>
                                {/*银行账号信息*/}
                                <div className="information">银行账号信息</div>
                                <div className="namebox1 ">
                                    <div className="name1"><span className="color">*</span>户名</div><Input className="Input" placeholder="您的电话号码" value={this.state.rowData.bankName}/>
                                </div>
                                <div className="namebox1">
                                    <div className="name1"><span className="color">*</span>账号</div><Input className="Input" placeholder="中国农业银行" value={this.state.rowData.bankCard}/>
                                </div>

                                <div className="namebox1">
                                    <div className="name1"><span className="color">*</span>开户城市</div><Input className="Input" placeholder="张三" value={this.state.rowData.accountCity}/>
                                </div>
                                <div className="namebox1">
                                    <div className="name1"><span className="color">*</span>开户支行:</div><Input className="Input" placeholder="中国农业银行成都天府三街支行" value={this.state.rowData.name}/>
                                </div>
                                <div className="namebox1">
                                    <div className="name1"><span className="color">*</span>银行名称</div><Input className="Input"  value={this.state.rowData.bank}/>
                                </div>
                                
                                
                                </form>
                                <div className="btnFlex ">
                                  <div className="btnStyle" onClick={this.pass.bind(this,this.state.rowData.mid)}>审核通过</div>
                                  <div className="btnStyle" onClick={this.onPass.bind(this,this.state.rowData.mid)}>审核未通过</div>
                                </div>
<<<<<<< HEAD
                       </div> 
              </div>

            {/* 表格 */}
            <Table
              columns={columns}
              expandable={{
                expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                rowExpandable: record => record.name !== 'Not Expandable',
              }}
              dataSource={this.state.data}
            />,
        </div>
=======
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
>>>>>>> 9b00275f14b76a1782be84019b962b05b77dab0f
      </div>
    )
  }
}
