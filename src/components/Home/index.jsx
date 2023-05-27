import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';
// Použijete komponentu JourneyDetail v komponentě Home na místě, kde se nyní vypisuje id nalezeného spoje. Komponenta se bude zobrazovat jenom tehdy, když ve stavu journey v komponentě Home je něco jiného, než null. Ověřte, že po vyhledání spojení se na stránce zobrazí podrobnosti cesty s městy 1 až 4.

export const Home = () => {
  const [journey, setJourney] = useState(null);
  const handleJourneyChange = (journey) => {
    setJourney(journey);
    console.log(journey);
  };
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey !== null ? <JourneyDetail /> : false}
    </main>
  );
};
