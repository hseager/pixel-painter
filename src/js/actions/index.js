
import { ADD_COLOR } from "../constants/action-types"

export function addColor(payload) {
    return { type: ADD_COLOR, payload };
}