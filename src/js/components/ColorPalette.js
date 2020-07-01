import React from "react";
import { connect } from "react-redux";
import Color from "./Color";

class ColorPalette extends React.Component {

    render(){
        if(this.props.colorPalette.length > 0){
            return (
                <div className="color-palette">
                    <h4>Color Palette</h4>
                    <div className="colors">
                        {this.props.colorPalette.map(x => (
                            <Color key={x.id} color={x.color} />
                        ))}
                    </div>
                </div>
            )
        } else {
            return null;
        }
    };
};

const mapStateToProps = state => {
    return { 
        colorPalette: state.colorPalette,
    }
}

export default connect(mapStateToProps)(ColorPalette);