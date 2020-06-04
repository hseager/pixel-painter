
import { 
    UPDATE_PIXEL_SIZE,
    UPDATE_COLUMNS,
    UPDATE_ROWS,
    ADD_PIXEL,
    DELETE_PIXEL,
    UPDATE_PIXEL,
    HIDE_PIXEL_GRID,
    UPDATE_EDITOR_COLOR
} from "../constants/action-types";

const initialState = {
    pixelSize: 16,
    columns: 24,
    rows: 24,
    pixels: [],
    hidePixelGrid: false,
    editorColor: '#11b6df',
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

    if(action.type === DELETE_PIXEL){
        return Object.assign({}, state, {
            pixels: state.pixels.slice(0, -1),
        });
    }

    if(action.type === UPDATE_PIXEL){
        return Object.assign({}, state, {
            pixels: state.pixels.map(pixel => 
                pixel.id === action.id ? { ...pixel, color: action.color } : pixel
            ),
        });
    }    

    if(action.type === HIDE_PIXEL_GRID){
        return Object.assign({}, state, {
            hidePixelGrid: action.hide,
        });
    }

    if(action.type === UPDATE_EDITOR_COLOR){
        return Object.assign({}, state, {
            editorColor: action.color,
        });
    }

    return state;
}

export default rootReducer;