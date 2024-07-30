import React, { useEffect, useState } from 'react'
import './LineChart.css'
import Chart from 'react-google-charts';
const LineChart = ({earlydata}) => {
    const[data,setdata]=useState([["Date","Prices"]]);


    useEffect(()=>{
   let datacopy=[["Date","Prices"]];
   if(earlydata.prices){
    earlydata.prices.map((item)=>{
        datacopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
    })
    setdata(datacopy)
   }
    },[earlydata])
    
  return (
 <Chart
 chartType='LineChart'
 data={data}
 height="100%"
 legendToggle/>

  )
}

export default LineChart