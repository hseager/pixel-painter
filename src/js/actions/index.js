
import { UPDATE_COLUMNS, UPDATE_ROWS } from "../constants/action-types"

export function updateColumns(payload) {
    return { type: UPDATE_COLUMNS, payload };
}

export function updateRows(payload) {
    return { type: UPDATE_ROWS, payload };
}