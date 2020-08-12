import React, { Component } from 'react'
// input框
import { Table } from 'antd'
import { Input } from 'antd'
// 模态框
<<<<<<< HEAD
import { Modal, Button, Space } from 'antd';
=======
import { Modal, Button } from 'antd'
>>>>>>> 0673f9bda466f53abfc0fc482057aee11d0bab28

//引入css
import './css/usesrsaudit.css'

//引入css
import './css/usesrsaudit.css'
import { Link } from 'react-router-dom'

export default class usersaudit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //表格
      data: [],

      //每一行的值
      rowData: 1,

      //遮罩层
      isShow: false,

      //通过审核的状态值
      pass: 1,

      //显示模态框
      visible: false,

      //审核的状态值
      // pssOn:1,//通过
      // onPasson:0,//未通过
    }
<<<<<<< HEAD

    

    

=======
>>>>>>> 0673f9bda466f53abfc0fc482057aee11d0bab28
  }

  UNSAFE_componentWillMount() {
    //查询未审核的数据
<<<<<<< HEAD
    fetch('http://47.100.90.56:8080/banJu/manager/selectIsLegal',{           
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


=======
    fetch('http://172.16.10.4:8080/banJu/manager/selectIsLegal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      // 传参
      body: JSON.stringify({
        audit: 0,
      }),
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data.data)
        let newData = []
        data.data.map((item, index) => {
          item.key = index
          // item.imgage="footer-icon_03.png"
          newData.push(item)
        })
        console.log(newData)
        // 存放数组
        this.setState({
          data: data.data,
        })
      })
      .catch((e) => {
        console.log('数据有误')
      })
>>>>>>> 0673f9bda466f53abfc0fc482057aee11d0bab28
  }

  //点击图标
  closeFn() {
    this.setState({
      // 两种方法
      isShow: !this.state.isShow,
      // isShow:this.state.isShow?'false':'true'
    })
  }

  // 点击审核通过
  pass(status, e) {
    //id参数值
    console.log(status)
    //节点
    console.log(e)

<<<<<<< HEAD
    this.setState({
      id:status,
      isShow:!(this.state.isShow),
    },()=>{
      console.log(this.state.id)
      fetch('http://47.100.90.56:8080/banJu/manager/auditMerchant',{           
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
                        content:data.msg,
                      },()=>{
                        this.success();
                      })
                  }).catch((e) => {
                      console.log("数据有误");
                  })
    }
    );
=======
    this.setState(
      {
        id: status,
        isShow: !this.state.isShow,
      },
      () => {
        console.log(this.state.id)
        fetch('http://172.16.10.4:8080/banJu/manager/auditMerchant', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          // 传参
          body: JSON.stringify({
            id: this.state.id,
            isLegal: 1,
          }),
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            console.log(data)
            // 存放数组
            this.setState({
              data: data.data,
            })
          })
          .catch((e) => {
            console.log('数据有误')
          })
      }
    )
>>>>>>> 0673f9bda466f53abfc0fc482057aee11d0bab28
  }

  // 点击审核未通过
  onPass(status, e) {
    //id参数值
    console.log(status)
    //节点
<<<<<<< HEAD
    console.log(e);
    this.setState({
      id:status,
      isShow:!(this.state.isShow),
    },()=>{
      console.log(this.state.id)
      fetch('http://47.100.90.56:8080/banJu/manager/auditMerchant',{           
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
=======
    console.log(e)
    this.setState(
      {
        id: status,
        isShow: !this.state.isShow,
      },
      () => {
        console.log(this.state.id)
        fetch('http://172.16.10.4:8080/banJu/manager/auditMerchant', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          // 传参
          body: JSON.stringify({
            id: this.state.id,
            isLegal: 0,
          }),
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            console.log(data.data)
            // 存放数组
            this.setState({
              data: data.data,
            })
          })
          .catch((e) => {
            console.log('数据有误')
          })
      }
    )
>>>>>>> 0673f9bda466f53abfc0fc482057aee11d0bab28
  }

  // 模态框
  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  handleOk = (e) => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  handleCancel = (e) => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  // 点击审核按钮
  check = (rowData) => {
    this.setState({
      isShow: !this.state.isShow,
      rowData: rowData,
    })
  }

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
        render: (e, record) => (
          <Link to="/manage/Usersaudit" onClick={this.check.bind(this, record)}>
            审核
          </Link>
        ),
      },
      {
        title: 'Action',
        dataIndex: 'license',
        key: 'id',
        render: (e, record) => <img src={record.license} alt="true" />,
      },
    ]
    // let businessArr = this.state.businessArr.map((item, index) => {
    //   return (
    //     <p key={index}>
    //       姓名：
    //       <input type="text" defaultValue={item.name} />
    //     </p>
    //   )
    // })
    return (
      //css总样式
      <div className="auditStyle">
        {/* 父相子绝 */}
        <div className="big">
          {/* 遮罩层 */}
          <div className={this.state.isShow ? 'myShow' : 'myHide'}>
            {/* <img
              src={require(`../../../assets/images/close.png`)}
              alt=""
              className="closeImg"
              onClick={this.closeFn.bind(this)}
            /> */}
            {/* 详情页面 */}
            <div className="detailsPage">
              <form className="formBox">
                {/*基本信息*/}
                <div className="information">基本信息</div>
                <div className="namebox1">
                  <div className="name1">
                    <span className="color">*</span>公司名
                  </div>
                  <Input
                    className="Input"
                    value={this.state.rowData.companyName}
                  />
                </div>
                <div className="namebox1 ">
                  <div className="name1">
                    <span className="color">*</span>公司地址
                  </div>
                  <Input className="Input" value={this.state.rowData.address} />
                </div>
                <div className="namebox1 ">
                  <div className="name1">
                    <span className="color">*</span>邮编
                  </div>
                  <Input
                    className="Input"
                    value={this.state.rowData.postcode}
                  />
                </div>
                <div className="namebox1 ">
                  <div className="name1">
                    <span className="color">*</span>税务登记证号
                  </div>
                  <Input
                    className="Input"
                    value={this.state.rowData.registereCaptial}
                  />
                </div>
                {/*法人代表/经营者信息*/}
                <h4 className="information">法人代表/经营者信息</h4>
                <div className="namebox1">
                  <div className="name1">
                    <span className="color">*</span>姓名
                  </div>
                  <Input
                    className="Input"
                    placeholder="张三"
                    value={this.state.rowData.accountName}
                  />
                </div>
                <div className="namebox1 ">
                  <div className="name1">
                    <span className="color">*</span>联系电话
                  </div>
                  <Input
                    className="Input"
                    placeholder="您的电话号码"
                    value={this.state.rowData.phoneNumber}
                  />
                </div>
                <div className="namebox1 ">
                  <div className="name1">
                    <span className="color">*</span>身份证号
                  </div>
                  <Input className="Input" value={this.state.rowData.idCard} />
                </div>
                {/*银行账号信息*/}
                <div className="information">银行账号信息</div>
                <div className="namebox1 ">
                  <div className="name1">
                    <span className="color">*</span>户名
                  </div>
                  <Input
                    className="Input"
                    placeholder="您的电话号码"
                    value={this.state.rowData.bankName}
                  />
                </div>
                <div className="namebox1">
                  <div className="name1">
                    <span className="color">*</span>账号
                  </div>
                  <Input
                    className="Input"
                    placeholder="中国农业银行"
                    value={this.state.rowData.bankCard}
                  />
                </div>

                <div className="namebox1">
                  <div className="name1">
                    <span className="color">*</span>开户城市
                  </div>
                  <Input
                    className="Input"
                    placeholder="张三"
                    value={this.state.rowData.accountCity}
                  />
                </div>
                <div className="namebox1">
                  <div className="name1">
                    <span className="color">*</span>开户支行:
                  </div>
                  <Input
                    className="Input"
                    placeholder="中国农业银行成都天府三街支行"
                    value={this.state.rowData.name}
                  />
                </div>
                <div className="namebox1">
                  <div className="name1">
                    <span className="color">*</span>银行名称
                  </div>
                  <Input className="Input" value={this.state.rowData.bank} />
                </div>
              </form>
              <div className="btnFlex ">
                <div
                  className="btnStyle"
                  onClick={this.pass.bind(this, this.state.rowData.mid)}
                >
                  审核通过
                </div>
                <div
                  className="btnStyle"
                  onClick={this.onPass.bind(this, this.state.rowData.mid)}
                >
                  审核未通过
                </div>
              </div>
            </div>
          </div>
          {/* 表格 */}
          <Table
            columns={columns}
            expandable={{
              expandedRowRender: (record) => (
                <p style={{ margin: 0 }}>{record.description}</p>
              ),
              rowExpandable: (record) => record.name !== 'Not Expandable',
            }}
            dataSource={this.state.data}
          />
          ,
        </div>
      </div>
    )
  }
}
