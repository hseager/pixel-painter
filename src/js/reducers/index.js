
import { 
    UPDATE_PIXEL_SIZE,
    UPDATE_COLUMNS,
    UPDATE_ROWS
} from "../constants/action-types";

const initialState = {
    pixelSize: 16,
    columns: 24,
    rows: 24
}

function rootReducer(state = initialState, action) {

    if(action.type === UPDATE_PIXEL_SIZE){
        return Object.assign({}, state, {
            pixelSize: action.payload
        });
    }

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