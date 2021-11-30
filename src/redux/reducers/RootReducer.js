import { combineReducers } from "redux";
import cakeReducer from "./cakeReducer";
import iceCreamReducer from "./iceCreamReducer";

const RootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
}) 

export default RootReducer
