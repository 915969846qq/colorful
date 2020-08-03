import React, { Component } from 'react';
import {Link} from "react-router-dom"

//引入css
import "../css/PopularCraftsman.css"

class Masons extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            craftsmanArr:[
                {
                    img:"assets/images/craftsman_07.jpg",
                    name:"老王",
                    info:"首席漆工6年"
                },
                {
                    img:"assets/images/craftsman_07.jpg",
                    name:"老李",
                    info:"首席漆工6年"
                },
               
                {
                    img:"assets/images/craftsman_07.jpg",
                    name:"老子",
                    info:"首席漆工6年"
                },
                {
                    img:"assets/images/craftsman_07.jpg",
                    name:"老子",
                    info:"首席漆工6年"
                },
            ]
         }
    }
    render() { 
        let arr=this.state.craftsmanArr.map((item,index)=>{
              return (
                <div className="craftsman" key={index}>
                    <Link to="/Craftsman_details"><img src={require(`../../../${item.img}`)} alt="" /></Link>
                    <div className="flex craftsman_Info">
                        <div>
                            <span className="craftsman_name">{item.name}</span>
                            <span>{item.info}</span>
                        </div>
                        <div className="TranslateNow">立即预约</div>
                    </div>
                </div>
              )      
        })
        return ( 
            <div className="craftsmanStyle flex">
                {/* 热门工匠 */}
                {arr}

            </div>
         );
    }
}
 
export default Masons;