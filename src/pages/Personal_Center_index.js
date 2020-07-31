import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,

} from "react-router-dom"
import {Personal_My_order,Personal_Center_index} from '../component/Person_center'
// 个人中心
export default class Personal_Center_index extends Component {
  render() {
    return (
      <div>
        {/* 个人中心 */}
        <br />
        <hr />
        <h1>个人中心</h1>
        <h2>wodegowuche</h2>
        <Router>
          <div>
            <Route path="/Personal_My_order" component={Personal_My_order}></Route>
            <Route path="/Personal_Decoration_order" component={Personal_Decoration_order}></Route>
            <Route path="/Personal_Center_index" component={Personal_Center_index}></Route>
            <Route path="/Personal_My_reservation" component={Personal_My_reservation}></Route>
            <Route path="/Personal_Collection_goods" component={Personal_Collection_goods}></Route>
            <Route path="/Personal_Decoration_order" component={Personal_Decoration_order}></Route>
            <Route path="/Personal_A_collection_shops" component={Personal_A_collection_shops}></Route>
            <Route path="/Personal_Collection_activities" component={Personal_Collection_activities}></Route>
            <Route path="/Personal_My_shopping_cart" component={Personal_My_shopping_cart}></Route>
            <Route path="/Personal_customer_service" component={Personal_customer_service}></Route>
            <Route path="/Personal_Review_sheet" component={Personal_Review_sheet}></Route>
            <Route path="/Personal_coupon" component={Personal_coupon}></Route>
            <Route path="/Personal_My_order" component={Personal_My_order}></Route>
            <Route path="/Personal_Decoration_order" component={Personal_Decoration_order}></Route>
            <Route path="/Personal_Center_index" component={Personal_Center_index}></Route>
            <Route path="/Personal_My_reservation" component={Personal_My_reservation}></Route>
          </div>
        </Router>
      </div>
    )
  }
}
