import React from "react";
import { connect } from "react-redux";

function Options({ rows, columns }){
    return (  
      <div className="Options">
        <h5>Columns: {columns}</h5>
        <h5>Rows: {rows}</h5>
      </div>
    );
  };
  
  const mapStateToProps = state => {
    return { rows: state.rows, columns: state.columns }
  }
  
  export default connect(mapStateToProps)(Options);