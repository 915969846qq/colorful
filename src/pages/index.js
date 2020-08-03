import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Building_materials_Museum from './Building_materials_Museum'
import Craftsman_Pavilion from './Craftsman_Pavilion'
import Decoration_Museum from './Decoration_Museum'
import Furniture_Museum from './Furniture_Museum'
import Home_Museum from './Home_Museum'
import Secondhand_Market from './Secondhand_Market'
import Style_pavilion from './Style_pavilion'
import Personal_Center_index from './Personal_Center_index'
import Personal_My_reservation from "../component/Person_center/Personal_My_reservation"

import MyCenter_index from '../component/Person_center/MyCenter_index'
import  Craftsman_Pavilion_list from "../component/Craftsmans_Hall/Craftsman_Pavilion_list"
import  Craftsman_details from "../component/Craftsmans_Hall/Craftsman_details"
import  Furniture_Museum_details from "../component/Furniture_house/Furniture_Museum_details"
import Decoration_Write_diary from '../component//Person_center/Decoration_Write_diary'

// 记录日记
// import Decoration_Diary_list from '../component/Decoration_pipe/Decoration_Diary_list'
// import Decoration_My_diary from '../component/Person_center/Decoration_My_diary'



//首页
export default class index extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route
              path="/Building_materials_Museum"
              component={Building_materials_Museum}
            ></Route>
            <Route
              path="/Craftsman_Pavilion"
              component={Craftsman_Pavilion}
            ></Route>
            <Route
              path="/Decoration_Museum"
              component={Decoration_Museum}
            ></Route>
            <Route
              path="/Furniture_Museum"
              component={Furniture_Museum}
            ></Route>
            <Route path="/Home_Museum" component={Home_Museum}></Route>
            <Route
              path="/Personal_Center_index"
              component={Personal_Center_index}
            ></Route>
            <Route
              path="/Secondhand_Market"
              component={Secondhand_Market}
            ></Route>
            <Route path="/Style_pavilion" component={Style_pavilion}></Route>
            {/* 日记 */}
            {/* <Route
              path="/Decoration_Diary_list"
              component={Decoration_Diary_list}
            ></Route>
            <Route
              path="/Decoration_My_diary"
              component={Decoration_My_diary}
            ></Route> */}
            <Route
              path="/Craftsman_Pavilion_list"
              component={Craftsman_Pavilion_list}
            ></Route>
            <Route
              path="/Craftsman_details"
              component={Craftsman_details}
            ></Route>
            <Route
              path="/Furniture_Museum_details"
              component={Furniture_Museum_details}
            ></Route>
            <Route
              path="/Personal_My_reservation"
              component={Personal_My_reservation}
            ></Route>
            
          </div>
        </Router>
      </div>
    )
  }
}
