import React from "react";

class Controls extends React.Component {

    constructor(){
        super();
        this.handleExportClick = this.handleExportClick.bind(this);
    }

    handleExportClick(event){
        console.log(123);
    }

    render(){
        return (
            <div className="controls">
                <button className="control-button" onMouseDown={(event) => this.handleExportClick()}>Export</button>
                <button className="control-button">New</button>
            </div>
        )
    };
};

export default Controls;