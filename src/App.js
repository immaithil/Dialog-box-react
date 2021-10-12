import React, { useState } from "react";
import "./App.css";
import Dialogue from "./components/Dialogue";
import Loading from "./components/loadingImage";
import Graph from "./components/graph";

function App() {
  const [showD, setShowD] = useState(false);
  const showDialog = () => {
     setShowD(!showD);
     setShowLoad(false);
     setShowGraph(false);
  };
  const [showLoad, setShowLoad] = useState(false);
  
  const [showGraph, setShowGraph] = useState(false);
  
  
  return (
    <div>
    
      <img className='main-image'
        src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg"
        alt="thor"
      ></img>
      <button className='batan' id='click' onClick={showDialog}>Click Me</button>
      {showD && (
        <Dialogue
          showD={showD}
          setShowD={setShowD}
          showGraph={showGraph}
          setShowGraph={setShowGraph}
          showLoad={showLoad}
          setShowLoad={setShowLoad}
        />
      )}
      {showGraph && <Graph />}
      {showLoad && <Loading />}
    </div>
  );
}

export default App;
