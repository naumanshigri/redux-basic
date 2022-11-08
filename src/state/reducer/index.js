import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const Reducer = combineReducers({
  amount: amountReducer,
});
export default Reducer;
