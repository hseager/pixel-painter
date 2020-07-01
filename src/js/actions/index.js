
import { v4 as uuid } from 'uuid';

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
    CLEAR_CANVAS
} from "../constants/action-types";

export function updatePixelSize(pixelSize) {
    return { 
        type: UPDATE_PIXEL_SIZE, 
        pixelSize
    };
}

export function updateColumns(columns) {
    return { 
        type: UPDATE_COLUMNS, 
        columns 
    };
}

export function updateRows(rows) {
    return { 
        type: UPDATE_ROWS,
        rows
    };
}

export function addPixel(pixel) {
    return { 
        type: ADD_PIXEL, 
        id: uuid(),
        color: pixel.color,
        index: pixel.index
    };
}

export function deletePixel(pixel) {
    return { 
        type: DELETE_PIXEL,
        index: pixel && pixel.index ? pixel.index : null
    };
}

export function updatePixel(pixel){
    return {
        type: UPDATE_PIXEL,
        id: pixel.id,
        color: pixel.color
    }
}

export function hidePixelGrid(hide){
    return {
        type: HIDE_PIXEL_GRID,
        hide
    }
}

export function updateEditorColor(color){
    return {
        type: UPDATE_EDITOR_COLOR,
        color
    }
}

export function addPaletteColor(color){
    return { 
        type: ADD_PALETTE_COLOR, 
        id: uuid(),
        value: color
    };
}

export function clearCanvas(){
    return {
        type: CLEAR_CANVAS
    }
}