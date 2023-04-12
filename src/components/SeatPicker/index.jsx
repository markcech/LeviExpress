import React from "react";
import { SeatRow } from "../SeatRow";
import "./style.css";

export const SeatPicker = ({ seats, journeyId }) => {

  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((row, index) => (
          <SeatRow row={row} key={index} />
        ))}
      </div>
    </div>
  );
};
