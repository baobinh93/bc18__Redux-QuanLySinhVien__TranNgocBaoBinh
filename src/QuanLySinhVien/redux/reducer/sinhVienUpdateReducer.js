import { SUA_SINH_VIEN } from "../constants";

export const sinhVienUpdateReducer = (state = [], action) => {
  switch (action.type) {
    case SUA_SINH_VIEN: {
      console.log(action.payload);
      return { ...action.payload };
    }
    default: {
      return { ...state };
    }
  }
};
