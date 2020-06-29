import React from "react";
import { connect } from "react-redux";

class Controls extends React.Component {
    render(){
        return (
            <div className="controls">
                <button className="control-button">Save</button>
                <button className="control-button">Export</button>
                <button className="control-button">New</button>
            </div>
        )
    };
};

export default Controls;