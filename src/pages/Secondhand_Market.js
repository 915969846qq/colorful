import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sec from '../component/Secondhand_market/Secondhand_Market_component'
import Secdetail from '../component/Secondhand_market/secprodmarket-message'
import Secpublishchenming from '../component/Secondhand_market/secpublish'
class Secondhand_Market extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Router>
            
            <Route
              path="/Secondhand_Market/Secdetail/:id"
              component={Secdetail}
            ></Route>
           <Route
              path="/Secondhand_Market/Secpublish"
              component={Secpublishchenming}
            ></Route>
            <Route
              path="/Secondhand_Market" exact
              component={Sec}
            ></Route>
            </Router>
        </div> );
    }
}
 
export default Secondhand_Market;