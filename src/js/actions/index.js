
import { 
    UPDATE_PIXEL_SIZE,
    UPDATE_COLUMNS,
    UPDATE_ROWS
} from "../constants/action-types";

export function updatePixelSize(payload) {
    return { type: UPDATE_PIXEL_SIZE, payload };
}

export function updateColumns(payload) {
    return { type: UPDATE_COLUMNS, payload };
}

export function updateRows(payload) {
    return { type: UPDATE_ROWS, payload };
}