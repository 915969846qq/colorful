import { Table, Button,Space,Modal,Upload} from 'antd';
import React, { Component } from 'react'
import ImgCrop from 'antd-img-crop';
import { UploadOutlined } from '@ant-design/icons';
import $ from 'jquery'

const { Column, ColumnGroup } = Table;

const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  transformFile(file) {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const canvas = document.createElement('canvas');
        const img = document.createElement('img');
        img.src = reader.result;
        img.onload = () => {
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          ctx.fillStyle = 'red';
          ctx.textBaseline = 'middle';
          ctx.fillText('Ant Design', 20, 20);
          canvas.toBlob(resolve);
        };
      };
    });
  },
};


export default class poster extends Component {
  state1 = { visible: false };
  //详情
  showModal = () => {
    this.setState({
      visible: true,
    });
    
  };

  hideModal = () => {
    this.setState({
      visible: false,
      visible1:false,
      visible2:false,
      visible3:false
    });
  };

  //事件
  //修改
  update = () => {
    this.setState({
      visible1: true,
    });
    
  };
  //删除
  delete(){
    this.setState({
      visible2: true,
    });
  }
 //新增
 add(){
  this.setState({
    visible3: true,
  });
 }

  constructor(){
    super();
    // const data = []; 
    let data = [{ key:1,ename:'1',aname:12,aid:1,imgName:'123.jpg',priority:1,time:'2020-08-10'},
                { key:2,ename:'2',aname:12,aid:2,imgName:'123.jpg',priority:1,time:'2020-08-10'},
                // { key:3,ename:'3',aname:12,aid:3,imgName:'123.jpg',priority:1,time:'2020-08-10'},
                // { key:4,ename:'4',aname:12,aid:4,imgName:'123.jpg',priority:1,time:'2020-08-10'},
                // { key:5,ename:'5',aname:12,aid:5,imgName:'123.jpg',priority:1,time:'2020-08-10'},
                // { key:6,ename:'6',aname:12,aid:6,imgName:'123.jpg',priority:1,time:'2020-08-10'},
                // { key:7,ename:'7',aname:12,aid:7,imgName:'123.jpg',priority:1,time:'2020-08-10'},
                // { key:8,ename:'8',aname:12,aid:8,imgName:'123.jpg',priority:1,time:'2020-08-10'},
                // { key:9,ename:'9',aname:12,aid:9,imgName:'123.jpg',priority:1,time:'2020-08-10'},
                // { key:10,ename:'10',aname:12,aid:10,imgName:'123.jpg',priority:1,time:'2020-08-10'},
                // { key:11,ename:'11',aname:12,aid:11,imgName:'123.jpg',priority:1,time:'2020-08-10'},]
                ]
    this.state={  
      data:data
    }
  }

  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };
  
  
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const columns = [
      {
        title: '栏目',
        dataIndex: 'ename',
      },
      {
        title: '广告位名称',
        dataIndex: 'aname',
      },
      {
        title: '广告位编号',
        dataIndex: 'aid',
      },
      {
        title: '照片名称',
        dataIndex: 'imgName',
      },
      {
        title: '优先级',
        dataIndex: 'priority',
      },
      {
        title: '上架时间',
        dataIndex: 'time',
      },
      {
        title: '操作',
        dataIndex: 'caozuo',
        // key: '1',
        render: () => <div> <span style={{cursor:"pointer"}} onClick = {() => {this.showModal()}}>详情</span> 
                            <span style={{cursor:"pointer",margin:"0 20px"}} onClick={this.update.bind(this)}>编辑</span>
                            <span style={{cursor:"pointer"}} onClick={this.delete.bind(this)}>删除</span>     
                      </div>
      },
    ];

    

    let sum = this.state.data.map((item,index)=>{
      return <div key={index}>    
                  <h3 style={{fontSize:"16px"}}><span style={{width:"100px",textAlign:"right",display:"inline-block",fontSize:"16px",marginRight:"20px"}}>栏目:</span>{item.ename}</h3>   
                  <h3 style={{fontSize:"16px"}}><span style={{width:"100px",textAlign:"right",display:"inline-block",fontSize:"16px",marginRight:"20px"}}>广告位名称:</span>{item.aname}</h3>  
                  <h3 style={{fontSize:"16px"}}><span style={{width:"100px",textAlign:"right",display:"inline-block",fontSize:"16px",marginRight:"20px"}}>广告位编号:</span>{item.aid}</h3> 
                  <h3 style={{fontSize:"16px"}}><span style={{width:"100px",textAlign:"right",display:"inline-block",fontSize:"16px",marginRight:"20px"}}>照片名称:</span>{item.imgName}</h3> 
                  <h3 style={{fontSize:"16px"}}><span style={{width:"100px",textAlign:"right",display:"inline-block",fontSize:"16px",marginRight:"20px"}}>优先级:</span>{item.priority}</h3> 
                  <h3 style={{fontSize:"16px"}}><span style={{width:"100px",textAlign:"right",display:"inline-block",fontSize:"16px",marginRight:"20px"}}>上架时间:</span>{item.time}</h3>               
              </div>
      })      
      let update = this.state.data.map((item,index)=>{
        return <div key={index}>    
                    <h3 style={{fontSize:"16px"}}><span style={{width:"100px",textAlign:"right",display:"inline-block",fontSize:"16px",marginRight:"20px"}}>栏目:</span><input type="text" defaultValue={item.ename}/> </h3>   
                    <h3 style={{fontSize:"16px"}}><span style={{width:"100px",textAlign:"right",display:"inline-block",fontSize:"16px",marginRight:"20px"}}>广告位名称:</span><input type="text" defaultValue={item.aname}/></h3>  
                    <h3 style={{fontSize:"16px"}}><span style={{width:"100px",textAlign:"right",display:"inline-block",fontSize:"16px",marginRight:"20px"}}>广告位编号:</span><input type="text" defaultValue={item.aid}/></h3> 
                    <h3 style={{fontSize:"16px"}}><span style={{width:"100px",textAlign:"right",display:"inline-block",fontSize:"16px",marginRight:"20px"}}>照片名称:</span><input type="text" defaultValue={item.imgName}/></h3> 
                    <h3 style={{fontSize:"16px"}}><span style={{width:"100px",textAlign:"right",display:"inline-block",fontSize:"16px",marginRight:"20px"}}>优先级:</span><input type="text" defaultValue={item.priority}/></h3> 
                    <h3 style={{fontSize:"16px"}}><span style={{width:"100px",textAlign:"right",display:"inline-block",fontSize:"16px",marginRight:"20px"}}>上架时间:</span><input type="text" defaultValue={item.time}/></h3>               
                </div>
        })      
        let add = 
         <div>    
                      <h3 style={{fontSize:"16px"}}><span style={{width:"100px",textAlign:"right",display:"inline-block",fontSize:"16px",marginRight:"20px"}}>广告位编号:</span><input type="text" disabled/></h3> 
                      <h3 style={{fontSize:"16px"}}><span style={{width:"100px",textAlign:"right",display:"inline-block",fontSize:"16px",marginRight:"20px"}}>栏目:</span><input type="text"/> </h3>   
                      <h3 style={{fontSize:"16px"}}><span style={{width:"100px",textAlign:"right",display:"inline-block",fontSize:"16px",marginRight:"20px"}}>广告位名称:</span><input type="text"/></h3>  
                      <h3 style={{fontSize:"16px"}}><span style={{width:"100px",textAlign:"right",display:"inline-block",fontSize:"16px",marginRight:"20px"}}>照片名称:</span><input type="text"/></h3> 
                      <h3 style={{fontSize:"16px"}}><span style={{width:"100px",textAlign:"right",display:"inline-block",fontSize:"16px",marginRight:"20px"}}>优先级:</span><input type="text"/></h3> 
                      <h3 style={{fontSize:"16px"}}><span style={{width:"100px",textAlign:"right",display:"inline-block",fontSize:"16px",marginRight:"20px"}}>上架时间:</span><input type="text"/></h3>               
                      <h3 style={{fontSize:"16px"}}>
                      <span style={{width:"100px",textAlign:"right",display:"inline-block",fontSize:"16px",marginRight:"20px"}}>上传图片:</span>
                      <>
                          <Upload {...props}>
                            <Button>
                              <UploadOutlined /> Upload
                            </Button>
                          </Upload>
                      </>
                      </h3>
                  </div>
              
    // const { loading, selectedRowKeys } = this.state;
    // const rowSelection = {
    //   selectedRowKeys,
    //   onChange: this.onSelectChange,
    // };
    // const hasSelected = selectedRowKeys.length > 0;
    //上传
   


    return (
      <div>
          <>
        {/* <Button type="primary" onClick={this.showModal}>
          Modal
        </Button> */}
        <Button onClick={this.add.bind(this)}>新增广告</Button>
        <Modal
          title="广告详情"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          {sum}
        </Modal>
        <Modal
          title="编辑"
          visible={this.state.visible1}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          {update}
        </Modal>
        <Modal
          title="新增"
          visible={this.state.visible3}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          {add}
        </Modal>
        <Modal
          title="提示"
          visible={this.state.visible2}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          您确定要删除该条广告吗？               
        </Modal>
      </>
        <div style={{ marginBottom: 16 }}>
          {/* <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
            Reload
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span> */}
        </div>
        {/* <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <a>Invite {record.lastName}</a>
              <a>Delete</a>
            </Space>
          )}
        /> */}
         
        <Table columns={columns} dataSource={this.state.data} />
      </div>

      
    );
  }
}