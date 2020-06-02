import React from "react";
import { connect } from "react-redux";
import { updateColumns, updateRows, updatePixelSize, addPixel } from "../actions"

class Options extends React.Component {

    constructor(){
        super();
        this.handleColumnChange = this.handleColumnChange.bind(this);
        this.handleRowChange = this.handleRowChange.bind(this);
        this.handlePixelSizeChange = this.handlePixelSizeChange.bind(this);
    }

    handleColumnChange(event){
        this.props.dispatch(updateColumns(event.target.value));
    }

    handleRowChange(event){

        let newRowCount = event.target.value;
        this.props.dispatch(updateRows(newRowCount));
        
        // dont work, need input value

        if(newRowCount > this.props.rows){
            for(let i = 0; i < this.props.columns; i++){
                this.props.dispatch(addPixel());
            }
        }
        
    }

    handlePixelSizeChange(event){
        this.props.dispatch(updatePixelSize(event.target.value));
    }

    render(){
        return (
            <div className="toolbar">
                <div className="toolbar-option">
                    <label>Canvas:</label>
                    <input 
                        type="number"
                        value={this.props.columns}
                        onChange={this.handleColumnChange}
                        max="64"
                    />
                    x
                    <input 
                        type="number"
                        value={this.props.rows}
                        onChange={this.handleRowChange}
                        max="64"
                    />
                </div>
                <div className="toolbar-option">
                    <label>Zoom:</label>
                    <input 
                        type="range"
                        value={this.props.pixelSize}
                        onChange={this.handlePixelSizeChange}
                        min="2"
                        max="50"
                    />
                </div>
            </div>
        );
    }
};
  
const mapStateToProps = state => {
    return { 
        pixelSize: state.pixelSize,
        rows: state.rows,
        columns: state.columns,
        pixels: state.pixels
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);