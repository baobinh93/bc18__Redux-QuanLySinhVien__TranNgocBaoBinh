export const validator = {
  kiemTraEmail: function (value) {
    let parten = /\S+@\S+\.\S+/;

    if (value === "") {
      return false;
    }
    if (parten.test(value)) {
      return true;
    } else {
      return false;
    }
  },
  kiemTraSo: function (value) {
    let parten = new RegExp("^(0|[1-9][0-9]*)$");
    if (value === "") {
      return false;
    }
    if (parten.test(value)) {
      return true;
    } else {
      return false;
    }
  },
  kiemTraKiTu: function (value) {
    let parten = /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/g;
    if (parten.test(value)) {
      return true;
    } else {
      return false;
    }
  },

  kiemTraIdDaSuDung: function (value, arr) {
    if (value.trim() === "") {
      return false;
    }
    if (arr.includes(value)) {
      return false;
    } else {
      return true;
    }
  },
};
