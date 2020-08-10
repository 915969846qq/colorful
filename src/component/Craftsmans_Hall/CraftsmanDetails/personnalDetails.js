import React, { Component } from 'react';

//引入css
import "../css/personDetail.css"

class personnalDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            person:[

                // {
                //     craftsmanName:"王艳",
                //     craftsmanImg:"assets/images/craftsman_07.jpg",
                //     fans:"2354",
                //     company:"huibbh装饰公司",
                //     position:"设计师",
                //     expertise:'别墅',
                //     style:"中式",
                //     experience:"10年",
                //     DesignCost:1000,
                //     DesignConcept:"用思想打造属于你的简洁舒适的空间！"
                // },
            ]
         }
    }

    // 当前用户的id值
    UNSAFE_componentWillMount(){
        console.log(typeof this.props.id)
        let personId=this.props.id;

       fetch('http://172.16.10.10:8080/banJu/craftsmanDetail/selectCraftsmanDetail',{                     
                  method:'POST',
                  headers:{
                      'Content-Type':'application/json' 
                  },
                  // credentials: 'include',
                  // 传参
                  body:JSON.stringify({
                    cid:personId
                  })
        //           body:{
        //             
        //           }
                  }).then((res)=>{            
                      return res.json();       
                  }).then((data)=>{
                    console.log(data);  
                    // 存放数组            
                      this.setState({
                        person:data 
                      })
                  }).catch((e) => {
                      console.log("数据有误");
                  });
    }

    

    render() {
        console.log(this.state.person) 
        let arr=this.state.person.map((item,index)=>{
           return(
               <div className="person" key={index}>
                    <div className=" box">
                        {/* 左边 */}
                        <div className="box_left">
                            {/* <img src={require(`../../../${item.avatar}`)} alt="" className="imgStyle" /> */}
                            <div className="nameStyle">{item.realName}</div>
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
        })
        return ( 
            <div >
                {arr}
            </div>
         );
    }
}
 
export default personnalDetails;