
import React from "react";
import { connect } from "react-redux";
import Pixel from "./Pixel";

const mapStateToProps = state => {
    return { colors: state.colors }
}

var pixels = [];
for(let i = 1; i <= 8 * 8; i++){
    pixels.push(<Pixel key={i}/>);
}

const ConnectedCanvas = ({ colors }) => (
    <div className="pixels">
        {pixels}
    </div>
);

const Canvas = connect(mapStateToProps)(ConnectedCanvas);

export default Canvas;