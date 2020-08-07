import React, { Component } from 'react';
import { Row, Col, } from 'antd';

//引入css
import "./css/PopularCraftsman.css"

//引入底部
import Footer from '../commen/footer'


//引入icon
import "./icon/iconfont.css"

class Craftsman_Pavilion_list extends Component {
       constructor(props) {
        super(props);
        this.state = { 
            craftsmanArr:[
                {
                    id:1,
                    img:"assets/images/craftsman_07.jpg",
                    name:"王师傅",
                    company:"成都欧元装饰公司",
                    fans:2355
                },
                {
                    id:4,
                    img:"assets/images/craftsman_07.jpg",
                    name:"王师傅",
                    company:"成都欧元装饰公司",
                    fans:2355
                },
                {
                    id:5,
                    img:"assets/images/craftsman_07.jpg",
                    name:"王师傅",
                    company:"成都欧元装饰公司",
                    fans:2355
                }, 
                 {
                    id:6,
                    img:"assets/images/craftsman_07.jpg",
                    name:"王师傅",
                    company:"成都欧元装饰公司",
                    fans:2355
                },
                {
                    id:7,
                    img:"assets/images/craftsman_07.jpg",
                    name:"王师傅",
                    company:"成都欧元装饰公司",
                    fans:2355
                },
                {
                    id:8,
                    img:"assets/images/craftsman_07.jpg",
                    name:"王师傅",
                    company:"成都欧元装饰公司",
                    fans:2355
                },
                {
                    id:9,
                    img:"assets/images/craftsman_07.jpg",
                    name:"王师傅",
                    company:"成都欧元装饰公司",
                    fans:2355
                }, 
                {
                    id:10,
                    img:"assets/images/craftsman_07.jpg",
                    name:"王师傅",
                    company:"成都欧元装饰公司",
                    fans:2355
                },       
            ],
            // 今日推荐
            oneShow:true,
            twoShow:false,
            //不限
            anyOne:true,
            Carpentry:false,
            Masons:false,
            Painter:false,
            //经验
            exper:true,
            exper1:false,
            exper2:false,
            exper3:false,
         }
    }

    UNSAFE_componentWillMount(){
        console.log(this.props.location.state.key)

    //             fetch('http://172.16.10.15:8080/banJu/user/login',{                     
    //               method:'POST',
    //               headers:{
    //                   'Content-Type':'application/json' 
    //               },
    //               credentials: 'include',
    //     // 传参
    //     //           body:JSON.stringify({
    //     //             phoneNumber:this.state.num
    //     //           })
    //               }).then((res)=>{            
    //                   return res.json();       
    //               }).then((data)=>{
    //                 console.log(data);  
    //     // 存放数组            
    //                   this.setState({
    //                       yanzhengma:data  
    //                   })
    //               }).catch((e) => {
    //                   console.log("数据有误");
    //               });
    }

    // 今日推荐
    oneFn=(e)=>{
        console.log(e.target.innerHTML);
        this.setState({
            oneShow:true,
            twoShow:false,
        })
    }
    twoFn=(e)=>{
        console.log(e.target.innerHTML);
        this.setState({
            oneShow:false,
            twoShow:true,
            
        })
    }
    //不限
    Fn1=(e)=>{
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerHTML);
        this.setState({
            anyOne:true,
            Carpentry:false,
            Masons:false,
            Painter:false,
        });

    }
        
    
    Fn2=(e)=>{
            console.log(e);
            console.log(e.target);
            console.log(e.target.innerHTML);
            this.setState({
                Carpentry:true,
                anyOne:false,
                Masons:false,
                Painter:false,
            });
    }
    Fn3(){
        this.setState({
            Masons:true,
            anyOne:false,
            Carpentry:false,
            Painter:false,
           
        })
    }
    Fn4(){
        this.setState({
            Painter:true,
            anyOne:false,
            Carpentry:false,
            Masons:false,
        })
    }
    // 经验
    Fn11=(e)=>{
        console.log(e.target.innerHTML);
        this.setState({
            exper:true,
            exper1:false,
            exper2:false,
            exper3:false,
        })
    }
    Fn12=(e)=>{
        console.log(e.target.innerHTML);
        this.setState({
            exper:false,
            exper1:true,
            exper2:false,
            exper3:false,
        })
    }
    Fn13(){
        this.setState({
            exper:false,
            exper1:false,
            exper2:true,
            exper3:false,
           
        })
    }
    Fn14(){
        this.setState({
            exper:false,
            exper1:false,
            exper2:false,
            exper3:true,
        })
    }
    book(id,e){
        console.log(id);
    }
    render() { 
        let arr=this.state.craftsmanArr.map((item)=>{
              return (
                <div className="craftsman" key={item.id}>
                    <img src={require(`../../${item.img}`)} alt="" className="pavilionLImg"/>
                    <div className="craftsman_list_padding">
                        <div className="flex craftsman_Info">
                            <div className="craftsman_list_name">{item.name}</div>
                            <div className="craftsman_company">{item.company}</div>
                        </div>
                        <div className="flex craftsman_Info">
                            <span><span className="iconfont icon-aixin"></span>{item.fans}</span>
                            <div className="design cursor" onClick={this.book.bind(this,item.id)}>预约设计</div>
                        </div>
                    </div>
                </div>
              )      
        });
        return ( 
            //外层css取名
            <div className="craftsmancss">
                {/* 表格 */}
                <div className="table">
                    {/* top */}
                    <div className="table-top">
                        {/* 第一行 */}
                        <div className="tableBox flex liStyle">
                            {/* 左边 */}
                            <div className="tableBox_left ">职位</div>
                            <div className="tableBox_right">
                                <span className={this.state.anyOne?'myChioce':'myCancle'} onClick={this.Fn1}>不限</span>
                                <span className={this.state.Carpentry?'myChioce':'myCancle'} onClick={this.Fn2.bind(this)}>木工</span>
                                <span className={this.state.Masons?'myChioce':'myCancle'} onClick={this.Fn3.bind(this)}>泥工</span>
                                <span className={this.state.Painter?'myChioce':'myCancle'} onClick={this.Fn4.bind(this)}>漆工</span>
                            </div>
                        </div>
                        {/* 第2行 */}
                        <div className=" flex liStyle">
                            {/* 左边 */}
                            <div className="tableBox_left ">经验</div>
                            <div className="tableBox_right">
                            <span className={this.state.exper?'myChioce':'myCancle'} onClick={this.Fn11.bind(this)}>不限</span>
                                <span className={this.state.exper1?'myChioce':'myCancle'} onClick={this.Fn12.bind(this)}>1-2年</span>
                                <span className={this.state.exper2?'myChioce':'myCancle'} onClick={this.Fn13.bind(this)}>2-5年</span>
                                <span className={this.state.exper3?'myChioce':'myCancle'} onClick={this.Fn14.bind(this)}>5-8年</span>
                            </div>
                        </div>
                        {/* 第3行 */}
                        {/* <div className="tableBox flex liStyle"> */}
                            {/* 左边 */}
                            {/* <div className="tableBox_left ">经验</div>
                            <div className="tableBox_right">
                                <span>不限</span>
                                <span>1-2年</span>
                                <span>2-5年</span>
                                <span>5-8年</span>
                            </div>
                        </div> */}
                        {/* 第4行 */}
                        {/* <div className="tableBox flex liStyle"> */}
                            {/* 左边 */}
                            {/* <div className="tableBox_left ">经验</div>
                            <div className="tableBox_right">
                                <span>不限</span>
                                <span>1-2年</span>
                                <span>2-5年</span>
                                <span>5-8年</span>
                            </div>
                        </div> */}
                    </div>
                    {/* bottom */}
                    <div className="table-bottom">
                        <span >今日推荐</span>
                        <span className={this.state.oneShow?'myShow':'myHide'} onClick={this.oneFn.bind(this)}>最受欢迎</span>
                        <span className={this.state.twoShow?'myShow':'myHide'} onClick={this.twoFn.bind(this)}>人气排行</span>
                    </div>
                </div>    
                {/* 工匠人员 */}
                <div className="craftsmanStyle flex ">
                    

                    {arr}

                </div>
                <Footer></Footer>
            </div>
         );
    }
}
 
export default Craftsman_Pavilion_list ;