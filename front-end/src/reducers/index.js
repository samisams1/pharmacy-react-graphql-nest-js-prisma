import { combineReducers } from "redux";
import products from "./products";
import orders from "./orders";
import categories from "./categories"
export default combineReducers({
  products,
  orders,
  categories,
});