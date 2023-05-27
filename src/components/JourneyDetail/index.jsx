import React from 'react';
import './style.css';
import { BusStop } from '../BusStop';

export const JourneyDetail = ({ journey }) => {
  const stops = journey.stops;
  return (
    <>
      <div className="journey-detail container">
        <h2>Podrobnosti cesty</h2>
        <div className="stops">
          <div className="container">
            {stops.map((stop) => {
              return (
                <BusStop
                  name={stop.name}
                  station={stop.station}
                  time={stop.time}
                  key={stop.code}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
