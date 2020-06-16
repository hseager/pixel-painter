import React from "react";
import { connect } from "react-redux";
import { updatePixel, addPaletteColor } from "../actions"

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

    handlePixelClick(event, id){
        event.preventDefault();
        if(event.buttons === 1){
            this.props.dispatch(updatePixel({ 
                id, 
                color: this.props.editorColor
            }));
            // Below is causing UI Lag on first click and I'm not sure why.
            // Tried using redux-thunk, but no change...
            this.props.dispatch(addPaletteColor(this.props.editorColor));
        } else if(event.buttons === 2){
            this.props.dispatch(updatePixel({ 
                id, 
                color: this.props.defaultPixelColor
            }));
        }
        return false;
    }

    render(){
        return <div 
                className="pixel" 
                style={this.pixelStyle()}
                onMouseDown={(event) => this.handlePixelClick(event, this.props.id)}
                onMouseOver={(event) => this.handlePixelClick(event, this.props.id)}
                onContextMenu={(event) => event.preventDefault()}
    ></div>;
    };
}
    
const mapStateToProps = state => {
    return { 
        pixelSize: state.pixelSize,
        hidePixelGrid: state.hidePixelGrid,
        editorColor: state.editorColor,
        defaultPixelColor: state.defaultPixelColor,
        colorPalette: state.colorPalette
    }
}

export default connect(mapStateToProps)(Pixel);