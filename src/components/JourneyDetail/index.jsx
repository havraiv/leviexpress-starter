import React from 'react';
import './style.css';
import { BusStop } from '../BusStop';

export const JourneyDetail = ({ journey }) => {
  console.log(journey.stops);
  return (
    <>
      <div className="journey-detail container">
        <h2>Podrobnosti cesty</h2>
        <div className="stops">
          <div className="container">
            <BusStop name="Praha" station="ÚAN Florenc" time="15:55" />
          </div>
        </div>
      </div>
    </>
  );
};
