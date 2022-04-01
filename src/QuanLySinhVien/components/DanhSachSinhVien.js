import React, { Component } from "react";
import { connect } from "react-redux";
import ItemSinhVien from "./ItemSinhVien";
import { actionSuaSv } from "../redux/actions";

class DanhSachSinhVien extends Component {
  render() {
    return (
      <div className="container p-5">
        <button
          className="btn btn-primary m-5"
          data-toggle="modal"
          data-target="#myModal"
          // onClick={() => {
          //   this.props.resetSv();
          // }}
        >
          {" "}
          Thêm Sinh Viên
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Tên</th>
              <th>Email</th>
              <th>Sdt</th>
              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            <ItemSinhVien />
          </tbody>
        </table>
      </div>
    );
  }
}

let mapDispatchToProp = (dispatch) => {
  return {
    resetSv: () =>
      dispatch(
        actionSuaSv({
          id: "",
          name: "",
          email: "",
          sdt: "",
        })
      ),
  };
};

export default connect(null, mapDispatchToProp)(DanhSachSinhVien);
