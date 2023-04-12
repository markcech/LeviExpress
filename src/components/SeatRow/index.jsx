import React from "react";
import { Seat } from "../Seat";

export const SeatRow = ({ row }) => {
  return (
    <div className="seat-row">
      {row.map((seat) => (
        <Seat number={seat.number} key={seat.number} isOccupied={seat.isOccupied} />
      ))}
    </div>
  );
};
