import { createStore, applyMiddleware, compose } from "redux";
import AppReducer from "../Reducers";
import Thunk from 'redux-thunk';

// Setup for Redux Devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(AppReducer, composeEnhancers(applyMiddleware(Thunk)));

export default store;
