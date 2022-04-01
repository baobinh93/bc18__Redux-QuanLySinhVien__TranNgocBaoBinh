import React, { Component } from "react";
import { sinhVienService } from "./SinhVienService/sinhVienService";
import { actionSetDSSV } from "./redux/actions/index";
import { connect } from "react-redux";
import DanhSachSinhVien from "./components/DanhSachSinhVien";
import ModalSinhVien from "./components/ModalSinhVien";
class QuanLySinhVien extends Component {
  componentDidMount() {
    sinhVienService
      .layDSSinhVien()
      .then((res) => {
        //console.log(res.data);
        this.props.layDSSinhVien(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <>
        <p className="display-3 py-3 text-center">Quản Lý Sinh Viên</p>
        <DanhSachSinhVien />
        <ModalSinhVien />
      </>
    );
  }
}

let mapDispatchToProp = (dispatch) => {
  return {
    layDSSinhVien: (_value) => {
      return dispatch(actionSetDSSV(_value));
    },
  };
};

export default connect(null, mapDispatchToProp)(QuanLySinhVien);
