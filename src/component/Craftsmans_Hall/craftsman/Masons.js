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
                    id:1,
                    img:"assets/images/craftsman_07.jpg",
                    name:"老王",
                    info:"首席漆工6年"
                },
                {
                    id:2,
                    img:"assets/images/craftsman_07.jpg",
                    name:"老李",
                    info:"首席漆工6年"
                },
               
                {
                    id:3,
                    img:"assets/images/craftsman_07.jpg",
                    name:"老子",
                    info:"首席漆工6年"
                },
                {
                    id:4,
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
        this.setState({
            id,
        })
        // console.log(this.state);
        // console.log(event.currentTarget.parentElement.parentElement.getAttribute('data-key'));
        // console.log(event.currentTarget.getAttribute("key"));
        // console.log(event);
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
                        
                    }
                    // {"/Craftsman_details/"+item.id}
                    ><img src={require(`../../../${item.img}`)} alt="" onClick={this.toDetails.bind(this,item.id)}/></Link>
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