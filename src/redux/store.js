import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import contactReducer from "./reducers/reducer";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";

const middlewares = [reduxThunk];

if(process.env.NODE_ENV === "development") {
    logger.push(middlewares);
}

const rootReducer = combineReducers({
    contactList : contactReducer
});

var store = legacy_createStore (rootReducer, applyMiddleware(...middlewares));

export default store;