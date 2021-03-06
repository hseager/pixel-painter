import React from 'react';
import Options from "./js/components/Options";
import Canvas from "./js/components/Canvas";
import ColorPalette from "./js/components/ColorPalette";
import Controls from "./js/components/Controls";

function App(){
  return (  
    <div className="App">
      <h2>Pixel Painter</h2>
      <Options />
      <Canvas />
      <ColorPalette />
      <Controls />
    </div>
  );
};

export default (App);