import React, { Component } from 'react'
// 我的个人资料
import { Input, Radio, Button,Modal,Space } from 'antd'
import './css/Personal_personal_information.css'
import './css/city_chenming.css'
import '../../util/chajian/citychenming'
import CAxios from '../../util/chenmingaxios'
import $ from 'jquery'
export default class Personal_personal_information extends Component {
  constructor(props) {
    super(props)
    this.state = {
      province: "",
      city: "",
      uid:null,
      county: "",
      provinces: ['四川','安徽', '澳门', '北京', '福建', '甘肃', '广东', '广西', '贵州', '海南', '河北', '河南', '黑龙江', '湖北', '湖南', '吉林', '江苏', '江西', '辽宁', '内蒙古', '宁夏', '青海', '山东', '山西', '陕西', '上海', '台湾', '天津', '西藏', '香港', '新疆', '云南', '浙江', '重庆', '其他'],
      cities: ['成都'],
      counties: ['武侯','成华','金牛','青羊','锦江', '崇州', '大邑', '都江堰', '金堂', '彭州', '郫县', '蒲江', '邛崃', '双流', '新津']
 ,



 visible: false,
      sec_sellerimg: 'craftsman_07.jpg',
      realname: '',
      detailadress: '',
      email: '',
      sex: '男',
      node:<Input disabled="disabled" placeholder="请输入您的地址" style={{ width: 250 }} />,
      address:"",
      confirmor:"编辑"
    }
  }

// ============================================获取数据初始化======================================

getperinfo=(e)=>{
   
          CAxios.post(`/banJu/user/findUser`,e).then((res)=>{   
                   console.log(res)         
                return res.data;       
            }).then((data)=>{
    console.log(data.data)
    
                if(data.data.address.split("-").length===4){
              this.setState({
                              
                                province:data.data.address.split("-")[0],
                                cities: getCity(data.data.address.split("-")[0]),
                                city:data.data.address.split("-")[1],
                                counties:getCounty(data.data.address.split("-")[0], data.data.address.split("-")[1]),
                                county:data.data.address.split("-")[2],
                                detailadress:data.data.address.split("-")[3],
                               

                              });
                }
                  this.setState({
                    sex:data.data.gender,
                    realname:data.data.name,    
                      email:data.data.email,
                    },()=>{
                      $(".chenming .ant-radio-wrapper").addClass("ant-radio-wrapper-disabled")
                      $(".chenming .ant-radio").addClass("ant-radio-disabled")
                    });
                
               
               console.log(this.state)
            }).catch((e) => {
                  
            });
      }
// ======================================================================发送==============================

postperinfo=(e)=>{
   CAxios.post(`/banJu/user/updateData`,e).then((res)=>{   
                     console.log(res)         
                  return res.data;       
              }).then((data)=>{
                 console.log(data)
              }).catch((e) => {
                    
              }); 
}






// ===================================页面初始化============================
componentDidMount(){
 let uid=JSON.parse(sessionStorage.getItem("user")).id
 
  this.setState({
    uid:uid,
    province: '四川',
    cities: getCity('四川'),
    city:getCity('四川')[0],
    counties:getCounty('四川', getCity('四川')[0]),
    county:getCounty('四川',getCity('四川')[0])[0]
  });
      //  ========================================页面初始化==========================================
this.getperinfo({id:uid})


}





  // ==============================================双向数据绑定函数=====================
  onchange = (inform, e) => {
    this.setState({
      [inform]: e.target.value,
    })
  }

  // ==============================邮箱验证================================
  email = (inform, e) => {
    let reg = /^([a-zA-Z]|[0-9])(\w|)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
    if (reg.test(e.target.value)) {
      this.setState({
        [inform]: e.target.value,
      })
    } else {
      this.setState({
        [inform]: '',
      })
      e.target.placeholder = '请输入正确的邮箱'
    }
  }

  // ==============================提交数据======================================================
  submit = () => {
    let that=this
    if(this.state.confirmor==="编辑"){
      $(".chenming input").attr("disabled",false)
      $(".chenming input").removeClass("ant-input-disabled")
      $(".chenming .ant-radio-wrapper").removeClass("ant-radio-wrapper-disabled")
      $(".chenming .ant-radio").removeClass("ant-radio-disabled")
      $(".chenming .city select").attr("disabled",false)
      $(".chenming .backto").css("display","block")
     this.setState({
       confirmor:"确认修改",
     
     })
    }else{



     this.info()
        let province = document.body.getElementsByClassName('myprovince')[0].value
        let city = document.body.getElementsByClassName('mycity')[0].value
        let county = document.body.getElementsByClassName('mycounty')[0].value
        let address = province +"-" +city +"-"+ county+"-"+this.state.detailadress
      this.postperinfo({id:this.state.uid,address:address,name:this.state.realname,gender:this.state.sex,email:this.state.email})
    
    
      setTimeout(function(){
      $(".chenming .backto").css("display","none")
        $(".chenming input").attr("disabled",true)
      $(".chenming .ant-radio-wrapper").addClass("ant-radio-wrapper-disabled")
      $(".chenming .ant-radio").addClass("ant-radio-disabled")
      $(".chenming .city select").attr("disabled",true)
      that.setState({
        confirmor:"编辑",
       
      })
     })
     
    } 
  }
  
// ===================================取消/返回================================

backto=()=>{
  $(".chenming input").attr("disabled",true)
  $(".chenming .ant-radio-wrapper").addClass("ant-radio-wrapper-disabled")
  $(".chenming .ant-radio").addClass("ant-radio-disabled")
  $(".chenming .city select").attr("disabled",true)
  $(".chenming .backto").css("display","none")
this.getperinfo({id:3})

  this.setState({
    confirmor:"编辑",
   
  })
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


// ==============================================提示信息======================================

info=()=> {
  Modal.info({
  
    content: (
      <div>
        <p>修改成功</p>
      </div>
    ),
    onOk() {},
  });
}






  // ============================================页面=============================================
  render() {
    let id = 0
   
    return (
      <div className="chenming">

      <div className="personal_info">
          <div className="personal_img ">
            <span>头像 :</span>
            <img
              src={require(`../../assets/images/${this.state.sec_sellerimg}`)}
              alt="头像"
            />
          </div>
          <div>
            <span>真实姓名 :</span>
            <Input
             disabled
              placeholder="不超过十个汉字"
              value={this.state.realname}
              onChange={this.onchange.bind(this, 'realname')}
              style={{ width: 250 }}
            />
          </div>
          <div>
            <span>地区 :</span>
           
            <div className="city">
                                                  
                                                  <select className="select myprovince" onChange={this.handleChange.bind(this, "province")} value={this.state.province} style={{border:"none"}} disabled>
                                                      {this.state.provinces.map(province => (
                                                          <option value={province}   key={id++}>{province}</option>
                                                      ))}
                                                  </select>
                                                  <select className="select mycity" onChange={this.handleChange.bind(this, "city")} value={this.state.city} style={{border:"none"}} disabled >
                                                      {this.state.cities.map(city => (
                                                          <option value={city} key={id++}>{city}</option>
                                                      ))}
                                                  </select>
                                                  <select className="select mycounty" onChange={this.handleChange.bind(this, "county")} value={this.state.county} style={{border:"none"}} disabled>
                                                      {this.state.counties.map(county => (
                                                          <option value={county} key={id++}>{county}</option>
                                                      ))}
                                                  </select>
                                            
                                              </div>
                         
          </div>
          <div>
            <span>联系地址 :</span>
            <Input
            disabled="disabled"
              placeholder="请输入您的详细地址"
              value={this.state.detailadress}
              onChange={this.onchange.bind(this, 'detailadress')}
              style={{ width: 250 }}
            />
          </div>
          <div>
            <span>邮箱 :</span>
            <Input
             disabled="disabled"
              placeholder="请输入您的邮箱"
              value={this.state.email}
              onBlur={this.email.bind(this, 'email')}
              onChange={this.onchange.bind(this, 'email')}
              style={{ width: 250 }}
            />
          </div>
          <div>
            <span>性别 :</span>
            <Radio.Group 
            // disabled="disabled"
              onChange={this.onchange.bind(this, 'sex')}
              value={this.state.sex}
              style={{ height: 32, paddingTop: 3 }}
            >
              <Radio value="男" style={{ width: 100, marginLeft: 40 }} >
                男
              </Radio>
              <Radio value="女"  >女</Radio>
            </Radio.Group>
           
          </div>
          <div>
           <Space>
            <Button
              type="primary"
              className="submit_info"
              danger
              onClick={this.submit}
            >
              {this.state.confirmor}
            </Button></Space>
            <Button
              type="primary"
              className="submit_info backto"
              
              style={{marginTop:10,display:"none"}}
              onClick={this.backto}

            >
              返回/取消
            </Button>
          </div>
       </div>
      </div>
    )
  }
}
