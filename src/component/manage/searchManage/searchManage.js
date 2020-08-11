import React, { Component } from 'react'


import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

    export default class searchManage extends React.Component {
      constructor(){
        super()
        this.state={
         data:[
        
        ]
        }
         
      }
      state = {
        searchText: '',
        searchedColumn: '',
      };

// ========================================获取数据=====================================

getpriority=(e)=>{
   
          fetch(`http://172.16.10.4:8080/banJu/manager/goodsSortShow`,{                     
            method:'POST',
            headers:{
                'Content-Type':'application/json' 
            },
            credentials: 'include',
            body:JSON.stringify(e)
            }).then((res)=>{   
                   console.log(res)         
                return res.json();       
            }).then((data)=>{
               console.log(data.data)
               let prioritydata=[]
            data.data.map((item,index)=>{
           return   prioritydata.push({key:index,id:item.id,productname:item.name,priority:item.priority,bossname:item.merchant.name})
            })

            this.setState({
            data:prioritydata
            })
            }).catch((e) => {
                  
            });
      }



  
// ===================================修改数据============================================
changepriority=(e)=>{
   
          fetch(`http://172.16.10.4:8080/banJu/manager/updateGoodsPriority`,{                     
            method:'POST',
            headers:{
                'Content-Type':'application/json' 
            },
            credentials: 'include',
            body:JSON.stringify(e)
            }).then((res)=>{   
                  this.getpriority({}) 
                     
            }).then((data)=>{
            
            }).catch((e) => {
                  
            });
      }








// =====================================页面初始化======================================================


componentDidMount(){
  this.getpriority({})
  this.changepriority({id:3,priority:60})
}

confirmfix=(m,inform,e)=>{
console.log(m)
console.log(e.target.parentNode.parentNode.parentNode.children[4].children[0].value)
let priority=parseInt(e.target.parentNode.parentNode.parentNode.children[4].children[0].value)
this.changepriority({id:m,priority:priority})

}












 // ============================================================表格========================
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
                Search
              </Button>
              <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                Reset
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
        let that=this
        const columns = [
          {
            title: '商品id',
            dataIndex: 'id',
           align:"center",
           sorter: {
            compare: (a, b) => a.id - b.id,
            multiple: 1,
          },
           ...this.getColumnSearchProps('id'),
          },
          {
            title: '商品名',
            dataIndex: 'productname',
            align:"center",
            ...this.getColumnSearchProps('productname'),
            // render: text => <a>{text}</a>,
          },
          {
            title: '商家',
            align:"center",
            
            dataIndex: 'bossname',
           
            ...this.getColumnSearchProps('bossname'),
          },
         
          {
            title: '原优先级',
            align:"center",
            dataIndex: 'priority',
            sorter: {
              compare: (a, b) => a.priority- b.priority,
              multiple: 1,
            },
            ...this.getColumnSearchProps('priority'),
   
          },
          {
            title: '更改优先级',
            align:"center",
            render:(primaryvalue)=>{
              return <Input type="number" placeholder="请输入级数"  style={{width:80,textAlign:"center"}}/>
                },
          },
          {
            title: '操作',
            dataIndex: 'id',
            align:"center",
            
            render:(id,record)=>{
           
              return <Button type="primary" danger onClick={this.confirmfix.bind(this,id,record)} >修改</Button> 
                },
          },
        ];
        function onChange(pagination, filters, sorter, extra) {
          console.log('params', pagination, filters, sorter, extra);
        }
        return (<div>
          <div>
          <h1 style={{fontSize:24}}>搜索排名管理</h1>
          <h2 style={{color:"grey"}}>注：值越大越优先</h2>
           <div>
   {/* ==============================================表格=============================================== */}
 
   
    <Table columns={columns} dataSource={this.state.data} onChange={onChange} />
   
   
   
   {/* =============================================上面是表格========================================== */}
           </div>
          </div>
         </div>)
       
      }
    }
   
    
   