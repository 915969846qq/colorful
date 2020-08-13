import React, { Component } from 'react'

import {
  G2, Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util,
   
   
    Coord,
  Chart,
  Interval,
  Tooltip,
  Axis,
  Coordinate,
  Interaction
} from 'bizcharts';
import DataSet from "@antv/data-set";
import { DataMarker } from 'bizcharts/lib/components/Annotation';
import Axios from '../../../util/chenmingaxios'


export default class usersStatisticsuser extends Component {
 constructor(){
   super()
   this.state={
     ageper:[  ],
      addperson:[  ],
    regionper:[]
 }
   }
  
// =================================请求数据=========================================
getuserstatics=(e)=>{
   
          Axios.post(`/banJu/manager/userSortShow`,e).then((res)=>{   
                   console.log(res)         
                return res.data;       
            }).then((data)=>{

    let m=0;
    let ageper=[];
    let regionper=[];
    Object.keys(data.age).forEach(function(key){
      m+=data.age[key]
     })
      Object.keys(data.age).forEach(function(key){  
   ageper.push({item:key,count:data.age[key],percent:(data.age[key]/m)})
      })
     
 Object.keys(data.address).forEach(function(key){  
        regionper.push({country:key,population:data.address[key]})
                      })
                         
     console.log(data)
    let addperson=[
    { 名字: '本周', 月份: '本周变化', 人数: data.add.本周 },
    { 名字: '本月', 月份: '本月变化', 人数: data.add.本月 },
    { 名字: '昨日', 月份: '本日变化', 人数: data.add.昨日 },
    { 名字: '今日', 月份: '本日变化', 人数: data.add.今日},
    { 名字: '上周', 月份: '本周变化', 人数: data.add.上周 },
    { 名字: '上月', 月份: '本月变化', 人数: data.add.上月 }
    ]
    this.setState({
      addperson:addperson,
      ageper:ageper,
      regionper:regionper
    })
              
            }).catch((e) => {
                
            });
      }

// =======================================页面初始化========================================
componentDidMount(){
  this.getuserstatics() 
}







   render() {
    let that=this


    // ==================================================用户年龄分段图==================================
    function Labelline() {
      console.log(that)
  const data = that.state.ageper

  const cols = {
    percent: {
      formatter: val => {
       
        val = val* 100 + '%';
        return val.split(".")[0]+'%';
      },
    },
  };
  return (
    <Chart height={400} data={data} scale={cols} autoFit>
      <Coordinate type="theta" radius={0.75} />
      <Tooltip showTitle={false} />
      <Axis visible={false} />
      <Interval
        position="percent"
        adjust="stack"
        color="item"
        style={{
          lineWidth: 1,
          stroke: '#fff',
   
        }}
        label={['count', {
          content: (data) => {
            return `${data.item}`;
          },
        }]}
      />
      <Interaction type='element-single-selected' />
    </Chart>
  );
}




// ====================================用户地区图======================================
function Basic (){
 
    const data = that.state.regionper
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.source(data).transform({
      type: "sort",

      callback(a, b) {
        // 排序依据，和原生js的排序callback一致
        return a.population - b.population > 0;
      }
    });
       return (
        <Chart 
          data={dv} 
          height={200} 
          width={1000}
          padding={[20,80,40,40]}
          autoFit
        >
          <Coordinate transpose />
          <Axis
            name="county"
          />
          <Axis name="county" visible={false} />
          <Tooltip />
          <Interval 
            position="country*population"
            label="人数"
          />
        </Chart>
    );
}






 // =====================================用户增加数================================
 
    function Addnum() {
      const data = that.state.addperson
      
      return (
        <Chart height={360} width={400} padding="auto" data={data} autoFit>
          <Interval
            adjust={[
             {
                type: 'dodge',
                marginRatio: 0,
              },
            ]}
            color="名字"
            position="月份*人数"
          />
          <Tooltip shared />
        </Chart>
      );
    }
    


// =============================界面渲染==========================================

    return (
      <div >
        <h1 style={{fontSize:"24px"}}> 用户统计</h1>
       
       <div style={{display:"flex",flexWrap:"wrap",paddingLeft:150}} >
       <div style={{width:500,marginRight:200}}>
          <h2  style={{textAlign:"center",fontSize:20}}>用户年龄统计</h2>
          <Labelline />
          </div>
          <div >
               <h2  style={{textAlign:"center",marginBottom:50,fontSize:20}}>用户人数统计</h2>
               <Addnum  />
        </div>
          <div style={{marginTop:"100px"}}>
          <h2 style={{textAlign:"center",fontSize:20}}>用户地区统计</h2>
        <Basic/>
        </div>
       
       </div>
      </div>
    )
  }
}
