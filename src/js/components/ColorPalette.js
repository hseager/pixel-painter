import React from "react";
import { connect } from "react-redux";

class ColorPalette extends React.Component {

    render(){
        return (
            <div className="color-palette" >
                <h4>Color Palette</h4>
                <ul>
                    {this.props.colorPalette.map(color => (
                        <li id={color.id}>{color.value}</li>
                    ))}
                </ul>
            </div>
        )
    };
};

const mapStateToProps = state => {
    return { 
        colorPalette: state.colorPalette,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorPalette);