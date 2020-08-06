import React, { Component } from 'react';
import {Link} from "react-router-dom"

//引入css
import "../css/PopularCraftsman.css"


class PopularCraftsman extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            craftsmanArr:[
                {
                    id:4,
                    img:"assets/images/craftsman_07.jpg",
                    name:"老王",
                    info:"首席漆工6年"
                },
                {
                    id:5,
                    img:"assets/images/craftsman_07.jpg",
                    name:"老李",
                    info:"首席漆工6年"
                },
                {
                    id:6,
                    img:"assets/images/craftsman_07.jpg",
                    name:"老子",
                    info:"首席漆工6年"
                },
                {
                    id:7,
                    img:"assets/images/craftsman_07.jpg",
                    name:"老子",
                    info:"首席漆工6年"
                },
            ]
         }
    }
    //当前点击事件的id
    toDetails = (id,event)=>{
        console.log(id);
     }
    render() { 
        let arr=this.state.craftsmanArr.map((item)=>{
              return (
                <div className="craftsman craftsmancss" key={item.id}>
                    <Link to={
                        {
                            pathname:`/Craftsman_details`,
                            state:{key:item.id}
                        }
                        
                    }><img src={require(`../../../${item.img}`)} alt="" className="cursor" onClick={this.toDetails.bind(this,item.id)}/></Link>
                    <div className="flex craftsman_Info">
                        <div>
                            <span className="craftsman_name cursor">{item.name}</span>
                            <span className="cursor">{item.info}</span>
                        </div>
                        <div className="TranslateNow cursor">立即预约</div>
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
 
export default PopularCraftsman;