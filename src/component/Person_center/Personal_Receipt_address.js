import React from 'react'
import './css/Personal_Receipt_address.css'
import  '../../util/chajian/citychenming'
import { Table, Drawer,Input, Button, Space,Modal } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import Axios from '../../util/chenmingaxios'
// import { PlusOutlined } from '@ant-design/icons';
export const {Provider,Consumer} = React.createContext("默认名称");

    export default class searchManage extends React.Component {
      constructor(){
        super()
        this.state={
          name:"",
          detailaddress:"",
          phone:"",
          province: "",
          city: "",
          county: "",
          provinces: ['四川','安徽', '澳门', '北京', '福建', '甘肃', '广东', '广西', '贵州', '海南', '河北', '河南', '黑龙江', '湖北', '湖南', '吉林', '江苏', '江西', '辽宁', '内蒙古', '宁夏', '青海', '山东', '山西', '陕西', '上海', '台湾', '天津', '西藏', '香港', '新疆', '云南', '浙江', '重庆', '其他'],
          cities: ['成都'],
          counties: ['武侯','成华','金牛','青羊','锦江', '崇州', '大邑', '都江堰', '金堂', '彭州', '郫县', '蒲江', '邛崃', '双流', '新津']
     ,
          alert:"",
      
         data:[],
          uid:null,
          id:null,

        tableaddress:"block",
        formaddress:"none",
        visible: false,

      
        }
         
      }

// =====================================================发送数据======================================
getperinfo=(e)=>{
   
          Axios.post(`/banJu/user/findAddress`,e).then((res)=>{   
                   console.log(res)         
                return res.data;       
            }).then((data)=>{
              console.log(data)
                let newdata=[]
                data.data.map((item,index)=>{
              return   newdata.push({key:index,id:parseInt(item.id),name:item.consigneeName,address:item.address,phone:item.phoneNumber})
                })
              this.setState({
                data:newdata
              }) 
            }).catch((e) => {
                  
            });
      }


postperinfo=(e)=>{
  let that=this
  console.log(that.state.uid)
   Axios.post(`/banJu/user/addAddress`,e).then((res)=>{   
                  console.log(res)
                  if(parseInt(res.status)===200){
                    this.setState({
                      alert:"成功修改/新增地址"
                    },()=>{
                      this.info()
                    this.onClose()
                    })
                  }
                    this.getperinfo({uid:that.state.uid})        
                  return res.data;       
              }).then((data)=>{
                 console.log(data)
              }).catch((e) => {
                    
              }); 
}




// ========================================删除====================================
deleteperinfo=(e,m)=>{

   Axios.post(`/banJu/user/deleteAddress`,{id:e.id}).then((res)=>{   
      this.getperinfo({uid:this.state.uid}) 
                     console.log(res)         
                  return res.data;       
              }).then((data)=>{
                 console.log(data)
              }).catch((e) => {
                    
              }); 
}


    //  ========================================页面初始化==========================================
componentDidMount(){
 let uid=JSON.parse(sessionStorage.getItem("user")).id
 console.log(uid)
  this.getperinfo({uid:uid})
  this.setState({
    uid:uid,
    province: '四川',
    cities: getCity('四川'),
    city:getCity('四川')[0],
    counties:getCounty('四川', getCity('四川')[0]),
    county:getCounty('四川',getCity('四川')[0])[0]
});
}




    
 // ===========================双向数据绑定函数=============
 onchange=(inform,e)=>{
  this.setState({
      [inform]:e.target.value
  })
}


 // ==================================手机号码验证=====================
    phonereal=e=>{
        let m=parseInt(e.target.value)
         if(isNaN(m)||m<0||e.target.value.length!==11||(!/^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/.test(m))){
              this.setState({phone:""})
         e.target.placeholder="请输入正确的11位手机号码"
         }
     }




      // =====================================不要动===========================================
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
    

// =================================================模态框=====================================
 showDrawer = () => {
        this.setState({
          visible: true,
        });
      };
    
onClose = () => {
        this.setState({
          visible: false,
        });
      };  



    //   =================================点击编辑===================================
menuinfo1=(e,m)=>{


    this.setState({
        name:e.name,
        phone:e.phone,
       
        id:e.id,
        province:e.address.split("-")[0],
        city:e.address.split("-")[1],
        county:e.address.split("-")[2],
        detailaddress:e.address.split("-")[3],
        cities: getCity(e.address.split("-")[0]),
        counties:getCounty(e.address.split("-")[0],e.address.split("-")[1]),
       
    },()=>{
      console.log(this.state)
    })
   
this.showDrawer()
   
}


// ===================================点击新增==============================================
addaddress=()=>{
    this.setState({
        name:"",
        phone:"",
        detailaddress:"",
        id:null
    })
    this.showDrawer()
}



  
// ===================================================城市选择=======================================

handleChange(name, e) {
       
  e.preventDefault()
  switch (name) {

      case "province":
          this.setState({
              province: e.target.value,
              cities: getCity(e.target.value),
              city:getCity(e.target.value)[0],
              counties:getCounty(e.target.value, getCity(e.target.value)[0]),
              county:getCounty(e.target.value,getCity(e.target.value)[0])[0]
          });
     
          break;
      case "city":
          this.setState({
              city: e.target.value,
              counties: getCounty(this.state.province, e.target.value),
              county:getCounty(this.state.province, e.target.value)[0]
          });
      
          break;
      case "county":
          this.setState({

              county: e.target.value
          },()=>{
              console.log(this.state.county)
          });
         
          break;
      default:
          alert("child handleChange error")
  }
}


 // ===============================提交===========================
 tijiao=()=>{
   
  let province=document.body.getElementsByClassName("myprovince")[0].value+"-"
  let city=document.body.getElementsByClassName("mycity")[0].value+"-"
  let county=document.body.getElementsByClassName("mycounty")[0].value+"-"
 let address=province+city+county+this.state.detailaddress
let that=this

// ======================================判断重复=================================

              let ifrepeat=[]
              let m=0
              this.state.data.map((item)=>{
                ifrepeat.push({name:item.name,address:item.address,phone:item.phone})
              })
             
              ifrepeat.map(
                item=>{
                  if(item.name===that.state.name&&item.phone===that.state.phone&&item.address===address){
                    return m=1
                  }
                }
              )

          if(m===0&&that.state.name.length!==0&&that.state.phone.length!==0&&that.state.detailaddress.length!==0){
          that.postperinfo({
                                uid:that.state.uid,
                                id:that.state.id,
                                consigneeName:that.state.name,
                                address:address,
                                phoneNumber:that.state.phone
                              })
console.log({
  uid:that.state.uid,
  id:that.state.id,
  consigneeName:that.state.name,
  address:address,
  phoneNumber:that.state.phone
})



          }
           else if(m===1||that.state.name.length===0||that.state.phone.length===0||that.state.detailaddress.length===0){
             console.log("11111")
           that.setState({
             alert:"该地址已经存在/地址等信息不能为空"
           }, ()=>{ this.info()})
         
          }



  

}


// ========================================提示信息=================================
info=()=> {
  let that=this
  Modal.info({
  
    content: (
      <div>
        <p>{that.state.alert}</p>
      </div>
    ),
    onOk() { },
  });
}









      
      render() { 
        let id = 0
        
// ===========================================表格 ===================================
        const columns = [
          {
            title: '收货人',
            dataIndex: 'name',
           align:"center",
          },
          {
            title: '电话号码',
            dataIndex: 'phone',
            align:"center",
          },
          {
            title: '联系地址',
            align:"center",
            dataIndex: 'address',
          },
          {
            title: '操作',
            dataIndex: 'productid',
            align:"center",
            
            render:(p,record)=>{
              return <span><Button type="primary" danger onClick={this.menuinfo1.bind(this,record)}>编辑</Button>
              <Button type="primary" danger style={{marginLeft:5}} onClick={ this.deleteperinfo.bind(this,record)}>删除</Button>
              </span>
                },
          },
        ];
        function onChange(pagination, filters, sorter, extra) {
          console.log('params', pagination, filters, sorter, extra);
        }









       

        // =========================================页面====================================
        return (
          
        <div>
          <div style={{height:600}}>
           <div style={{margin:"100px auto"}}>
           {/* ==============================模态框==================================     */}
            <div >
            <>
        <Button type="primary" danger style={{marginBottom:10}} onClick={this.addaddress}>
           + 新增
        </Button>
        <Drawer
          title="收货地址"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >   
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                取消
              </Button >
              <Space>
              <Button  type="primary" onClick={this.tijiao}>
                提交
              </Button></Space>
            </div>
          }
        >
           <div className="chenming1" style={{margin:"50px auto",}} >
                <div className="receive_address">
                    <div >
                        <span>真实姓名 :</span>
                        <Input placeholder="请输入收货人名字" value={this.state.name} onChange={this.onchange.bind(this,"name")} style={{width:250}} /> 
                    </div>
                    <div >
                        <span>所在地区 :</span>
                        <div>
                          <div className="city">
                                                  
                                                    <select className="select myprovince" onChange={this.handleChange.bind(this, "province")} value={this.state.province} style={{border:"none"}} >
                                                        {this.state.provinces.map(province => (
                                                            <option value={province}   key={id++}>{province}</option>
                                                        ))}
                                                    </select>
                                                    <select className="select mycity" onChange={this.handleChange.bind(this, "city")} value={this.state.city} style={{border:"none"}} >
                                                        {this.state.cities.map(city => (
                                                            <option value={city} key={id++}>{city}</option>
                                                        ))}
                                                    </select>
                                                    <select className="select mycounty" onChange={this.handleChange.bind(this, "county")} value={this.state.county} style={{border:"none"}}>
                                                        {this.state.counties.map(county => (
                                                            <option value={county} key={id++}>{county}</option>
                                                        ))}
                                                    </select>
                                              
                                                </div>
                            </div>
                    
                        
                    </div>
                    <div >
                        <span>详细地址 :</span>
                        <Input placeholder="请输入详细地址" value={this.state.detailaddress} onChange={this.onchange.bind(this,"detailaddress")} style={{width:250}} /> 
                    </div>
                    <div >
                        <span>手机号码 :</span>
                        <Input placeholder="请输入手机号码" type="number" value={this.state.phone} onChange={this.onchange.bind(this,"phone")} onBlur={this.phonereal} min="1" minLength="11"  style={{width:250}} /> 
                    </div>
                     </div>
                </div>
        </Drawer>
      </>
            </div>
           
        {/* ===============表单===================================================================================== */}
    <Table columns={columns} dataSource={this.state.data} onChange={onChange} bordered />
   
           </div>
          </div>
    
        
         </div>)
       
      }
    }
   
    
   