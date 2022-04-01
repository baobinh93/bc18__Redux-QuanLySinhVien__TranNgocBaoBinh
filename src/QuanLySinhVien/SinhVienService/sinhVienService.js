import axios from "axios";
const BASE_URL = "https://620e4f62585fbc3359ddaf35.mockapi.io/sv";
export const sinhVienService = {
  layDSSinhVien: () => {
    return axios({
      method: "GET",
      url: BASE_URL,
    });
  },
};
