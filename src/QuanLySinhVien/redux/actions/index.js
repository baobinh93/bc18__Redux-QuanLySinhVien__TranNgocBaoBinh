import {
  CAP_NHAT_SINH_VIEN,
  SET_DANH_SACH_SINH_VIEN,
  SUA_SINH_VIEN,
  THEM_SINH_VIEN,
  XOA_SINH_VIEN,
} from "../constants";

export const actionSetDSSV = (payload) => {
  return {
    type: SET_DANH_SACH_SINH_VIEN,
    payload,
  };
};
export const actionThemSv = (payload) => {
  return {
    type: THEM_SINH_VIEN,
    payload,
  };
};
export const actionXoaSv = (payload) => {
  return {
    type: XOA_SINH_VIEN,
    payload,
  };
};
export const actionSuaSv = (payload) => {
  return {
    type: SUA_SINH_VIEN,
    payload,
  };
};
export const actionCapNhatSv = (payload) => {
  return {
    type: CAP_NHAT_SINH_VIEN,
    payload,
  };
};
