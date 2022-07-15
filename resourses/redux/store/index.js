import rootReducer from "../redusers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

var compseEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
var store = createStore(rootReducer, compseEnhancers(applyMiddleware(thunk)));

export default store;