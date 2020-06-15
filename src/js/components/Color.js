import React from "react";
import { connect } from "react-redux";
import { updateEditorColor } from "../actions";

class Color extends React.Component {

    constructor(){
        super();
        this.handleColorClick = this.handleColorClick.bind(this);
    }

    handleColorClick(event, color){
        event.preventDefault();
        this.props.dispatch(updateEditorColor(color));
    }

    colorStyle(color){
        return {
            background: color,
        }
    }

    render(){
        return (
            <div 
                className="color" 
                style={this.colorStyle(this.props.color)}
                onMouseDown={(event) => this.handleColorClick(event, this.props.color)}
            ></div>
        )
    };
};

const mapStateToProps = state => {
    return { 
        colorPalette: state.colorPalette,
    }
}


export default connect(mapStateToProps)(Color);