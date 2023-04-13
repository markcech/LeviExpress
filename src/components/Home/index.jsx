import React, { useState } from "react";
import { JourneyPicker } from "../JourneyPicker";
import { JourneyDetail } from "../JourneyDetail";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { SeatPicker } from "../SeatPicker";

export const Home = () => {
  const [journey, setJourney] = useState(null);
  const [userSeat, setUserSeat] = useState(null);

  const navigate = useNavigate();

  const handleBuy = () => {
    fetch("https://apps.kodim.cz/daweb/leviexpress/api/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "create",
        seat: userSeat,
        journeyId: journey.results.journeyId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results.reservationId);
        navigate(`/reservation/${data.results.reservationId}`);
      });
  };

  const handleJourneyChange = (journey) => {
    setJourney(journey);
  };

  console.log("data:", journey);

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />

      {journey ? <JourneyDetail journey={journey.results.stops} /> : " "}

      {journey ? (
        <SeatPicker
          seats={journey.results.seats}
          journeyId={journey.results.journeyId}
          selectedSeat={userSeat}
          onSeatSelected={setUserSeat}
        />
      ) : (
        " "
      )}

      <div className="controls container">
        {journey ? (
          <button className="btn btn--big" type="button" onClick={handleBuy}>
            Rezervovat
          </button>
        ) : (
          " "
        )}
      </div>
    </main>
  );
};
