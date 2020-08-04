import React, { Component } from 'react';
import './css/secpublish.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Secpublish1 from './secpublish_first'
import Secpublish2 from './secpublish_second'
import Secpublish3 from './secpublish_third'

class Secpublish extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            
        
            <Router>
                    <Route path="/Secondhand_Market/Secpublish/" exact component={Secpublish1}></Route>
                    <Route path="/Secondhand_Market/Secpublish/fillform/:cid"  component={Secpublish2}></Route>
                    <Route path="/Secondhand_Market/Secpublish/success"  component={Secpublish3}></Route>
                </Router>
         

        </div> 
        );
    }
}
 
export default Secpublish;