// //引入css
// import './css/usesrsaudit.css'

// import React, { Component } from 'react'

// import {  Input } from 'antd'


// class usertoggle extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             person:[],
//          }
//     }

//     render() {
//           return (
//                   //css总样式
//                   <div className="auditStyle">
//                     {/* 父相子绝 */}
//                           <div className="big">
//                             {/* 遮罩层 */}
//                             <div className={this.state.isShow?'myShow':'myHide'}>
//                             <img src={require(`../../../assets/images/close.png`)} alt="" className="closeImg" onClick={this.closeFn.bind(this)}/>
//                               {/* 详情页面 */}
//                               <div className="detailsPage">
//                                 <form className="formBox"> 
//                                      {/*基本信息*/}
//                                     <div className="information">基本信息</div>
//                                     <div className="namebox1">
//                                         <div className="name1"><span className="color">*</span>公司名</div><Input className="Input" value={this.state.rowData.companyName}/>
//                                     </div>
//                                     <div className="namebox1 ">
//                                         <div className="name1"><span className="color">*</span>公司地址</div><Input className="Input" value={this.state.rowData.address}/>
//                                     </div>
//                                     <div className="namebox1 ">
//                                         <div className="name1"><span className="color">*</span>邮编</div><Input className="Input" value={this.state.rowData.postcode}/>
//                                     </div>
//                                     <div className="namebox1 ">
//                                         <div className="name1"><span className="color">*</span>税务登记证号</div><Input className="Input" value={this.state.rowData.registereCaptial}/>
//                                     </div>
//                                     {/*法人代表/经营者信息*/}
//                                     <h4 className="information">法人代表/经营者信息</h4>
//                                     <div className="namebox1">
//                                         <div className="name1"><span className="color">*</span>姓名</div><Input className="Input" placeholder="张三" value={this.state.rowData.accountName}/>
//                                     </div>
//                                     <div className="namebox1 ">
//                                         <div className="name1"><span className="color">*</span>联系电话</div><Input className="Input" placeholder="您的电话号码" value={this.state.rowData.phoneNumber}/>
//                                     </div>
//                                     <div className="namebox1 ">
//                                         <div className="name1"><span className="color">*</span>身份证号</div><Input className="Input"  value={this.state.rowData.idCard}/>
//                                     </div>
//                                     {/*银行账号信息*/}
//                                     <div className="information">银行账号信息</div>
//                                     <div className="namebox1 ">
//                                         <div className="name1"><span className="color">*</span>户名</div><Input className="Input" placeholder="您的电话号码" value={this.state.rowData.bankName}/>
//                                     </div>
//                                     <div className="namebox1">
//                                         <div className="name1"><span className="color">*</span>账号</div><Input className="Input" placeholder="中国农业银行" value={this.state.rowData.bankCard}/>
//                                     </div>
    
//                                     <div className="namebox1">
//                                         <div className="name1"><span className="color">*</span>开户城市</div><Input className="Input" placeholder="张三" value={this.state.rowData.accountCity}/>
//                                     </div>
//                                     <div className="namebox1">
//                                         <div className="name1"><span className="color">*</span>开户支行:</div><Input className="Input" placeholder="中国农业银行成都天府三街支行" value={this.state.rowData.name}/>
//                                     </div>
//                                     <div className="namebox1">
//                                         <div className="name1"><span className="color">*</span>银行名称</div><Input className="Input"  value={this.state.rowData.bank}/>
//                                     </div>
                                    
                                    
//                                     </form>
//                                     <div className="btnFlex ">
//                                       <div className="btnStyle" onClick={this.pass.bind(this,this.state.rowData.mid)}>审核通过</div>
//                                       <div className="btnStyle" onClick={this.onPass.bind(this,this.state.rowData.mid)}>审核未通过</div>
//                                     </div>
//                            </div> 
//                   </div>
//                 <Usertoggle></Usertoggle>
//                 {/* 表格 */}
//                 <Table
//                   columns={columns}
//                   expandable={{
//                     expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
//                     rowExpandable: record => record.name !== 'Not Expandable',
//                   }}
//                   dataSource={this.state.data}
//                 />,
//             </div>
//           </div>
//         )
//       }
// }
// export default usertoggle;