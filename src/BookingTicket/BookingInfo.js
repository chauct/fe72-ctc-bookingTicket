import React, { Component } from "react";
import { connect } from "react-redux";
class BookingInfo extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="me-5">
          <button className="gheDuocChon me-2 mb-3 "></button>
          <span className="text-light">Ghế đã đặt</span>
          <br />

          <button className="gheDangChon me-2 mb-3"></button>
          <span className="text-light">Ghế đang chọn</span>
          <br />

          <button className="gheChuaDat me-2"></button>
          <span className="text-light">Ghế chưa đặt</span>
        </div>
        <div className="mt-5 me-5">
          <table className="table text-light" border={1}>
            <thead>
              <tr className="text-light">
                <th scope="col">Số ghế </th>
                <th scope="col">Giá </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.props.dsGheDangDat.map((ghe, index) => {
                return (
                  <tr key={index} className="text-warning">
                    <td>{ghe.soGhe}</td>
                    <td>{ghe.gia.toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.dispatch({
                            type: "HUY_GHE",
                            soGhe: ghe.soGhe,
                          });
                        }}
                        className="btn btn-danger"
                      >
                        x
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td>Tổng tiền:</td>
                <td>
                  {this.props.dsGheDangDat
                    .reduce((total, ghe, index) => {
                      return (total += ghe.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dsGheDangDat: state.stateSeat.listSeat,
  };
};

export default connect(mapStateToProps)(BookingInfo);
