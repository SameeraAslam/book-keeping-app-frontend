import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import {combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {singlereducer} from "../reducers/books/singlereducer"
import { userReducer } from '../reducers/users/userReducer';

const middlewares = [thunk];

const reducers = combineReducers({
    
    singlereducer:singlereducer,
    userLogin:userReducer,

})

const userAuthFromStorage = localStorage.getItem("userAuth") ? JSON.parse(localStorage.getItem("userAuth")) : null;

const initialState={
userLogin:{
    users:userAuthFromStorage,
},
}
console.log("user form storage",userAuthFromStorage);

// const store = configureStore({reducer:reducers},
//       preloadedState: initialState,
//        composeWithDevTools(applyMiddleware(...middlewares)));
const store = createStore(
    reducers,
    initialState,  
    composeWithDevTools(applyMiddleware(...middlewares))
  )

export {store};