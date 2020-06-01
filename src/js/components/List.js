
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { colors: state.colors }
}

const ConnectedList = ({ colors }) => (
    <ul>
        {console.log(colors)}
        {colors.map(el => (
            <li key={el.id}>{el.title}</li>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;