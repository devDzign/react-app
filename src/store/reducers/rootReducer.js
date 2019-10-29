import {combineReducers} from "redux";
import authReducer from "./authReducer";
import actionInfoReducer from "./actionInfoReducer";
import addResourcesReducer from "./addResourcesReducer";

const rootReducer = combineReducers({
    rootAuthReducer: authReducer,
    rootActionInfoReducer: actionInfoReducer,
    rootAddResourcesReducer: addResourcesReducer
});

export default rootReducer;

