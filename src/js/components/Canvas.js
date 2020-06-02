
import React from "react";
import { connect } from "react-redux";
import Pixel from "./Pixel";
import { addPixel } from "../actions"

class Canvas extends React.Component {

    constructor(){
        super();

        this.state = { 
            borderSize: 2,
        }
    }

    componentDidMount() {
        for(let i = 0; i < this.props.columns * this.props.rows; i++){
            this.props.dispatch(addPixel());
        }
    }

    canvasStyle(){
        return {
            maxWidth: (this.props.pixelSize * this.props.columns + this.state.borderSize) + 'px',
        }
    };

    render(){
        return (
            <div className="pixels" style={this.canvasStyle()}>
                {this.props.pixels.map(pixel => (
                    <Pixel key={pixel.id} />
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
        pixels: state.pixels
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);