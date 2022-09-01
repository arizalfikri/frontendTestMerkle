import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./reducer/rootReducer";

let store = createStore(counterReducer, applyMiddleware(thunk));
export default store;
