import {
  CAP_NHAT_SINH_VIEN,
  SET_DANH_SACH_SINH_VIEN,
  THEM_SINH_VIEN,
  XOA_SINH_VIEN,
} from "../constants";

export const quanLySinhVienReducer = (state = [], action) => {
  switch (action.type) {
    case SET_DANH_SACH_SINH_VIEN: {
      state = action.payload;
      console.log("lay ds sv", state);
      return [...state];
    }
    case THEM_SINH_VIEN: {
      let cloneState = [...state];
      cloneState.push(action.payload);
      console.log("da them vao redux", cloneState);
      return cloneState;
    }
    case XOA_SINH_VIEN: {
      let viTriSv = state.findIndex((sv) => sv.id === action.payload);
      console.log(viTriSv);
      if (viTriSv !== -1) {
        if (window.confirm("Bạn có muốn xoá ")) {
          state.splice(viTriSv, 1);
          console.log("da xoa khoi redux", state);
        }
      }
      return [...state];
    }
    case CAP_NHAT_SINH_VIEN: {
      let viTriSv = state.findIndex((sv) => sv.id === action.payload.id);
      state[viTriSv] = action.payload;
      return [...state];
    }

    default: {
      return [...state];
    }
  }
};
