import {combineReducers} from "redux";
import authReducer from "./authReducer";
import actionInfoReducer from "./actionInfoReducer";

const rootReducer = combineReducers({
    rootAuthReducer: authReducer,
    rootActionInfoReducer: actionInfoReducer
});

export default rootReducer;

