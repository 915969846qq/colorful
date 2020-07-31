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
import Decoration_My_diary from '../component/Person_center/Decoration_My_diary'

//首页
export default class index extends Component {
<<<<<<< HEAD
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route path="/Building_materials_Museum" component={Building_materials_Museum}></Route>
                        <Route path="/Craftsman_Pavilion" component={Craftsman_Pavilion}></Route>
                        <Route path="/Decoration_Museum" component={Decoration_Museum}></Route>
                        <Route path="/Furniture_Museum" component={Furniture_Museum}></Route>
                        <Route path="/Home_Museum" component={Home_Museum}></Route>
                        <Route path="/Personal_Center_index" component={Personal_Center_index}></Route>
                        <Route path="/Secondhand_Market" component={Secondhand_Market}></Route>
                        <Route path="/Style_pavilion" component={Style_pavilion}></Route>
                    </div>
                </Router>       
            </div>
        )
    }
=======
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
            <Route
              path="/Decoration_My_diary"
              component={Decoration_My_diary}
            ></Route>
          </div>
        </Router>
      </div>
    )
  }
>>>>>>> b0259712ce6c92080f0667babec240aa7b0faf12
}
