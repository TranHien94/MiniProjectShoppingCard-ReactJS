import { combineReducers } from "redux";
import listProduct from "./product/product";
import listCard from "./cart/cart";
import notify from "./notify/notify";
export default combineReducers({ listProduct , listCard, notify })