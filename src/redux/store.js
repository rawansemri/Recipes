import {combineReducers, createStore , compose , applyMiddleware} from 'redux'
 import { foodReducer } from './reducer';

import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const allReducers = combineReducers({
    foodReducer
    
})
const Store = createStore(allReducers,{}, composeEnhancers(applyMiddleware(thunk)));

export default Store;