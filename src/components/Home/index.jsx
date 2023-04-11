import React, { useState } from "react";
import { JourneyPicker } from "../JourneyPicker";
import { JourneyDetail } from "../JourneyDetail";
import { SelectedSeat } from "../SelectedSeat";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [journey, setJourney] = useState(null);

  const navigate = useNavigate();

  const handleBuy = () => {
    console.log("funguju!");

    fetch("https://apps.kodim.cz/daweb/leviexpress/api/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "create",
        seat: journey.results.autoSeat,
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

  console.log(journey);

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />

      {journey ? <JourneyDetail journey={journey.results.stops} /> : " "}

      {journey ? <SelectedSeat number={journey.results.autoSeat} /> : " "}

      <div className="controls container">
        <button className="btn btn--big" type="button" onClick={handleBuy}>
          Rezervovat
        </button>
      </div>
    </main>
  );
};
