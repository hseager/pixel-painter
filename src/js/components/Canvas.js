
import React from "react";
import { connect } from "react-redux";
import Pixel from "./Pixel";
import { addPixel } from "../actions";

class Canvas extends React.Component {

    componentDidMount() {
        for(let i = 0; i < this.props.columns * this.props.rows; i++){
            this.props.dispatch(addPixel({ color: this.props.defaultPixelColor }));
        }
    }

    canvasStyle(){
        let canvasWidth = this.props.pixelSize * this.props.columns + this.props.canvasBorderSize;
        return {
            maxWidth: canvasWidth + 'px',
        }
    };

    render(){
        return (
            <div 
                className="pixels" 
                style={this.canvasStyle()}
            >
                {this.props.pixels.map(pixel => (
                    <Pixel key={pixel.id} id={pixel.id} color={pixel.color} />
                ))}
            </div>
        )
    };
};

const mapStateToProps = state => {
    return { 
        rows: state.rows,
        columns: state.columns,
        pixelSize: state.pixelSize,
        pixels: state.pixels,
        defaultPixelColor: state.defaultPixelColor,
        canvasBorderSize: state.canvasBorderSize
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);