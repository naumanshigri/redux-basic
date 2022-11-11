import { combineReducers } from "redux";
import cartItems from "./home.reducer";

export default combineReducers({
  cart: cartItems,
});
