import React from "react";
import { connect } from "react-redux";

class Options extends React.Component {

    constructor(){
        super();
        this.handleColumnChange = this.handleColumnChange.bind(this);
        this.handleRowChange = this.handleRowChange.bind(this);
        this.handlePixelSizeChange = this.handlePixelSizeChange.bind(this);
    }

    handleColumnChange(event){
        this.props.dispatch({
            type: 'UPDATE_COLUMNS',
            payload: event.target.value
        });
    }

    handleRowChange(event){
        this.props.dispatch({
            type: 'UPDATE_ROWS',
            payload: event.target.value
        });
    }

    handlePixelSizeChange(event){
        this.props.dispatch({
            type: 'UPDATE_PIXEL_SIZE',
            payload: event.target.value
        });
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
                    />
                    x
                    <input 
                        type="number"
                        value={this.props.rows}
                        onChange={this.handleRowChange}
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
        columns: state.columns
    }
  }

  const mapDispatchToProps = dispatch => {
      return {
          dispatch
      }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Options);