
import { createStore } from "redux";
import rootReducer from "../reducers/index";
import { saveState, loadState } from "../common/localStorage";
import throttle from "lodash/throttle";

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(throttle(() => {
    saveState(store.getState());
}), 1000);

export default store;