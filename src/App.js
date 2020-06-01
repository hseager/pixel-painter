import React from 'react';
import './App.css';
import Options from "./js/components/Options";
import Canvas from "./js/components/Canvas";

function App(){
  return (  
    <div className="App">
      <h2>Pixel Painter</h2>
      <Options />
      <Canvas />
    </div>
  );
};

export default (App);