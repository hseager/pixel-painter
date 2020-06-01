
import { UPDATE_COLUMNS, UPDATE_ROWS } from "../constants/action-types";

const initialState = {
    columns: 8,
    rows: 8
}

function rootReducer(state = initialState, action) {
    if(action.type === UPDATE_COLUMNS){
        return Object.assign({}, state, {
            columns: action.payload
        });
    }

    if(action.type === UPDATE_ROWS){
        return Object.assign({}, state, {
            rows: action.payload
        });
    }

    return state;
}

export default rootReducer;