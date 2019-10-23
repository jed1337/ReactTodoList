import {combineReducers} from "redux";
import todoReducer from "./todoReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
    todoReducer: todoReducer,
    counterGroup: counterReducer
});

export default rootReducer;