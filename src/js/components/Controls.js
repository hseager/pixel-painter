import React from "react";
import { connect } from "react-redux";
import { 
    clearCanvas
} from "../actions"

class Controls extends React.Component {

    constructor(){
        super();
        this.handleExportClick = this.handleExportClick.bind(this);
        this.handleNewClick = this.handleNewClick.bind(this);
    }

    handleExportClick(event){
        console.log(123);
    }

    handleNewClick(){
        this.props.dispatch(clearCanvas());
    }

    render(){
        return (
            <div className="controls">
                <button className="control-button" onMouseDown={(event) => this.handleExportClick()}>Export</button>
                <button className="control-button" onMouseDown={(event) => this.handleNewClick()}>New</button>
            </div>
        )
    };
};

export default connect()(Controls);