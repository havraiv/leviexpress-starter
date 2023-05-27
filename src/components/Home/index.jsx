import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
// Upravte komponentu Home tak, aby v případě, kdy ve stavu journey je nějaké spojení, vypsala pod vyhledávací formulář text „Nalezeno spojení s id …“. Místo tří teček bude journeyId z dat o nalezeném spojení.
export const Home = () => {
  const [journey, setJourney] = useState(null);
  const handleJourneyChange = (journey) => {
    setJourney(journey);
    console.log(journey);
  };
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey !== null ? (
        <p>Nalezeno spojení s id {journey.journeyId}</p>
      ) : (
        false
      )}
    </main>
  );
};
