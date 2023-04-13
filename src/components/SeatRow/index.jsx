import React from "react";
import { Seat } from "../Seat";

export const SeatRow = ({ row, rowSelectedSeat }) => {
  return (
    <div className="seat-row">
      {row.map((seat) => (
        <Seat
          number={seat.number}
          key={seat.number}
          isOccupied={seat.isOccupied}
          isSelected={rowSelectedSeat === seat.number? true:false}
        />
      ))}
    </div>
  );
};
