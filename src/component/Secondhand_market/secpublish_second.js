import React, { Component } from 'react';
import {Select,Input,Upload, Modal,Button} from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import './css/secpublish_second.css'
import './css/city_chenming.css'
import City from '../../util/chajian/city'
const { Option } = Select;
const {TextArea}=Input;
class Secpublish_second extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Textvalue:"",
            previewVisible: false,
            // previewImage: '',
            previewTitle: '',
            fileList: [
              ],
            newstatus:"",
            price:"",
            title:"",
            description:"",
          smallclass:[
            [{cname:"整机"},{cname:"内存条"},{cname:"其它"}],
            [{cname:"整机1"},{cname:"内存条"},{cname:"其它"}],
            [{cname:"整2"},{cname:"内存条"},{cname:"其它"}],
            [{cname:"整机3"},{cname:"内存条"},{cname:"其它"}],
            [{cname:"整4"},{cname:"内存条"},{cname:"其它"}],
            [{cname:"整5机"},{cname:"内存条"},{cname:"其它"}],
            [{cname:"整6机"},{cname:"内存条"},{cname:"其它"}],
            [{cname:"整7机"},{cname:"内存条"},{cname:"其它"}],
            
          ],
            dizhi:"",
            lianxiren:"",
            phone:"",
          listchoose:[]
    }
}


bindchoose=(e)=>{
  let listchoose=e.map((item,index)=>{
    return (
    <Option value="jack" key={index}>{item.cname}</Option>
     
    )
  })
  return listchoose
}
// ===========================页面接参初始化=======================================
componentDidMount(){
  let m=parseInt(this.props.match.params.cid)-1
let listchoose=this.bindchoose(this.state.smallclass[m])
  this.setState({
    listchoose:listchoose
  })
}






























// ==============================图片上传========================
    // getBase64(file) {
    //     return new Promise((resolve, reject) => {
    //       const reader = new FileReader();
    //       reader.readAsDataURL(file);
    //       reader.onload = () => resolve(reader.result);
    //       reader.onerror = error => reject(error);
    //     });
    //   }
      handleCancel = () => this.setState({ previewVisible: false });
      handlePreview = async file => {
        if (!file.url && !file.preview) {
          file.preview = await this.getBase64(file.originFileObj);
        }
        this.setState({
          previewImage: file.url || file.preview,
          previewVisible: true,
          previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
      };
    
      handleChange = ({ fileList }) => this.setState({ fileList });
// ==========================================双向绑定数据===================== 
      onchange=(inform,e)=>{
        this.setState({
            [inform]:e.target.value
        })
    }
// ==========================手机号验证=======================
phonereal=e=>{
  let m=parseInt(e.target.value)
   if(isNaN(m)||m<0||e.target.value.length!==11||(!/^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/.test(m))){
        this.setState({phone:""})
   e.target.placeholder="请输入正确的11位手机号码"
   }
}

// ====================================提交数据==================================
      submitinfo=()=>{
        let province=document.body.getElementsByClassName("myprovince")[0].value
        let city=document.body.getElementsByClassName("mycity")[0].value
        let county=document.body.getElementsByClassName("mycounty")[0].value
       let address=province+city+county
       console.log(address)
        console.log(this.state.fileList)
        this.props.history.push('/Secondhand_Market/Secpublish/success')
    }

    render() { 
        const { previewVisible,fileList, previewTitle } = this.state;
        const uploadButton = (
          <div>
            <PlusOutlined />
            <div className="ant-upload-text">Upload</div>
          </div>
        );


        return ( 
        <div >
          <div className="secpublish_menu">
                <div className="borderbottom"><i>1</i><span>选择类别</span></div>
                <div style={{borderBottom:"4px solid red"}}><i>2</i><span>填写信息</span></div>
                <div><i>3</i><span>发布成功</span></div>
                
            </div>
            {/* 商品基础信息填写 */}
            <p className="proto_info_title">基础信息</p>
            <div className="proto_info_box" >
                
                <div><span>类别 :</span>
                <Select placeholder="请选择" style={{ width: 250 }}  >
                    {this.state.listchoose}
                 </Select>
                </div>
                <div><span>新旧 :</span>
                <Input placeholder="请输入新旧(如:八成新)" value={this.state.newstatus} onChange={this.onchange.bind(this,"newstatus")} style={{width:250}} />
                </div>
                <div ><span>转让价格 :</span>
                    <Input placeholder="请输入价格" value={this.state.price} onChange={this.onchange.bind(this,"price")} type='number' style={{width:250}} />
                </div>
                <div ><span>标题 :</span>
                    <Input placeholder="发布标题" value={this.state.title} onChange={this.onchange.bind(this,"title")}  style={{width:250}} />
                </div>
                <div>
                    <span>描述信息 :</span>
                    <TextArea
                            placeholder="请输入商品描述信息"
                            autoSize={{ minRows: 5, maxRows: 10 }}
                            style={{width:300}}
                            value={this.state.description} 
                            onChange={this.onchange.bind(this,"description")}
                            />
                </div>
  {/* ======================================上传图片============================= */}
                <div className="uploadimg">
                    <span>上传图片 :</span>
                    
                    <div className="clearfix" style={{width:400}}>
                        <Upload
                        action="false"
                        // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={this.handlePreview}
                        onChange={this.handleChange}
                        >
                        {fileList.length >= 3 ? null : uploadButton}
                        </Upload>
                        <Modal
                        visible={previewVisible}
                        title={previewTitle}
                        footer={null}
                        onCancel={this.handleCancel}
                        >
                        {/* <img alt="example" style={{ width: '100%' }} src={previewImage} /> */}
                        </Modal>
                    </div> 
                 </div>
                 
{/* ======================================================================= */}
               
                <div ><span>交易地点:</span>
                  <City></City>
                </div>
                <div ><span>联系人 :</span>
                    <Input placeholder="联系人" value={this.state.lianxiren} onChange={this.onchange.bind(this,"lianxiren")} style={{width:250}} />
                </div>
                <div ><span>电话 :</span>
                    <Input placeholder="请输入您的电话" value={this.state.phone} onChange={this.onchange.bind(this,"phone")}  onBlur={this.phonereal} type="number" style={{width:250}} />
                </div>
                <div>
                <Button type="primary" block style={{width:250,marginLeft:120}} onClick={this.submitinfo}>  提交</Button>
    
                </div>
            </div>
            
        </div> 
        );
    }
}
 
export default Secpublish_second;