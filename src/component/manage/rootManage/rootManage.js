import React, { Component } from 'react'
import { Table, Input, Button, Space,Popconfirm,Modal } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import "./rootManage.css"



const data = [

    {
        key: '1',
        id:1,
        phone:13540238949,
        name: '詹姆斯',
        password:123456,
        Job:2545,
        time: '2013-04-13',
        idCard:"513701245627261314",
        power:0

    },
    {
        key: '2',
        name: '汤姆',
        phone:13540238949,
        id:2,
        password:56789,
        Job:2546,
        time: '2013-04-13',
        idCard:"513701245627261314",
        power:0


    },
    {
        key: '3',
        id:3,
        phone:13540238949,
        name: '杰瑞',
        password:896464,
        Job:2547,
        time: '2013-04-13',
        idCard:"513701245627261314",
        power:0

    },
    {
        key: '4',
        id:4,
        phone:13540238949,
        name: '审定',
        password:4654654,
        Job:2548,
        time: '2013-04-13',
        idCard:"513701245627261314",
        power:0

    },
    {
        key: '5',
        id:5,
        phone:13540238949,
        name: '审定',
        password:469454,
        Job:2549,
        time: '2013-04-13',
        idCard:"513701245627261314",
        power:0

    },
];


/*=======================================*/

export default class rootManage extends Component {


    state = {
        searchText: '',
        searchedColumn: '',
        selectedRowKeys: [],
        visible: false
    };
    // ==============================模态框=====================================
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
    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
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
                        搜索
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
      const columns = [
          {
              title: '编号',
              dataIndex: 'id',
              key: 'id',
              // width: '12%',
              align:"center",
              sorter: {
                  compare: (a, b) => a.id - b.id,
                  multiple: 1,
              },
          },
          {
              title: '工号',
              dataIndex: 'Job',
              key: 'Job',
              width: '8%',
              align:"center",
              ...this.getColumnSearchProps('工号'),
          },


          {
              title: '手机号',
              dataIndex: 'phone',
              key: 'phone',
              // width: '10%',
              align:"center",
          },
          {
              title: '密码',
              dataIndex: 'password',
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
              ...this.getColumnSearchProps('姓名'),

          },
          {
              title: '添加时间',
              dataIndex: 'time',
              // width: '15%',
              key: 'time',
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
              render:(record) => {
                  return <p className="state butone">
                      <Popconfirm title="确定要删除此管理员信息？" okText="确定" cancelText="取消">
                          <a className="del">删除</a>
                      </Popconfirm>
                      <br/>
                          <Button type="primary" onClick={this.showModal}>
                              编辑
                          </Button>
                          <Modal
                              title="Basic Modal"
                              visible={this.state.visible}
                              onOk={this.handleOk}
                              onCancel={this.handleCancel}
                          >
                              <p>Some contents...</p>
                              <p>Some contents...</p>
                              <p>Some contents...</p>
                          </Modal>
                  </p>
              }
          },
      ];
    return (

      <div className="xutao">
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} onChange={onChange}
                 pagination={{showQuickJumper: true,hideOnSinglePage:false,pageSize:3}}/>;
      </div>
    )
  }
}
