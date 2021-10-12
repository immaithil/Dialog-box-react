import React, {useState} from "react";
import Graph from "./graph";
import Loading from "./loadingImage";

const Dialogue=(props)=>{
    

    const loadingStart=()=>{
        props.setShowD(!props.showD)
         props.setShowLoad(!props.showLoad)
         setTimeout(()=>{
             props.setShowLoad(false)
         },7000)
    }
    const graphStart=()=>{
        props.setShowD(!props.showD)
     props.setShowGraph(!props.showGraph)
    }

    return(
        <div className='dialog'>
            <img className='dia-image' src='https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg' alt='new Thor'></img>
            <div className='buttons'>
            <button className='batan' onClick={loadingStart}>Load</button>
            <button className='batan' onClick={graphStart}>Graph</button>
           </div>
        </div>
    )
}

export default Dialogue;