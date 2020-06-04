import React from "react";
import { connect } from "react-redux";
import { updatePixel } from "../actions"

class Pixel extends React.Component {

    constructor(){
        super();
        this.handlePixelClick = this.handlePixelClick.bind(this);
    }

    pixelStyle(){
        let pixelStyle = {
            width: this.props.pixelSize + 'px',
            height: this.props.pixelSize + 'px',
            background: this.props.color,
        }
        
        if(this.props.hidePixelGrid){
            pixelStyle.borderRight = 0;
            pixelStyle.borderBottom = 0;
        }

        return pixelStyle;
    }

    handlePixelClick(id){
        this.props.dispatch(updatePixel({ 
            id, 
            color: this.props.editorColor
        }));
    }

    render(){
        return <div 
                className="pixel" 
                style={this.pixelStyle()}
                onClick={() => this.handlePixelClick(this.props.id)}
    ></div>;
    };
}
    
const mapStateToProps = state => {
    return { 
        pixelSize: state.pixelSize,
        hidePixelGrid: state.hidePixelGrid,
        editorColor: state.editorColor
    }
}

export default connect(mapStateToProps)(Pixel);