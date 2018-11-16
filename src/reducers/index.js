 import {combineReducers} from "redux"
 import fetchReducer from "./fetchReducer"
 import paginationReducer from "./paginationReducer"

 export default combineReducers({
   fetchReducer,
   paginationReducer
 })
