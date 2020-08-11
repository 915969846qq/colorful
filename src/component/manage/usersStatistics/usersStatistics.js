import React, { Component } from 'react'
import UsersStatisticsuser from './usersStatistics_user'
import UsersStatisticsboss from './usersStatistics_boss'
import { Tabs } from 'antd';

export default class usersStatistics extends Component {
 
  

  render() {
    const { TabPane } = Tabs;

    function callback(key) {
      console.log(key);
    }
    
  
     
    return (
      <div >
       <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="用户统计" key="1">
        <UsersStatisticsuser/>
        </TabPane>
        <TabPane tab="商户统计" key="2">
        <UsersStatisticsboss/>
        </TabPane>
      
      </Tabs>
    
      </div>
    )
  }
}




