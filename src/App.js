import React from 'react'
// import './App.css'

import Sign_Register from './component/Register.js/Sign_Register'
import 'antd/dist/antd.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

//引入路由跳转组件
import Index from './pages/index'
import Personal_Center_index from './pages/Personal_Center_index'
import Craftsman_Pavilion from './pages/Craftsman_Pavilion'
import Craftsman_Pavilion_list from './component/Craftsmans_Hall/Craftsman_Pavilion_list'
import Craftsman_details from './component/Craftsmans_Hall/Craftsman_details'
import Secondhand_Market from './pages/Secondhand_Market'
// import Style_pavilion from './pages/Style_pavilion'
import Decoration_Museum from './pages/Decoration_Museum'
import Furniture_Museum from './pages/Furniture_Museum'
import Home_Museum from './pages/Home_Museum'
import Building_materials_Museum from './pages/Building_materials_Museum'
import SignRegister from './component/Register.js/Sign_Register'
import Sign_Register_successful from './component/Register.js/Sign_Register_successful'
import Sign_in from './component/Login/Sign_in'
import Manage from './pages/manage'
import Craftsman_Settled from './component/Person_center/Craftsman_Settled'
import Craftsman_Settled_company from './component/Person_center/Craftsman_Settled_company'
import Furniture_Museum_details from './component/Furniture_house/Furniture_Museum_details'
import Style_pavilion_case from './component/Style/Style_pavilion_case'
import Decoration_Diary_list from './component/Decoration_pipe/Decoration_Diary_list'
<<<<<<< HEAD
import Backstage from "./component/Login/backstage"
=======
// 后台登录
import backstage from './component/Login/backstage'
>>>>>>> 4276d1e45864936855dce0597c702b5afc42d858
function App() {
  return (
    <div className="App">
      {/* <Index></Index> */}
      <Router>
        <Switch>
          <Route
            path="/Style_pavilion_case"
            component={Style_pavilion_case}
          ></Route>
          <Route
            path="/Furniture_Museum_details"
            component={Furniture_Museum_details}
          ></Route>
          <Route
            path="/Craftsman_Settled_company"
            component={Craftsman_Settled_company}
          ></Route>
          <Route
            path="/Building_materials_Museum"
            component={Building_materials_Museum}
          ></Route>
          <Route path="/Home_Museum" component={Home_Museum}></Route>
          <Route path="/Furniture_Museum" component={Furniture_Museum}></Route>
          <Route
            path="/Decoration_Museum"
            component={Decoration_Museum}
          ></Route>
          {/* <Route path="/Style_pavilion" component={Style_pavilion}></Route> */}
          <Route
            path="/Secondhand_Market"
            component={Secondhand_Market}
          ></Route>
          <Route
            path="/Craftsman_details"
            component={Craftsman_details}
          ></Route>
          <Route
            path="/Craftsman_Pavilion_list"
            component={Craftsman_Pavilion_list}
          ></Route>
          <Route
            path="/Craftsman_Pavilion"
            component={Craftsman_Pavilion}
          ></Route>
          <Route path="/index" component={Index}></Route>
          <Route
            path="/Personal_Center_index"
            component={Personal_Center_index}
          ></Route>
          <Route path="/Sign_Register" component={SignRegister}></Route>
          <Route
            path="/Sign_Register_successful"
            component={Sign_Register_successful}
          ></Route> <Route
            path="/backstage"
            component={Backstage}
          ></Route>
          <Route
            path="/Decoration_Diary_list"
            component={Decoration_Diary_list}
          ></Route>
          <Route path="/backstage" component={backstage}></Route>
          <Route path="/Sign_in" component={Sign_in}></Route>
          <Route path="/manage" component={Manage}></Route>
          <Route path="/" exact component={Index}></Route>
          {/* <Redirect from="/" to="/index"></Redirect>        */}
        </Switch>
      </Router>
    </div>
  )
}

export default App
