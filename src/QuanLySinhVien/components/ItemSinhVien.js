import React, { Component } from "react";
import { connect } from "react-redux";
import { actionSuaSv, actionXoaSv } from "../redux/actions";

class ItemSinhVien extends Component {
  render() {
    let dsSv = this.props.dsSv;
    // console.log(dsSv);
    return dsSv?.map((sv) => {
      return (
        <tr key={sv.id}>
          <td>{sv.id}</td>
          <td>{sv.name}</td>
          <td>{sv.email}</td>
          <td>{sv.sdt}</td>
          <td>
            <button
              className="btn btn-success"
              data-toggle="modal"
              data-target="#myModal"
              onClick={() => {
                this.props.suaSV(sv);
              }}
            >
              Sửa
            </button>
            <button
              className="btn btn-danger ml-1"
              onClick={() => {
                this.props.xoaSV(sv.id);
              }}
            >
              {" "}
              Xoá{" "}
            </button>
          </td>
        </tr>
      );
    });
    //return <div> Test </div>;
  }
}

let mapStateToProps = (state) => {
  return {
    dsSv: state.quanLySinhVienReducer,
  };
};
let mapDispatchToProp = (dispatch) => {
  return {
    xoaSV: (id) => dispatch(actionXoaSv(id)),
    suaSV: (sv) => dispatch(actionSuaSv(sv)),
  };
};
export default connect(mapStateToProps, mapDispatchToProp)(ItemSinhVien);
