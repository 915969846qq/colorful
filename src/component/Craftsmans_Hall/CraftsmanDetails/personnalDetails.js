import React, { Component } from 'react';

//引入css
import "../css/personDetail.css"

class personnalDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            person:[],

           
         }
    }

    // 当前用户的id值
    UNSAFE_componentWillMount(){
        console.log(typeof this.props.id)
        let personId=this.props.id;

       fetch('http://172.16.10.11:8080/banJu/craftsmanDetail/selectCraftsmanDetail',{                     
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
                    // 存放数组 
                        this.setState({
                            person:data.data
                          },()=>{
                            this.arr();
                          })
                        
                 }) .catch((e) => {
                      console.log("数据有误");
                  });
    }

    //函数
    arr=()=>{
        console.log(this.state.person) 
        let arr=this.state.person.map((item,index)=>{
           return(
               <div className="person" key={index}>
                    <div className=" box">
                        {/* 左边 */}
                        <div className="box_left">
                            {/* <img src={require(`../../../${item.avatar}`)} alt="" className="imgStyle" /> */}
                            {/* <div className="nameStyle">{item.realName}</div> */}
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
                                        <td className="tdStyle">所属公司:{item.company}</td>
                                        <td className="tdStyle">职位名称:{item.position}</td>
                                    </tr>
                                    <tr>
                                        <td className="tdStyle">擅长领域:{item.areas}</td>
                                        <td className="tdStyle">擅长风格:{item.style}</td>
                                    </tr>
                                    <tr>
                                        <td className="tdStyle">设计经验:{item.experience}</td>
                                        <td className="tdStyle">设计费用:{item.cost}</td>
                                    </tr>
                                    <tr>
                                        <td className="tdStyle">设计理念:{item.concept}</td>
                                        <td className="tdStyle"> </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
        });
        this.setState({
            arr,
        })
    }

   
    render() {
        
        return ( 
            <div >
                {this.state.arr}
            </div>
         );
    }
}
 
export default personnalDetails;