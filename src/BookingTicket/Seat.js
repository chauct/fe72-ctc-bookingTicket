import React, { Component } from "react";
import { connect } from "react-redux";
class Seat extends Component {
  renderSeat = () => {
    return this.props.rowSeat.danhSachGhe.map((item, index) => {
      let cssBooked = "";
      let disabled = false;

      // ghế đã đặt
      if (item.daDat) {
        cssBooked = "gheDuocChon";
        disabled = true;
      }

      // ghế đang đặt
      let cssGheDangChon = "";
      let indexGheDangDat = this.props.dsGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === item.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDangChon = "gheDangChon";
      }

      return (
        <button
          onClick={() => {
            this.props.datGhe(item);
          }}
          disabled={disabled}
          className={`gheChuaDat ${cssBooked} ${cssGheDangChon}`}
          key={index}
        >
          {index + 1}
        </button>
      );
    });
  };

  renderSoHang = () => {
    return this.props.rowSeat.danhSachGhe.map((item, index) => {
      return (
        <button key={index} className="rowNumber">
          {item.soGhe}
        </button>
      );
    });
  };

  renderRowOfSeat = () => {
    if (this.props.numberOfRow === 0) {
      return (
        <div>
          {this.props.rowSeat.hang}
          {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.rowSeat.hang}
          {this.renderSeat()}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="text-light text-start mt-2">{this.renderRowOfSeat()}</div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch({
        type: "DAT_GHE",
        ghe,
      });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    dsGheDangDat: state.stateSeat.listSeat,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Seat);
