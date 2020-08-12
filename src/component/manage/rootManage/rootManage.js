import React, { Component } from 'react'
import { Table, Input, Button, Space,Popconfirm,Modal,Upload, message  } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined,LoadingOutlined,PlusOutlined } from '@ant-design/icons';
import "./rootManage.css"
let a;
//=================================图片上传==================================
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    a=file;
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;

}
//===========================================================================


// const data = [
//
//     {
//         key: '1',
//         id:1,
//         phone:13540238949,
//         name: '詹姆斯',
//         user:"ws1234",
//         password:123456,
//         Job:2545,
//         time: '2013-04-13',
//         idCard:"513701245627261314",
//         power:0
//
//     },
//     {
//         key: '2',
//         name: '汤姆',
//         phone:13540238949,
//         id:2,
//         user:"ws1234",
//         password:56789,
//         Job:2546,
//         time: '2013-04-13',
//         idCard:"513701245627261314",
//         power:0
//
//
//     },
//     {
//         key: '3',
//         id:3,
//         phone:13540238949,
//         name: '杰瑞',
//         user:"ws1234",
//         password:896464,
//         Job:2547,
//         time: '2013-04-13',
//         idCard:"513701245627261314",
//         power:0
//
//     },
//     {
//         key: '4',
//         id:4,
//         phone:13540238949,
//         name: '审定',
//         user:"ws1234",
//         password:4654654,
//         Job:2548,
//         time: '2013-04-13',
//         idCard:"513701245627261314",
//         power:0
//
//     },
//     {
//         key: '5',
//         id:5,
//         phone:13540238949,
//         name: '审定',
//         user:"ws1234",
//         password:469454,
//         Job:2549,
//         time: '2013-04-13',
//         idCard:"513701245627261314",
//         power:0
//
//     },
// ];




/*=======================================*/

export default class rootManage extends Component {

    reload() {
        this.isRouterAlive = false`在这里插入代码片`
        this.$nextTick(function () {
            this.isRouterAlive = true
        })
    }


    constructor() {
        super();
        this.state= {
            selectedRowKeys: [],
            loading: false,
            visible: false,
            loading1: false,
            visible1: false,
            loading3: false,
            yanzhengma:"",/*返回来的data*/
            data:"",/*数据渲染*/
            inputvlue:''/*input的vulue值*/

        }

    }
    //=======================图片上传==========================


    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading3: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading3: false,
                }),
            );
        }
    };


    //===========================================
    /*管理员数据渲染*/
    // 172.16.10.4:8080/banJu/manager/updateManager
    xuanran=(e)=>{
        fetch('http://172.16.10.32:8080/banJu/manager/findAllManager',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            credentials: 'include',
            // body:JSON.stringify({
            // })
        }).then((res)=>{
            return res.json();
        }).then((data)=>{
            this.setState({
                yanzhengma:data.data
            },()=> {
                let data1=this.state.yanzhengma;
                let data2 = [];
                data1.forEach(item => {
                    data2.push({
                        key: item.id,
                        avatar:item.avatar,
                        idCard:item.idCard,
                        jobNumber:item.jobNumber,
                        name:item.name,
                        password:item.password,
                        phoneNumber:item.phoneNumber,
                        power:item.power,
                        createdDate:item.createdDate


                    });
                })
                this.setState({
                    data:data2
                })
                console.log(data)
            })
        }).catch((e) => {
            console.log("数据有误");
        });
    }
componentDidMount() {

    this.xuanran()

}

    // ==============================模态框=====================================
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
 showModal1 = (shuju,b) => {
     console.log(shuju)
     console.log(b)
        this.setState({
            visible1: true,
            inputvlue:shuju
        });
    };
/*添加管理员信息*/
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
        const gh = this.gh.value;/*工号*/
        const phone = this.phone.value;/*电话*/
        const pwd = this.pwd.value;/*密码*/
        const name = this.name.value;/*姓名*/
        const id = this.id.value;/*身份证*/
        const qx = this.qx.value;/*权限*/
        const zh = this.zh.value;/*账号*/
        const img=a/*图片路径*/
        console.log(gh)
        console.log(phone)
        fetch('http://172.16.10.32:8080/banJu/manager/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            credentials: 'include',
            body:JSON.stringify({
                avatar:gh,
                idCard:id,
                jobNumber:zh,
                name:name,
                password:pwd,
                phoneNumber:phone,
                power:qx,
            })
        }).then((res)=>{
            return res.json();
        }).then((data)=>{
            this.setState({

                },()=>{this.xuanran()})

        }).catch((e) => {
            console.log("数据有误");
        });


    };


    //编辑管理员信息
    handleOk1 = () => {
        this.setState({ loading1: true });
        setTimeout(() => {
            this.setState({ loading1: false, visible1: false });
        }, 3000);

        const gh = this.a.value;/*工号*/
        const phone = this.b.value;/*电话*/
        const zh = this.c.value;/*账号*/
        const pwd = this.d.value;/*密码*/
        const name = this.e.value;/*姓名*/
        const id = this.f.value;/*身份证*/
        const qx = this.g.value;/*权限*/
        const key=this.state.selectedRowKeys;/*id*/
        console.log(gh);

        const img=a;/*图片路径*/


        fetch('http://172.16.10.32:8080/banJu/manager/updateManager',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            credentials: 'include',
            body:JSON.stringify({
                id:key[0],
                avatar:gh,
                idCard:id,
                jobNumber:zh,
                name:name,
                password:pwd,
                phoneNumber:phone,
                power:qx,

            })
        }).then((res)=>{
            return res.json();
        }).then((data)=>{
            this.xuanran()
            this.setState({

            },()=>{})

        }).catch((e) => {
            console.log("数据有误");
        });

    };

    handleCancel = () => {
        this.setState({ visible: false });
    };
    handleCancel1 = () => {
        this.setState({ visible1: false });
    };



    onSelectChange = selectedRowKeys => {
        console.log( selectedRowKeys);
        this.setState({ selectedRowKeys:selectedRowKeys });
    };
    state = {
        searchText: '',
        searchedColumn: '',
    };
    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        确定
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        取消
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };
  render() {




      /*============================图片上传========================*/

      const uploadButton = (
          <div>
              {this.state.loading3 ? <LoadingOutlined /> : <PlusOutlined />}
              <div className="ant-upload-text">Upload</div>
          </div>
      );
      const { imageUrl } = this.state;

      /*===================================*/

      const { visible, loading } = this.state;/*模态框*/
      const { visible1, loading1 } = this.state;/*模态框*/
      function onChange(pagination, filters, sorter, extra) {
          console.log('params', pagination, filters, sorter, extra);
      }
      const { selectedRowKeys } = this.state;
      const rowSelection = {
          selectedRowKeys,
          onChange: this.onSelectChange,
          selections: [
              Table.SELECTION_ALL,
              Table.SELECTION_INVERT,
              {
                  key: 'odd',
                  text: 'Select Odd Row',
                  onSelect: changableRowKeys => {
                      let newSelectedRowKeys = [];
                      newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                          if (index % 2 !== 0) {
                              return false;
                          }
                          return true;
                      });
                      this.setState({ selectedRowKeys: newSelectedRowKeys });
                  },
              },
              {
                  key: 'even',
                  text: 'Select Even Row',
                  onSelect: changableRowKeys => {
                      let newSelectedRowKeys = [];
                      newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                          if (index % 2 !== 0) {
                              return true;
                          }
                          return false;
                      });
                      this.setState({ selectedRowKeys: newSelectedRowKeys });
                  },
              },
          ],
      };
      /*==================确定框================================*/
      /*删除管理员*/

      function confirm(e) {
          console.log(e);
          message.success('删除成功');
          const key=this.state.selectedRowKeys;/*id*/

          if (key.length==0){
              console.log(key)
              fetch('http://172.16.10.32:8080/banJu/manager/deleteById',{
                  method:'POST',
                  headers:{
                      'Content-Type':'application/json'
                  },
                  credentials: 'include',
                  body:JSON.stringify({
                      id:key[0],

                  })
              }).then((res)=>{
                  return res.json();
              }).then((data)=>{
                  this.xuanran()
              }).catch((e) => {
                  console.log("数据有误");
              });
          }else {




          /*===================================================================*/
          // 172.16.10.4:8080/banJu/manager/deleteMore
          fetch('http://172.16.10.32:8080/banJu/manager/deleteMore',{
              method:'POST',
              headers:{
                  'Content-Type':'application/json'
              },
              credentials: 'include',
              body:JSON.stringify({
                  id:key,

              })
          }).then((res)=>{
              return res.json();
          }).then((data)=>{
              this.setState({

              },()=>{})
              this.xuanran()
          }).catch((e) => {
              console.log("数据有误");
          });
          }

      }

      function cancel(e) {
          console.log(e);
          message.error('删除取消');
      }





      /*==================确定框================================*/






      const columns = [
             /* key: item.id,
                avatar:item.avatar,
                idCard:item.idCard,
                jobNumber:item.jobNumber,
                name:item.name,
                password:item.password,
                phoneNumber:item.phoneNumber,
                power:item.power,
                createdDate:item.createdDate*/
          {
              title: '编号',
              dataIndex: 'key',
              key: 'key',
              // width: '12%',
              align:"center",
              // sorter: {
              //     compare: (a, b) => a.id - b.id,
              //     multiple: 1,
              // },
          },
          {
              title: '工号',
              dataIndex: 'avatar',
              key: 'avatar',
              width: '8%',
              align:"center",
              ...this.getColumnSearchProps('avatar'),
          },


          {
              title: '手机号',
              dataIndex: 'phoneNumber',
              key: 'phoneNumber',
              // width: '10%',
              align:"center",
          },
          {
              title: '账号',
              dataIndex: 'jobNumber',
              key: 'jobNumber',
              // width: '10%',
              align:"center",
          },
          {
              title: '密码',
              dataIndex:'password',
              key: 'password',
              // width: '10%',
              align:"center",
          },
          {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
              // width: '10%',
              align:"center",
              ...this.getColumnSearchProps('name'),

          },
          {
              title: '添加时间',
              dataIndex: 'createdDate',
              // width: '15%',
              key: 'createdDate',
              align:"center",
          }, {
              title: '身份证',
              dataIndex: 'idCard',
              // width: '15%',
              key: 'idCard',
              align:"center",
          }, {
              title: '权限',
              dataIndex: 'power',
              // width: '15%',
              key: 'power',
              align:"center",
          },
          {
              title: '编辑',
              dataIndex: 'edit',
              key: 'edit',
              align:"center",
              render:(e,record) => {
                  return <p className="state butone">
                      <Popconfirm
                          title="确定要删除该管理员?"
                          onConfirm={confirm.bind(this)}
                          onCancel={cancel}
                          okText="确定"
                          cancelText="取消"
                      >
                          <a className="del">删除</a>
                      </Popconfirm>,
                      <br/>
                      <Button type="primary" onClick={this.showModal1.bind(this,record)}>
                          编辑
                      </Button>
                      <Modal
                          visible={visible1}
                          title="编辑"
                          onOk={this.handleOk1}
                          onCancel={this.handleCancel1}
                          footer={[
                              <Button key="back" onClick={this.handleCancel1}>
                                  取消
                              </Button>,
                              <Button key="submit" type="primary" loading={loading1} onClick={this.handleOk1}>
                                  确认
                              </Button>,
                          ]}

                      >
                          <div>
                              <div className="bj"><div className="sp">工号：</div><input ref={input => this.a = input} defaultValue={this.state.inputvlue.avatar} className="xutaoip"/></div>
                              <div className="bj"> <div className="sp">手机号：</div><input ref={input => this.b = input} defaultValue={this.state.inputvlue.phoneNumber} className="xutaoip"/></div>
                              <div className="bj1"><div className="sp">账号：</div><input ref={input => this.c = input} defaultValue={this.state.inputvlue.jobNumber} className="xutaoip"/></div>
                              <div className="bj1"><div className="sp">密码：</div><input ref={input => this.d = input} defaultValue={this.state.inputvlue.password} className="xutaoip"/></div>
                              <div className="bj1"><div className="sp">姓名：</div><input ref={input => this.e = input} defaultValue={this.state.inputvlue.name} className="xutaoip"/></div>
                              <div className="bj1"><div className="sp">身份证：</div><input ref={input => this.f = input} defaultValue={this.state.inputvlue.idCard} className="xutaoip"/></div>
                              <div className="bj1"><div className="sp">权限：</div><input ref={input => this.g = input} defaultValue={this.state.inputvlue.power}  className="xutaoip"/></div>


                              <div className="bj2"><div className="sp2">上传图片：</div>
                                  <Upload
                                      name="avatar"
                                      listType="picture-card"
                                      className="avatar-uploader"
                                      showUploadList={false}
                                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                      beforeUpload={beforeUpload}
                                      onChange={this.handleChange}
                                  >
                                      {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                  </Upload>
                              </div>
                            <p className="both"></p>
                          </div>
                      </Modal>


                  </p>
              }
          },
      ];
    return (

      <div className="wodext">
          <Button type="primary" onClick={this.showModal}>
              添加
          </Button>
          <Modal
              visible={visible}
              title="添加"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[
                  <Button key="back" onClick={this.handleCancel}>
                      取消
                  </Button>,
                  <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                      确认
                  </Button>,
              ]}
          >
              <div>
              <div className="bj"><div className="sp">工号：</div><input ref={input => this.gh = input} className="xutaoip"/></div>
              <div className="bj"> <div className="sp">手机号：</div><input ref={input => this.phone = input} className="xutaoip"/></div>
                  <div className="bj1"><div className="sp">账号：</div><input ref={input => this.zh = input} className="xutaoip"/></div>
              <div className="bj1"><div className="sp">密码：</div><input ref={input => this.pwd = input} className="xutaoip"/></div>
              <div className="bj1"><div className="sp">姓名：</div><input ref={input => this.name = input} className="xutaoip"/></div>
              <div className="bj1"><div className="sp">身份证：</div><input ref={input => this.id = input} className="xutaoip"/></div>
              <div className="bj1"><div className="sp">权限：</div><input ref={input => this.qx = input} className="xutaoip"/></div>


                  <div className="bj2"><div className="sp2">上传图片：</div>
              <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  beforeUpload={beforeUpload}
                  onChange={this.handleChange}
              >
                  {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
              </Upload>

              <p className="both"></p>
                  </div>
              </div>

          </Modal>
          <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} onChange={onChange}
                 pagination={{showQuickJumper: true,hideOnSinglePage:false,pageSize:3}}/>;
      </div>
    )
  }
}
