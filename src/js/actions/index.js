
import { 
    UPDATE_PIXEL_SIZE,
    UPDATE_COLUMNS,
    UPDATE_ROWS,
    ADD_PIXEL
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

let nextPixelId = 0;
export function addPixel() {
    return { 
        type: ADD_PIXEL, 
        id: nextPixelId++,
        color: '#fff'
    };
}