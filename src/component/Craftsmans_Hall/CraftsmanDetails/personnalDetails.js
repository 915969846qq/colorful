import React, { Component } from 'react';

//引入css
import "../css/personDetail.css"

class personnalDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            person:{},

           
         }
    }

    // 当前用户的id值
    UNSAFE_componentWillMount(){
        console.log(typeof this.props.id)
        let personId=this.props.id;

       fetch('http://47.100.90.56:8080/banJu/craftsmanDetail/selectCraftsmanDetail',{                     
                  method:'POST',
                  headers:{
                      'Content-Type':'application/json' 
                  },
                  // credentials: 'include',
                  // 传参
                  body:JSON.stringify({
                    cid:personId
                  })
                  }).then((res)=>{            
                      return res.json();       
                  }).then((data)=>{
                    console.log(data);
                    // let object=data.data;
                    // let newData=[];
                    // for(let i in object){

                    //     let o = {};
                    //     o[i] = object[i];
                    //     newData.push(o);
                    // }
        //             console.log(newData)
                    // 存放数组 
                        this.setState({
                            person:data.data
                          })
                        
                 }) .catch((e) => {
                      console.log("数据有误");
                  });
    }

   
   
    render() {
        return ( 
            <div >
                  <div className="person" >
                     <div className=" box">
                         {/* 左边 */}
                         <div className="box_left">
                             {/* <img src={require(`../../../${item.avatar}`)} alt="" className="imgStyle" /> */}
                             <div className="nameStyle">{this.state.person.realName}</div>
                             <div className="freeDesign">
                                 免费设计
                             </div>
                         </div>
                         {/* 右边 */}
                         <div>
                             <table border="1" >
                                 {/* <thead>个人资料</thead> */}
                                 <tbody>
                                     <tr>
                                         <td colSpan="2"  className="nameStyle">个人资料</td>
                                     </tr>
                                     <tr>
                                         <td className="tdStyle">所属公司:{this.state.person.company}</td>
                                        <td className="tdStyle">职位名称:{this.state.person.position}</td>
                                     </tr>
                                     <tr>
                                         <td className="tdStyle">擅长领域:{this.state.person.areas}</td>
                                         <td className="tdStyle">擅长风格:{this.state.person.style}</td>
                                     </tr>
                                     <tr>
                                         <td className="tdStyle">设计经验:{this.state.person.experience}年</td>
                                         <td className="tdStyle">设计费用:{this.state.person.cost}</td>
                                     </tr>
                                     <tr>
                                         <td className="tdStyle">设计理念:{this.state.person.concept}</td>
                                         <td className="tdStyle"> </td>
                                     </tr>
                                 </tbody>
                             </table>
                         </div>
                     </div>
                 </div>
             
            </div>
         );
    }
}
 
export default personnalDetails;