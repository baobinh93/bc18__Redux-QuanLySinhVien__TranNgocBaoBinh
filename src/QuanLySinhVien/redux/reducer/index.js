import { combineReducers } from "redux";
import { quanLySinhVienReducer } from "./quanLySinhVienReducer";
import { sinhVienUpdateReducer } from "./sinhVienUpdateReducer";
export let rootReducer = combineReducers({
  sinhVienUpdateReducer,
  quanLySinhVienReducer,
});
