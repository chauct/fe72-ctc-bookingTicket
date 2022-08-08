import React, { Component } from "react";
import BookingInfo from "./BookingInfo";
import "./style.css";
import data from "../assets/danhSachGhe.json";
import Seat from "./Seat";

export class Home extends Component {
  // hàng ghế
  renderRowOfSeat = () => {
    return data.map((row, index) => {
      return (
        <div key={index}>
          <Seat rowSeat={row} numberOfRow={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="bookingMovie">
        <div className="layout">
          <div className="container">
            <div className="row">
              <div className="col-8 text-center">
                <h1 className="text-warning mt-2">
                  ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                </h1>

                <div className="mt-2 ms-5 ">
                  {/* <div className="screen" /> */}
                  {this.renderRowOfSeat()}
                </div>
              </div>

              <div className="col-4">
                <h2 className="text-light mt-5 text-center">
                  DANH SÁCH GHẾ BẠN CHỌN
                </h2>
                <BookingInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
