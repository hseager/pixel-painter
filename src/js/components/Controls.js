import React from "react";
import { connect } from "react-redux";
import { 
    clearCanvas
} from "../actions"

class Controls extends React.Component {

    constructor(){
        super();
        this.handleNewClick = this.handleNewClick.bind(this);
    }

    handleNewClick(){
        this.props.dispatch(clearCanvas());
    }

    render(){
        return (
            <div className="controls">
                <button className="control-button" onMouseDown={(event) => this.handleNewClick()}>New</button>
            </div>
        )
    };
};

export default connect()(Controls);