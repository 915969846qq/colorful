import React from 'react'
// import './App.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Index from './pages/index'
import 'antd/dist/antd.css'
import './Css/Decoration_diary.css'
import Building_materials_Museum from './pages/Building_materials_Museum'
import Craftsman_Pavilion from './pages/Craftsman_Pavilion'
import Decoration_Museum from './pages/Decoration_Museum'
import Furniture_Museum from './pages/Furniture_Museum'
import Home_Museum from './pages/Home_Museum'
import Secondhand_Market from './pages/Secondhand_Market'
import Style_pavilion from './pages/Style_pavilion'
import Personal_Center_index from './pages/Personal_Center_index'


function App() {
  return (
    <div className="App">
      <Router>
      <Index></Index>
      <Route path="/Building_materials_Museum"  component={Building_materials_Museum}></Route>
                        <Route path="/Craftsman_Pavilion" component={Craftsman_Pavilion}></Route>
                        <Route path="/Decoration_Museum" component={Decoration_Museum}></Route>
                        <Route path="/Furniture_Museum" component={Furniture_Museum}></Route>
                        <Route path="/Home_Museum" component={Home_Museum}></Route>
                        <Route path="/Personal_Center_index" component={Personal_Center_index}></Route> 
                        <Route path="/Secondhand_Market" component={Secondhand_Market}></Route>
                        <Route path="/Style_pavilion" component={Style_pavilion}></Route>   
                        </Router>
    </div>
  )
}

export default App
