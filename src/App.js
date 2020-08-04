import React from 'react'
// import './App.css'

import Sign_Register from './component/Register.js/Sign_Register'
import 'antd/dist/antd.css'


import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route,Switch,Redirect } from 'react-router-dom'


//引入路由跳转组件
import Index from './pages/index'
import Personal_Center_index from "./pages/Personal_Center_index"
import Craftsman_Pavilion from './pages/Craftsman_Pavilion'
import Craftsman_Pavilion_list from './component/Craftsmans_Hall/Craftsman_Pavilion_list'
import Craftsman_details from './component/Craftsmans_Hall/Craftsman_details'
import Secondhand_Market from './pages/Secondhand_Market'
import Style_pavilion from './pages/Style_pavilion'
import Decoration_Museum from './pages/Decoration_Museum'
import Furniture_Museum from './pages/Furniture_Museum'
import Home_Museum from './pages/Home_Museum'
import Building_materials_Museum from './pages/Building_materials_Museum'
import SignRegister from './component/Register.js/Sign_Register'
import Sign_Register_successful from './component/Register.js/Sign_Register_successful'
import Sign_in from './component/Login/Sign_in'

function App() {
  return (
    <div className="App">
      {/* <Index></Index> */} 
      <Router>
          <Switch>
          <Route path="/Building_materials_Museum" exact component={Building_materials_Museum}></Route>
          <Route path="/Home_Museum" exact component={Home_Museum}></Route>
          <Route path="/Furniture_Museum" exact component={Furniture_Museum}></Route>
          <Route path="/Decoration_Museum" exact component={Decoration_Museum}></Route>
          <Route path="/Style_pavilion" exact component={Style_pavilion}></Route>
          <Route path="/Secondhand_Market" exact component={Secondhand_Market}></Route>
          <Route path="/Craftsman_details" exact component={Craftsman_details}></Route>
          <Route path="/Craftsman_Pavilion_list" exact component={Craftsman_Pavilion_list}></Route>
          <Route path="/Craftsman_Pavilion" exact component={Craftsman_Pavilion}></Route>
          <Route path="/index" exact component={Index}></Route>
          <Route path="/Personal_Center_index" exact component={Personal_Center_index}></Route>
          <Route path="/Sign_Register" exact component={SignRegister}></Route> 
          <Route path="/Sign_Register_successful" exact component={Sign_Register_successful}></Route> 
          <Route path="/Sign_in" exact component={Sign_in}></Route> 
          <Redirect from="/" to="/index"></Redirect>
          </Switch>
      </Router>
    </div>
  )
}

export default App
