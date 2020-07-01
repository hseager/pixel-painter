
import { 
    UPDATE_PIXEL_SIZE,
    UPDATE_COLUMNS,
    UPDATE_ROWS,
    ADD_PIXEL,
    DELETE_PIXEL,
    UPDATE_PIXEL,
    HIDE_PIXEL_GRID,
    UPDATE_EDITOR_COLOR,
    ADD_PALETTE_COLOR,
    REMOVE_PALETTE_COLOR,
    CLEAR_CANVAS
} from "../constants/action-types";

const initialState = {
    pixelSize: 16,
    columns: 24,
    rows: 24,
    pixels: [],
    hidePixelGrid: false,
    editorColor: '#11b6df',
    defaultPixelColor: 'transparent',
    colorPalette: [],
    canvasBorderSize: 2,
}

function rootReducer(state = initialState, action) {

    if(action.type === UPDATE_PIXEL_SIZE){
        return {
            ...state,
            pixelSize: action.pixelSize
        }
    }

    if(action.type === UPDATE_COLUMNS){
        return {
            ...state,
            columns: action.columns
        }
    }

    if(action.type === UPDATE_ROWS){
        return {
            ...state,
            rows: action.rows
        }
    }

    if(action.type === ADD_PIXEL){
        if(action.index != null){
            // Add pixel at certain array index
            return {
                ...state,
                pixels: [
                    ...state.pixels.slice(0, action.index),
                    {
                        id: action.id,
                        color: action.color,
                    },
                    ...state.pixels.slice(action.index),
                ],
            }
        } else {
            // Add pixel to the end of array
            return {
                ...state,
                pixels: [
                    ...state.pixels,
                    {
                        id: action.id,
                        color: action.color,
                    }
                ]
            }
        }
    }

    if(action.type === DELETE_PIXEL){
        if(action.index != null){
            // Delete pixel at certain array index
            return {
                ...state,
                pixels: [
                    ...state.pixels.slice(0, action.index),
                    ...state.pixels.slice(action.index + 1)
                ],
            }
        } else {
            // Delete pixel from end of array
            return {
                ...state,
                pixels: state.pixels.slice(0, -1),
            }
        }
    }

    if(action.type === UPDATE_PIXEL){
        return {
            ...state,
            pixels: state.pixels.map(pixel => 
                pixel.id === action.id ? { ...pixel, color: action.color } : pixel
            ),
        };
    }

    if(action.type === HIDE_PIXEL_GRID){
        return {
            ...state,
            hidePixelGrid: action.hide,
        }
    }

    if(action.type === UPDATE_EDITOR_COLOR){
        return {
            ...state,
            editorColor: action.color,
        }
    }

    if(action.type === ADD_PALETTE_COLOR){
        let colorInPalette = state.colorPalette.some(x => x.color === action.color);
        if(!colorInPalette){
            return {
                ...state,
                colorPalette: [
                    ...state.colorPalette,
                    {
                        id: action.id,
                        color: action.color,
                    }
                ]
            }
        }
    }

    if(action.type === REMOVE_PALETTE_COLOR){
        let colouredPixels = state.pixels.filter(x => x.color === action.color);
        if(colouredPixels.length === 0){
            return {
                ...state,
                colorPalette: state.colorPalette.filter(x => x.color !== action.color)
            }
        }
    }    

    if(action.type === CLEAR_CANVAS){
        return {
            ...state,
            pixels: state.pixels.map(x => {
                let newPixel = x;
                newPixel.color = state.defaultPixelColor;
                return newPixel;
            }),
            colorPalette: [],
        }
    }

    return state;
}

export default rootReducer;