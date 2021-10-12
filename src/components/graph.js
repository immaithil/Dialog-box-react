import React from "react";
import rd3 from 'react-d3-library'

const Graph= ()=>{
    const BarChart= rd3.BarChart;
    return(
         <div>
             <BarChart />
             <img className='graph' src="https://storage.googleapis.com/fplsblog/1/2020/04/line-graph.png" alt='graph'></img>
         </div>
    )
}
export  default Graph;