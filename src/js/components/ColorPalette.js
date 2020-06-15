import React from "react";
import { connect } from "react-redux";
import Color from "./Color";

class ColorPalette extends React.Component {

    render(){
        return (
            <div className="color-palette">
                <h4>Color Palette</h4>
                <div className="colors">
                    {this.props.colorPalette.map(color => (
                        <Color key={color.id} color={color.value} />
                    ))}
                </div>
            </div>
        )
    };
};

const mapStateToProps = state => {
    return { 
        colorPalette: state.colorPalette,
    }
}

export default connect(mapStateToProps)(ColorPalette);