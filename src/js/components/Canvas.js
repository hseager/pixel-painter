
import React from "react";
import { connect } from "react-redux";
import Pixel from "./Pixel";


class Canvas extends React.Component {
    constructor(){
        super();

        this.state = { borderSize: 2 }
    }

    createPixels(){
        let pixels = [];
        for(let i = 1; i <= this.props.columns * this.props.rows; i++){
            pixels.push(<Pixel key={i}/>);
        }
        return pixels;
    }

    canvasStyle(){
        return {
            maxWidth: (this.props.pixelSize * this.props.columns + this.state.borderSize) + 'px',
        }
    };

    render(){
        return (
            <div className="pixels" style={this.canvasStyle()}>
                {this.createPixels()}
            </div>
        )
    };
};

const mapStateToProps = state => {
    return { 
        rows: state.rows,
        columns: state.columns,
        pixelSize: state.pixelSize
    }
}

export default connect(mapStateToProps)(Canvas);