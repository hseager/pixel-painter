import React from "react";
import { connect } from "react-redux";

class Pixel extends React.Component {

    pixelStyle(){
        return {
            width: this.props.pixelSize + 'px',
            height: this.props.pixelSize + 'px'
        }
    }

    render(){
        return <div className="pixel" style={this.pixelStyle()}></div>;
    };
}
    
const mapStateToProps = state => {
    return { 
        pixelSize: state.pixelSize
    }
}

export default connect(mapStateToProps)(Pixel);