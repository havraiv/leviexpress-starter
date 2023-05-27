import React from 'react';
import { JourneyPicker } from '../JourneyPicker';

export const Home = () => {
  const handleJourneyChange = ({ journey }) => {
    console.log({ journey });
  };
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
    </main>
  );
};
