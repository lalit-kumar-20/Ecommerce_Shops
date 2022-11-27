import { combineReducers } from "redux";
import shopsReducers from "./reducer";
const rootReducer=combineReducers({
    data:shopsReducers
})

export default rootReducer;
