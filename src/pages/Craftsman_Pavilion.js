import React, { Component } from 'react'
import {Link,BrowserRouter as Router, Route} from "react-router-dom"

//引入组件
import PopularCraftsman from  "../component/Craftsmans_Hall/craftsman/Popular_craftsman"
import Masons from  "../component/Craftsmans_Hall/craftsman/Masons"
import Carpentry from  "../component/Craftsmans_Hall/craftsman/Carpentry"
import Designer from  "../component/Craftsmans_Hall/craftsman/Designer"
import Painter from  "../component/Craftsmans_Hall/craftsman/Painter"
//引入组件
import Craftsman_Pavilion_list from '../component/Craftsmans_Hall/Craftsman_Pavilion_list'


//引入css
import "../component/Craftsmans_Hall/css/PopularCraftsman.css"

//引入头部
import Header from "../component/commen/header.js"
//引入底部
import Bottom from "../component/commen/footer.js"

// 工匠馆
export default class Craftsman_Pavilion extends Component {
    render() {
        return (
            <div className="craftsmancss">
                <Header></Header>
                {/* 热门工匠 */}
                <div className=" craftsmanStyle  craftsman_Info padding">
                    <div className="titleStyle">热门工匠</div>
                    <div className="joinUs cursor"><Link to="/Craftsman_Settled">加入我们</Link></div>
                </div>
                <PopularCraftsman></PopularCraftsman>

                {/* 泥工 */}
                <div className="craftsman_Info craftsmanStyle padding">
                    <span className="titleStyle"><span className="titleStyle TranslateNow margin">1F</span>泥工</span>
                    <div className="joinUs cursor"><Link to={
                        {
                            pathname:`/Craftsman_Pavilion_list`,
                            state:{key:"泥工"}
                        }
                        
                    }
                    >更多</Link></div>
                </div>
                <Masons></Masons>


                {/* 木工 */}
                <div className="craftsman_Info craftsmanStyle padding">
                    <span className="titleStyle"><span className="titleStyle TranslateNow margin">2F</span>木工</span>
                    <div className="joinUs cursor"><Link to={
                        {
                            pathname:`/Craftsman_Pavilion_list`,
                            state:{key:"木工"}
                        }
                        
                    }
                    >更多</Link></div>
                </div>
                <Carpentry></Carpentry>



                {/* 油漆工 */}
                <div className="craftsman_Info craftsmanStyle padding">
                    <span className="titleStyle"><span className="titleStyle TranslateNow margin">3F</span>油漆工</span>
                    <div className="joinUs cursor"><Link to={
                        {
                            pathname:`/Craftsman_Pavilion_list`,
                            state:{key:"油漆工"}
                        }
                        
                    }
                    >更多</Link></div>
                </div>
                <Painter></Painter>



                {/* 设计师 */}
                <div className="craftsman_Info craftsmanStyle padding">
                    <span className="titleStyle"><span className="titleStyle TranslateNow margin">4F</span>设计师</span>
                    <div className="joinUs cursor"><Link to={
                        {
                            pathname:`/Craftsman_Pavilion_list`,
                            state:{key:"设计师"}
                        }
                        
                    }
                    >更多</Link></div>
                </div>
                <Designer></Designer>
                <Bottom></Bottom>
                <Router>
                    <Route path="/Craftsman_Pavilion_list" component={Craftsman_Pavilion_list}></Route>
                </Router>
                
            </div>
        )
    }           
}
