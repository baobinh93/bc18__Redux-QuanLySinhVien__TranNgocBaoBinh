import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCapNhatSv, actionThemSv } from "../redux/actions";
import { validator } from "../validator/validator";
import ReactDOM from "react-dom";
class ModalSinhVien extends Component {
  state = {
    sinhVienAdd: {
      id: "",
      name: "",
      email: "",
      sdt: "",
    },
    test: "",
    svUpdate: null,
  };
  handleOnchange(key, value) {
    let cloneSv = this.state.sinhVienAdd;
    cloneSv[key] = value;
    this.setState = {
      sinhVienAdd: { ...cloneSv },
    };
    console.log(cloneSv);
  }
  handleTestValue(value) {
    this.setState = {
      test: value,
    };
  }
  validatorForm(svAdd) {
    //let svAdd = this.state.sinhVienAdd;
    let checkEmail = validator.kiemTraEmail(svAdd.email);
    let arrId = this.props.dsSv.map((sv) => sv.id);
    let checkId = validator.kiemTraIdDaSuDung(svAdd.id, arrId);
    let checkName = validator.kiemTraKiTu(svAdd.name);
    let checkPhone = validator.kiemTraSo(svAdd.sdt);
    console.log("email", checkEmail);
    console.log("id", checkId);
    console.log("name", checkName);
    console.log("sdt", checkPhone);
    !(checkEmail & checkId & checkName & checkPhone) &&
      alert("Du Lieu Khong Hop Le");
    return checkEmail & checkId & checkName & checkPhone;
  }
  render() {
    return (
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">
                {this.props.svUpdate.id ? "Sua SV" : "Them SV"}
              </h4>

              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <form id="formModalSv">
                <div className="form-group">
                  <label htmlFor="pwd">Id</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter ID"
                    name="id"
                    onChange={(e) => {
                      this.handleOnchange(e.target.name, e.target.value);
                      this.setState = {
                        test: e.target.value,
                      };
                    }}
                    disabled={Boolean(this.props.svUpdate.id)}
                    value={this.state.sinhVienAdd.id}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Ten:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhap Ten"
                    name="name"
                    onChange={(e) => {
                      this.handleOnchange(e.target.name, e.target.value);
                    }}
                    // value={this.state.sinhVienAdd.name}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                    onChange={(e) => {
                      this.handleOnchange(e.target.name, e.target.value);
                    }}
                    //value={this.state.sinhVienAdd.email}
                  />
                  <span id="emailCheck"></span>
                </div>
                <div className="form-group">
                  <label htmlFor="sdt">So Dien Thoai:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Phone Number"
                    name="sdt"
                    onChange={(e) => {
                      this.handleOnchange(e.target.name, e.target.value);
                    }}
                    //  value={this.state.sinhVienAdd.sdt}
                  />
                </div>
              </form>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={(e) => {
                  if (this.validatorForm(this.state.sinhVienAdd)) {
                    this.props.themSv(this.state.sinhVienAdd);
                    ReactDOM.findDOMNode(
                      document.getElementById("formModalSv")
                    ).reset();
                  } else {
                    e.preventDefault();
                  }
                }}
                hidden={Boolean(this.props.svUpdate.id)}
              >
                Them
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
                onClick={(e) => {
                  ReactDOM.findDOMNode(
                    document.getElementById("formModalSv")
                  ).reset();
                }}
                hidden={!Boolean(this.props.svUpdate.id)}
              >
                Cap Nhat
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    dsSv: state.quanLySinhVienReducer,
    svUpdate: state.sinhVienUpdateReducer,
  };
};
let mapDispatchToProp = (dispatch) => {
  return {
    themSv: (sv) => dispatch(actionThemSv(sv)),
    capNhatSv: (sv) => dispatch(actionCapNhatSv(sv)),
  };
};
export default connect(mapStateToProps, mapDispatchToProp)(ModalSinhVien);
