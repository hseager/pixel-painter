import React from "react";
import { connect } from "react-redux";
import { 
    updateColumns,
    updateRows, 
    updatePixelSize, 
    addPixel, 
    deletePixel, 
    hidePixelGrid,
    updateEditorColor
} from "../actions"

class Options extends React.Component {

    constructor(){
        super();
        this.handleColumnChange = this.handleColumnChange.bind(this);
        this.handleRowChange = this.handleRowChange.bind(this);
        this.handlePixelSizeChange = this.handlePixelSizeChange.bind(this);
        this.handleHidePixelGrid = this.handleHidePixelGrid.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    handleColumnChange(event){

        let newColumnCount = event.target.value;
        let columnDifference = newColumnCount - this.props.columns;

        this.props.dispatch(updateColumns(newColumnCount));

        if(columnDifference > 0){
            for(let i = 1; i <= columnDifference * this.props.rows; i++){
                this.props.dispatch(addPixel({ 
                    index: i * this.props.columns + i, 
                    color: this.props.defaultPixelColor
                }));
            }
        } else if(columnDifference < 0){
            for(let i = 0; i < -columnDifference * this.props.rows; i++){
                this.props.dispatch(deletePixel({ 
                    index: i * this.props.columns - i
                }));
            }
        }

    }

    handleRowChange(event){

        let newRowCount = event.target.value;
        let rowDifference = newRowCount - this.props.rows;

        this.props.dispatch(updateRows(newRowCount));

        if(rowDifference > 0){
            for(let i = 0; i < rowDifference * this.props.columns; i++){
                this.props.dispatch(addPixel({ color: this.props.defaultPixelColor }));
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

    handleColorChange(event){
        this.props.dispatch(updateEditorColor(event.target.value));
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
                        onKeyDown={(event) => event.preventDefault()}
                        max="50"
                        min="2"
                    />
                    x
                    <input 
                        type="number"
                        value={this.props.rows}
                        onChange={this.handleRowChange}
                        onKeyDown={(event) => event.preventDefault()}
                        max="50"
                        min="2"
                    />
                </div>
                <div className="toolbar-option">
                    <label htmlFor="color-picker">Color:</label>
                    <input 
                        id="color-picker"
                        type="color"
                        value={this.props.editorColor}
                        onChange={this.handleColorChange}
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
        hidePixelGrid: state.hidePixelGrid,
        editorColor: state.editorColor,
        defaultPixelColor: state.defaultPixelColor
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);