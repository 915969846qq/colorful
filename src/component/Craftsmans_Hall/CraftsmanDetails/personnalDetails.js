import React, { Component } from 'react';

class personnalDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            person:[
                {
                    craftsmanName:"",
                    craftsmanImg:"",
                    fans:"",
                    company:10,
                    position:"",
                    expertise:'',
                    style:"",
                    experience:"",
                    DesignCost:1000,
                    DesignConcept:""
                },
            ]
         }
    }
    render() { 
        // let arr=this.state.person.map((item)=>{
        //    return(
        //     <div className="box">
        //         {/* 左边 */}
        //         <div>
        //             <div>
        //                 <img src="" alt=""/>
        //             </div>
        //             <div>
        //                 免费设计
        //             </div>
        //         </div>
        //         {/* 右边 */}
        //         <div>
        //             <table>
        //                 <thead>个人资料</thead>
        //                 <tbody>
        //                     <tr>
        //                         <td>所属公司</td>
        //                         <td>职位名称</td>
        //                     </tr>
        //                     <tr>
        //                         <td>擅长领域</td>
        //                         <td>擅长风格</td>
        //                     </tr>
        //                     <tr>
        //                         <td>设计经验</td>
        //                         <td>设计费用</td>
        //                     </tr>
        //                     <tr>
        //                         <td>设计理念</td>
        //                         <td></td>
        //                     </tr>
        //                 </tbody>
        //             </table>
        //         </div>
        //     </div>
        //     )
        // })
        return ( 
            <div>
                {/* {arr} */}
                {/* <h1>详情页面123</h1> */}
            </div>
         );
    }
}
 
export default personnalDetails;