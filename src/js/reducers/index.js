
import { ADD_COLOR } from "../constants/action-types";

const initialState = {
    colors: []
}

function rootReducer(state = initialState, action) {
    if(action.type === ADD_COLOR){
        return Object.assign({}, state, {
            colors: state.colors.concat(action.paylod)
        });
    }
    return state;
}

export default rootReducer;