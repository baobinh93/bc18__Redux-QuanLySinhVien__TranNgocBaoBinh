export const validator = {
  kiemTraEmail: function (value) {
    let parten = /\S+@\S+\.\S+/;

    if (value === "") {
      alert("Email không được để trống");
      return false;
    }
    if (parten.test(value)) {
      return true;
    } else {
      alert("Email không hợp lệ");
      return false;
    }
  },
  kiemTraSo: function (value) {
    let parten = new RegExp("^(0|[0-9][0-9]*)$");
    if (value === "") {
      alert("Vui Lòng Nhập Số Điện Thoại");
      return false;
    }
    if (parten.test(value)) {
      return true;
    } else {
      alert("Số điện thoại không hợp lệ");
      return false;
    }
  },
  kiemTraKiTu: function (value) {
    let parten = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
    if (value === "") {
      alert("Vui Lòng Nhập Tên");
      return false;
    }
    if (parten.test(value.trim())) {
      return true;
    } else {
      alert("Tên không chứa kí tự đặc biệt");
      return false;
    }
  },

  kiemTraIdDaSuDung: function (value, arr) {
    if (value.trim() === "") {
      alert("Vui Lòng Nhập Id");
      return false;
    }
    if (arr.includes(value)) {
      alert("Id đã được sử dụng");
      return false;
    } else {
      return true;
    }
  },
};
