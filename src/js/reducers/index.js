
import { 
    UPDATE_PIXEL_SIZE,
    UPDATE_COLUMNS,
    UPDATE_ROWS,
    ADD_PIXEL
} from "../constants/action-types";

const initialState = {
    pixelSize: 16,
    columns: 24,
    rows: 24,
    pixels: []
}

function rootReducer(state = initialState, action) {

    if(action.type === UPDATE_PIXEL_SIZE){
        return Object.assign({}, state, {
            pixelSize: action.pixelSize
        });
    }

    if(action.type === UPDATE_COLUMNS){
        return Object.assign({}, state, {
            columns: action.columns
        });
    }

    if(action.type === UPDATE_ROWS){
        return Object.assign({}, state, {
            rows: action.rows
        });
    }

    if(action.type === ADD_PIXEL){
        return Object.assign({}, state, {
            pixels: [
                ...state.pixels,
                {
                    id: action.id,
                    color: action.color,
                }
            ]
        });
    }

    return state;
}

export default rootReducer;