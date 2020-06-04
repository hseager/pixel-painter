import React from "react";
import { connect } from "react-redux";

class Pixel extends React.Component {

    pixelStyle(){
        let pixelStyle = {
            width: this.props.pixelSize + 'px',
            height: this.props.pixelSize + 'px'
        }
        
        if(this.props.hidePixelGrid){
            pixelStyle.borderRight = 0;
            pixelStyle.borderBottom = 0;
        }

        return pixelStyle;
    }

    render(){
        return <div className="pixel" style={this.pixelStyle()}></div>;
    };
}
    
const mapStateToProps = state => {
    return { 
        pixelSize: state.pixelSize,
        hidePixelGrid: state.hidePixelGrid
    }
}

export default connect(mapStateToProps)(Pixel);