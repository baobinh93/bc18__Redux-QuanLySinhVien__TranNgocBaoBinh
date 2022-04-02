import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCapNhatSv, actionSuaSv, actionThemSv } from "../redux/actions";
import { validator } from "../validator/validator";
import ReactDOM from "react-dom";
class ModalSinhVien extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sinhVienAdd: {
        id: "",
        name: "",
        email: "",
        sdt: "",
      },
    };

    this.handleOnchange = this.handleOnchange.bind(this);
  }

  handleOnchange(e) {
    let cloneSv = this.state.sinhVienAdd;
    cloneSv[e.target.name] = e.target.value;
    this.setState({
      sinhVienAdd: cloneSv,
    });
    //console.log(cloneSv);
  }
  updateSvUpdateToStore(e) {
    let cloneSv = this.props.svUpdate;
    cloneSv[e.target.name] = e.target.value;

    return cloneSv;
  }
  validatorForm(svAdd) {
    //let svAdd = this.state.sinhVienAdd;
    let checkEmail = () => validator.kiemTraEmail(svAdd.email);
    let arrId = this.props.dsSv.map((sv) => sv.id);
    let checkId = () => validator.kiemTraIdDaSuDung(svAdd.id, arrId);
    let checkName = () => validator.kiemTraKiTu(svAdd.name);
    let checkPhone = () => validator.kiemTraSo(svAdd.sdt);

    return checkId() && checkName() && checkEmail() && checkPhone();
  }
  validatorUpdateForm(_svUpdate) {
    let checkEmail = () => validator.kiemTraEmail(_svUpdate.email);

    let checkName = () => validator.kiemTraKiTu(_svUpdate.name);
    let checkPhone = () => validator.kiemTraSo(_svUpdate.sdt);

    return checkName() && checkEmail() && checkPhone;
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
                      if (!this.props.svUpdate.id) {
                        this.handleOnchange(e);
                      } else {
                        this.props.suaSV(this.updateSvUpdateToStore(e));
                      }
                    }}
                    disabled={Boolean(this.props.svUpdate.id)}
                    value={
                      this.props.svUpdate.id
                        ? this.props.svUpdate.id
                        : this.state.sinhVienAdd.id
                    }
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
                      if (!this.props.svUpdate.id) {
                        this.handleOnchange(e);
                      } else {
                        this.props.suaSV(this.updateSvUpdateToStore(e));
                      }
                    }}
                    value={
                      this.props.svUpdate.name
                        ? this.props.svUpdate.name
                        : this.state.sinhVienAdd.name
                    }
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
                      if (!this.props.svUpdate.id) {
                        this.handleOnchange(e);
                      } else {
                        this.props.suaSV(this.updateSvUpdateToStore(e));
                      }
                    }}
                    value={
                      this.props.svUpdate.email
                        ? this.props.svUpdate.email
                        : this.state.sinhVienAdd.email
                    }
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
                      if (!this.props.svUpdate.id) {
                        this.handleOnchange(e);
                      } else {
                        this.props.suaSV(this.updateSvUpdateToStore(e));
                      }
                    }}
                    value={
                      this.props.svUpdate.sdt
                        ? this.props.svUpdate.sdt
                        : this.state.sinhVienAdd.sdt
                    }
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
                Thêm
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
                onClick={(e) => {
                  if (this.validatorUpdateForm(this.props.svUpdate)) {
                    this.props.capNhatSv(this.props.svUpdate);
                    ReactDOM.findDOMNode(
                      document.getElementById("formModalSv")
                    ).reset();
                    alert("cap nhat thanh cong");
                  }
                }}
                hidden={!Boolean(this.props.svUpdate.id)}
              >
                Cập Nhật
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
    suaSV: (sv) => dispatch(actionSuaSv(sv)),
    capNhatSv: (sv) => dispatch(actionCapNhatSv(sv)),
  };
};
export default connect(mapStateToProps, mapDispatchToProp)(ModalSinhVien);
