import {configureStore} from "@reduxjs/toolkit";
import useReducer from "./UserSlice"
import {composeWithDevTools} from "redux-devtools-extension"

const store= configureStore({
    reducer:{
        user:useReducer,
    },
    devTools: true,
})
export default store;
