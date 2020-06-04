import React from "react";
import { connect } from "react-redux";
import { updateColumns, updateRows, updatePixelSize, addPixel, deletePixel, hidePixelGrid } from "../actions"

class Options extends React.Component {

    constructor(){
        super();
        this.handleColumnChange = this.handleColumnChange.bind(this);
        this.handleRowChange = this.handleRowChange.bind(this);
        this.handlePixelSizeChange = this.handlePixelSizeChange.bind(this);
        this.handleHidePixelGrid = this.handleHidePixelGrid.bind(this);
    }

    handleColumnChange(event){

        let newColumnCount = event.target.value;
        let columnDifference = newColumnCount - this.props.columns;

        this.props.dispatch(updateColumns(newColumnCount));

        if(columnDifference > 0){
            for(let i = 0; i < columnDifference * this.props.rows; i++){
                this.props.dispatch(addPixel());
            }
        } else if(columnDifference < 0){
            for(let i = 0; i > columnDifference * this.props.rows; i--){
                this.props.dispatch(deletePixel());
            }
        }

    }

    handleRowChange(event){

        let newRowCount = event.target.value;
        let rowDifference = newRowCount - this.props.rows;

        this.props.dispatch(updateRows(newRowCount));

        if(rowDifference > 0){
            for(let i = 0; i < rowDifference * this.props.columns; i++){
                this.props.dispatch(addPixel());
            }
        } else if(rowDifference < 0){
            for(let i = 0; i > rowDifference * this.props.columns; i--){
                this.props.dispatch(deletePixel());
            }
        }
        
    }

    handlePixelSizeChange(event){
        this.props.dispatch(updatePixelSize(event.target.value));
    }

    handleHidePixelGrid(event){
        this.props.dispatch(hidePixelGrid(event.target.checked));
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
                        max="50"
                        min="2"
                    />
                    x
                    <input 
                        type="number"
                        value={this.props.rows}
                        onChange={this.handleRowChange}
                        max="50"
                        min="2"
                    />
                </div>
                <div className="toolbar-option">
                    <label htmlFor="hide-pixel-grid">Hide pixel grid:</label>
                    <input 
                        id="hide-pixel-grid"
                        type="checkbox"
                        checked={this.props.hidePixelGrid}
                        onChange={this.handleHidePixelGrid}
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
        pixels: state.pixels,
        hidePixelGrid: state.hidePixelGrid
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);