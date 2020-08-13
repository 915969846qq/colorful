import React, { Component } from 'react';

//引入css
import "../css/PopularCraftsman.css"


class designCase extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // current: 1,
            person:[
                {
                    craftsmanImg:"assets/images/cranftsman/man2.jpg",
                    title:"北欧简约风二居室装修案例图片",
                    style:"风格：简约",
                    date:"2020-8-2"
                },
                {
                    craftsmanImg:"assets/images/min-banner1_03.jpg",
                    title:"北欧简约风二居室装修案例图片",
                    style:"风格：中式",
                    date:"2020-7-2"
                },
                {
                    craftsmanImg:"assets/images/min-banner1_03.jpg",
                    title:"北欧简约风二居室装修案例图片",
                    style:"风格：轻奢",
                    date:"2020-8-2"
                },
                {
                    craftsmanImg:"assets/images/cranftsman/man2.jpg",
                    title:"北欧简约风二居室装修案例图片",
                    style:"风格：轻奢",
                    date:"2020-8-2"
                },
                {
                    craftsmanImg:"assets/images/min-banner1_03.jpg",
                    title:"北欧简约风二居室装修案例图片",
                    style:"风格：简约",
                    date:"2020-8-2"
                },
                {
                    craftsmanImg:"assets/images/cranftsman/man2.jpg",
                    title:"北欧简约风二居室装修案例图片",
                    style:"风格：中式",
                    date:"2020-7-2"
                },
                {
                    craftsmanImg:"assets/images/cranftsman/man2.jpg",
                    title:"北欧简约风二居室装修案例图片",
                    style:"风格：轻奢",
                    date:"2020-8-2"
                },
                {
                    craftsmanImg:"assets/images/min-banner1_03.jpg",
                    title:"北欧简约风二居室装修案例图片",
                    style:"风格：轻奢",
                    date:"2020-8-2"
                },

            ],
            // 当前页数
            current:1,
            //总数
            total:2,
         }
    }
    
    UNSAFE_componentWillMount(){
        this.arr(1);
    }
      //上一页
    toUp=()=>{
        if(this.state.current-1!==0){
            this.setState({
                current:this.state.current-1,
         },()=>{
              this.arr(this.state.current);
         });
        }
    }

    //下一页
    toDown=()=>{
        if(this.state.current+1<=this.state.total){
            this.setState({
                current:this.state.current+1,
         },()=>{
             this.arr(this.state.current);
             console.log(this.state.current)
         });
        }
    }

    //函数
    arr=(pages)=>{
        // console.log()
        let arr=this.state.person.slice((pages-1)*4,pages*4).map((item,index)=>{
            return(
                <div className="craftsman" key={index}>
                    <img src={require(`../../../${item.craftsmanImg}`)} alt="" className="caseImg"/>
                    <div className="craftsman_list_padding">
                        <div className="craftsman_Info">{item.title}</div>
                        <div className="flex craftsman_Info">
                            <span>{item.style}</span>
                            <div>{item.date}</div>
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
            //外层css取名
            <div className="craftsmancss">

                <div className="flex craftsmanStyle ">
                    {this.state.arr}
                    <div className="craftsmanStyle center">
                        <div className="flex centerFlex">
                            <div className="Pages cursor" onClick={this.toUp.bind(this)}>上一页</div>
                                <div className="number"><span className=" currentNumber" >{this.state.current}</span>/{this.state.total}</div>
                            <div className="Pages cursor" onClick={this.toDown.bind(this)}>下一页</div>
                        </div>     
                    </div>
                </div>
            </div>
         );
    }
}
 
export default designCase;